import express from "express";

const app = express();

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
};

export default startServer;
