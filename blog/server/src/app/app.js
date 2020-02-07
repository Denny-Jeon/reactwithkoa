import Koa from "koa";
import KoaCompose from "koa-compose";
import KoaBody from "koa-body";
import Router from "../router";
import {
    errorHandlerMd,
    routerRoutesMd,
    routerAllowMethodsMd,
} from "../middleware";


const app = new Koa();

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


export default app;
