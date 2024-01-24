import { Response, Request, NextFunction } from "express";
import { responseSuccess } from "../helpers/responses";
import fetch from "node-fetch";

export const fetchApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = process.env.VITE_URL_DEV_SIDDONS_NEIGHBORHOOD_LIST || "";
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
