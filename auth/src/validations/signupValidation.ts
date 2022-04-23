import { body } from "express-validator";

export const signupValidation = [
  body("email").isEmail().notEmpty().withMessage("Email must be valid"),
  body("fullName").notEmpty().withMessage("Full name must be valid"),
  body("userName").notEmpty().withMessage("User name must be valid"),

  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at list 6 characters long"),
];
