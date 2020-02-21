import Boom from "boom";
import SQL from "sql-template-strings";
import Moment from "moment";

export const total = async (ctx, next) => {
    const search = ctx.query.search ? `%${ctx.query.search}%` : "%%";
    const statement = await ctx.state.db.all(SQL`
            SELECT COUNT(*) as total
            FROM Blog 
            WHERE title like ${search}`);
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.state.pagination = {
        total: statement[0].total,
    };

    await next();
};


export const post = async (ctx) => {
    const { title, content, description } = ctx.request.body;
    const createdAt = Moment().format("YYYY-MM-DD HH:mm:ss");

    const statement = await ctx.state.db.run(
        SQL`INSERT INTO 
            Blog (title, content, description, createdAt) 
            VALUES (${title}, ${content}, ${description}, ${createdAt})`,
    );
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.status = 201;
};


export const get = async (ctx) => {
    const search = ctx.query.search ? `%${ctx.query.search}%` : "%%";
    const offset = ctx.query.offset ? ctx.query.offset : "0";
    const size = ctx.query.size ? ctx.query.size : "10";
    const statement = await ctx.state.db.all(SQL`
            SELECT * 
            FROM Blog 
            WHERE title like ${search}
            ORDER BY createdAt desc
            LIMIT ${size} OFFSET ${offset}`);
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.status = 200;
    ctx.body = {
        total: ctx.state.pagination.total,
        items: statement,
    };
};


export const getOne = async (ctx) => {
    const { id } = ctx.params;

    const statement = await ctx.state.db.get(
        SQL`SELECT id, title, content, description, createdAt 
            FROM Blog
            WHERE id=${id}`,
    );
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.status = 200;
    ctx.body = statement;
};

export const put = async (ctx) => {
    const { id } = ctx.params;
    const { title, content, description } = ctx.request.body;

    const statement = await ctx.state.db.run(
        SQL`UPDATE Blog 
            SET title=${title}, content=${content}, description=${description}
            WHERE id=${id}`,
    );

    if (!statement) throw Boom.badRequest("bad Request");
    if (statement && statement.changes === 0) {
        throw Boom.notFound("not Found");
    }

    ctx.status = 200;
};

export const remove = async (ctx) => {
    const { id } = ctx.params;

    const statement = await ctx.state.db.run(
        SQL`DELETE FROM Blog
            WHERE id=${id}`,
    );

    if (!statement) throw Boom.badRequest("bad Request");
    if (statement && statement.changes === 0) {
        throw Boom.notFound("not Found");
    }

    ctx.status = 204;
};
