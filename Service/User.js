'use strict';

const User = require('../Database/Models/User');

module.exports.findAll = () => {
  return User.fetchAll()
};

module.exports.findById = (idUser) => {
  return User.where('id', idUser).fetch();
};

module.exports.deleteById = (idUser) => {
  return User.where('id', idUser).destroy()
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
	return new User(data).save().then((model) => {
		return {
				id: model.id,
				response: true,
				message: 'Done without any error'
			};
		})
		.catch((err) => {
			console.log('error');
			console.log(err);
			return {
			 	id: null,
				 response: false,
				 message: err
			 };
		});
};