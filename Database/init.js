'use strict';
const dbConfig = require('./dbConfig');

let knex = require('knex')(dbConfig);
let Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;