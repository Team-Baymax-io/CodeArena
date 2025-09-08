// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Top Navbar */}
//       <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
//         <nav>
//           <ul className="flex space-x-6 text-gray-700 font-medium">
//             <li>
//               <Link to="/profile" className="hover:text-blue-600">
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <Link to="/settings" className="hover:text-blue-600">
//                 Settings
//               </Link>
//             </li>
//             <li>
//               <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Dashboard Content */}
//       <main className="flex-1 p-6">
//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Patients</h2>
//             <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
//           </div>
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <h2 className="text-lg font-semibold text-gray-700">
//               Appointments
//             </h2>
//             <p className="text-3xl font-bold text-green-600 mt-2">45</p>
//           </div>
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Doctors</h2>
//             <p className="text-3xl font-bold text-purple-600 mt-2">18</p>
//           </div>
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
//             <p className="text-3xl font-bold text-red-600 mt-2">32</p>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Recent Appointments
//           </h2>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-50 text-left text-gray-600">
//                 <th className="p-3">#</th>
//                 <th className="p-3">Patient</th>
//                 <th className="p-3">Doctor</th>
//                 <th className="p-3">Date</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2, 3].map((row) => (
//                 <tr key={row} className="border-b hover:bg-gray-50">
//                   <td className="p-3">{row}</td>
//                   <td className="p-3">John Doe</td>
//                   <td className="p-3">Dr. Smith</td>
//                   <td className="p-3">2025-09-05</td>
//                   <td className="p-3">
//                     <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
//                       Completed
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import { Calendar, HeartPulse, User, Stethoscope } from "lucide-react";

export default function Dashboard() {
  const [user] = useState({
    name: "Yash Chaudhari",
    age: 19,
    goals: "Stay fit & manage stress",
    habits: "Exercises 4x/week, non-smoker",
    environment: "Works in IT, moderate stress",
    nextAppointment: "2025-09-15 10:30 AM with Dr. Dinesh (Cardiology)",
  });

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
            <span className="font-medium">Goals:</span> {user.goals}
          </p>
          <p>
            <span className="font-medium">Habits:</span> {user.habits}
          </p>
          <p>
            <span className="font-medium">Environment:</span> {user.environment}
          </p>
        </div>

        {/* Checkup Interaction */}
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

        {/* Appointments */}
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
