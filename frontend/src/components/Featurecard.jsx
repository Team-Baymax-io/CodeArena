import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center text-5xl">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
