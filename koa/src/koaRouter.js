import Koa from "koa";
import KoaRouter from "koa-router";
import KoaCompose from "koa-compose";
import Boom from "boom";
import Router from "koa-router";

const app = new Koa();
const port = 3002;

// Koa Error Handling은 여기를 참조
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

app.on("error", (err, ctx) => {
    console.log(`${new Date()} ${ctx.status}: ${ctx.body.error} - ${ctx.body.message}`);
});

// koa-router 인스턴스 생성
const router = new KoaRouter();

// router.routes 미들웨어 등록: 요청된 URL과 일치하는 라우터를 리턴하는 미들웨어
const routerRoutesMd = router.routes();

// router.allowedMethods 미들웨어 등록: OPTIONS 요청에 응답(Allow 헤더)하고
//    405 Method Not Allowed
//    501 Not Implemented를 응답하는 별도의 미들웨어 리턴
const routerAllowMethodsMd = router.allowedMethods({
    throw: true,
    // boom 패키지를 이용해 405, 501 에러 처리
    notImplemented: () => Boom.notImplemented("that method is not allowed"),
    methodNotAllowed: () => Boom.methodNotAllowed("that method is not allowed"),
});


const middleWares = [
    errorHandlerMd,
    routerRoutesMd,
    routerAllowMethodsMd,
];

app.use(KoaCompose(middleWares));


// 일반적인 라우터 (메소드별 - get, post, put, delete 등으로 구분)
router.get("/", (ctx, next) => {
    ctx.body = "index";
});

// URL 패턴이 있는 라우터: params으로 패턴을 전송한다.
router.get("/api/:id", (ctx, next) => {
    ctx.body = `api-${ctx.params.id}`;
});

// 모든 메소드를 허용하는 라우터
// GET /all, POST /all, PUT /all, DELETE /all 등의 모든 메소드 허용
router.all("/all", (ctx, next) => {
    ctx.body = `all-${ctx.method}`;
});

// namedRouter 이름을 갖는(Named Router) 라우터
router.get("namedRouter", "/name/:id", async (ctx, next) => {
    ctx.body = `namedRouter-${ctx.params.id}`;
});
// Named Router를 이용하면 개발시 쉽게 경로를 변경할 수 있다.
console.log(router.url("namedRouter", 3));


const routerMd1 = async (ctx, next) => {
    ctx.body = "routerMd1";
    await next();
};
const routerMd2 = async (ctx) => {
    ctx.body = `${ctx.body} -> routerMd2`;
};
// 다수의 라우터 미들웨어를 갖는 라우터
router.get("/multiple/middleware", routerMd1, routerMd2);


// 다중 및 중첩 라우터
const router1 = new KoaRouter();
const router2 = new KoaRouter();


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
