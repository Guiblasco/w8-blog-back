import express from "express";
import cors from "cors";
import morgan from "morgan";
import { generalError } from "./error/generalError/generalError.js";
import { getPing } from "./healthChecker/getPing.js";
import { notFoundEndpointError } from "./error/notFoundEndpointError/notFoundEndpointError.js";
import PostController from "../post/controller/PostsController/PostsController.js";
import Post from "../post/model/Post.js";

const postController = new PostController(Post);

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/", getPing);

app.get("/posts", postController.getPosts);

app.use(notFoundEndpointError);

app.use(generalError);

export default app;
