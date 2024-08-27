import type { Request, Response } from "express";

export const getPing = (_req: Request, res: Response): void => {
  res.status(200).json({ message: "Pong" });
};
