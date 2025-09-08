import users from "../models/UserData.js"; // Your sample user data

// Function to generate tips
const ayurvedicGuidance = {
  bodyType: {
    Vata: [
      "Favor warm, nourishing foods like soups, stews, and cooked grains.",
      "Keep a regular routine to stabilize energy levels.",
      "Practice grounding exercises like yoga and meditation.",
    ],
    Pitta: [
      "Include cooling foods like cucumber, coconut, and leafy greens.",
      "Avoid spicy, oily, and fried foods.",
      "Engage in calming practices like deep breathing or swimming.",
    ],
    Kapha: [
      "Favor light, dry, and warming foods. Reduce heavy and oily foods.",
      "Stay active with cardio and stimulating exercises.",
      "Avoid daytime naps to maintain energy levels.",
    ],
  },
  energyLevels: {
    "High and steady": ["Maintain balanced routines to avoid burnout."],
    "Energetic in bursts": ["Take short breaks and practice pacing exercises."],
    "Low and sluggish": ["Do light exercises and energizing activities daily."],
    "Fluctuates unpredictably": ["Follow consistent sleep and meal routines."],
  },
  concerns: {
    "Digestive issues": [
      "Eat warm, cooked foods and avoid cold drinks.",
      "Include digestive spices like ginger and cumin.",
    ],
    "Poor sleep": [
      "Drink warm milk with nutmeg before bed.",
      "Maintain a regular sleep schedule.",
    ],
    Stress: ["Practice meditation, deep breathing, or aromatherapy."],
    "Weight management": [
      "Follow a balanced diet and maintain regular activity.",
    ],
    "Skin issues": ["Use herbal oils, turmeric, and cooling foods."],
    "Frequent colds": ["Include ginger, garlic, and warm teas in diet."],
  },
  digestion: {
    "Strong and regular": [
      "Maintain your current diet, include seasonal fruits and vegetables.",
    ],
    "Slow and heavy": [
      "Eat light meals and spices like ginger, black pepper, and cinnamon.",
    ],
    "Irregular or sensitive": [
      "Favor warm, cooked foods and avoid cold/raw items.",
    ],
    "Frequently bloated or acidic": [
      "Reduce spicy and acidic foods; favor cooling foods.",
    ],
  },
  dailyRoutine: {
    Regular: ["Keep up your routine for stable energy and digestion."],
    Irregular: ["Try to stabilize waking, sleeping, and meal times."],
    "Night shifts": ["Focus on rest, light meals, and grounding practices."],
  },
  climate: {
    "Hot and dry": [
      "Stay hydrated, use cooling foods, and avoid excessive sun exposure.",
    ],
    "Hot and humid": ["Favor light, dry, and cooling foods."],
    "Cold and dry": ["Favor warm, oily, and cooked foods."],
    "Cold and damp": ["Include warming spices and stay active."],
    Moderate: ["Maintain balance with seasonal foods and moderate activity."],
  },
  activityLevel: {
    "Very active": ["Ensure proper nutrition and rest for recovery."],
    "Moderately active": ["Include light exercises and balanced diet."],
    Sedentary: ["Increase movement and choose light, energizing foods."],
  },
  mentalState: {
    "Calm and balanced": ["Maintain mindfulness practices to stay centered."],
    "Stressed or anxious": ["Practice meditation, yoga, or calming routines."],
    "Unmotivated or heavy": [
      "Include energizing activities and light exercise.",
    ],
    "Restless or scattered": [
      "Follow grounding routines and consistent daily schedules.",
    ],
  },
  dietaryRestrictions: {
    Vegetarian: ["Include plant-based proteins like lentils, beans, and tofu."],
    Vegan: ["Include nuts, seeds, legumes, and fortified plant-based milk."],
    "Gluten-free": [
      "Favor naturally gluten-free grains like rice, millet, and quinoa.",
    ],
    "Lactose intolerant": [
      "Use plant-based milk or lactose-free dairy options.",
    ],
    "No specific restrictions": ["Balance all food groups with moderation."],
  },
};

// Controller: Get Ayurvedic tips for a user by ID
export const getAyurvedicTips = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  let tips = [];

  // Map tips by bodyType
  user.bodyType.forEach((type) => {
    if (ayurvedicGuidance.bodyType[type])
      tips.push(...ayurvedicGuidance.bodyType[type]);
  });

  // Map tips by concerns
  user.concerns.forEach((concern) => {
    if (ayurvedicGuidance.concerns[concern])
      tips.push(...ayurvedicGuidance.concerns[concern]);
  });

  // Map other fields
  [
    "energyLevels",
    "digestion",
    "dailyRoutine",
    "climate",
    "activityLevel",
    "mentalState",
  ].forEach((field) => {
    if (ayurvedicGuidance[field][user[field]]) {
      tips.push(...ayurvedicGuidance[field][user[field]]);
    }
  });

  // Dietary restrictions
  user.dietaryRestrictions.forEach((restriction) => {
    if (ayurvedicGuidance.dietaryRestrictions[restriction])
      tips.push(...ayurvedicGuidance.dietaryRestrictions[restriction]);
  });

  // Remove duplicates
  tips = [...new Set(tips)];

  res.json({ user: user.name, tips });
};
