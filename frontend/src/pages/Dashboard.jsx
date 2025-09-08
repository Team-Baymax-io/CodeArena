import React from "react";
import { Link } from "react-router-dom";
import { Calendar, HeartPulse, User, Stethoscope } from "lucide-react";

export default function Dashboard() {
  // Dummy user data
  const user = {
    name: "Demo data",
    age: 28,
    doshaType: "Vata",
    goals: ["Weight management", "Better sleep"],
    habits: { sleep: "7h", diet: "Balanced", activity: "Moderate" },
    environment: "Urban",
    nextAppointment: "2025-09-12, 10:00 AM",
  };

  const tips = [
    "Favor warm, nourishing foods like soups, stews, and cooked grains.",
    "Keep a regular routine to stabilize energy levels.",
    "Practice grounding exercises like yoga and meditation.",
    "Include cooling foods like cucumber, coconut, and leafy greens.",
    "Avoid spicy, oily, and fried foods.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-8">HealthCare+</h2>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
            <User className="mr-2 h-5 w-5" /> Profile
          </button>
          <Link to="/Checkups">
            <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
              <Stethoscope className="mr-2 h-5 w-5" /> Checkup
            </button>
          </Link>
          <Link to="/Apo">
            <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
              <Calendar className="mr-2 h-5 w-5" /> Apointments
            </button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-800">
            Welcome, {user.name}
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
            Start Checkup
          </button>
        </div>

        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            User Profile
          </h2>
          <p>
            <span className="font-medium">Age:</span> {user.age}
          </p>
          <p>
            <span className="font-medium">Dosha Type:</span> {user.doshaType}
          </p>
          <p>
            <span className="font-medium">Goals:</span> {user.goals.join(", ")}
          </p>
          <p>
            <span className="font-medium">Habits:</span> Sleep:{" "}
            {user.habits.sleep}, Diet: {user.habits.diet}, Activity:{" "}
            {user.habits.activity}
          </p>
          <p>
            <span className="font-medium">Environment:</span> {user.environment}
          </p>
        </div>

        {/* Ayurvedic Tips */}
        <div className="bg-yellow-50 rounded-xl shadow-md border border-yellow-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            Personalized Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Health Checkup */}
        <div className="bg-green-50 rounded-xl shadow-md border border-green-200 p-6 mb-6">
          <div className="flex items-center mb-4">
            <HeartPulse className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-green-700">
              Health Checkup
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Your next health checkup is due soon. Stay on track with your
            wellness goals!
          </p>
          <Link to="/Form">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              Begin Quick Assessment
            </button>
          </Link>
        </div>

        {/* Upcoming Appointment */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-blue-700">
              Upcoming Appointment
            </h2>
          </div>
          <p className="text-gray-700 mb-4">{user.nextAppointment}</p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
              Reschedule
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              Join Tele-Consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
