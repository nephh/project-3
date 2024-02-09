const { User, Community } = require("../models");
const Endeavor = require("../models/Endeavor");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("communities");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("communities");
    },
    communities: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Community.find(params).populate("endeavors").populate("users");
      // .sort({ createdAt: -1 });
    },
    community: async (parent, { communityId }) => {
      return Community.findOne({ _id: communityId }).populate("endeavors");
    },
    communityByUrl: async (parent, { url }) => {
      return Community.findOne({ url }).populate("endeavors").populate("users");
    },
    endeavors: async (parent, { communityId }) => {
      const params = communityId ? { communityId } : {};
      return Endeavor.find(params).populate("users");
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
    addEndeavor: async (parent, { title, content, community }, context) => {
      if (context.user) {
        const endeavor = await Endeavor.create({
          title,
          content,
          community,
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
  },
};

module.exports = resolvers;
