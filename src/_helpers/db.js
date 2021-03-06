const config = require('../../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.db.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model')
};