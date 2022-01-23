const mongoose = require('mongoose')
const { Schema } = mongoose

const ResultadoTramiteSchema = new Schema({
  rtramite_id: {
    type: Number,
    require: true
  },
  tramite_id: {
    type: Number,
    require: true
  },
  rtramite_fecha: {
    type: Date,
  },
  tramite_pago: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('resultado_tramite', ResultadoTramiteSchema)