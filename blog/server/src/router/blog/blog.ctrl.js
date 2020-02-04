import Boom from "boom";
import SQL from "sql-template-strings";
import Moment from "moment";

export const post = async (ctx) => {
    const { title, content } = ctx.request.body;
    const createdAt = Moment().format("YYYY-MM-DD HH:mm:ss");
    // const db = Database.getDb();

    const statement = await ctx.state.db.run(
        SQL`INSERT INTO 
            Blog (title, content, createdAt) 
            VALUES (${title}, ${content}, ${createdAt})`,
    );
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.status = 201;
};


export const get = async (ctx) => {
    // const db = Database.getDb();

    const statement = await ctx.state.db.all(SQL`SELECT * FROM Blog`);
    if (!statement) throw Boom.badRequest("bad Request");

    ctx.status = 200;
    ctx.body = statement;
};
