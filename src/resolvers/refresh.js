const refresh = require("../auth/refresh");

const refreshResolvers = {
  Mutation: {
    async refresh(parent, { input }, context) {
      const tokens = await refresh(input.refreshToken);
      return tokens;
    },
  },
};

module.exports = refreshResolvers;
