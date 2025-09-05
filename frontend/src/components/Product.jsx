import React from "react";

export const Product = () => {
  return (
    <div>
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
    </div>
  );
};
