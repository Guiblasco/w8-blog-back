import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
};

export default startServer;
