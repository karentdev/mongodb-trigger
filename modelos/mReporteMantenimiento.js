const mongoose = require('mongoose')
const { Schema } = mongoose

const ReporteMantenimientoSchema = new Schema({
  rmantenimiento_id: {
    type: Number,
    require: true
  },
  mantenimiento_id: {
    type: Number,
    require: true
  },
  rmantenimiento_fecha: {
    type: Date,
  },
  rmantenimiento_valor: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('reporte_mantenimiento', ReporteMantenimientoSchema)