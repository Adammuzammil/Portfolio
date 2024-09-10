import React from "react";

const ClickView = ({ texts }) => {
  return (
    <div className="flex items-center justify-center space-x-6 px-4 md:px-0">
      <div className="h-[1px] bg-white/10 flex-1 max-w-[400px]" />
      <div className="">
        <h2 className="text-nowrap md:text-xl font-normal font-satoshi whitespace-normal text-white/60">
          {texts.map((text, i) => (
            <span key={i} className="inline-block mx-1">
              {text}
            </span>
          ))}
        </h2>
      </div>
      <div className="h-[1px] bg-white/10 flex-1 max-w-[400px]" />
    </div>
  );
};

export default ClickView;
