const express = require('express');
const router = express.Router();
const userService = require('../../_service/user/user.service');
let userUrl = require("../../_helpers/vwe-url.js").users();
//routes
router.post(userUrl.authenticate, authenticate);
router.post(userUrl.register, register);
router.get(userUrl.getAll, getAll);
router.get(userUrl.current, getCurrent);
router.get(userUrl.getById, getById);
router.put(userUrl.update, update);
router.delete(userUrl.delete, _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
      .then(user => user ? res.json(user) : res.status(400).json({message: 'username or password is incorrect'}))
      .catch(error => next(error));
}

function register(req, res, next) {
    userService.create(req.body)
      .then(() => res.json({}))
      .catch(error => next(error)
      )
}

function getAll(req, res, next) {
    userService.getAll()
      .then(users => res.json(users))
      .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
      .then(user => user ? res.json(user) : res.sendStatus(404))
      .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
      .then(() => res.json({}))
      .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
      .then(() => res.json({}))
      .catch(err => next(err));
}