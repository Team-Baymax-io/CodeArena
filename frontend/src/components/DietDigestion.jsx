import React, { useState, useEffect } from "react";

function DietDigestion({ formData, nextStep, prevStep, handleDataUpdate }) {
  const [localData, setLocalData] = useState({
    digestion: formData.digestion || "",
    dietaryRestrictions: formData.dietaryRestrictions || [],
  });

  useEffect(() => {
    setLocalData({
      digestion: formData.digestion,
      dietaryRestrictions: formData.dietaryRestrictions,
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

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        🍲 Diet & Digestion
      </h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">
          Digestion:
        </label>
        <select
          name="digestion"
          value={localData.digestion}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Strong and regular">Strong and regular</option>
          <option value="Slow and heavy">Slow and heavy</option>
          <option value="Irregular or sensitive">Irregular or sensitive</option>
          <option value="Bloating or acidic">
            Frequently bloated or acidic
          </option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Dietary Preferences/Restrictions:
        </label>
        {[
          "Vegetarian",
          "Vegan",
          "Gluten-free",
          "Lactose intolerant",
          "No restriction",
        ].map((item) => (
          <label key={item} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value={item}
              checked={localData.dietaryRestrictions.includes(item)}
              onChange={handleChange}
              className="mr-2"
            />
            {item}
          </label>
        ))}
      </div>

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

export default DietDigestion;
