import Event from "../models/Event.js";
import mongoose from "mongoose";


export async function pushEvent(req, res) {
  
  try {

    const event = new Event({
      pictureID: "00000001",
      title: "Burekdzijada",
      date: new Date(),
      description: "Ovde se bureci krkaju i brste, zavisno od preferencije",
      location: "De stignes, samo s prsti"
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