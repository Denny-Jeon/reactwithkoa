const Koa = require("koa");

const app = new Koa();
const port = 3002;

app.use(async ctx => {
    console.log("First");
})

app.use(ctx => {
    console.log("Second");
})

app.use(async (ctx) => {
    ctx.body = "Hello World";
});

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));
