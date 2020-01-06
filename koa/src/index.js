import Koa from "koa";

const app = new Koa();
const port = 3002;


app.use(async (ctx) => {
    ctx.body = "Hello World";
});

// 로그 미들웨어 생성
app.use(async (ctx, next) => {
    const requestTime = Date.now();

    // 하위 Downstream 미들웨어 수행 대기
    await next();

    // Downstream 미들웨어 수행 완료 후 로그 기록
    const responseTime = Date.now();
    console.log(`${ctx.method} ${ctx.url} ${ctx.status}, ${responseTime - requestTime}ms`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
