import { twMerge } from "tailwind-merge";

const Card = ({ className, children, hasBlur = true }) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-3xl relative overflow-hidden group after:pointer-events-none after:content-[''] after:absolute after:inset-0 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2 after:outline-white/20",
        className
      )}
      style={{ zIndex: 10 }} // Ensuring cursor is always above
    >
      {/* Blurred Dynamic Color on Hover */}
      {hasBlur && (
        <div className="absolute -z-30 top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />
      )}

      {children}
    </div>
  );
};

export default Card;
