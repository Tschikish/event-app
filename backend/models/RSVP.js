import mongoose from "mongoose";

const RsvpSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  user:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["going", "interested", "not going"], default: "interested" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Rsvp", RsvpSchema);