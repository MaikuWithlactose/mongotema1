const mongoose = require("mongoose");
const User = require('./../models/user');
const Profile = require('./../models/profile');
const Credentials = require('./../models/credentials');

// Función para insertar datos
async function insertData() {
  try {
    // Crear 5 registros de usuarios
    for (let i = 1; i <= 5; i++) {
      const user = new User({
        login: `usuario${i}`,
        password: `contraseña${i}`
      });
      await user.save();
    }

    // Crear 5 perfiles
    for (let i = 1; i <= 5; i++) {
      const profile = new Profile({
        name: `Nombre${i}`,
        surname: `Apellido${i}`,
        dateOfBirth: new Date(),
        comments: `Comentarios${i}`,
        rol: `Rol${i}`
      });
      await profile.save();
    }

    // Crear 5 credenciales asociadas a usuarios existentes
    const users = await User.find().limit(5);
    for (const user of users) {
      const credentials = new Credentials({
        user: user._id,
        address: 'Dirección',
        phone: '123456789',
        email: 'correo@example.com'
      });
      await credentials.save();
    }

    console.log('Registros insertados correctamente');
    mongoose.disconnect(); // Cerrar la conexión a la base de datos
  } catch (error) {
    console.error('Error al insertar los registros', error);
    mongoose.disconnect(); // Cerrar la conexión a la base de datos en caso de error
  }
}

module.exports = insertData;
