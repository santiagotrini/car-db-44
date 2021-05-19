const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  id: Number,
  marca: String,
  modelo: String,
  patente: String,
  color: String
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
