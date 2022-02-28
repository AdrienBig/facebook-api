import { Router } from "express";
import apiRoutes from "./api.js";

const router = Router();

router.use("/api/v1", apiRoutes);

export default router;
