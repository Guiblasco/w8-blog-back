import type { Request, Response, NextFunction } from "express";
import type { PostsControllerStructure } from "./types";
import { type Post } from "../../types";

class PostController implements PostsControllerStructure {
  constructor(private readonly posts: Post[]) {}

  getPosts = (_req: Request, res: Response, _next: NextFunction): void => {
    res.status(200).json({ posts: this.posts });
  };
}

export default PostController;
