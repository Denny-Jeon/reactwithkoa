import KoaRouter from "koa-router";
import Blog from "./blog";
import { databaseMd } from "../middleware";

const router = new KoaRouter({
    prefix: "/api/app/v1",
});

router.use("/blog", databaseMd, Blog.routes());


export default router;
