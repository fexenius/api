// Authorization
const registerResolvers = require("./register");
const loginResolvers = require("./login");
const logoutResolvers = require("./logout");
const refreshResolvers = require("./refresh");

// RBAC
const roleResolvers = require("./role");
const userResolvers = require("./user");

// Information
const productResolvers = require("./product");
const articleResolvers = require("./article");
const attributeResolvers = require("./attribute");
const discountResolvers = require("./discount");
const categoryResolvers = require("./category");
const deliveryResolvers = require("./delivery");

const rootResolver = {};
const resolvers = [
  rootResolver,
  loginResolvers,
  logoutResolvers,
  registerResolvers,
  refreshResolvers,

  userResolvers,
  roleResolvers,

  productResolvers,
  articleResolvers,
  attributeResolvers,
  discountResolvers,
  categoryResolvers,
  deliveryResolvers,
];
module.exports = resolvers;
