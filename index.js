const { baseDeDatos } = require('./base_de_datos')
const { verificarApellidoPaterno } = require('./trigger')

const tramite = {
  tramite_id: 1,
  cliente_id: 1,
  personal_id: 1,
  tramite_tipo: 'Misa de sepelio',
  tramite_fecha: new Date(2021, 01, 15),
  tramite_costo: 80,
  persona_nombre: 'José',
  persona_apellidopaterno: 'Zambrano'
}

async function trigger(){

  // Conexión MongoDB
  await baseDeDatos()

  // Ejecución del trigger
  verificarApellidoPaterno(tramite)
}

trigger()