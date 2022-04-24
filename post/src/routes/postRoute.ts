import { protect } from "@instagram-dev/common";
import { Router } from "express";
import { newPost } from "../controllers/postController/newPost";
import { showAllPost } from "../controllers/postController/showAllPost";
import { getAllUser } from "../controllers/userController/getAllUser";

const router = Router();

router.post("/api/post/new", protect, newPost);

router.get("/api/post/users", getAllUser);
router.get("/api/post", showAllPost);

export { router as postRoute };
