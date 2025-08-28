import Event from "../models/Event.js";
import mongoose, { Query } from "mongoose";

export async function pushEvent(req, res) {

  try {

    const event = new Event({
      pictureID: req.body.pictureID,
      title: req.body.title,
      date: new Date(),
      description: req.body.description,
      location: req.body.location
    })

    console.log(mongoose.connection.name, " <- DB name // event pushed:");
    console.log(event);

    event.save().then(() => console.log('Event saved'))
         .catch(err => console.error('Error saving event:', err));

    //if (!user) return res.status(404).json({ message: "User not found" });

    res.json(event);
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

}

export async function pushMultipleEvents(req, res) {
  
  try {
    const events = req.body;

    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ message: "Submitted data does not point to an array" });
    }

    mongoose.insertMany(events)
      .then(() => console.log('Multiple events saved'))
      .catch(err => console.error('Error saving multiple events:', err));

    res.json({ message: `${events.length} events pushed successfully` });
    console.log(mongoose.connection.name, " <- DB name");

    //if (!user) return res.status(404).json({ message: "User not found" });

    res.json(events);
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

}

export async function deleteEvent(req, res) {
  try {
    console.log(mongoose.connection.name, " <- DB name");

    const result = await Event.deleteOne({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No event found to delete" });
    }

    console.log("One event deleted from DB.");
    res.json({ message: "Event deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function fetchEvent(req, res) {
  
  try {

    console.log(mongoose.connection.name, " <- DB name event fetch, trying to get you one event");

    const tempEvent = {}

    const {title, location, description} = req.body;
    if (title) tempEvent.title = title;
    if (location) tempEvent.location = location;  
    if (description) tempEvent.description = description;

    console.log(tempEvent, " <- temp event filter");
    const event = await Event.findOne(tempEvent);

    // If no event is found, return 404
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json(event);

  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

}

export async function fetchEvents(req, res) {
  
  try {

    console.log(mongoose.connection.name, " <- DB name");

    event.deleteOne().then(() => console.log('Event deleted'))
         .catch(err => console.error('Error deleting event:', err));

    //if (!user) return res.status(404).json({ message: "User not found" });

    res.json("Event deleted");
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

}

export async function fetchAllEvents(req, res) {
  try {
    console.log(mongoose.connection.name, " <- DB name");

    // Wait for the query result
    const events = await Event.find();

    console.log(events, " <- all events");

    // Send the events as JSON
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: err.message });
  }
}

export async function postDefaultEvent(req, res) {
  
  try {

    const event = new Event({
      pictureID: "00000001",
      title: "Burekdzijada",
      date: new Date(),
      description: "Ovde se bureci krkaju i brste, zavisno od preferencije",
      location: "De stignes, samo s prsti"
    })

    console.log(mongoose.connection.name, " <- DB name");

    event.save().then(() => console.log('Default event saved'))
         .catch(err => console.error('Error saving default event:', err));
    //if (!user) return res.status(404).json({ message: "User not found" });

    res.json("Default event posted");
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

}

export async function clearEventBase(req, res) {

  try {
    console.log(mongoose.connection.name.toString(), " <- DB name : clearing event database");

    const result = await Event.deleteMany({});

    console.log(`${result.deletedCount} events deleted from DB.`);
    res.json({ message: "Event database cleared" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}