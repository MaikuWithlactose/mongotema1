const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  address: String,
  phone: String,
  email: String
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
