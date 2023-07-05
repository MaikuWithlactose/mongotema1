const mongoose = require('mongoose');

// Definición del modelo User
const userSchema = new mongoose.Schema({
  login: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
