const mongoose = require("mongoose");

const insertData = require('./functions/loadData');
const { findAllUsers, findUserByLogin, showAllProfilesWithUsers } = require('./functions/testQuerys');

mongoose.connect('mongodb://localhost:27017/testing_mongoose',
                {useNewUrlParser: true,
                useUnifiedTopology: true})
.then((db) => {
  console.log("database connected on " + db.connection.host);
  // DESCOMENTAR LAS FUNCIONES QUE SE QUIERAN PROBAR
  // insertData();
  // findAllUsers();
  // findUserByLogin("usuario1");
  // showAllProfilesWithUsers();
}).catch((error) => {
  console.log(error);
})
