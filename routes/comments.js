let express = require('express');
let router = express.Router();
let Comment = require('../Database/Models/Comment');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Comment.fetchAll()
        .then(function (comments) {
            res.json(comments);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET user by id
router.get('/:id', function (req, res, next) {
    let CommentId = req.params.id;
    Comment.where('id', CommentId).fetch()
        .then(function(comment) {
            res.json(comment);
        })
        .catch(function(error) {
            res.json(error)
        })
});

module.exports = router;
