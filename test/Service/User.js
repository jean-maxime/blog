'use strict';

const chai     = require('chai');
const expect  = chai.expect;
const userService = require('../../Service/User');

// data to insert in database
const toInsert = {
	pseudo: 'pseudoTest',
	password: 'passwordTest',
	mail: 'mailTest',
	actif: 1
};

// return id from insert
let idInsert;

describe('Test Service User', () => {

	describe('Function findAll', () => {
		it('Should return 1 user', (done) => {
			userService.findAll()
				.then((res) => {
					const users = res.toJSON();

					expect(users).to.be.an('array');
					expect(users).to.have.lengthOf(1);
					expect(users[0]).to.have.property('pseudo', 'jean-max');
					expect(users[0]).to.have.property('password', 'azerty');
					expect(users[0]).to.contain.all.keys('pseudo', 'password', 'actif');

					done();
				});
		});
	});

	describe('Function findById', () => {
		it('Should return 1 user', (done) => {
			userService.findById(1)
				.then((res) => {
					const user = res.toJSON();

					expect(user).to.be.an('object');
					expect(user).to.contain.all.keys('pseudo', 'password', 'actif');
					expect(user).to.have.property('pseudo', 'jean-max');

					done();
				});
		});
	});

	describe('Function insert', () => {
		it('Should return ID if success', (done) => {
			userService.insert(toInsert)
				.then((response) => {
					idInsert = response.id;

					expect(response).to.be.an('object');
					expect(response.response).to.be.a('boolean');
					expect(response.response).to.be.true;
					expect(response.id).to.be.a('number');
					expect(response.message).to.be.a('string');

					done();
				});
		});
	});

	describe('Function delete', () => {
		it('Should return message and boolean', (done) => {
			userService.deleteById(idInsert)
				.then((response) => {
					expect(response).to.be.an('object');
					expect(response.response).to.be.a('boolean');
					expect(response.response).to.be.true;
					expect(response.message).to.be.a('string');

					done();
				})
		});
	});

});