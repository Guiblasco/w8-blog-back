import { Schema } from "mongoose";
import { type PostStructure } from "../../../types";

const postSchema = new Schema<PostStructure>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  alternativeText: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

export default postSchema;
