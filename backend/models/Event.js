import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    pictureID: { type: String,},
    title: { type: String, },
    date: { type: Date,},
    description: { type: String, },
    location: { type: String, },

});

export default mongoose.model("Event", EventSchema);