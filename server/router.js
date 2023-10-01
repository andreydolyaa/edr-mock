import express from "express";
import endpointsRouter from "./src/modules/endpoints/endpoints-router.js";
import countsRouter from "./src/modules/counts/counts-router.js";

const router = express.Router();

// router.use("/api", logsRouter);
router.use("/api", countsRouter);
router.use("/api", endpointsRouter);

export default router;
