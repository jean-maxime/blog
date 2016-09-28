let express = require('express');
let router = express.Router();
let Comment = require('../Database/Models/Comment');
let commentService = require('../Service/Comment');

// GET comments listing
router.get('/', function(req, res, next) {
    commentService.findAll()
        .then(function (comments) {
            res.json(comments);
        })
        .catch(function (error) {
            res.json(error);
        })
});

// GET comment by id
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

// DELETE comment by id
router.delete('/:id', function (req, res, next) {
    let idComment = req.params.id;
    commentService.deleteById(idComment)
        .then(function() {
            res.json(true)
        })
        .catch(function() {
            res.json(false)
        })
});

module.exports = router;
