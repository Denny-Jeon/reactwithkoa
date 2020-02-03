import Koa from "koa";
import KoaCompose from "koa-compose";
import Boom from "boom";
import KoaBody from "koa-body";
import Router from "./router";

const app = new Koa();
const port = 3002;

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

const routerRoutesMd = (r) => r.routes();
const routerAllowMethodsMd = (r) => r.allowedMethods({
    throw: true,
    notImplemented: () => Boom.notImplemented("that method is not allowed"),
    methodNotAllowed: () => Boom.methodNotAllowed("that method is not allowed"),
});


const middlewares = [
    KoaBody(),
    errorHandlerMd,
    routerRoutesMd(Router),
    routerAllowMethodsMd(Router),

];

app.use(KoaCompose(middlewares));


app.on("error", (err, ctx) => {
    console.log(`${new Date()} ${ctx.status}: ${ctx.body.message}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
