let express = require('express');
let router = express.Router();
let Category = require('../Database/Models/Category');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Category.fetchAll()
        .then(function (categories) {
            res.json(categories);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET user by id
router.get('/:id', function (req, res, next) {
    let CategoyId = req.params.id;
    Category.where('id', CategoyId).fetch()
        .then(function(category) {
            res.json(category);
        })
        .catch(function(error) {
            res.json(error)
        })
});

module.exports = router;
