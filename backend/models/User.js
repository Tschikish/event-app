import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed!
  profilePic: String,
  bio: String,
  createdAt: { type: Date, default: Date.now },
  attending: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], // events they joined
  hosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }] // events they created
});

export default mongoose.model("User", UserSchema);