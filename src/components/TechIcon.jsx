import React from "react";

const TechIcon = ({ component: Component }) => {
  return (
    <div className="relative">
      <Component className="w-10 h-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="hidden">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110,231,183)" />
            <stop offset="100%" stopColor="rgb(56,189,248)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechIcon;
