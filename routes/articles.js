let express = require('express');
let router = express.Router();
let Article = require('../Database/Models/Article');
let articleService = require('../Service/Article');

// GET articles listing
router.get('/', function(req, res, next) {
  articleService.findAll()
    .then(function (articles) {
    res.json(articles)
    })
    .catch(function (error) {
      res.json(error)
    });
});

// GET article by id
router.get('/:id', function (req, res, next) {
  let idArticle = req.params.id;
  articleService.findById(idArticle)
    .then(function(article) {
      res.json(article)
    })
    .catch(function(error) {
      res.json(error)
    })
});

// DELETE artcile by id
router.delete('/:id', function (req, res, next) {
  let idArticle = req.params.id;
  articleService.deleteById(idArticle)
    .then(function() {
      res.json(true)
    })
    .catch(function() {
      res.json(false)
    })
});

module.exports = router;
