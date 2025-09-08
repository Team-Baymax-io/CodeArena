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
    <div>
      <h2>🧘 Habits & Movement</h2>

      <label>Activity Level:</label>
      <br />
      <select
        name="activityLevel"
        value={localData.activityLevel}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Very active">
          Very active (daily exercise or physical labor)
        </option>
        <option value="Moderately active">
          Moderately active (walks, occasional exercise)
        </option>
        <option value="Sedentary">Sedentary (desk job, little movement)</option>
      </select>
      <br />

      <label>Mental/Emotional State:</label>
      <br />
      <select
        name="mentalState"
        value={localData.mentalState}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Calm and balanced">Calm and balanced</option>
        <option value="Stressed or anxious">Stressed or anxious</option>
        <option value="Unmotivated or heavy">Unmotivated or heavy</option>
        <option value="Restless or scattered">Restless or scattered</option>
      </select>
      <br />

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default HabitsMovement;
