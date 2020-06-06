const express = require('express');
let cookieParser = require('cookie-parser');
const jwt = require('../_helpers/jwt');
const errorHandler = require('../_helpers/error-handler');
let config = require("../../config");
//连接数据库
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let vweRoot = require("../_helpers/vwe-url.js").root();

const app = express();

//服务器连接数据库
mongoose.connect(config.db.url, {useNewUrlParser: true, useCreateIndex: true})
  .then(() => {
        console.log("connect successfully!")
    }, (err) => {
        console.log('error when connect to mongo db!' + err)
    }
  );

mongoose.set('useFindAndModify', false);

//表示数据格式以json方式来传递？
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());

app.use(cookieParser());

app.use(vweRoot.users, require('../_controller/user/user.controller'));
app.use(vweRoot.blogs, require('../_controller/blog/blog.controller'));
app.use(errorHandler);

const PORT = process.env.PORT || config.port;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.')
});