const express = require("express");

const cors = require("cors");

//auth
const jwt = require("jsonwebtoken");
const fingerprint = require("express-fingerprint");

//graphql
const { graphqlHTTP } = require("express-graphql");

require("dotenv").config(); // Init config file .env

//graphql-tools
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

// Graphql-resolvers
const graphqlResolver = require("./resolvers");

const PORT = process.env.PORT || 4000;
const server = express();

server.use(fingerprint());

server.use(cors({ origin: "*" })); // remove this line for setting accesss

// Verify acessToken in Headers Authorization
server.use((req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const headerToken = authHeader.split(" ")[1];

    jwt.verify(headerToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        req.isAuthenticated = Boolean(false);
        console.log(err);
      } else {
        req.isAuthenticated = Boolean(true);
      }
    });
  }
  next();
});

const schema = makeExecutableSchema({
  typeDefs: loadSchemaSync("./src/schemas/**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: graphqlResolver,
});

server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(`🚀 Server run on http://localhost:${PORT}/graphql`);
});
