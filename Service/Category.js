'use strict';

const Category = require('../Database/Models/Category');

module.exports.findAll = () => {
  return Category.fetchAll()
};

module.exports.findById = (idCategory) => {
  return Category.where('id', idCategory).fetch()
};

module.exports.deleteById = (idCategory) => {
	return Category.where('id', idCategory).destroy()
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
	return new Category(data).save()
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
	return new Category(data).save()
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