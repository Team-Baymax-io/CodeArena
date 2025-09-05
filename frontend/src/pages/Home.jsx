// HealthFuture.jsx

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-green-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-50 to-green-50 py-5 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 md:mb-0">
            Health<span className="text-green-600">Future</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-3 md:space-x-6">
              {["Home", "Products", "Technology", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-blue-700 font-semibold hover:text-green-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24 rounded-b-3xl mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
            NEW FUTURE of Healthcare is coming now.
          </h1>
          <p className="text-lg md:text-xl text-blue-600 max-w-2xl mx-auto mb-10">
            Discover innovative medical technologies that are transforming
            patient care and improving outcomes worldwide.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            Show me the Future
          </a>
        </div>
      </section>

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

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Our Products
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Texts Units",
              "Electrodes",
              "Cathletes",
              "Dialectic Meters",
              "Syriniges",
            ].map((product) => (
              <ProductItem key={product} title={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-blue-100">
                We are dedicated to creating innovative healthcare solutions
                that improve patient outcomes and transform medical practices.
              </p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-blue-100">Email: info@healthfuture.com</p>
              <p className="text-blue-100">Phone: +1 (800) 123-4567</p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
              <p className="text-blue-100">
                Stay updated with our latest innovations and products.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-500 text-center">
            <p>&copy; 2023 HealthFuture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
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

// Product Item Component
const ProductItem = ({ title }) => {
  return (
    <div className="bg-white py-5 px-7 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[200px] text-center">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
    </div>
  );
};

export default Home;
