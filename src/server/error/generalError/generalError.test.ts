import type { NextFunction, Request, Response } from "express";
import ServerError from "../ServerError/ServerError";
import { generalError } from "./generalError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the function generalError", () => {
  const error = new ServerError("Not found", 404);
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives an error with code 404 and message 'Not found'", () => {
    test("Then it should call response's method status with error's status code 404", () => {
      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(error.statusCode);
    });

    test("Then it should call response's method json with error's message 'Not found'", () => {
      const expectErrorMessage = { message: "Not found" };

      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectErrorMessage);
    });
  });

  describe("When it receives an error with code 500 and message 'Server error'", () => {
    const statusCode = 500;
    const error = new Error("Server Error");

    test("Then it should call response's method status with error's status code 500", () => {
      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should call response's method json with error's message 'Server error' ", () => {
      const expectErrorMessage = { message: "Server Error" };

      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectErrorMessage);
    });
  });
});
