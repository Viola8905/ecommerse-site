const { Schema, model } = require("mongoose");

const ToyBasket = new Schema({
  basket_id: { type: String, required: true },
  toy_id: { type: String, required: true },
});

module.exports = model("ToyBasket", ToyBasket);
