const blogService = require("../../_service/blog/blog.service");
let blogsUrl = require("../../_helpers/vwe-url.js").blogs();

const express = require('express');
const router = express.Router();

router.post(blogsUrl.list, list);  //带参数的post类型的查询
router.get(blogsUrl.getById, getById);
router.delete(blogsUrl.delete, _delete);
router.put(blogsUrl.update, update);
router.post(blogsUrl.create, create);

module.exports = router;

function list(req, res, next) {
    blogService.list(req.body)
      .then(data => res.json(data))
      .catch(err => next(err))
}

function getById(req, res, next) {
    blogService.getById(req.params.id)
      .then(blog => blog ? res.json(blog) : res.sendStatus(404))
      .catch(error => next(error))
}

function _delete(req, res, next) {
    blogService._delete(req.params.id)
      .then(() => res.json({}))
      .catch(err => next(err));
}

function update(req, res, next) {
    blogService.update(req.params.id, req.body)
      .then(() => res.json({}))
      .catch(error => next(error));
}

function create(req, res, next) {
    blogService.create(req.body)
      .then(() => res.json())
      .catch(error => next(error))
}