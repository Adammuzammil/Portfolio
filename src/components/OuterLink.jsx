import { Link } from "react-router";

const OuterLink = ({
  name,
  url,
  ariaLabel,
  external = false,
  className,
  isPresent = false,
  isDark = false,
}) => {
  const isExternal = external || url.startsWith("http");

  const cleanName = name.includes("https://")
    ? name.replace("https://", "")
    : name;
  const href = isExternal ? url : `/${url.replace(/^\//, "")}`;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative flex items-center ${
        isDark ? "text-white" : "text-black"
      }  transition duration-200 group ${className}`}
      aria-label="live site"
    >
      {cleanName}
      {external && <img src="/arrow.svg" alt="Arrow Icon" className="size-4" />}

      {/* Persistent light gray underline */}
      {isPresent && (
        <span
          className={`absolute left-0 bottom-[-3px] w-full h-[1px] ${
            isDark ? "bg-gray-500" : "bg-gray-300"
          }`}
        ></span>
      )}

      {/* Dark underline that expands on hover */}
      <span
        className={`absolute left-0 bottom-[-3px] w-0 h-[1px] ${
          isDark ? "bg-white" : "bg-black"
        } transition-all duration-700 ease-in-out group-hover:w-full`}
      ></span>
    </a>
  );
};

export default OuterLink;
