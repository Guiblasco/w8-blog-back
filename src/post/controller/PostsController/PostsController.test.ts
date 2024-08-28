import { type NextFunction, type Request, type Response } from "express";
import { type Post } from "../../types";
import PostsController from "./PostsController.js";

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given the getPosts method of PostController class", () => {
  const posts: Post[] = [
    {
      id: "",
      author: "Guillermius",
      title: "",
      alternativeText: "",
      content: "",
      date: Number(""),
      imageUrl: "",
    },
    {
      id: "",
      author: "Alexisus",
      title: "",
      alternativeText: "",
      content: "",
      date: Number(""),
      imageUrl: "",
    },
  ];
  const statusCode = 200;
  const postsController = new PostsController(posts);
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a response", () => {
    test("Then it should call response's status method with 200 ", () => {
      postsController.getPosts(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });

  describe("When it receives a response with 2 posts that his authors are 'Guillermius' and 'Alexisus'", () => {
    test("Then it should call response's json method with posts list contains 2 posts", () => {
      postsController.getPosts(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
