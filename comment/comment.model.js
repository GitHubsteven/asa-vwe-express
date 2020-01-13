let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    author: String,
    context: String,
    blogId: String,
    email: String,
    refId: {type: String, default: "0"},
    remark: String,
    subComments: {type: [],}, //不保存在数据库中
    createTime: {type: Date, default: Date.now},
    modifiedTime: {type: Date, default: Date.now}
});

CommentSchema.set("toJson", {virtual: true});

module.exports = mongoose.model('Comment', CommentSchema);