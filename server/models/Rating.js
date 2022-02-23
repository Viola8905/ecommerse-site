const { Schema, model } = require("mongoose");

const Rating = new Schema({
  user_id: { type: String, required: true },
  toy_id: { type: String, required: true },
  rate: [{ type: String,required: true }],
});

module.exports = model("Rating", Rating);
