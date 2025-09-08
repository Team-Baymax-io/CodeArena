import React, { useState, useEffect } from "react";

function EnvironmentLifestyle({
  formData,
  nextStep,
  prevStep,
  handleDataUpdate,
}) {
  const [localData, setLocalData] = useState({
    location: formData.location || "",
    dailyRoutine: formData.dailyRoutine || "",
    climate: formData.climate || "",
  });

  useEffect(() => {
    setLocalData({
      location: formData.location,
      dailyRoutine: formData.dailyRoutine,
      climate: formData.climate,
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
        🌎 Environmental & Lifestyle Context
      </h2>

      {/* Location */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Location (City & Country):
        </label>
        <input
          type="text"
          name="location"
          value={localData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Daily Routine */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Daily Routine:
        </label>
        <select
          name="dailyRoutine"
          value={localData.dailyRoutine}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Regular">Regular wake and sleep times</option>
          <option value="Irregular">Irregular schedule</option>
          <option value="Shift Work">Night shifts or alternating shifts</option>
        </select>
      </div>

      {/* Climate */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">Climate:</label>
        <select
          name="climate"
          value={localData.climate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Hot and dry">Hot and dry</option>
          <option value="Hot and humid">Hot and humid</option>
          <option value="Cold and dry">Cold and dry</option>
          <option value="Cold and damp">Cold and damp</option>
          <option value="Moderate">Moderate or changing frequently</option>
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

export default EnvironmentLifestyle;
