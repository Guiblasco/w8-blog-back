import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app";
import { postsMocks } from "../../mocks/postsMocks.js";
import type { PostStructure } from "../../post/types";
import connectToDatabase from "../../database";
import mongoose from "mongoose";
import Post from "../../post/model/Post";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
  await Post.insertMany(postsMocks);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a GET '/posts' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond a status 200 and collection of posts", async () => {
      const path = "/posts";
      const statusCode = 200;
      const postsProperty = "posts";

      const response = await request(app).get(path).expect(statusCode);

      const responseBody = response.body as { posts: PostStructure[] };

      expect(responseBody).toHaveProperty(postsProperty);
    });
  });
});
