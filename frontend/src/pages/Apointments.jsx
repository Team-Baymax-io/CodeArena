import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

export default function Apointments() {
  // Dummy appointments data
  const upcomingAppointments = [
    {
      id: 1,
      date: "2025-09-12",
      time: "10:00 AM",
      doctor: "Dr. Smith",
      type: "Teleconsultation",
    },
    {
      id: 2,
      date: "2025-09-20",
      time: "2:00 PM",
      doctor: "Dr. Johnson",
      type: "In-person",
    },
  ];

  const pastAppointments = [
    {
      id: 3,
      date: "2025-08-15",
      time: "11:00 AM",
      doctor: "Dr. Lee",
      type: "Teleconsultation",
    },
    {
      id: 4,
      date: "2025-08-30",
      time: "3:00 PM",
      doctor: "Dr. Patel",
      type: "In-person",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          My Appointments
        </h1>

        {/* Upcoming Appointments */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" /> Upcoming Appointments
          </h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {appt.date} at {appt.time}
                  </p>
                  <p className="text-gray-600">{appt.doctor}</p>
                  <p className="text-gray-600">{appt.type}</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
                  Join
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Appointments */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5" /> Past Appointments
          </h2>
          <div className="space-y-4">
            {pastAppointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {appt.date} at {appt.time}
                  </p>
                  <p className="text-gray-600">{appt.doctor}</p>
                  <p className="text-gray-600">{appt.type}</p>
                </div>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-not-allowed">
                  Completed
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Link to="/Dashboard">
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
              Back
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
