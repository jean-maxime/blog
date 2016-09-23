let express = require('express');
let router = express.Router();
let Article = require('../Database/Models/Article');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Article.fetchAll()
        .then(function (articles) {
            res.json(articles);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET user by id
router.get('/:id', function (req, res, next) {
    let ArticleId = req.params.id;
    Article.where('id', ArticleId).fetch()
        .then(function(article) {
            res.json(article);
        })
        .catch(function(error) {
            res.json(error)
        })
});

module.exports = router;
