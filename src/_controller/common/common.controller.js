const service = require("../../_service/category/category.service");
let url = require("../../_helpers/vwe-url.js").common();

const express = require('express');
const router = express.Router();

module.exports = router;

router.get(url.setting, listSetting);

async function listSetting(req, res, next) {
    let setting = {};
    // get categories
    await service.list(req.body).then(list => {
        let categories = [];
        list.forEach(cate => {
            categories.push({"key": cate._id, "value": cate.name});
        });
        setting.categories = categories;
    });
    await res.json(setting);
    next();
}
