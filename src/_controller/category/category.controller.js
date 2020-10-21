const service = require("../../_service/category/category.service");
let url = require("../../_helpers/vwe-url.js").categories();

const express = require('express');
const router = express.Router();

router.get(url.list, list);
router.get(url.getById, getById);
router.delete(url.delete, _delete);
router.put(url.update, update);
router.post(url.create, create);

module.exports = router;

function list(req, res, next) {
    service.list(req.body)
        .then(data => res.json(data))
        .catch(err => next(err))
}

function getById(req, res, next) {
    service.getById(req.params.id)
        .then(model => model ? res.json(model) : res.sendStatus(404))
        .catch(error => next(error))
}

function _delete(req, res, next) {
    service._delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    service.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(error => next(error));
}

function create(req, res, next) {
    service.create(req.body)
        .then(() => res.json())
        .catch(error => next(error))
}

/**
 * 封装正常返回的包装，异常的暂时不会
 * @param data
 * @returns {{data: *, success: boolean, errorCode: null, errorMsg: null}}
 */
function wrapperResp(data) {
    return {
        success: true,
        errorCode: null,
        errorMsg: null,
        data: data
    }
}