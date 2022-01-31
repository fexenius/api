const Role = require("../models/role");

const roleResolvers = {
  Query: {
    async roles() {
      return await Role.find();
    },
    async role(parent, { roleTokenName }) {
      return await Role.findOne({ roleTokenName: roleTokenName });
    },
  },
  Mutation: {
    async createRole(parent, { role }) {
      return await Role.create(role);
    },
  },
};

module.exports = roleResolvers;
