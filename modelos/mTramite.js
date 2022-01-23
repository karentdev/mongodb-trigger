const mongoose = require('mongoose')
const { Schema } = mongoose

const TramiteSchema = new Schema({
  tramite_id: {
    type: Number,
    require: true
  },
  cliente_id: {
    type: Number,
    require: true
  },
  personal_id: {
    type: Number,
    require: true
  },
  tramite_tipo: {
    type: String,
  },
  tramite_fecha: {
    type: Date,
  },
  tramite_costo: {
    type: Number,
  },
  persona_nombre: {
    type: String,
  },
  persona_apellidopaterno: {
    type: String,
  },
}, { versionKey: false })

module.exports = mongoose.model('tramite', TramiteSchema)