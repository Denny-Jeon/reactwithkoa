import Koa from "koa";
import KoaCompose from "koa-compose";
import Boom from "boom";

const app = new Koa();
const port = 3002;

// 에러 처리를 담당할 미들웨어
const errorHandlerMd = async (ctx, next) => {
    try {
        // 하위 미들웨어 처리 대기
        await next();
        // 페이지를 찾지 못한 경우 404 에러 발생
        if (ctx.status === 404) {
            throw Boom.notFound("missing");
        }
    } catch (err) {
        // boom에서 발생한 output.statusCode를 ctx.status로 설정
        ctx.status = (err.output && err.output.statusCode)
            ? err.output.statusCode : 500;

        // boom에서 발생한 output.payload를 ctx.body로 설정
        ctx.body = (err.output && err.output.payload)
            ? err.output.payload : {
                statusCode: ctx.status,
                error: "Internal Server Error",
                message: "Unknown Error",
            };

        // 이벤트 emit
        ctx.app.emit("error", err, ctx);
    }
};

// index 미들웨어
const indexMd = async (ctx, next) => {
    // 경로가 "/"이면 index 메시지 출력. 아니면 하위 미들웨어 처리 대기
    const ret = ctx.path === "/" ? ctx.body = "index" : await next();
    return ret;
};

// 경로에 따라 에러를 발생하는 generateThrowMd 미들웨어
const generateThrowMd = async (ctx, next) => {
    // 경로가 /condition_error/ok이면 ok 메시지 출력.
    const ret = ctx.path === "/conditional_error/ok"
        ? ctx.body = "ok" : null;
    if (!ret) {
        // 경로가 /condition_error/nok이면 Boom.badImplementation 500에러 발생,
        // 경로가 /condition_error/nok가 아니면 하위 미들웨어 처리 대기
        if (ctx.path === "/conditional_error/nok") {
            throw Boom.badImplementation("Generate Error");
        }
        await next();
    }

    return "";
};


// middleware 배열 생성
const middlewares = [
    errorHandlerMd,
    indexMd,
    generateThrowMd,
];

// KoaCompose를 이용하여 미들웨어 등록
app.use(KoaCompose(middlewares));

// 에러 발생시 콘솔이나 로그로 출력할 이벤트 리스터 등록
app.on("error", (err, ctx) => {
    console.log(`${new Date()} ${ctx.status}: ${ctx.body.message}`);
});

// 서버 구동
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
