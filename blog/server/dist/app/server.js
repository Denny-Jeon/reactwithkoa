"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _pEvent = require("p-event");

var _pEvent2 = _interopRequireDefault(_pEvent);

var _stoppable = require("stoppable");

var _stoppable2 = _interopRequireDefault(_stoppable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createServerAndListen = async (app, port = 3002, host = "0.0.0.0") => {
    const server = (0, _stoppable2.default)(_http2.default.createServer(app.callback()), 7000);
    server.listen(port, host);

    server.stop = _util2.default.promisify(server.stop);

    await (0, _pEvent2.default)(server, "listening");

    return server;
};

exports.default = createServerAndListen;