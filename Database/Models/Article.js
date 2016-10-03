'use strict';

let Bookshelf = require('./../init');
require('./Comment');

let Article = Bookshelf.Model.extend({
  tableName: 'article',
  hasTimestamps: true,
  comment: function () {
    return this.belongsTo('Comment');
  },
  categories: function () {
    return this.hasOne('Category');
  },
  users: function () {
    return this.hasOne('User');
  }
});

module.exports = Bookshelf.model('Article', Article);