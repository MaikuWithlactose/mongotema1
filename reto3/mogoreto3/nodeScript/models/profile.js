const mongoose = require('mongoose');

// Definición del modelo Profile
const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  comments: String,
  rol: {
    type: String,
    enum: ['admin', 'user']
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
