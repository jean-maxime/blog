'use strict';

let Bookshelf = require('./../init');

let User = Bookshelf.Model.extend({
  tableName: 'user',
  hasTimestamps: true,
  articles: function () {
      return this.hasMany('Article');
  }
});

module.exports = Bookshelf.model('User', User);