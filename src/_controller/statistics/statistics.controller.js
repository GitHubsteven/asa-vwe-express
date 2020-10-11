const blogService = require("../../_service/statistics/statistics.service");
const statistics = require("../../_helpers/vwe-url.js").statistics();

const express = require('express');
const router = express.Router();

router.get(statistics.blogByCategory, blogByCate);
module.exports = router;

function blogByCate(req, res, next) {
    blogService.blogTypeStatistics()
      .then(data => {
          let legendData = [];
          let seriesData = [];
          let selected = {};
          data.forEach(ele => {
              legendData.push(ele._id);
              seriesData.push({name: ele._id, value: ele.count});
              let key = ele._id;
              selected[key] = true;
          });
          res.json({
              legendData: legendData,
              seriesData: seriesData,
              selected: selected
          });
      })
      .catch(err => next(err));
}
