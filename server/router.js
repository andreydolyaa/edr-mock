import express from "express";
import logsRouter from "./src/modules/event-logs/logs-router.js";

const router = express.Router();

router.use("/api", logsRouter);

export default router;
