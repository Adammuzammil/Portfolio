import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute w-8 h-8 bg-white/25 border rounded-full opacity-50 transition-all duration-75 ease-out"
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
        }}
      ></div>
      <div
        className="absolute size-2 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x - 2}px`,
          top: `${position.y - 2}px`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
