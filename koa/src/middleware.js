import Koa from "koa";

const app = new Koa();
const port = 3002;

app.on("log", (ctx, ms) => {
    console.log("log event received");
    console.log(`${ctx.method} ${ctx.url} ${ctx.status}, ${ms}ms`);
});


// 로그 미들웨어 생성
app.use(async (ctx, next) => {
    ctx.respond = false;
    const requestTime = Date.now();
    // 최초 요청시에는 쿠키가 없고, 두번째 요청부터 쿠키 값이 출력된다.
    console.log(ctx.cookies.get("testCookie"));

    // 하위 Downstream 미들웨어 수행 대기
    await next();


    // Downstream 미들웨어 수행 완료 후 로그 기록
    const responseTime = Date.now();

    ctx.app.emit("log", ctx, responseTime - requestTime);
});

app.use(async (ctx) => {
    // textCookie를 생성하여 HTTP 응답에 전달한다.
    ctx.cookies.set(
        "testCookie",
        "1234",
        {
            httpOnly: false,
            // 현재시간부터 10초 후에 만료
            expires: new Date((1000 * 10) + Date.now()),
        },
    );

    const errorProperties = {
        type: "System error",
    };
    ctx.assert(errorProperties.type !== "System error", 400, "Hello World Error", errorProperties);

    ctx.body = "Hello world";
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
