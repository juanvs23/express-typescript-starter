import { Response } from "express";

export const responseSuccess = (
  res: Response,
  status: number,
  message: string
) =>
  res.status(status).json({
    success: true,
    message,
  });

export const responseErrors = (
  res: Response,
  status: number,
  message: string
) =>
  res.status(status).json({
    success: false,
    error: "INVALID_EMAIL_ADDRESS",
    is_available: false,
    message,
  });
