const mongoose = require("mongoose");

// Added the new keyword here for VScode to autocomplete the operations in the controler over the model schema
const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },

  categoria: {
    type: String,
    required: true,
  },

  ubicacion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Producto", ProductoSchema);
