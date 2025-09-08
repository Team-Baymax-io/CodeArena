import React, { useState, useEffect } from "react";

function HabitsMovement({ formData, nextStep, prevStep, handleDataUpdate }) {
  const [localData, setLocalData] = useState({
    activityLevel: formData.activityLevel || "",
    mentalState: formData.mentalState || "",
  });

  useEffect(() => {
    setLocalData({
      activityLevel: formData.activityLevel,
      mentalState: formData.mentalState,
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  const handleNext = () => {
    handleDataUpdate(localData);
    nextStep();
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        🧘 Habits & Movement
      </h2>

      {/* Activity Level */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Activity Level:
        </label>
        <select
          name="activityLevel"
          value={localData.activityLevel}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Very active">
            Very active (daily exercise or physical labor)
          </option>
          <option value="Moderately active">
            Moderately active (walks, occasional exercise)
          </option>
          <option value="Sedentary">
            Sedentary (desk job, little movement)
          </option>
        </select>
      </div>

      {/* Mental/Emotional State */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Mental/Emotional State:
        </label>
        <select
          name="mentalState"
          value={localData.mentalState}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Calm and balanced">Calm and balanced</option>
          <option value="Stressed or anxious">Stressed or anxious</option>
          <option value="Unmotivated or heavy">Unmotivated or heavy</option>
          <option value="Restless or scattered">Restless or scattered</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HabitsMovement;
