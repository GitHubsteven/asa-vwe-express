let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BlogSchema = new Schema({
    title: String,
    author: String,
    userId: String,
    context: String,
    modifiedTime: {type: Date, default: Date.now},
    createTime: {type: Date, default: Date.now},
});


module.exports = mongoose.model('BlogModel', BlogSchema);