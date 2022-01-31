const Category = require("../models/category");

const categoryResolvers = {
  Query: {
    async categories() {
      return await Category.find().populate({
        path: "parrent",
      });
    },
    async category(parent, { id }) {
      return await Category.findOne({ id: id });
    },
  },
  Mutation: {
    async createCategory(parent, { category }) {
      return await Category.create(category);
    },
  },
};

module.exports = categoryResolvers;
