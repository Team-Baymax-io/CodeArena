// controllers/profileController.js
import { Profile } from "../models/Profile.models.js";
import { User } from "../models/User.models.js";

// GET user profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "userId",
      "name email"
    );
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// UPDATE user profile
export const updateProfile = async (req, res) => {
  try {
    const { age, goals, habits, doshaType } = req.body;

    let profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) {
      profile = new Profile({
        userId: req.user.id,
        age,
        goals,
        habits,
        doshaType,
      });
    } else {
      profile.age = age || profile.age;
      profile.goals = goals || profile.goals;
      profile.habits = habits || profile.habits;
      profile.doshaType = doshaType || profile.doshaType;
    }

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// UPDATE environment details
export const updateEnvironment = async (req, res) => {
  try {
    const { location, season, weather } = req.body;

    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.environment = {
      location: location || profile.environment?.location,
      season: season || profile.environment?.season,
      weather: weather || profile.environment?.weather,
    };

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE profile (optional)
export const deleteProfile = async (req, res) => {
  try {
    await Profile.findOneAndDelete({ userId: req.user.id });
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
