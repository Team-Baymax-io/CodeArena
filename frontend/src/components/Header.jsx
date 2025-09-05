import React from 'react'

const header = () => {
  return (
    <div>export default header {/* Header Section */}
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
      </header></div>
  )
}

