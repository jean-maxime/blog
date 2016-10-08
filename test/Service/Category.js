'use strict';

const chai     = require('chai');
const expect  = chai.expect;
const categoryService = require('../../Service/Category');

// data to insert in database
const toInsert = {
	title: 'titleTest'
};

// return id from insert
let idInsert;

describe('Test Service Category', () => {

	describe('Function findAll', () => {
		it('Should return 1 category', (done) => {
			categoryService.findAll()
				.then((res) => {
					const category = res.toJSON();

					expect(category).to.be.an('array');
					expect(category).to.have.lengthOf(1);
					expect(category[0]).to.contain.all.keys('title');
					expect(category[0]).to.have.property('title', 'Test');

					done();
				});
		});
	});

	describe('Function findById', () => {
		it('Should return 1 category', (done) => {
			categoryService.findById(1)
				.then((res) => {
					const category = res.toJSON();

					expect(category).to.be.an('object');
					expect(category).to.contain.all.keys('title');
					expect(category).to.have.property('title', 'Test');

					done();
				});
		});
	});

	describe('Function insert', () => {
		it('Should return ID if success', (done) => {
			categoryService.insert(toInsert)
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

	describe('Function update', () => {
		it('Should return message and boolean', (done) => {
			let dataToUpdate = {
				title: 'titleTestTwice'
			};
			categoryService.update(idInsert, dataToUpdate)
				.then((response) => {
					expect(response).to.be.an('object');
					expect(response.response).to.be.a('boolean');
					expect(response.response).to.be.true;
					expect(response.message).to.be.a('string');

					done();
				});
		})
	});

	describe('Function delete', () => {
		it('Should return message and boolean', (done) => {
			categoryService.deleteById(idInsert)
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