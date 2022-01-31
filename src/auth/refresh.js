const jwt = require("jsonwebtoken");

const User = require("../models/user");
//const Role = require("../models/role");

const refresh = async function (refreshToken) {
  const user = await User.findById(jwt.decode(refreshToken).uid);

  // const role = await Role.findById(user.role);

  if (user) {
    let tokens;
    user.tokens.forEach((tokenDB, index) => {
      if (tokenDB.refreshToken == refreshToken) {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
          if (err) {
            return { message: "Failed refresh Token!" };
          }
          // generate access token
          const accessToken = jwt.sign(
            { uid: user.id, rtn: "usr" },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "20m" }
          );

          user.tokens[index].accessToken = accessToken;

          // update acessToken model User
          user.save().then().catch();

          tokens = {
            accessToken: accessToken,
            refreshToken: refreshToken,
          };
        });
      }
    });
    if (tokens) {
      return tokens;
    } else {
      return { message: "Failed generate Token!" };
    }
  }
};

module.exports = refresh;
