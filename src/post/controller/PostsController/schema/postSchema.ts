import { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },

  date: {
    type: Number,
    require: true,
  },

  imageUrl: {
    type: String,
    require: true,
  },

  alternativeText: {
    type: String,
    require: true,
  },

  content: {
    type: String,
    require: true,
  },
});

export default postSchema;
