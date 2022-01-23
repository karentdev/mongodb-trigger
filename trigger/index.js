const { Cliente, Tramite } = require('../modelos')

const verificarApellidoPaterno = async (tramite) => {
  try {

    const { cliente_id, tramite_tipo, persona_apellidopaterno } = tramite

    const familiar = await Cliente.findOne({cliente_id: cliente_id})
    const { cliente_apellidopaterno } = familiar

    if(tramite_tipo.toLowerCase() == 'misa de sepelio'){
      if(cliente_apellidopaterno.toLowerCase() == persona_apellidopaterno.toLowerCase()){

        const insertarTramite = new Tramite(tramite)
        await insertarTramite.save()
        
        console.log('¡Se creó el tramite!')
        process.exit()
      } else {
        // Error
        throw `\nEl apellido paterno de la persona es: ${cliente_apellidopaterno}\n` +
        `El apellido paterno del difunto es: ${persona_apellidopaterno}\n` +
        `¡No existe coincidencia de los apellidos paternos!`
      }
    }

  } catch (error) {
    console.error(error)
    process.exit()
  }
}

module.exports = { verificarApellidoPaterno }