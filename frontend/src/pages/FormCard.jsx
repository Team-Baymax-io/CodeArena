import React, { useState } from "react";
import "./Form.css";
import PersonalConstitution from "../components/Personal";
import EnvironmentLifestyle from "../components/Environment";
import DietDigestion from "../components/DietDigestion";
import HabitsMovement from "../components/Habits";

function FormCard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bodyType: [],
    energyLevels: "",
    concerns: [],
    location: "",
    dailyRoutine: "",
    climate: "",
    digestion: "",
    dietaryRestrictions: [],
    activityLevel: "",
    mentalState: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataUpdate = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  switch (step) {
    case 1:
      return (
        <PersonalConstitution
          formData={formData}
          nextStep={nextStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 2:
      return (
        <EnvironmentLifestyle
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 3:
      return (
        <DietDigestion
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 4:
      return (
        <HabitsMovement
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    default:
      return <div>Thank you for completing the survey!</div>;
  }
}

export default FormCard;
