import express from "express";
import { pushEvent } from "../controllers/eventController.js";

const router = express.Router();

router.post("/", pushEvent);

export default router;