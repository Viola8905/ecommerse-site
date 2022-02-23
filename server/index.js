require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());


const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://shop:shop29@cluster0.4u2nv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
