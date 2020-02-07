import Boom from "boom";

const errorHandlerMd = async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            throw Boom.notFound("missing");
        }
    } catch (err) {
        ctx.status = (err.output && err.output.statusCode)
            ? err.output.statusCode : 500;

        ctx.body = (err.output && err.output.payload)
            ? err.output.payload : {
                statusCode: ctx.status,
                error: "Internal Server Error",
                message: "Unknown Error",
            };

        ctx.app.emit("error", err, ctx);
    }
};


export default errorHandlerMd;
