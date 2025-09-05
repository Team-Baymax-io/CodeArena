export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            About <span className="text-green-600">HealthFuture</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At HealthFuture, we are committed to building innovative healthcare
            solutions that transform the way patients, doctors, and hospitals
            interact with technology. Our mission is to make healthcare smarter,
            more accessible, and future-ready.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To bridge the gap between medical expertise and modern technology,
              ensuring that every patient receives timely, accurate, and
              personalized healthcare services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become a global leader in healthcare innovation by creating
              platforms that empower patients and healthcare providers to
              connect seamlessly and efficiently.
            </p>
          </div>
        </section>

        {/* Values / Why Us */}
        <section>
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We leverage AI, data, and modern web technologies to deliver
                future-ready healthcare platforms.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600">
                We believe healthcare should be available to everyone, anytime,
                anywhere.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Trust
              </h3>
              <p className="text-gray-600">
                Security, transparency, and user privacy are at the core of
                everything we build.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
