import React from "react";
import StarIcon from "./StarIcon";
import { twMerge } from "tailwind-merge";

const CardHeader = ({ title, desc, className }) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-satoshi text-3xl text-black font-bold">{title}</h3>
      </div>
      <p className="text-sm lg:text-base font-satoshi max-w-xs text-black/65 mt-2">
        {desc}
      </p>
    </div>
  );
};

export default CardHeader;
