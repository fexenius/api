const Discount = require("../models/discount");

const discountResolvers = {
  Query: {
    async discounts() {
      return await Discount.find();
    },
    async discount(parent, { id }) {
      return await Discount.findOne({ id: id });
    },
  },
  Mutation: {
    async createDiscount(parent, { discount }) {
      return await Discount.create(discount);
    },
  },
};

module.exports = discountResolvers;