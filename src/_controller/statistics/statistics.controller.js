const blogService = require("../../_service/statistics/statistics.service");
const statistics = require("../../_helpers/vwe-url.js").statistics();

const express = require('express');
const router = express.Router();

router.get(statistics.blogByCategory, blogByCate);
router.get(statistics.blogByCreateTime, blogByCreateTime);

module.exports = router;

function blogByCate(req, res, next) {
    blogService.blogTypeStatistics()
      .then(data => {
          res.json(data);
      })
      .catch(err => next(err));
}

function blogByCreateTime(req, res, next) {
    blogService.blogCreateTimeStatistics()
      .then(data => {
          res.json(data);
      })
      .catch(err => next(err));
}
