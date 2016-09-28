let express = require('express');
let router = express.Router();
let Article = require('../Database/Models/Article');
let articleService = require('../Service/Articles');

/* GET users listing. */
router.get('/', function(req, res, next) {
    articleService.findAll()
        .then(function (articles) {
        res.json(articles);
        })
        .catch(function (error) {
            res.json(error);
        });
});

// GET user by id
router.get('/:id', function (req, res, next) {
    let idArticle = req.params.id;
    articleService.findById(idArticle)
        .then(function(article) {
            res.json(article);
        })
        .catch(function(error) {
            res.json(error)
        })
});

module.exports = router;
