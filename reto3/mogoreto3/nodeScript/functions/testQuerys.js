const mongoose = require("mongoose");
const User = require('./../models/user');
const Profile = require('./../models/profile');
const Credentials = require('./../models/credentials');

function findAllUsers() {
  User.find({}).then(users => {
    console.log(users);
  })
  .catch(err => {
    console.error(err);
  });
}

function findUserByLogin(login) {
  User.findOne({ login }).then((user) => {
    if (user) {
      console.log(user);
    } else {
      console.log('Usuario no encontrado');
    }
  })
  .catch((err) => {
    console.error(err);
  });
}

function showAllProfilesWithUsers() {
  Profile.find({}).populate('user').exec().then(profiles => {
    console.log(profiles);
  })
  .catch(err => {
    console.error(err);
  });
}

module.exports = {
  findAllUsers,
  findUserByLogin,
  showAllProfilesWithUsers
};
