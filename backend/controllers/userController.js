import mongoose from "mongoose";
import User from "../models/User.js";

/* export async function getUser(req, res) {
  try {
    const users = mongoose.connection.collection("users");
    //console.log(users);
    const user = await User.findOne({
      email: "michelle_fairley@gameofthron.es",
    });

    // Ovo ispadne prazno kad logujes
    const userss = await User.find({}); 

    console.log(mongoose.connection.name, " <- DB name");
    
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} */

export async function getUser(req, res) {
  try {
    const user = await User.findOne();

    console.log("Found user:", user);

    console.log(mongoose.connection.name, " <- DB name");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
