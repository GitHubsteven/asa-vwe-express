let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BlogSchema = new Schema({
    title: String,
    author: {type: String, required: true},
    userId: String,
    context: String,
    tags: [],
    categories: {type: String, required: true},
    modifiedTime: {type: Date, default: Date.now},
    createTime: {type: Date, default: Date.now}
});


module.exports = mongoose.model('BlogModel', BlogSchema);