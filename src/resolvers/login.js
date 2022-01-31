const login = require("../auth/login");

const loginResolvers = {
  Mutation: {
    async login(parent, { input }, context) {
      const tokens = await login(
        input.username,
        input.password,
        context.fingerprint
      );
      return tokens;
    },
  },
};

module.exports = loginResolvers;
