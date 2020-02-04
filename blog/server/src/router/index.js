import KoaRouter from "koa-router";
import Blog from "./blog";
import * as Database from "../database";

const router = new KoaRouter({
    prefix: "/api/app/v1",
});

router.use("/blog", Database.setCtxState, Blog.routes());


export default router;
