const { User, Community } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    communities: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Community.find(params).sort({ createdAt: -1 });
    },
    community: async (parent, { communityId }) => {
      return Community.findOne({ _id: communityId });
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
  },
};

module.exports = resolvers;
