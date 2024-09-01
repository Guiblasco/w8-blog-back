import type { NextFunction, Response, Request } from "express";
import type { Model } from "mongoose";
import type { PostStructure } from "../../../types";
import PostController from "../PostsController.js";
import { postsMocks } from "../../../../mocks/postsMocks";

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given getPosts method from PostsController class", () => {
  describe("When it receives a request", () => {
    const postModel: Partial<Model<PostStructure>> = {
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(postsMocks),
      }),
    };
    const postController = new PostController(
      postModel as Model<PostStructure>,
    );
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call response's method with 200 and 2 posts  author's are Guillermius and Alexisus", async () => {
      await postController.getPosts(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ posts: postsMocks }),
      );
    });
  });
});
