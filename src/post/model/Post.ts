import mongoose from "mongoose";
import postSchema from "./schema/postSchema.js";

const Post = mongoose.model("Posts", postSchema, "posts");

export default Post;
