const Delivery = require("../models/delivery");

const deliveryResolvers = {
  Query: {
    async delivery() {
      return await Delivery.find();
    },
    async getDelivery(parent, { id }) {
      return await Delivery.findOne({ id: id });
    },
  },
  Mutation: {
    async createDelivery(parent, { delivery }) {
      return await Delivery.create(delivery);
    },
  },
};

module.exports = deliveryResolvers;