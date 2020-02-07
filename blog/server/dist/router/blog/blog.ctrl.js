"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.put = exports.getOne = exports.get = exports.post = undefined;

var _boom = require("boom");

var _boom2 = _interopRequireDefault(_boom);

var _sqlTemplateStrings = require("sql-template-strings");

var _sqlTemplateStrings2 = _interopRequireDefault(_sqlTemplateStrings);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const post = exports.post = async ctx => {
    const { title, content } = ctx.request.body;
    const createdAt = (0, _moment2.default)().format("YYYY-MM-DD HH:mm:ss");

    const statement = await ctx.state.db.run(_sqlTemplateStrings2.default`INSERT INTO 
            Blog (title, content, createdAt) 
            VALUES (${title}, ${content}, ${createdAt})`);
    if (!statement) throw _boom2.default.badRequest("bad Request");

    ctx.status = 201;
};

const get = exports.get = async ctx => {
    const search = ctx.query.search ? `%${ctx.query.search}%` : "%%";
    const statement = await ctx.state.db.all(_sqlTemplateStrings2.default`
            SELECT * 
            FROM Blog 
            WHERE title like ${search}`);
    if (!statement) throw _boom2.default.badRequest("bad Request");

    ctx.status = 200;
    ctx.body = statement;
};

const getOne = exports.getOne = async ctx => {
    const { id } = ctx.params;

    const statement = await ctx.state.db.get(_sqlTemplateStrings2.default`SELECT id, title, content, createdAt 
            FROM Blog
            WHERE id=${id}`);
    if (!statement) throw _boom2.default.badRequest("bad Request");

    ctx.status = 200;
    ctx.body = statement;
};

const put = exports.put = async ctx => {
    const { id } = ctx.params;
    const { title, content } = ctx.request.body;

    const statement = await ctx.state.db.run(_sqlTemplateStrings2.default`UPDATE Blog 
            SET title=${title}, content=${content}
            WHERE id=${id}`);

    if (!statement) throw _boom2.default.badRequest("bad Request");
    if (statement && statement.changes === 0) {
        throw _boom2.default.notFound("not Found");
    }

    ctx.status = 200;
};

const remove = exports.remove = async ctx => {
    const { id } = ctx.params;

    const statement = await ctx.state.db.run(_sqlTemplateStrings2.default`DELETE FROM Blog
            WHERE id=${id}`);

    if (!statement) throw _boom2.default.badRequest("bad Request");
    if (statement && statement.changes === 0) {
        throw _boom2.default.notFound("not Found");
    }

    ctx.status = 204;
};