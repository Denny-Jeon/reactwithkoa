import KoaRouter from "koa-router";
import * as Blog from "./blog.ctrl";

const router = new KoaRouter();

router.post("/", Blog.post);


export default router;
