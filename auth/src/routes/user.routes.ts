import { Router } from "express";
import { signIn } from "../controllers/signin";
import { signup } from "../controllers/signup";

import { requestValidation } from "../middleware/request-validation";
import { signInValidation } from "../validations/signInValidation";
import { signupValidation } from "../validations/signupValidation";

const router = Router();

router.post("/api/auth/signup", signupValidation, requestValidation, signup);
router.post("/api/auth/signin", signInValidation, requestValidation, signIn);

export { router as UserRouter };
