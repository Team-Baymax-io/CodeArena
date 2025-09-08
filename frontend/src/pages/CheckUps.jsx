import { Activity } from "lucide-react";
import { Button } from "../components";
import { Link } from "react-router-dom";

export default function CheckupData() {
  const checkup = {
    bloodPressure: "118/76 mmHg",
    heartRate: "72 bpm",
    bloodSugar: "92 mg/dL",
    bmi: "22.3 (Normal)",
    oxygen: "98%",
    lastCheckup: "2025-09-25",
  };

  return (
    <>
      <div className="mb-6 p-6 bg-blue-50 rounded-xl shadow-md border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
          <Activity className="h-6 w-6 text-blue-600 mr-2" /> Recent Health
          Checkup
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">Blood Pressure</p>
            <p className="text-lg font-bold text-blue-700">
              {checkup.bloodPressure}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">Heart Rate</p>
            <p className="text-lg font-bold text-red-600">
              {checkup.heartRate}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">Blood Sugar</p>
            <p className="text-lg font-bold text-green-600">
              {checkup.bloodSugar}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">BMI</p>
            <p className="text-lg font-bold text-indigo-600">{checkup.bmi}</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">Oxygen Level</p>
            <p className="text-lg font-bold text-teal-600">{checkup.oxygen}</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p className="text-sm text-gray-500">Last Checkup</p>
            <p className="text-lg font-bold text-gray-700">
              {checkup.lastCheckup}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-4">
          <Link to="/Dashboard">
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                Back
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
