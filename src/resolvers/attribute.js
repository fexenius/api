const Attribute = require("../models/attribute");

const attributeResolvers = {
  Query: {
    async attributes() {
      return await Attribute.find();
    },
    async attribute(parent, { id }) {
      return await Attribute.findOne({ id: id });
    },
  },
  Mutation: {
    async createAttribte(parent, { attribute }) {
      return await Attribute.create(attribute);
    },
  },
};

module.exports = attributeResolvers;
