'use strict';

const Article = require('../Database/Models/Article');

module.exports.findAll = () => {
    return Article.fetchAll()
};
module.exports.findById = (idArticle) => {
    return Article.where('id', idArticle).fetch()
};
