// models/Profile.models.js
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    age: Number,
    goals: [String], // e.g., ["weight loss", "better sleep"]
    habits: {
      sleep: String, // e.g., "6 hours/night"
      diet: String, // e.g., "vegetarian"
      activity: String, // e.g., "yoga 3x/week"
    },
    doshaType: {
      type: String,
      enum: ["Vata", "Pitta", "Kapha", "Mixed"],
      default: "Mixed",
    },
    environment: {
      location: String,
      season: String,
      weather: String,
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
