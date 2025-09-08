import { useState, useEffect } from "react";
import { Calendar, HeartPulse, User, Stethoscope } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import FormCard from "./FormCard";

export default function Dashboard() {
  const { state } = useAuth();
  const [profile, setProfile] = useState(null);
  const [tips, setTips] = useState([]);
  const [logs, setLogs] = useState([]);

  // Fetch profile from backend
  const fetchProfile = async () => {
    if (!state.user?._id) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tips/${state.user._id}`,
        { headers: { Authorization: `Bearer ${state.token}` } }
      );
      setProfile(res.data);
      setTips(res.data.tips || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching profile");
    }
  };

  // Fetch tracking logs
  const fetchLogs = async () => {
    if (!state.user?._id) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tracking/my-logs`,
        { headers: { Authorization: `Bearer ${state.token}` } }
      );
      setLogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (state.user?._id) {
      fetchProfile();
      fetchLogs();
    }
  }, [state.user]);

  // Refresh after form submission
  const handleProfileUpdate = () => {
    fetchProfile();
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-8">HealthCare+</h2>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
            <User className="mr-2 h-5 w-5" /> Profile
          </button>
          <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
            <Stethoscope className="mr-2 h-5 w-5" /> Checkup
          </button>
          <button className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-700 transition">
            <Calendar className="mr-2 h-5 w-5" /> Appointments
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-800">
            Welcome, {state.user?.name}
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
            <span className="font-medium">Age:</span> {profile.age || "N/A"}
          </p>
          <p>
            <span className="font-medium">Dosha Type:</span>{" "}
            {profile.doshaType || "N/A"}
          </p>
          <p>
            <span className="font-medium">Goals:</span>{" "}
            {profile.goals?.join(", ") || "N/A"}
          </p>
          <p>
            <span className="font-medium">Habits:</span> Sleep:{" "}
            {profile.habits?.sleep || "N/A"}, Diet:{" "}
            {profile.habits?.diet || "N/A"}, Activity:{" "}
            {profile.habits?.activity || "N/A"}
          </p>
          <p>
            <span className="font-medium">Environment:</span>{" "}
            {profile.environment || "Not specified"}
          </p>
        </div>

        {/* FormCard to edit profile */}
        <div className="mb-6">
          <FormCard profile={profile} onUpdate={handleProfileUpdate} />
        </div>

        {/* Ayurvedic Tips */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Ayurvedic Tips
          </h2>
          <ul className="list-disc ml-6 text-gray-700">
            {tips.length > 0 ? (
              tips.map((tip, idx) => <li key={idx}>{tip}</li>)
            ) : (
              <li>No tips available</li>
            )}
          </ul>
        </div>

        {/* Daily Tracking Logs */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Daily Logs
          </h2>
          {logs.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  <th className="p-2">Date</th>
                  <th className="p-2">Sleep</th>
                  <th className="p-2">Meals</th>
                  <th className="p-2">Stress</th>
                  <th className="p-2">Exercise</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log._id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      {new Date(log.date).toLocaleDateString()}
                    </td>
                    <td className="p-2">{log.sleepHours}</td>
                    <td className="p-2">{log.meals}</td>
                    <td className="p-2">{log.stressLevel}</td>
                    <td className="p-2">{log.exercise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-700">No daily logs yet.</p>
          )}
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
            Begin Quick Assessment
          </button>
        </div>

        {/* Upcoming Appointment */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-blue-700">
              Upcoming Appointment
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            {profile.nextAppointment || "No upcoming appointments"}
          </p>
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
