import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get("/", (_req, res, _next) => {
  res.status(200).json({ message: "Ok" });
});

export default app;
