import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  coords: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" } // [longitude, latitude]
  }
});

export default mongoose.model("Location", LocationSchema);
