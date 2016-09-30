'use strict';
const dbConfig = require('./dbConfig');
const knex     = require('knex');
const mockKnex = require('mock-knex');

const connection = knex(dbConfig);

if (process.env.NODE_ENV === 'test') {
	mockKnex.mock(connection);
}

const Bookshelf = require('bookshelf')(connection);
Bookshelf.plugin('registry');

module.exports = Bookshelf;