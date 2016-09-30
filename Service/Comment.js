'use strict';

const Comment = require('../Database/Models/Comment');

module.exports.findAll = () => {
  return Comment.fetchAll()
};
module.exports.findById = (idComment) => {
  return Comment.where('id', idComment).fetch()
};
module.exports.deleteById = (idComment) => {
  return Comment.where('id', idComment).destroy();
};
