'use strict';

let Bookshelf = require('./../init');

let Comment = Bookshelf.Model.extend({
    tableName: 'comment',
    hasTimestamps: true,
    articles: function () {
        return this.belongsTo('Article');
    }
});

module.exports = Bookshelf.model('Comment', Comment);