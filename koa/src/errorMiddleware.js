import Koa from "koa";
import KoaCompose from "koa-compose";

const app = new Koa();
const port = 3002;

// 에러 처리를 담당할 미들웨어
const errorHandlerMd = async (ctx, next) => {
    try {
        // 하위 미들웨어 처리 대기
        await next();
    } catch (err) {
        // ctx.throw, ctx.asset, throw new Error(...)이 발생한 경우
        // err의 status 값을 response의 status로 설정
        ctx.status = err.status || 500;
        // err의 메시지 내용을 body에 저장
        ctx.body = {
            message: err.message || "Unknown Error",
        };

        // 에러 로그등을 저장하기 위한 error event 발생
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
    let ret = ctx.path === "/conditional_error/ok"
        ? ctx.body = "ok" : null;
    if (!ret) {
        // 경로가 /condition_error/nok이면 ctx.throw롤 500에러 발생,
        // 경로가 /condition_error/nok가 아니면 하위 미들웨어 처리 대기
        ret = ctx.path === "/conditional_error/nok"
            ? ctx.throw(500, "Generate Error")
            : await next();
    }

    return "";
};

// 경로를 찾을 수 없어서 404 에러를 발생시키는 notFound 미들웨어
const notFoundMd = async (ctx) => {
    // 경로를 찾을 수 없어서 ctx.throw로 404 에러 발생
    ctx.throw(404, "Not found");
};

// middleware 배열 생성
const middlewares = [
    errorHandlerMd,
    indexMd,
    generateThrowMd,
    notFoundMd,
];

// KoaCompose를 이용하여 미들웨어 등록
app.use(KoaCompose(middlewares));

// 에러 발생시 콘솔이나 로그로 출력할 이벤트 리스터 등록
app.on("error", (err, ctx) => {
    console.log(`${new Date()} ${ctx.status}: ${ctx.body.message}`);
});

// 서버 구동
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
