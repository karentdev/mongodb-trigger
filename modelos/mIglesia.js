const mongoose = require('mongoose')
const { Schema } = mongoose

const IglesiaSchema = new Schema({
  iglesia_id: {
    type: Number,
    require: true
  },
  iglesia_nombre: {
    type: String,
  },
  iglesia_direccion: {
    type: String,
  },
  iglesia_telefono: {
    type: String,
  },
  iglesia_correo: {
    type: String,
  },
  iglesia_dimensiones: {
    type: String,
  },
  iglesia_capacidad: {
    type: Number,
  },
  iglesia_estado: {
    type: String,
  },
}, { versionKey: false })

module.exports = mongoose.model('iglesia', IglesiaSchema)