import type ServerErrorStructure from "./types";

class ServerError extends Error implements ServerErrorStructure {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default ServerError;
