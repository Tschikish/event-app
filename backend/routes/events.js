import express from "express";
import { pushEvent } from "../controllers/eventController.js";
import { deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", pushEvent);
router.get("/delete", deleteEvent);

export default router;