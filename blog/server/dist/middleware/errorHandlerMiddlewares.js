"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _boom = require("boom");

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const errorHandlerMd = async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            throw _boom2.default.notFound("missing");
        }
    } catch (err) {
        ctx.status = err.output && err.output.statusCode ? err.output.statusCode : 500;

        ctx.body = err.output && err.output.payload ? err.output.payload : {
            statusCode: ctx.status,
            error: "Internal Server Error",
            message: "Unknown Error"
        };

        ctx.app.emit("error", err, ctx);
    }
};

exports.default = errorHandlerMd;