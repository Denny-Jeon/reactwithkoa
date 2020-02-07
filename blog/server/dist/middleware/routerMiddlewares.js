"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routerAllowMethodsMd = exports.routerRoutesMd = undefined;

var _boom = require("boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routerRoutesMd = r => r.routes();
const routerAllowMethodsMd = r => r.allowedMethods({
    throw: true,
    notImplemented: () => _boom2.default.notImplemented("that method is not allowed"),
    methodNotAllowed: () => _boom2.default.methodNotAllowed("that method is not allowed")
});

exports.routerRoutesMd = routerRoutesMd;
exports.routerAllowMethodsMd = routerAllowMethodsMd;