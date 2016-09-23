'use strict';

let Bookshelf = require('./../init');

let Category = Bookshelf.Model.extend({
    tableName: 'category',
    hasTimestamps: true,
    articles: function () {
        return this.belongsTo('Article');
    }
});

module.exports = Bookshelf.model('Category', Category);