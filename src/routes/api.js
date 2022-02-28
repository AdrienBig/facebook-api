import { Router } from "express";
import authenticationRoutes from "../authentication/authentication.route.js";
import userRoutes from "../users/users.route.js";
import postRoutes from "../posts/posts.route.js";
import jwt from "../middlewares/jwt.middleware.js";

const api = Router();

api.use("/authentication", authenticationRoutes);
api.use("/users", jwt, userRoutes);
api.use("/posts", jwt, postRoutes);

export default api;
