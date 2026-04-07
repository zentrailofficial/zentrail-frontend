"use client";

import React from "react";

const LinkButton = ({ text = "View More", className = "" }) => {
    return (
        <div
            className={`inline-flex items-center justify-center px-2 sm:px-8 py-3 rounded-xl bg-[#35c0f0] text-white
        font-medium font-manrope text-[16px] sm:text-[15px] md:text-[19px] transition-all duration-200
        hover:bg-sky-500 whitespace-nowrap
        ${className}
      `}
        >
            {text}
        </div>
    );
};

export default LinkButton;
