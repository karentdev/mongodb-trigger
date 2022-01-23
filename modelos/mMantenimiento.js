const mongoose = require('mongoose')
const { Schema } = mongoose

const MantenimientoSchema = new Schema({
  mantenimiento_id: {
    type: Number,
    require: true
  },
  iglesia_id: {
    type: Number,
    require: true
  },
  mantenimiento_tipo: {
    type: String,
  },
  mantenimiento_fecha: {
    type: Date,
  },
  mantenimiento_costo: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('mantenimiento', MantenimientoSchema)