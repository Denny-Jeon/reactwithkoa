import KoaRouter from "koa-router";
import Blog from "./blog";

const router = new KoaRouter({
    prefix: "/api/app/v1",
});

router.use("/blog", Blog.routes());


export default router;
