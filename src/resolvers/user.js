const { composeResolvers } = require("@graphql-tools/resolvers-composition");
const { authenticateRequest } = require("../auth/auth");

const User = require("../models/user");

const userResolvers = {
  Query: {
    async users() {
      return await User.find();
    },
    async user(parent, { id }) {
      return await User.findOne({ id: id });
    },
  },
  Mutation: {
    async createUser(parent, { user }) {
      return await User.create(user);
    },
  },
};

module.exports = composeResolvers(userResolvers, {
  "*.*": [authenticateRequest],
});
