import React from "react";
import FeatureCard from "./FeatureCard";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-50 to-green-50 h-screen flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
            NEW FUTURE of Healthcare is coming now.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Discover innovative medical technologies that are transforming
            patient care and improving outcomes worldwide.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Show me the Future
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
