// database/index.js
import sqlite from "sqlite";

let db = null;

export const connect = async (dbname = "./blog.sqlite") => {
    try {
        db = await sqlite.open(dbname);
        await db.migrate({ force: "last" });
    } catch (err) {
        console.log("Error when creating the database", err);
    }

    return db;
};


export const disconnect = async () => {
    try {
        if (db) await db.close();
        console.log("Close the database connection.");
    } catch (err) {
        console.error(err.message);
    }
};


export const setCtxState = async (ctx, next) => {
    ctx.state.db = db;
    await next();
};
