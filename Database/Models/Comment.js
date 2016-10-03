'use strict';

let Bookshelf = require('./../init');
require('./Article');

let Comment = Bookshelf.Model.extend({
  tableName: 'comment',
  hasTimestamps: true,
  article: function () {
      return this.hasOne('Article', 'id');
  }
});

module.exports = Bookshelf.model('Comment', Comment);