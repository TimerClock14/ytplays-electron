/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./lib/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      surface: "rgb(0, 0, 0)",
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(153, 153, 153)",
      highlight: "rgb(48, 48, 48)",
      overlay: "rgba(255, 255, 255, 0.4)",
      disabled: "rgba(255, 255, 255, 0.15)",
      link: "rgb(105, 105, 105)",
      transparent: "transparent",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
      extrabold: "900",
    },
    spacing: {
      hairline: "0.5px",
      0: "0",
      px: "1px",
      line: "1.6px",
      0.5: "4px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
    },
    fontSize: {
      xs: ["10px", "12px"],
      sm: ["13px", "18px"],
      md: ["14px", "20px"],
      lg: ["17px", "24px"],
      xl: ["22px", "28px"],
    },
    borderRadius: {
      lg: "6px",
      md: "4px",
      sm: "3px",
      xs: "2px",
      full: "999999px",
      0: "0",
    },
    extend: {},
  },
  plugins: [],
};
