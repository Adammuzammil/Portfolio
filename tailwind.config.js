/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      centered: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        generalsans: ["clash", "sans-serif"],
        satoshi: ["satoshi", "sans-serif"],
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        twinkle: {
          "0%": { opacity: 0.3 },
          " 50%": { opacity: 1 },
          "100%": { opacity: 0.3 },
        },
        shootingStar: {
          "0%": {
            transform: "translateX(-100%) translateY(-100%)",
            opacity: "0",
          },
          "20%, 100%": {
            transform: "translateX(100vw) translateY(100vh)",
            opacity: "0.5",
          },
        },
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        "slide-down": "slide-down 0.3s ease-out",
        "slide-up": "slide-up 0.5s ease-in",
        twinkle: "twinkle infinite linear;",
        "shooting-star": "shootingStar 3s infinite linear;",
      },
      dropShadow: {
        "shooting-star": "0 0 4px rgba(255,255,255,0.5)",
      },
      colors: {
        primary: {
          DEFAULT: "#C4C5C9",
        },
        secondary: {
          DEFAULT: "#F1F0EA",
        },
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
