const mongoose = require("mongoose");

const noticias = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: { type: String },
  imagen: { type: String },
  descripcion: { type: String },
  fecha: { type: String },
});

module.exports = mongoose.model("noticias", noticias);
