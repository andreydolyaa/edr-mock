import express from "express";
import { eventLogsController } from "./logs-controller.js";

const router = express.Router();

router.get("/event-logs", eventLogsController);

export default router;
