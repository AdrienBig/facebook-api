import { Router } from "express";
import * as UserController from "./user.controller.js";

const api = Router();

api.patch("/:id/profile", UserController.updateUserProfile);
api.get("/:id/profile", UserController.findUserProfile);
api.get("/:id/posts", UserController.findUsersPosts);
api.delete("/:id", UserController.deleteUser);
api.get("/data", UserController.findAll);

export default api;
