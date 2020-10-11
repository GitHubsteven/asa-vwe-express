let BlogModel = require('../../models/blog.model');
// let CommentModel = require('../../models/comment.model');

module.exports = {
    blogTypeStatistics
};

async function blogTypeStatistics() {
    return await BlogModel.aggregate([])
      .group({"_id": "$categories", count: {$sum: 1}});
}