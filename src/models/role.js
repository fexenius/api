const mongoose = require("../mongoose");

let roleSchema = new mongoose.Schema(
  {
    roleName: String,
    roleTokenName:String,
    description: String,
    resources: [
      {
        resourceName: String,
        permission: [{ read: Boolean, write: Boolean, delete: Boolean }],
      },
    ],
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Role = mongoose.model("role", roleSchema);

module.exports = Role;
