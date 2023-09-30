import express, { Router } from "express";
import { countDocumentsController } from "./counts-controller.js";

const router = express.Router();

router.get("/count/:model", countDocumentsController);

export default router;
