import type { NextFunction, Request, Response } from "express";
import ServerError from "../ServerError/ServerError.js";

export const notFoundEndpointError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError("Endpoint not found", 404);

  next(error);
};
