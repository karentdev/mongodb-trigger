const mongoose = require('mongoose')
const { Schema } = mongoose

const PersonalSchema = new Schema({
  personal_id: {
    type: Number,
    require: true
  },
  personal_nombre: {
    type: String,
  },
  personal_apellido: {
    type: String,
  },
  personal_identificador: {
    type: String,
  },
  personal_direccion: {
    type: String,
  },
  personal_fechanacimiento: {
    type: Date,
  },
  personal_fechaingreso: {
    type: Date,
  },
  personal_telefono: {
    type: String,
  },
  personal_correo: {
    type: String,
  },
}, { versionKey: false })

module.exports = mongoose.model('personal', PersonalSchema)