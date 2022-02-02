//auth
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const login = async function (username, password, fingerprint) {
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
      //  const role = await Role.findOne({ id: user.role });

        // generate access token
        const accessToken = jwt.sign(
          { uid: user.id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "20m" }
        );

        // generate refresh token
        const refreshToken = jwt.sign(
          { uid: user.id },
          process.env.REFRESH_TOKEN_SECRET
        );

        // check double login
        let checkDoubleLogin = false;
        user.tokens.forEach((token, index) => {
          if (token.fingerPrint == fingerprint.hash) {
            user.tokens[index] = {
              accessToken: accessToken,
              refreshToken: refreshToken,
              fingerPrint: fingerprint.hash,
            };
            checkDoubleLogin = true;
          }
        });

        // add tokens to model User
        if (user.tokens.length < 2) {
          if (!checkDoubleLogin) {
            user.tokens.push({
              accessToken: accessToken,
              refreshToken: refreshToken,
              fingerPrint: fingerprint.hash,
            });
          }
        } else {
          user.tokens = [];
        }

        // save model User with tokens in db
        user.save().then().catch();

        const tokens = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };

        return tokens;
      } else {
        return { message: "Wrong username or password!" };
      }
    } else {
      return { message: "Wrong username or password!" };
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
