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
    <div>
      <h2>🌎 Environmental & Lifestyle Context</h2>

      <label>Location (City & Country):</label>
      <br />
      <input
        type="text"
        name="location"
        value={localData.location}
        onChange={handleChange}
      />
      <br />

      <label>Daily Routine:</label>
      <br />
      <select
        name="dailyRoutine"
        value={localData.dailyRoutine}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Regular">Regular wake and sleep times</option>
        <option value="Irregular">Irregular schedule</option>
        <option value="Shift Work">Night shifts or alternating shifts</option>
      </select>
      <br />

      <label>Climate:</label>
      <br />
      <select name="climate" value={localData.climate} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Hot and dry">Hot and dry</option>
        <option value="Hot and humid">Hot and humid</option>
        <option value="Cold and dry">Cold and dry</option>
        <option value="Cold and damp">Cold and damp</option>
        <option value="Moderate">Moderate or changing frequently</option>
      </select>
      <br />

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default EnvironmentLifestyle;
