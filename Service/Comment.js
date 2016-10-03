'use strict';

const Comment = require('../Database/Models/Comment');

module.exports.findAll = () => {
  return Comment.fetchAll()
};

module.exports.findById = (idComment) => {
  return Comment.where('id', idComment).fetch()
};

module.exports.findByArticleId = (idArticle) => {
	return Comment.where({id_article: idArticle}).fetchAll()
};

module.exports.deleteById = (idComment) => {
	return Comment.where('id', idComment).destroy()
		.then(() => {
			return {
				response: true,
				message: 'Done without error'
			}
		})
		.catch((err) => {
			return {
				response: false,
				message: err
			}
		})
};

module.exports.insert = (data) => {
	return new Comment(data).save()
		.then((model) => {
			return {
				id: model.id,
				response: true,
				message: 'Done without any error'
			};
		})
		.catch((err) => {
			return {
				id: null,
				response: false,
				message: err
			};
		});
};

module.exports.update = (data) => {
	return new Comment(data).save()
		.then(() => {
			return {
				response: true,
				message: 'Done without any error'
			}
		})
		.catch((err) => {
			return {
				response: false,
				message: err
			}
		})
};