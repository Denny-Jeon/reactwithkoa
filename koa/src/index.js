import Koa from "koa";
// koa-router import
import KoaRouter from "koa-router";
// 주어진 미들웨어를 결합한 후 미들웨어를 리턴하는 모듈
import KoaCompose from "koa-compose";
// HTTP와 유사한 에러 객체를 리턴하는 모듈
import Boom from "boom";

// koa 인스턴스 생성
const app = new Koa();
const port = 3002;

// Koa Error Handling
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
const routerRoutesMd = (r) => r.routes();

// router.allowedMethods 미들웨어 등록: OPTIONS 요청에 응답(Allow 헤더)하고
//    405 Method Not Allowed
//    501 Not Implemented를 응답하는 별도의 미들웨어 리턴
const routerAllowMethodsMd = (r) => r.allowedMethods({
    throw: true,
    // boom 패키지를 이용해 405, 501 에러 처리
    notImplemented: () => Boom.notImplemented("that method is not allowed"),
    methodNotAllowed: () => Boom.methodNotAllowed("that method is not allowed"),
});

// 미들웨어 리스트
const middleWares = [
    errorHandlerMd,
    routerRoutesMd(router),
    routerAllowMethodsMd(router),
];

// koa-compose로 koa 인스턴스에 미들웨어 등록
app.use(KoaCompose(middleWares));


// 일반적인 라우터 (메소드별 - get, post, put, delete 등으로 구분)
router.get("/", (ctx, next) => {
    ctx.body = "index";
});

// URL 패턴이 있는 라우터: ctx.params을 id 값 조회
router.get("/api/:id", (ctx, next) => {
    ctx.body = `api-${ctx.params.id}`;
});

// 모든 메소드를 허용하는 라우터
// GET /all, POST /all, PUT /all, DELETE /all 등의 모든 메소드 허용
router.all("/all", (ctx, next) => {
    ctx.body = `all-${ctx.method}`;
});

// 이름을 갖는(Named Router) 라우터
// namedRouter라는 이름을 갖는 라우터 생성
router.get("namedRouter", "/name/:id", async (ctx, next) => {
    ctx.body = `namedRouter-${ctx.params.id}`;
});

// 라우트 URL 생성 함수: id는 3이고 limit=1을 query string으로 갖는 url 생성
console.log(router.url("namedRouter", { id: 3 }, { query: "limit=1" }));

// 라우터 미들웨어 생성
const routerMd1 = async (ctx, next) => {
    ctx.body = "routerMd1";
    await next();
};
const routerMd2 = async (ctx) => {
    ctx.body = `${ctx.body} -> routerMd2`;
};
// 다수의 라우터 미들웨어를 갖는 라우터 생성
router.get("/multiple/middleware", KoaCompose([routerMd1, routerMd2]));


// router1, router2 다중 라우터 생성
const router1 = new KoaRouter();
const router2 = new KoaRouter();

// route1 미들웨어 생성
router1.get("/router1/:id1", async (ctx, next) => {
    ctx.body = `Nested Router id1 - ${ctx.params.id1}, id2 -${ctx.params.id2}`;
});

// 중첩 라우터 생성: router1을 포함하는 중첩 라우터 router2 생성
// 중첩 라우터의 호출 -> /router2/first/router3/second
router2.use("/router2/:id2",
    routerRoutesMd(router1), routerAllowMethodsMd(router1));

// koa 인스턴스에 중첩 라우터 등록
app.use(routerRoutesMd(router2));


// Prefix를 갖는 라우터 생성
const router3 = new KoaRouter({
    prefix: "/prefix",
});
router3.get("/router3/:id", async (ctx, next) => {
    ctx.body = `prefix router -${ctx.params.id}`;
});
// koa 인스턴스에 prefix 라우터 등록
app.use(KoaCompose([routerRoutesMd(router3), routerAllowMethodsMd(router3)]));


// redirect 경로 이동: router에서 직접 router.redirect(sourece, dest) 하는 방법,
//    ctx.redirect(dest) 방법 등 두 가지 가능
router3.redirect("/redirect", "/");
router3.get("/redirect2", async (ctx, next) => {
    ctx.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
