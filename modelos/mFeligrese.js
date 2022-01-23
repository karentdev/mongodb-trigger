const mongoose = require('mongoose')
const { Schema } = mongoose

const FeligreseSchema = new Schema({
  feligrese_id: {
    type: Number,
    require: true
  },
  sacramento_id: {
    type: Number,
    require: true
  },
  feligrese_nombre: {
    type: String,
  },
  feligrese_apellido: {
    type: String,
  },
  feligrese_cedula: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('feligrese', FeligreseSchema)