let BlogModel = require('../../models/blog.model');
// let CommentModel = require('../../models/comment.model');

module.exports = {
    blogTypeStatistics,
    blogCreateTimeStatistics
};

async function blogTypeStatistics() {
    return await BlogModel.aggregate([])
      .group({
          "_id": "$categories",
          count: {$sum: 1}
      });
}

async function blogCreateTimeStatistics() {
    return await BlogModel.aggregate({
        $group: {
            _id: {$dateToString: {format: "%Y-%m", date: "$createTime"}},
            count: {$sum: 1}
        },
        $sort: {_id: 1}
    });
}