import type { Request, Response, NextFunction } from "express";
import type { PostsControllerStructure } from "./types";
import { type PostStructure } from "../../types";
import { type Model } from "mongoose";

class PostController implements PostsControllerStructure {
  constructor(private readonly postModel: Model<PostStructure>) {}

  getPosts = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const posts = await this.postModel.find().exec();
      res.status(200).json({ posts });
    } catch (error) {
      next(error);
    }
  };
}

export default PostController;
