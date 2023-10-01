import express from "express";
import { getEndpointsController } from "./endpoints-controller.js";

const router = express.Router();

router.get("/endpoints", getEndpointsController);

export default router;
