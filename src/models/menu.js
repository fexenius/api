const mongoose = require("../mongoose");

let menuSchema = new mongoose.Schema(
  {
    name: String,
    info: {
      description: String,
      img: {
        src: String,
      },
    },
    page: { type: Schema.ObjectId, ref: "page" },
    parrent: { type: Schema.ObjectId, ref: "menu" },
  },
  { versionKey: false }
);

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
