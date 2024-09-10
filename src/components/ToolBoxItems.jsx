import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({ toolBoxItems, className, wrapperClassName }) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          wrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, i) => (
          <>
            {toolBoxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold font-satoshi text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
