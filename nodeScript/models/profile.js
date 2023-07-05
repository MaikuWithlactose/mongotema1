const mongoose = require('mongoose');

// Definición del modelo Profile
const profileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: Date,
  comments: String,
  rol: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
