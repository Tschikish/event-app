import Event from "../models/Event.js";
import mongoose from "mongoose";

// Trenutno pushEvent i deleteEvent rade, fetchEvent i fetchEventAny su samo za testiranje i ne koriste se
export async function pushEvent(req, res) {
  
  try {

    const event = new Event({
      pictureID: req.body.pictureID,
      title: req.body.title,
      date: new Date(),
      description: req.body.description,
      location: req.body.location
    })

    console.log(mongoose.connection.name, " <- DB name");

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

    const event = new Event({
      pictureID: req.body.pictureID,
      title: req.body.title,
      date: new Date(),
      description: req.body.description,
      location: req.body.location
    })

    console.log(mongoose.connection.name, " <- DB name");

    event.save().then(() => console.log('Event saved'))
         .catch(err => console.error('Error saving event:', err));

    //if (!user) return res.status(404).json({ message: "User not found" });

    res.json(event);
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

    const event = new Event({
      pictureID: "00000001",
      title: "Burekdzijada",
      date: new Date(),
      description: "Ovde se bureci krkaju i brste, zavisno od preferencije",
      location: "De stignes, samo s prsti"
    })

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

export async function fetchEventAny(req, res) {
  
  try {

    const event = new Event({
      pictureID: "00000001",
      title: "Burekdzijada",
      date: new Date(),
      description: "Ovde se bureci krkaju i brste, zavisno od preferencije",
      location: "De stignes, samo s prsti"
    })

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