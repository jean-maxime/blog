'use strict';

let Bookshelf = require('./../init');
require('./Comment');

let Article = Bookshelf.Model.extend({
  tableName: 'article',
  hasTimestamps: true,
  comment: function () {
    return this.belongsTo('Comment');
  },
  category: function () {
    return this.hasOne('Category', 'id');
  },
  user: function () {
    return this.hasOne('User', 'id');
  }
});

module.exports = Bookshelf.model('Article', Article);