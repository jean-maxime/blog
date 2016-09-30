'use strict';

const mockKnex = require('mock-knex');
const chai     = require('chai');
const tracker = mockKnex.getTracker();
const expect  = chai.expect;
const userService = require('../../Service/User');
// Const with data to test DB
const results = [
	{
		id: 1,
		pseudo: 'pseudo1',
		password: 'password1',
		mail: 'jean-max@wanadoo.fr1',
		actif: 1,
		created_at: new Date(),
		updated_at: '0000-00-00 00:00:00'
	},
	{
		id: 2,
		pseudo: 'pseudo2',
		password: 'password2',
		mail: 'jean-max@wanadoo.fr2',
		actif: 1,
		created_at: new Date(),
		updated_at: '0000-00-00 00:00:00'
	},
	{
		id: 3,
		pseudo: 'pseudo3',
		password: 'password3',
		mail: 'jean-max@wanadoo.fr3',
		actif: 0,
		created_at: new Date(),
		updated_at: '0000-00-00 00:00:00'
	},
];

describe('Test Service User', () => {
	tracker.install();

	describe('Function findAll', () => {
		before(() => {
			tracker.on('query', (query) => {

				query.response(results);

			});
		});

		it('Should return 3 users', () => {
			return userService.findAll()
				.then((res) => {
					const users = res.toJSON();

					expect(users).to.be.a('array');
					expect(users).to.have.lengthOf(3);
					expect(users[0]).to.have.property('pseudo', 'pseudo1');
					expect(users[1]).to.have.property('password', 'password2');
					expect(users[2]).to.contain.all.keys('pseudo', 'password', 'actif');
				});
		});
	});

	describe('Function findById', () => {
		before(() => {
			tracker.on('query', (query) => {

				query.response(results);

			});
		});

		it('Should return 1 user', () => {
			return userService.findById(1)
				.then((res) => {
					const user = res.toJSON();

					console.log(user);
					expect(user).to.be.an('object');
					expect(user).to.contain.all.keys('pseudo', 'password', 'actif');
					expect(user).to.have.property('pseudo', 'pseudo1');
				});
		});
	});

});