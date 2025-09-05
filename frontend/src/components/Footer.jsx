import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
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
                <p className="text-blue-100">Email: info@baymax.com</p>
                <p className="text-blue-100">Phone: +91 (800) 123-4567</p>
              </div>
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                <p className="text-blue-100">
                  Stay updated with our latest innovations and products.
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-blue-500 text-center">
              <p>
                © {new Date().getFullYear()} BayMax.io. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
