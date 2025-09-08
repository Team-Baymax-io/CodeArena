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

  return (
    <div>
      <h2>🧬 Personal Constitution & Health</h2>

      <label>Body Type (Select all that apply):</label>
      <br />
      <label>
        <input
          type="checkbox"
          name="bodyType"
          value="Vata"
          checked={localData.bodyType.includes("Vata")}
          onChange={handleChange}
        />{" "}
        Thin body type, quick-moving, often feels cold (Vata)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="bodyType"
          value="Pitta"
          checked={localData.bodyType.includes("Pitta")}
          onChange={handleChange}
        />{" "}
        Medium build, strong digestion, gets irritated easily (Pitta)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="bodyType"
          value="Kapha"
          checked={localData.bodyType.includes("Kapha")}
          onChange={handleChange}
        />{" "}
        Solid build, calm nature, slow metabolism (Kapha)
      </label>
      <br />

      <label>Energy Levels:</label>
      <br />
      <select
        name="energyLevels"
        value={localData.energyLevels}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="High and steady">High and steady</option>
        <option value="Energetic in bursts">
          Energetic in bursts, then fatigued
        </option>
        <option value="Low and sluggish">Low and sluggish</option>
        <option value="Unpredictable">It fluctuates unpredictably</option>
      </select>
      <br />

      <label>Physical/Emotional Concerns (Select up to 3):</label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Digestive issues"
          checked={localData.concerns.includes("Digestive issues")}
          onChange={handleChange}
        />{" "}
        Digestive issues
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Poor sleep"
          checked={localData.concerns.includes("Poor sleep")}
          onChange={handleChange}
        />{" "}
        Poor sleep or insomnia
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Stress"
          checked={localData.concerns.includes("Stress")}
          onChange={handleChange}
        />{" "}
        Stress, anxiety, irritability
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Weight management"
          checked={localData.concerns.includes("Weight management")}
          onChange={handleChange}
        />{" "}
        Weight management
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Skin issues"
          checked={localData.concerns.includes("Skin issues")}
          onChange={handleChange}
        />{" "}
        Skin issues
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="concerns"
          value="Frequent colds"
          checked={localData.concerns.includes("Frequent colds")}
          onChange={handleChange}
        />{" "}
        Frequent colds or congestion
      </label>
      <br />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalConstitution;
