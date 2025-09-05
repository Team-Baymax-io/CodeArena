import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          HealthFuture Dashboard
        </h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/profile" className="hover:text-blue-600">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-blue-600">
                Settings
              </Link>
            </li>
            <li>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 p-6">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Patients</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Appointments
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-2">45</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Doctors</h2>
            <p className="text-3xl font-bold text-purple-600 mt-2">18</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">32</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Appointments
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="p-3">#</th>
                <th className="p-3">Patient</th>
                <th className="p-3">Doctor</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row} className="border-b hover:bg-gray-50">
                  <td className="p-3">{row}</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Dr. Smith</td>
                  <td className="p-3">2025-09-05</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
