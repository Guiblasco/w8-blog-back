import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 3500;

startServer(Number(port));
