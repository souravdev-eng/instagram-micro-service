import { Router } from "express";
import { protect, requestValidation } from "@instagram-dev/common";

import { currentUser } from "../controllers/currentUser";
import { signIn } from "../controllers/signin";
import { signup } from "../controllers/signup";

import { signInValidation } from "../validations/signInValidation";
import { signupValidation } from "../validations/signupValidation";

const router = Router();

router.post("/api/auth/signup", signupValidation, requestValidation, signup);
router.post("/api/auth/signin", signInValidation, requestValidation, signIn);

router.get("/api/auth/me", protect, currentUser);

export { router as UserRouter };
