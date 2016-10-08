let express = require('express');
let router = express.Router();
let articleService = require('../Service/Article');

// GET articles listing
router.get('/', (req, res, next) => {
  articleService.findAll()
    .then((articles) => {
      res.json(articles)
    })
    .catch((error) => {
      res.json(error)
    });
});

// GET article by id
router.get('/:id', (req, res, next) => {
  let idArticle = req.params.id;
  articleService.findById(idArticle)
    .then((article) => {
      res.json(article)
    })
    .catch((error) => {
      res.json(error)
    })
});

// GET article by category id
router.get('/category/:id', (req, res, next) => {
	let idCategory = req.params.id;
	articleService.findByCategoryId(idCategory)
		.then((articles) => {
			res.json(articles)
		})
		.catch((err) => {
			res.json(err)
		})
});

// INSERT article
router.post('/', (req, res, next) => {
	articleService.insert(req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// UPDATE article
router.put('/:id', (req, res, next) => {
	let idArticle = req.params.id;
	articleService.update(idArticle, req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// DELETE artcile by id
router.delete('/:id', (req, res, next) => {
  let idArticle = req.params.id;
  articleService.deleteById(idArticle)
    .then((response) => {
    	res.json(response)
    })
    .catch((err) => {
      res.json(err)
    })
});

module.exports = router;
