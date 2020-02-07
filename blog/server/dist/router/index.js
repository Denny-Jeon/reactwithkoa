"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _blog = require("./blog");

var _blog2 = _interopRequireDefault(_blog);

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default({
    prefix: "/api/app/v1"
});

router.use("/blog", _middleware.databaseMd, _blog2.default.routes());

exports.default = router;