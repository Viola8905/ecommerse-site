const { Schema, model } = require("mongoose");

const Toy = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String},
  img: { type: String, required: true },
  type_id: { type: String, required: true },
  brand_id: { type: String, required: true },
});

module.exports = model("Toy", Toy);
