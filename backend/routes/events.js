import express from "express";
import { fetchEvent, pushEvent, pushMultipleEvents } from "../controllers/eventController.js";
import { deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

//push
router.post("/push", pushEvent);
router.post("/pushmultiple", pushMultipleEvents);

router.delete("/delete", deleteEvent);

router.get("/", fetchEvent);

export default router;