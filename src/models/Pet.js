const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  breed: String,
  adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);
