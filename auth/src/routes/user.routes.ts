import { Router } from "express";
import { signup } from "../controllers/signup";
import { requestValidation } from "../middleware/request-validation";
import { signupValidation } from "../validations/signupValidation";

const router = Router();

router.post("/api/auth/signup", signupValidation, requestValidation, signup);

export { router as UserRouter };
