const mongoose = require('mongoose');

// Definición del modelo User
const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// Middleware pre-save para convertir la contraseña en mayúsculas
userSchema.pre('save', async function (next) {
  try {
    // Obtén la instancia actual del modelo User
    const user = this;
    // Convierte la contraseña a mayúsculas
    user.password = user.password.toUpperCase();
    next();
  } catch (error) {
    next(error);
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
