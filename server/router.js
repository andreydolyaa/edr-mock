import express from "express";
import logsRouter from "./src/modules/event-logs/logs-router.js";
import countsRouter from "./src/modules/counts/counts-router.js";

const router = express.Router();

router.use("/api", logsRouter);
router.use("/api", countsRouter);

export default router;
