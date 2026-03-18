const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/lalisaDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  drink: String,
  size: String,
  bread: String,
  dessert: String,
  days: [String],
});

const Order = mongoose.model("Order", orderSchema);

app.post("/submit", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.send("✅ Saved!");
  } catch (err) {
    res.status(500).send("❌ Error");
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});