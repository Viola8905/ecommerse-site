const { Schema, model } = require("mongoose");

const ToyInfo = new Schema({
  toy_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model("ToyInfo", ToyInfo);
