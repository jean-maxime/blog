'use strict';

const Category = require('../Database/Models/Category');

module.exports.findAll = () => {
    return Category.fetchAll()
};
module.exports.findById = (idCategory) => {
    return Category.where('id', idCategory).fetch()
};
