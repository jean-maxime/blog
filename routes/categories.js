let express = require('express');
let router = express.Router();
let Category = require('../Database/Models/Category');
let categoryService = require('../Service/Category');

/* GET users listing. */
router.get('/', function(req, res, next) {
    categoryService.findAll()
        .then(function (categories) {
            res.json(categories);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET user by id
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

module.exports = router;
