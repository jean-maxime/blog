'use strict';

const chai     = require('chai');
const expect  = chai.expect;
const commentService = require('../../Service/Comment');

// data to insert in database
const toInsert = {
	id_article: 1,
	content: 'contentTest',
	visible: 1,
	author_name: 'nameTest',
	mail: 'mailTest'
};

// return id from insert
let idInsert;

describe('Test Service Comment', () => {

	describe('Function findAll', () => {
		it('Should return 2 comments', (done) => {
			commentService.findAll()
				.then((res) => {
					const comments = res.toJSON();

					expect(comments).to.be.an('array');
					expect(comments).to.have.lengthOf(2);
					expect(comments[0]).to.have.property('author_name', 'nameTest');
					expect(comments[0]).to.have.property('content', 'ContentTest');
					expect(comments[0]).to.have.property('mail', 'mailTest');
					expect(comments[0]).to.contain.all.keys('visible', 'content', 'mail', 'author_name');

					done();
				});
		});
	});

	describe('Function findById', () => {
		it('Should return 1 comment', (done) => {
			commentService.findById(1)
				.then((res) => {
					const comment = res.toJSON();

					expect(comment).to.be.an('object');
					expect(comment).to.have.property('author_name', 'nameTest');
					expect(comment).to.have.property('content', 'ContentTest');
					expect(comment).to.have.property('mail', 'mailTest');
					expect(comment).to.contain.all.keys('visible', 'content', 'mail', 'author_name');

					done();
				});
		});
	});

	describe('Function insert', () => {
		it('Should return ID if success', (done) => {
			commentService.insert(toInsert)
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
				content: 'contentXXX'
			};
			commentService.update(idInsert, dataToUpdate)
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
			commentService.deleteById(idInsert)
				.then((response) => {
					expect(response).to.be.an('object');
					expect(response.response).to.be.a('boolean');
					expect(response.response).to.be.true;
					expect(response.message).to.be.a('string');

					done();
				});
		});
	});

	describe('Function find by article id', () => {
		it('Should return all article with id 1', (done) => {
			commentService.findByArticleId(1)
				.then((res) => {
					const comments = res.toJSON();

					expect(comments).to.be.an('array');
					expect(comments).to.have.property('length', 2);
					expect(comments[0]).to.have.property('author_name', 'nameTest');
					expect(comments[0]).to.have.property('content', 'ContentTest');
					expect(comments[0]).to.have.property('mail', 'mailTest');
					expect(comments[1]).to.contain.all.keys('visible', 'content', 'mail', 'author_name');

					done();
				});
		});
	});

});