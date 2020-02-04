import KoaRouter from "koa-router";
import * as Blog from "./blog.ctrl";

const router = new KoaRouter();

router.post("/", Blog.post);
router.get("/", Blog.get);


export default router;
