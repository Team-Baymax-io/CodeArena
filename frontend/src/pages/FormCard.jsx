import { useState } from "react";
import axios from "axios";
import PersonalConstitution from "../components/Personal";
import DietDigestion from "../components/DietDigestion";
import EnvironmentLifestyle from "../components/Environment";
import HabitsMovement from "../components/Habits";

function FormCard({ profile, onUpdate }) {
  const [formData, setFormData] = useState({
    bodyType: profile?.bodyType || [],
    energyLevels: profile?.energyLevels || "",
    concerns: profile?.concerns || [],
    location: profile?.location || "",
    dailyRoutine: profile?.dailyRoutine || "",
    climate: profile?.climate || "",
    digestion: profile?.digestion || "",
    dietaryRestrictions: profile?.dietaryRestrictions || [],
    activityLevel: profile?.activityLevel || "",
    mentalState: profile?.mentalState || "",
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataUpdate = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/tips/${profile._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        }
      );
      alert("Profile updated successfully!");
      if (onUpdate) onUpdate(); // Refresh Dashboard profile
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  // Define all step components in an array for cleaner navigation
  const steps = [
    <PersonalConstitution
      formData={formData}
      nextStep={nextStep}
      handleDataUpdate={handleDataUpdate}
    />,
    <EnvironmentLifestyle
      formData={formData}
      nextStep={nextStep}
      prevStep={prevStep}
      handleDataUpdate={handleDataUpdate}
    />,
    <DietDigestion
      formData={formData}
      nextStep={nextStep}
      prevStep={prevStep}
      handleDataUpdate={handleDataUpdate}
    />,
    <HabitsMovement
      formData={formData}
      prevStep={prevStep}
      handleDataUpdate={handleDataUpdate}
      nextStep={handleSubmit} // Final step submits the form
      loading={loading} // Pass loading state to disable submit button
    />,
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-xl shadow-lg bg-white">
      {steps[step - 1] || <div>Thank you for completing the survey!</div>}
    </div>
  );
}

export default FormCard;
