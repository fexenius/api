const Article = require("../models/article");

const articleResolvers = {
  Query: {
    async articles() {
      return await Article.find();
    },
    async article(parent, { id }) {
      return await Article.findOne({ id: id });
    },
  },
  Mutation: {
    async createArticle(parent, { article }) {
      return await Article.create(article);
    },
  },
};

module.exports = articleResolvers;