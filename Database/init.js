'use strict';

let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog',
        charset: 'utf-8'
    }
});
let Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;