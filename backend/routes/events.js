import express from "express";
import { fetchEvent, fetchAllEvents,  pushEvent, pushMultipleEvents, postDefaultEvent } from "../controllers/eventController.js";
import { deleteEvent, clearEventBase } from "../controllers/eventController.js";

const router = express.Router();

//Fetch
router.get("/", fetchEvent);
router.get("/all", fetchAllEvents);

//push
router.post("/push", pushEvent);
router.post("/bulk", pushMultipleEvents);
router.post("/default", postDefaultEvent);

//delete
router.delete("/delete", deleteEvent);
router.delete("/deleteAll", clearEventBase);


export default router;