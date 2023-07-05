const mongoose = require("mongoose");
const User = require('./../models/user');
const Profile = require('./../models/profile');
const Credentials = require('./../models/credentials');

// Función para insertar datos
// Se ha utilizado async / await para asegurar que los datos que tienen dependencia de otros están
async function insertData() {
  try {
    const user = new User({
      login: `usuario`,
      password: `contraseña`
    });
    await user.save();

    const profile = new Profile({
      name: `Nombre`,
      surname: `Apellido`,
      dateOfBirth: new Date(),
      comments: `Comentarios`,
      rol: `admin`
    });
    await profile.save();

    const credentials = new Credentials({
      user: new User({ login: 'exampleuser', password: 'password123' }),
      address: 'Dirección',
      phone: '+34123456789',
      email: 'correo@example.com'
    });
    await credentials.save();

    console.log('Registros insertados correctamente');
    mongoose.disconnect(); // Cerrar la conexión a la base de datos
  } catch (error) {
    console.error('Error al insertar los registros', error);
    mongoose.disconnect(); // Cerrar la conexión a la base de datos en caso de error
  }
}

module.exports = insertData;
