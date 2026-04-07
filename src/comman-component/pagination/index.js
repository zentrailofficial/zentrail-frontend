"use client";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center gap-2 mt-6 justify-center">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full cursor-pointer dm_sans size-7 sm:size-8 font-normal flex justify-center items-center border opacity-50 disabled:opacity-20"
      >
        <IoIosArrowBack/>
      </button>

      {/* Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={` rounded-full cursor-pointer dm_sans size-7 sm:size-8 font-normal flex justify-center items-center ${
            currentPage === page
              ? "bg-green-700 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full cursor-pointer dm_sans size-7 sm:size-8 font-normal flex justify-center items-center border opacity-50 disabled:opacity-20"
      >
        <IoIosArrowForward/>
      </button>
    </div>
  );
};

export default Pagination;
