const register = require("../auth/register");

const registerResolvers = {
  Mutation: {
    async register(parent, { input }, context) {
      const tokens = await register(
        input.username,
        input.password,
        context.fingerprint
      );
      return tokens;
    },
  },
};

module.exports = registerResolvers;
