'use strict';

let Bookshelf = require('./../init');

let Article = Bookshelf.Model.extend({
  tableName: 'article',
  hasTimestamps: true,
  comments: function () {
    return this.hasMany('Comment');
  },
  categories: function () {
    return this.hasMany('Category');
  },
  users: function () {
    return this.belongsTo('User');
  }
});

module.exports = Bookshelf.model('Article', Article);