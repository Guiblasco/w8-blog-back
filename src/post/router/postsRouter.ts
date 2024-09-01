import express from "express";
import PostController from "../controller/PostsController/PostsController.js";
import Post from "../model/Post.js";

const postsRouter = express.Router();

const postController = new PostController(Post);

postsRouter.get("/", postController.getPosts);

export default postsRouter;
