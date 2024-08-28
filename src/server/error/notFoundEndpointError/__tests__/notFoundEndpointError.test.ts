import { type NextFunction, type Request, type Response } from "express";
import { notFoundEndpointError } from "../notFoundEndpointError.js";
import ServerError from "../../ServerError/ServerError.js";

describe("Given the function notFoundEndpointError ", () => {
  describe("When it receives an unknown path", () => {
    test("Then it should return the message Endpoint not found", () => {
      const _req: Partial<Request> = {};
      const _res: Partial<Response> = {};
      const next: NextFunction = jest.fn();

      notFoundEndpointError(_req as Request, _res as Response, next);

      expect(next).toHaveBeenCalledWith(
        new ServerError("Endpoint not found", 404),
      );
    });
  });
});
