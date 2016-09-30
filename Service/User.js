'use strict';

const User = require('../Database/Models/User');

module.exports.findAll = () => {
  return User.fetchAll()
};
module.exports.findById = (idUser) => {
  return User.where('id', idUser).fetch();
};
module.exports.deleteById = (idUser) => {
  return User.where('id', idUser).destroy();
};
