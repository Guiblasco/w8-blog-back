import express from "express";
import cors from "cors";
import morgan from "morgan";
import { generalError } from "./error/generalError/generalError.js";
import { getPing } from "./healthChecker/getPing.js";
import { notFoundEndpointError } from "./error/notFoundEndpointError/notFoundEndpointError.js";
import postsRouter from "../post/router/postsRouter.js";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/", getPing);

app.get("/posts", postsRouter);

app.use(notFoundEndpointError);

app.use(generalError);

export default app;
