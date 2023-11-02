import { validationResult } from "express-validator";
import { Response, Request, NextFunction } from "express";
import { responseErrors } from "../helpers/responses";
export const validateFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return responseErrors(
      res,
      400,
      `${errors.array().map((error) => {
        return error.msg;
      })}`
    );
  }
  next();
};
