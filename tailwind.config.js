module.exports = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // Custom blue
        dark: "#000000", // Dark bg
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      }
    },
  },
}