import { Response, Request, NextFunction } from "express";
import { responseSuccess } from "../helpers/responses";
import fetch from "node-fetch";

export const getNeighborhood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = process.env.VITE_DEV_URL_NEIGHBORHOODS || "";
  // console.log(req.headers.authorization);
  const response = await fetch(url, {
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization || "",
    },
    method: "POST",
  });
  const data = await response.json();

  return res.status(200).json(data);
};
