import type { NextFunction, Request, Response } from "express";

export interface PostsControllerStructure {
  getPosts: (req: Request, res: Response, next: NextFunction) => void;
}
