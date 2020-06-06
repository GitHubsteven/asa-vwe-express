let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    username: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, default: ""},
    role: {type: String, default: "user"},
    createTime: {type: Date, default: Date.now},
    creator: {type: String, default: "admin"},
    modifiedTime: {type: Date, default: Date.now},
    modifier: {type: String, default: "admin"}
});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', schema);