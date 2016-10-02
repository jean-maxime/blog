'use strict';
const dbConfig = require('./dbConfig');
const knex     = require('knex');
const Bookshelf = require('bookshelf')(knex(dbConfig));
Bookshelf.plugin('registry');

module.exports = Bookshelf;