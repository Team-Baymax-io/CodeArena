import React from "react";

const Button = ({ Children }) => {
  return (
    <>
      <button
        type="button"
        className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.665 1.333 7.332 8.667m7.333-7.334L10 14.666l-2.667-6m7.333-7.333L1.332 6l6 2.667"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {Children}
      </button>
    </>
  );
};

export default Button;
