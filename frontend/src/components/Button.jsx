import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <>
      <div
        className={`button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100${className}`}
        {...props}
      >
        <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-blue-600">
          {children}
        </button>
      </div>
    </>
  );
}
