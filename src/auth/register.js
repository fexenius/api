const login = require("./login");
const bcrypt = require("bcrypt");
const User = require("../models/user");
//const Role = require("../models/role");

const register = async function (username, password, fingerprint) {
  try {
    const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

    // Get default RoleName
    // const userRole = await Role.findOne({ roleName: "User" });

    await User.create({
      username: username,
      password: hashedPassword,
      role: "usr",
    });

    const tokens = await login(username, password, fingerprint);

    return tokens;
  } catch (error) {
    return { message: "Registration Failed!" };
  }
};

module.exports = register;
