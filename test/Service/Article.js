'use strict';

const chai     = require('chai');
const expect  = chai.expect;
const articleService = require('../../Service/Article');

// data to insert in database
const toInsert = {
	id_user: 1,
	id_category: 1,
	title: 'titleTest',
	content: 'contentTest'
};

// return id from insert
let idInsert;

describe('Test Service Article', () => {

	describe('Function findAll', () => {
		it('Should return 1 article', (done) => {
			articleService.findAll()
				.then((res) => {
					const articles = res.toJSON();

					expect(articles).to.be.an('array');
					expect(articles).to.have.lengthOf(1);
					expect(articles[0]).to.have.property('title', 'TitleTest');
					expect(articles[0]).to.have.property('content', 'ContentTest');
					expect(articles[0]).to.contain.all.keys('title', 'content');

					done();
				});
		});
	});

	describe('Function findById', () => {
		it('Should return 1 article', (done) => {
			articleService.findById(1)
				.then((res) => {
					const article = res.toJSON();

					expect(article).to.be.an('object');
					expect(article).to.have.property('title', 'TitleTest');
					expect(article).to.have.property('content', 'ContentTest');
					expect(article).to.contain.all.keys('title', 'content');

					done();
				});
		});
	});

	describe('Function insert', () => {
		it('Should return ID if success', (done) => {
			articleService.insert(toInsert)
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
				title: 'titleXXX'
			};
			articleService.update(idInsert, dataToUpdate)
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
			articleService.deleteById(idInsert)
				.then((response) => {
					expect(response).to.be.an('object');
					expect(response.response).to.be.a('boolean');
					expect(response.response).to.be.true;
					expect(response.message).to.be.a('string');

					done();
				})
		});
	});

	describe('Function findByCategoryId', () => {
		it('Should return array corresponding articles', (done) => {
			articleService.findByCategoryId(1)
				.then((resp) => {
					const articles = resp.toJSON();

					expect(articles).to.be.an('array');
					expect(articles).to.have.lengthOf(1);
					expect(articles[0]).to.have.property('title', 'TitleTest');
					expect(articles[0]).to.have.property('content', 'ContentTest');
					expect(articles[0]).to.contain.all.keys('title', 'content');

					done();
				});
		});
	});

});