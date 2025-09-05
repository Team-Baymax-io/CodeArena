import React from "react";
import FeatureCard from "./Featurecard";

export default function Feature() {
  return (
    <div>
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Our Innovative Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📱"
              title="Smart Monitoring"
              description="Real-time health monitoring with advanced sensors and AI-powered analytics for proactive care."
            />
            <FeatureCard
              icon="💉"
              title="Precision Delivery"
              description="Advanced drug delivery systems that ensure accurate dosing and optimal treatment outcomes."
            />
            <FeatureCard
              icon="📊"
              title="Data Analytics"
              description="Comprehensive health data analysis to identify trends and provide personalized treatment plans."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
