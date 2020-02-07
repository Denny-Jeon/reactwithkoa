"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCtxState = exports.disconnect = exports.connect = undefined;

var _sqlite = require("sqlite");

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let db = null; // database/index.js


const connect = async (dbname = "./blog.sqlite") => {
    try {
        db = await _sqlite2.default.open(dbname);
        await db.migrate({ force: "last" });
    } catch (err) {
        console.log("Error when creating the database", err);
    }

    return db;
};

const disconnect = async () => {
    try {
        if (db) await db.close();
        console.log("Close the database connection.");
    } catch (err) {
        console.error(err.message);
    }
};

const setCtxState = async (ctx, next) => {
    ctx.state.db = db;
    await next();
};

exports.connect = connect;
exports.disconnect = disconnect;
exports.setCtxState = setCtxState;