const mongoose = require('mongoose')
const { Schema } = mongoose

const ServicioAdicionalSchema = new Schema({
  servicioadicional_id: {
    type: Number,
    require: true
  },
  sacramento_id: {
    type: Number,
    require: true
  },
  servicioadicional_tipo: {
    type: String,
  },
  servicioadicional_fecha: {
    type: Date,
  },
  servicioadicional_precio: {
    type: Number,
  },
  servicioadicional_cantidad: {
    type: Number,
  },
}, { versionKey: false })

module.exports = mongoose.model('servicio_adicional', ServicioAdicionalSchema)