"use strict";

var _pEvent = require("p-event");

var _pEvent2 = _interopRequireDefault(_pEvent);

var _database = require("./database");

var Database = _interopRequireWildcard(_database);

var _app = require("./app/app");

var _app2 = _interopRequireDefault(_app);

var _server = require("./app/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = async () => {
    let server = null;
    try {
        await Database.connect();
        server = await (0, _server2.default)(_app2.default, 3002, "0.0.0.0");
        console.log("Server is listening on: 0.0.0.0:3002");

        await Promise.race([...["SIGINT", "SIGHUP", "SIGTERM"].map(s => (0, _pEvent2.default)(process, s, {
            rejectionEvents: ["uncaughtException", "unhandledRejection"]
        }))]);
    } catch (err) {
        process.exitCode = 1;
        console.log(err);
    } finally {
        console.log(server);
        if (server) {
            console.log("Close server");
            await server.stop();
            console.log("Server closed");
        }

        console.log("Close database");
        await Database.disconnect();
        console.log("Database closed");

        setTimeout(() => process.exit(), 10000).unref();
    }
};

main();
// App();