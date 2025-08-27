import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  user:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Comment", CommentSchema);