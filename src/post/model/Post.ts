import mongoose from "mongoose";
import postSchema from "../controller/PostsController/schema/postSchema";

const Post = mongoose.model("Posts", postSchema);

export default Post;
