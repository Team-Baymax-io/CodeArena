import React from "react";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>NEW FUTURE of Healthcare is coming now.</h1>
          <p>
            Discover innovative medical technologies that are transforming
            patient care and improving outcomes worldwide.
          </p>
          <a href="#" className="cta-button">
            Show me the Future
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Innovative Solutions</h2>
          <div className="features-grid">
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
    </>
  );
}

export default Hero;
