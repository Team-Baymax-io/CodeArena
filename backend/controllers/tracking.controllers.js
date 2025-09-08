import Tracking from "../models/Tracking.models.js";

// Create a new daily log
export const addTracking = async (req, res) => {
  try {
    const { sleepHours, meals, stressLevel, exercise } = req.body;

    const tracking = new Tracking({
      userId: req.user._id,
      sleepHours,
      meals,
      stressLevel,
      exercise,
    });

    await tracking.save();
    res.status(201).json(tracking);
  } catch (error) {
    res.status(500).json({ message: "Error creating tracking log", error });
  }
};

// Get all logs for logged-in user
export const getMyTracking = async (req, res) => {
  try {
    const logs = await Tracking.find({ userId: req.user._id }).sort({
      date: -1,
    });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching logs", error });
  }
};

// Update a specific log
export const updateTracking = async (req, res) => {
  try {
    const log = await Tracking.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $set: req.body },
      { new: true }
    );

    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json(log);
  } catch (error) {
    res.status(500).json({ message: "Error updating log", error });
  }
};

// Delete a log
export const deleteTracking = async (req, res) => {
  try {
    const log = await Tracking.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json({ message: "Log deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting log", error });
  }
};
