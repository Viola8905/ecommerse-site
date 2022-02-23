const { Schema, model } = require("mongoose");

const Basket = new Schema({
  user_id: { type: String, required: true },
});

module.exports = model("Basket", Basket);
