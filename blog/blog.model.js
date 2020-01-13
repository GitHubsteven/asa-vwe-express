let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BlogSchema = new Schema({
    title: String,
    author: String,
    context: String,
    modifiedTime: {type: Date, default: Date.now},
    createTime: {type: Date, default: Date.now},
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Blog', BlogSchema);