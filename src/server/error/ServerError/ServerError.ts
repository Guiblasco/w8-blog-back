import type ServerErrorEstructure from "./types";

class ServerError extends Error implements ServerErrorEstructure {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default ServerError;
