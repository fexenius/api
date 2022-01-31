const jwt = require("jsonwebtoken");
const User = require("../models/user");

const logout = async function (accessToken) {
  const user = await User.findById(jwt.decode(accessToken).uid);

  if (user) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return false;
      }

      user.tokens.forEach((token, index) => {
        if (token.accessToken === accessToken) {
          user.tokens.splice(index, 1);
        }
      });

      // clear tokens on model User
      user.save().then().catch();
    });
  }
  return true;
};

module.exports = logout;
