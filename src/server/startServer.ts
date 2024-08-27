import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log(chalk.green(`Listen on port ${port}`));
  });
};

export default startServer;
