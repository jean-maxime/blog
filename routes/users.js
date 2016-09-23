let express = require('express');
let router = express.Router();
let User = require('../Database/Models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.fetchAll()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (error) {
      res.json(error);
    })
});

// GET user by id
router.get('/:id', function (req, res, next) {
  let UserId = req.params.id;
  User.where('id', UserId).fetch()
      .then(function(user) {
        res.json(user);
      })
      .catch(function(error) {
        res.json(error)
      })
});

module.exports = router;
