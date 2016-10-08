'use strict';

const Article = require('../Database/Models/Article');

module.exports.findAll = () => {
  return Article.fetchAll()
};

module.exports.findById = (idArticle) => {
  return Article.where('id', idArticle).fetch()
};

module.exports.findByCategoryId = (idCategory) => {
	return Article.where('id_category', idCategory).fetchAll()
};

module.exports.deleteById = (idArticle) => {
	return Article.where('id', idArticle).destroy()
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
	return new Article(data).save()
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

module.exports.update = (id, data) => {
	return new Article({id: id}).save(data)
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