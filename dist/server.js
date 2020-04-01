/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/models/Blog.js":
/*!****************************!*\
  !*** ./src/models/Blog.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar BlogSchema = new Schema({\n  title: String,\n  author: String,\n  context: String,\n  modifiedTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  createTime: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nmodule.exports = mongoose.model('BlogModel', BlogSchema);\n\n//# sourceURL=webpack:///./src/models/Blog.js?");

/***/ }),

/***/ "./src/models/Comment.js":
/*!*******************************!*\
  !*** ./src/models/Comment.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar CommentSchema = new Schema({\n  author: String,\n  context: String,\n  blogId: String,\n  email: String,\n  refId: {\n    type: String,\n    \"default\": \"0\"\n  },\n  remark: String,\n  subComments: [],\n  //不保存在数据库中\n  createTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  modifiedTime: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nmodule.exports = mongoose.model('CommentModel', CommentSchema);\n\n//# sourceURL=webpack:///./src/models/Comment.js?");

/***/ }),

/***/ "./src/models/SessionModel.js":
/*!************************************!*\
  !*** ./src/models/SessionModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar SessionSchema = new Schema({\n  sessionId: String,\n  content: {\n    type: String,\n    \"default\": \"\"\n  },\n  createTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  creator: {\n    type: String,\n    \"default\": \"admin\"\n  },\n  modifiedTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  modifier: {\n    type: String,\n    \"default\": \"admin\"\n  }\n});\nmodule.exports = mongoose.model('SessionModel', SessionSchema);\n\n//# sourceURL=webpack:///./src/models/SessionModel.js?");

/***/ }),

/***/ "./src/models/UserModel.js":
/*!*********************************!*\
  !*** ./src/models/UserModel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar UserSchema = new Schema({\n  name: String,\n  email: String,\n  password: {\n    type: String,\n    \"default\": \"\"\n  },\n  role: {\n    type: String,\n    \"default\": \"user\"\n  },\n  createTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  creator: {\n    type: String,\n    \"default\": \"admin\"\n  },\n  modifiedTime: {\n    type: Date,\n    \"default\": Date.now\n  },\n  modifier: {\n    type: String,\n    \"default\": \"admin\"\n  }\n});\nmodule.exports = mongoose.model('UserModel', UserSchema);\n\n//# sourceURL=webpack:///./src/models/UserModel.js?");

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-console,no-undef */\n// eslint-disable-next-line\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar BlogModel = __webpack_require__(/*! ../models/Blog.js */ \"./src/models/Blog.js\");\n\nvar CommentModel = __webpack_require__(/*! ../models/Comment */ \"./src/models/Comment.js\");\n\nvar router = express.Router();\nmodule.exports = router;\nrouter.all(\"/*\", function (req, res, next) {\n  console.log(\"request receive session: \" + JSON.stringify(req.session));\n  console.log(\"request receive cookie: \" + JSON.stringify(req.cookies));\n  next();\n});\nrouter.post('/blog-list', function (req, res) {\n  var params = {};\n  var searchOpt = req.body;\n  console.log(req.body); //增加按照名称来过滤的条件\n\n  if (searchOpt.title) {\n    params = {\n      title: {\n        $regex: searchOpt.title\n      }\n    };\n  }\n\n  var data = {\n    count: 0,\n    items: []\n  }; //先找出符合条件的所有数量\n\n  BlogModel.estimatedDocumentCount(params, function (err, count) {\n    if (err) {\n      return res.status(500);\n    } else {\n      data.count = count; //在按页来查找数量\n\n      BlogModel.find(params).skip((searchOpt.curPage - 1) * searchOpt.pageSize).limit(searchOpt.pageSize).exec(function (err, blogs) {\n        if (err) {\n          console.log(err);\n          return res.status(500);\n        } else {\n          data.items = blogs;\n          res.json(data);\n        }\n      });\n    }\n  });\n});\nrouter.get('/blog-view/:id', function (req, res) {\n  BlogModel.findById(req.params.id, function (err, blog) {\n    if (err) {\n      console.log(err);\n    } else {\n      res.json(blog);\n    }\n  });\n});\nrouter.route('/blog-create').post(function (request, response) {\n  var blog = new BlogModel();\n\n  if (request.body) {\n    Object.assign(blog, request.body);\n  }\n\n  blog.save().then(function (blog) {\n    response.status(200).json(blog);\n  })[\"catch\"](function (err) {\n    response.status(400).send(\"error when saving to MongoDB\");\n  });\n});\nrouter.route(\"/blog-delete/:id\")[\"delete\"](function (req, res) {\n  BlogModel.findByIdAndRemove({\n    _id: req.params.id\n  }, {\n    useFindAndModify: true\n  }, function (err, todo) {\n    if (err) {\n      res.json(err);\n    } else {\n      res.json(\"delete successfully!\");\n    }\n  });\n}); //更新博客\n\nrouter.route(\"/blog-update/:id\").put(function (req, res) {\n  BlogModel.findByIdAndUpdate(req.params.id, req.body, {\n    useFindAndModify: true\n  }, function (err, todo) {\n    if (err) {\n      res.json(err);\n    } else {\n      res.json(todo);\n    }\n  });\n});\n/**\r\n * 根据blogId获取blog下的所有评论\r\n */\n\nrouter.get(\"/blog-comments/:blogId\", function (req, resp) {\n  CommentModel.find({\n    blogId: req.params.blogId\n  }, function (err, comments) {\n    if (err) {\n      return resp.status(500).json(err);\n    } else {\n      comments = comments || [];\n      if (comments.length === 0) return resp.json(comments);\n      return resp.json(comments);\n    }\n  });\n});\n/**\r\n * 添加博客评论\r\n */\n\nrouter.post(\"/comments-create/\", function (req, resp) {\n  var requestBody = req.body;\n  console.log(requestBody);\n  var comment = new CommentModel();\n\n  if (!requestBody) {\n    return resp.status(200).json(\"comment不能为空\");\n  }\n\n  Object.assign(comment, requestBody);\n  comment.save().then(function (com) {\n    return resp.json(com);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    return resp.status(500).json(err);\n  });\n});\nrouter.get(\"/comment-getSubs/:blogId/:commentId\", function (req, resp) {\n  CommentModel.find({\n    blogId: req.params.blogId,\n    refId: req.params.commentId\n  }).then(function (subs, err) {\n    if (err) {\n      resp.status(500).json(err);\n    } else {\n      resp.json(subs);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/router/router.js?");

/***/ }),

/***/ "./src/router/user-router.js":
/*!***********************************!*\
  !*** ./src/router/user-router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar UserModel = __webpack_require__(/*! ../models/UserModel.js */ \"./src/models/UserModel.js\");\n\nvar SessionModel = __webpack_require__(/*! ../models/SessionModel.js */ \"./src/models/SessionModel.js\");\n\nvar userRouter = express.Router();\nmodule.exports = userRouter;\nuserRouter.post(\"/user-register\", function (req, res) {\n  var userInfo = req.body;\n  console.log(userInfo);\n  var user = new UserModel();\n  user.name = userInfo.name;\n  user.password = userInfo.pass;\n  user.email = userInfo.email;\n  UserModel.find({\n    email: user.email\n  }).then(function (users) {\n    console.log(users);\n\n    if (users && users.length > 0) {\n      var msg = {\n        errorCode: \"5555\",\n        message: \"email has be registered!\"\n      };\n      res.json(msg);\n    } else {\n      console.log(user);\n      user.save().then(function (user) {\n        return res.json(user);\n      })[\"catch\"](function (err) {\n        return res.json(err);\n      });\n    }\n  });\n});\n/**\r\n * 登录\r\n */\n\nuserRouter.post(\"/user-login\", function (req, res) {\n  var loginInfo = req.body;\n  UserModel.find({\n    email: loginInfo.email,\n    password: loginInfo.pass\n  }).then(function (users) {\n    //如果登录成功的话\n    if (users && users.length > 0) {\n      var user = users[0];\n      req.session.isLogined = true;\n      req.session.email = user.email;\n      req.session.pass = user.pass;\n      req.session.name = user.name;\n      req.session._id = user._id;\n      res.cookie(\"username\", user.name);\n      res.cookie(\"userId\", user._id);\n      var sessionBean = new SessionModel();\n      sessionBean.content = JSON.stringify(req.session);\n      sessionBean.sessionId = req.session.id;\n      sessionBean.save().then(function (sess) {\n        console.log(\"saved session: %o\", sess);\n        return res.json(user);\n      })[\"catch\"](function (err) {\n        return res.json(err);\n      });\n    }\n  }, function (error) {\n    return res.json({\n      message: \"user not found!\",\n      error: error\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/router/user-router.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/router */ \"./src/router/router.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_router_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router_user_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/user-router */ \"./src/router/user-router.js\");\n/* harmony import */ var _router_user_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_router_user_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\");\n\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\n\n\n //链接数据库\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); //服务器连接数据库\n\nvar DB_URL = \"mongodb://localhost:27017/blogs\";\nmongoose.connect(DB_URL, {\n  useNewUrlParser: true,\n  useCreateIndex: true\n}).then(function () {\n  console.log(\"connect successfully!\");\n}, function (err) {\n  console.log('error when connect to mongo db!' + err);\n});\nmongoose.set('useFindAndModify', false); //表示数据格式以json方式来传递？\n\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(bodyParser.json());\napp.use(cors()); // app.use(logger('dev'));\n\napp.use(cookieParser()); // 使用 session 中间件\n\napp.use(session({\n  secret: 'secret',\n  // 对session id 相关的cookie 进行签名\n  resave: true,\n  saveUninitialized: false,\n  // 是否保存未初始化的会话\n  cookie: {\n    maxAge: 1000 * 60 * 3 // 设置 session 的有效时间，单位毫秒\n\n  }\n}));\napp.use(_router_router__WEBPACK_IMPORTED_MODULE_2___default.a);\napp.use(_router_user_router__WEBPACK_IMPORTED_MODULE_3___default.a);\nvar PORT = process.env.PORT || 8090;\napp.listen(PORT, function (err) {\n  if (err) {\n    console.log(err);\n    return;\n  }\n\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });