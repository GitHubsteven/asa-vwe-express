let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: {type: String, required: true},
    modifiedTime: {type: Date, default: Date.now},
    createTime: {type: Date, default: Date.now},
    creator: {type: String, required: true},
    modifier: {type: String, required: true}
});

module.exports = mongoose.model('CategoryModel', CategorySchema);