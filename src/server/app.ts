import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getPing } from "./healthChecker/getPing.js";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/", getPing);

export default app;
