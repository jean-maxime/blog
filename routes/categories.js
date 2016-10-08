let express = require('express');
let router = express.Router();
let Category = require('../Database/Models/Category');
let categoryService = require('../Service/Category');
let articleService = require('../Service/Article');

// GET category listing
router.get('/', function(req, res, next) {
  categoryService.findAll()
    .then(function (categories) {
      res.json(categories);
    })
    .catch(function (error) {
      res.json(error);
    })
});

// GET category by id
router.get('/:id', function (req, res, next) {
  let idCategory = req.params.id;
  categoryService.findById(idCategory)
    .then(function(category) {
      res.json(category);
    })
    .catch(function(error) {
      res.json(error)
    })
});

// GET article by category id
router.get('/:id/articles', (req, res, next) => {
	let idCategory = req.params.id;
	articleService.findByCategoryId(idCategory)
		.then((articles) => {
			res.json(articles)
		})
		.catch((err) => {
			res.json(err)
		})
});

// INSERT category
router.post('/', (req, res, next) => {
	categoryService.insert(req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// UPDATE category
router.put('/:id', (req, res, next) => {
	let idCategory = req.params.id;
	categoryService.update(idCategory, req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// DELETE category by id
router.delete('/:id', function (req, res, next) {
  let idCategory = req.params.id;
  categoryService.deleteById(idCategory)
    .then(function() {
      res.json(true)
    })
    .catch(function() {
      res.json(false)
    })
});

module.exports = router;
