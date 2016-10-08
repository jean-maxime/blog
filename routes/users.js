let express = require('express');
let router = express.Router();
let User = require('../Database/Models/User');
let userService = require('../Service/User');

// GET users listing
router.get('/', function(req, res, next) {
  userService.findAll()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (error) {
      res.json(error);
    })
});

// GET user by id
router.get('/:id', function (req, res, next) {
  let idUser = req.params.id;
  userService.findById(idUser)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(error) {
      res.json(error)
    })
});

// INSERT user
router.post('/', (req, res, next) => {
	userService.insert(req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// UPDATE user
router.put('/:id', (req, res, next) => {
	let idUser = req.params.id;
	userService.update(idUser, req.body)
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
});

// DELETE user by id
router.delete('/:id', function (req, res, next) {
  let idUser = req.params.id;
  userService.deleteById(idUser)
    .then(function() {
      res.json(true)
    })
    .catch(function() {
      res.json(false)
    })
});

module.exports = router;
