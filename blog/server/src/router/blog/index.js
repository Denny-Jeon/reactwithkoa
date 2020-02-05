import KoaRouter from "koa-router";
import * as Blog from "./blog.ctrl";

const router = new KoaRouter();

router.post("/", Blog.post);
router.get("/", Blog.get);
router.get("/:id", Blog.getOne);
router.put("/:id", Blog.put);
router.delete("/:id", Blog.remove);

export default router;
