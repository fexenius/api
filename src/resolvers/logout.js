const logout = require("../auth/logout");

const logoutResolvers = {
  Mutation: {
    async logout(parent, { input }, context) {
      const result = await logout(input.accessToken);
      return result;
    },
  },
};

module.exports = logoutResolvers;
