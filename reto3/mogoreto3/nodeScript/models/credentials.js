const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  }
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
