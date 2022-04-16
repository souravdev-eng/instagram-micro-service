import { body } from "express-validator";

export const signInValidation = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please provide your valid email!"),
  body("password").notEmpty().withMessage("Please provide your password!"),
];
