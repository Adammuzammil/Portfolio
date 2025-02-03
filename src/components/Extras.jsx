import React from "react";

const Extras = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <motion.h3 className="text-5xl md:text-9xl font-bold mb-12">
        LET'S <span>CONNECT</span>
      </motion.h3>

      <div className="text-white relative w-full mt-24">
        <h5 className="text-3xl font-medium tracking-wider">
          I'm Always interested about
        </h5>
        <div className="relative w-full h-[500px]">
          {interests.map((item, i) => (
            <div
              key={i}
              className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
              style={{
                left: item.left,
                top: item.top,
              }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extras;
