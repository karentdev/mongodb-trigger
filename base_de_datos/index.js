const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://karen:7BaN7msJtuwH@cluster0.krhwp.mongodb.net/iglesia?retryWrites=true&w=majority'

const baseDeDatos = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(()=>{
      console.log('¡Conexión establecida con Mongo Database!')
    })
    .catch(err =>{
      console.error(err)
    })
}

module.exports = { baseDeDatos }