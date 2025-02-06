import React from "react";

const SectionHeader = ({ title, eyebrow, desc }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-3xl uppercase font-bold tracking-wider text-primary">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-satoshi text-white text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="font-satoshi text-center md:text-lg lg:text-xl text-white/60 mt-4">
        {desc}
      </p>
    </>
  );
};

export default SectionHeader;
