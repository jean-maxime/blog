'use strict';

const knex     = require('knex');
const mockKnex = require('mock-knex');

let connection = knex({ client: 'mysql', debug: false });
mockKnex.mock(connection, 'knex@0.10');

module.exports = connection;