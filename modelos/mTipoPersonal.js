const mongoose = require('mongoose')
const { Schema } = mongoose

const TipoPersonalSchema = new Schema({
  tipopersonal_id: {
    type: Number,
    require: true
  },
  personal_id: {
    type: Number,
    require: true
  },
  iglesia_id: {
    type: Number,
    require: true
  },
  tipopersonal_tipo: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('tipo_personal', TipoPersonalSchema)