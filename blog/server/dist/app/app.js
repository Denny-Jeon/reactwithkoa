"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaCompose = require("koa-compose");

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _koaBody = require("koa-body");

var _koaBody2 = _interopRequireDefault(_koaBody);

var _router = require("../router");

var _router2 = _interopRequireDefault(_router);

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

const middlewares = [(0, _koaBody2.default)(), _middleware.errorHandlerMd, (0, _middleware.routerRoutesMd)(_router2.default), (0, _middleware.routerAllowMethodsMd)(_router2.default)];

app.use((0, _koaCompose2.default)(middlewares));

app.on("error", (err, ctx) => {
    console.log(`${new Date()} ${ctx.status}: ${ctx.body.message}`);
});

exports.default = app;