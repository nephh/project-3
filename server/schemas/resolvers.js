const { User, Community } = require("../models");
const Endeavor = require("../models/Endeavor");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("communities");
    },
    user: async (parent, { username, sort }) => {
      switch (sort) {
        case "popular":
          sort = { userCount: -1 };
          break;
        case "name":
          sort = { name: 1 };
          break;
        default:
          sort = null;
      }
      return User.findOne({ username }).populate({
        path: "communities",
        options: { sort: sort },
      });
    },
    communities: async (parent, { name, sort }) => {
      const params = name ? { name } : {};
      switch (sort) {
        case "popular":
          sort = { userCount: -1 };
          break;
        case "title":
          sort = { name: 1 };
          break;
        default:
          sort = null;
      }
      return Community.find(params)
        .populate("endeavors")
        .populate("users")
        .sort(sort);
    },
    community: async (parent, { url }) => {
      return Community.findOne({ url }).populate("endeavors").populate("users");
    },
    endeavors: async (parent, { communityUrl, sort }) => {
      const params = communityUrl ? { communityUrl } : {};
      switch (sort) {
        case "popular":
          sort = { userCount: -1 };
          break;
        case "title":
          sort = { title: 1 };
          break;
        case "newest":
          sort = { createdAt: -1 };
        default:
          sort = null;
      }
      return Endeavor.find(params).populate("users").sort(sort);
    },
    endeavor: async (parent, { endeavorId }) => {
      return Endeavor.findOne({ _id: endeavorId }).populate("users");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      // The above could be written as
      // if (!user || !(await user.isCorrectPassword(password))) {
      //   throw AuthenticationError;
      // }
      //

      const token = signToken(user);

      return { token, user };
    },
    addCommunity: async (parent, { name, description }, context) => {
      if (context.user) {
        const community = await Community.create({
          name,
          description,
          creator: context.user.username,
          users: [context.user._id],
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { communities: community._id } },
        );

        return community;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
    addEndeavor: async (
      parent,
      { title, content, community, image },
      context,
    ) => {
      if (context.user) {
        const endeavor = await Endeavor.create({
          title,
          content,
          community,
          image,
          author: context.user.username,
        });

        await Community.findOneAndUpdate(
          { name: community },
          { $addToSet: { endeavors: endeavor._id } },
        );

        return endeavor;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
    joinCommunity: async (parent, { communityId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { communities: communityId } },
        );

        const updatedCommunity = await Community.findOneAndUpdate(
          { _id: communityId },
          { $addToSet: { users: context.user._id }, $inc: { userCount: 1 } },
        ).populate("users");

        return updatedCommunity;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
