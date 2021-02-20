const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  trail: { type: String, required: true },
  location: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const map = mongoose.model("map", mapSchema);

module.exports = map;
