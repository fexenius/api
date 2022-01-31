const { composeResolvers } = require("@graphql-tools/resolvers-composition");
const { authenticateRequest } = require("../auth/auth");

const Product = require("../models/product");
const Article = require("../models/article");

const productResolvers = {
  Query: {
    async products() {
      return await Product.find().populate({
        path: "category articles delivery",
      });
    },
    async product(parent, { id }) {
      return await Product.findOne({ id: id });
    },
  },
  Mutation: {
    async createFullProduct(parent, { product }) {
      let articleIds = [];

      for (const article of product.articles) {
        const savedArticle = new Article(article);
        await savedArticle.save();

        articleIds.push(savedArticle.id);
      }

      // Set IDs instead Article
      product.articles = articleIds;

      return await Product.create(product);
    },
    async createProduct(parent, { product }) {
      return await Product.create(product);
    },
  },
};

module.exports = productResolvers;

module.exports = composeResolvers(productResolvers, {
  "Mutation.*": [authenticateRequest],
});
