import { Router } from "express";
import * as PostController from "./post.controller.js";

const api = Router();

api.get("/", PostController.findAllPosts);
api.post("/", PostController.createOne);
api.get("/:id", PostController.findPost);
api.patch("/:id", PostController.updateOne);
api.delete("/:id", PostController.deletePost);

export default api;
