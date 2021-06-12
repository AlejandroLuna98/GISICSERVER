const mongoose = require("mongoose");

const eventos = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: String,
  descripcion: String,
  url: String,
  fecha: String,
  ciudad: String,
});

module.exports = mongoose.model("eventos", eventos);
