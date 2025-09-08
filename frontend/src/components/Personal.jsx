import React, { useState, useEffect } from "react";

function PersonalConstitution({ formData, nextStep, handleDataUpdate }) {
  const [localData, setLocalData] = useState({
    bodyType: formData.bodyType || [],
    energyLevels: formData.energyLevels || "",
    concerns: formData.concerns || [],
  });

  useEffect(() => {
    setLocalData({
      bodyType: formData.bodyType,
      energyLevels: formData.energyLevels,
      concerns: formData.concerns,
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setLocalData({
        ...localData,
        [name]: checked
          ? [...localData[name], value]
          : localData[name].filter((item) => item !== value),
      });
    } else {
      setLocalData({ ...localData, [name]: value });
    }
  };

  const handleNext = () => {
    handleDataUpdate(localData);
    nextStep();
  };

  const bodyTypes = [
    {
      value: "Vata",
      label: "Thin body type, quick-moving, often feels cold (Vata)",
    },
    {
      value: "Pitta",
      label: "Medium build, strong digestion, gets irritated easily (Pitta)",
    },
    {
      value: "Kapha",
      label: "Solid build, calm nature, slow metabolism (Kapha)",
    },
  ];

  const energyOptions = [
    "High and steady",
    "Energetic in bursts",
    "Low and sluggish",
    "Unpredictable",
  ];

  const concernsOptions = [
    "Digestive issues",
    "Poor sleep",
    "Stress",
    "Weight management",
    "Skin issues",
    "Frequent colds",
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        🧬 Personal Constitution & Health
      </h2>

      {/* Body Type */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Body Type (Select all that apply):
        </label>
        {bodyTypes.map((item) => (
          <label key={item.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="bodyType"
              value={item.value}
              checked={localData.bodyType.includes(item.value)}
              onChange={handleChange}
              className="mr-2"
            />
            {item.label}
          </label>
        ))}
      </div>

      {/* Energy Levels */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Energy Levels:
        </label>
        <select
          name="energyLevels"
          value={localData.energyLevels}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          {energyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Concerns */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Physical/Emotional Concerns:
        </label>
        {concernsOptions.map((concern) => (
          <label key={concern} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="concerns"
              value={concern}
              checked={localData.concerns.includes(concern)}
              onChange={handleChange}
              className="mr-2"
            />
            {concern}
          </label>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
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

export default PersonalConstitution;
