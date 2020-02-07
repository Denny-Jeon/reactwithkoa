"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _blog = require("./blog.ctrl");

var Blog = _interopRequireWildcard(_blog);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.post("/", Blog.post);
router.get("/", Blog.get);
router.get("/:id", Blog.getOne);
router.put("/:id", Blog.put);
router.delete("/:id", Blog.remove);

exports.default = router;