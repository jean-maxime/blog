'use strict';

const mockKnex = require('mock-knex');
const chai     = require('chai');
const tracker = mockKnex.getTracker();
const expect  = chai.expect;
const userService = require('../../Service/User');

describe('Test Service User', () => {
	tracker.install();

	describe('Function findAll', () => {
		it('Should return 3 users', () => {
			return userService.findAll()
				.then((res) => {
					const users = res.toJSON();

					expect(users).to.be.an('array');
					expect(users).to.have.lengthOf(3);
					expect(users[0]).to.have.property('pseudo', 'pseudo1');
					expect(users[1]).to.have.property('password', 'password2');
					expect(users[2]).to.contain.all.keys('pseudo', 'password', 'actif');
				})
				.done();
		});
	});

	describe('Function findById', () => {
		it('Should return 1 user', () => {
			return userService.findById(1)
				.then((res) => {
					const user = res.toJSON();

					console.log(user);
					expect(user).to.be.an('object');
					expect(user).to.contain.all.keys('pseudo', 'password', 'actif');
					expect(user).to.have.property('pseudo', 'pseudo1');
				})
				.done();
		});
	});

});