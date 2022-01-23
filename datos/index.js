const { baseDeDatos } = require('../base_de_datos')
const { Cliente } = require('../modelos')

const {
  familiarCorrecto,
  familiarIncorrecto
} = require('./datos')


const datos = async () => {

  await baseDeDatos()

  await new Cliente(familiarIncorrecto).save()
  await new Cliente(familiarCorrecto).save()

  console.log('¡Datos insertados!')

  process.exit()
}

datos()