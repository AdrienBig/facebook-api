import "dotenv/config";
import express from "express";
import routes from "./routes/index.js";

const application = express();

application.use(express.json());
application.use(routes);

application.listen(process.env.PORT || 8080);
