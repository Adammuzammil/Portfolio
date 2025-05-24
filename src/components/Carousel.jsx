import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Carousel = ({ index, setIndex, totalItems }) => {
  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex items-center justify-center  w-fit">
      <div className="flex items-center  gap-2">
        {/* Previous Button */}
        <button
          className="w-12 h-8 border bg-gray-800 text-white inline-flex items-center justify-center border-gray-100"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>

        {/* Current Index */}
        <div className="w-12 h-8 border bg-gray-800 border-white flex items-center justify-center text-white text-lg font-medium font-satoshi">
          {(index + 1).toString().padStart(2, "0")}
        </div>

        {/* Next Button */}
        <button
          className="w-12 h-8 border bg-gray-800 text-white inline-flex items-center justify-center border-gray-100"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
