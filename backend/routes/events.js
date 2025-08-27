import express from "express";
import { fetchEvent, pushEvent, pushMultipleEvents, postDefaultEvent } from "../controllers/eventController.js";
import { deleteEvent, clearEventBase } from "../controllers/eventController.js";
import { ReturnDocument } from "mongodb";

const router = express.Router();

//push
router.post("/push", pushEvent);
router.post("/bulk", pushMultipleEvents);
router.post("/default", postDefaultEvent);

//delete
router.delete("/delete", deleteEvent);
router.delete("/deleteAll", clearEventBase);

router.get("/", fetchEvent);

export default router;