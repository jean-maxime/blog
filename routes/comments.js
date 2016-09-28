let express = require('express');
let router = express.Router();
let Comment = require('../Database/Models/Comment');
let commentService = require('../Service/Comment');

/* GET users listing. */
router.get('/', function(req, res, next) {
    commentService.findAll()
        .then(function (comments) {
            res.json(comments);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET user by id
router.get('/:id', function (req, res, next) {
    let idComment = req.params.id;
    commentService.findById(idComment)
        .then(function(comment) {
            res.json(comment);
        })
        .catch(function(error) {
            res.json(error)
        })
});

module.exports = router;
