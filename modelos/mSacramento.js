const mongoose = require('mongoose')
const { Schema } = mongoose

const SacramentoSchema = new Schema({
  sacramento_id: {
    type: Number,
    require: true
  },
  personal_id: {
    type: Number,
    require: true
  },
  cliente_id: {
    type: Number,
    require: true
  },
  tipopersonal_id: {
    type: Number,
    require: true
  },
  iglesia_id: {
    type: Number,
    require: true
  },
  sacramento_tipo: {
    type: String,
  },
  sacramento_fecha: {
    type: Date,
  },
  sacramento_precio: {
    type: Number,
  },
  sacramento_total: {
    type: Number,
  },
  sacramento_cantidad: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('sacramento', SacramentoSchema)