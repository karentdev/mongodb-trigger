const mongoose = require('mongoose')
const { Schema } = mongoose

const ClienteSchema = new Schema({
  cliente_id: {
    type: Number,
    require: true
  },
  cliente_nombre: {
    type: String,
  },
  cliente_apellidopaterno: {
    type: String,
  },
  cliente_direccion: {
    type: String,
  },
  cliente_telefono: {
    type: String,
  },
  cliente_correo: {
    type: String,
  },
  cliente_identificador: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('cliente', ClienteSchema)