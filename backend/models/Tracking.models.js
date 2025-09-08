import mongoose from "mongoose";

const trackingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now, // each log is for a specific day
    },
    sleepHours: {
      type: Number,
      required: false,
    },
    meals: {
      type: String, // e.g. "vegetarian, light dinner"
      required: false,
    },
    stressLevel: {
      type: String, // e.g. "low", "moderate", "high"
      required: false,
    },
    exercise: {
      type: String, // e.g. "yoga 30 min"
      required: false,
    },
  },
  { timestamps: true }
);

const Tracking = mongoose.model("Tracking", trackingSchema);

export default Tracking;
