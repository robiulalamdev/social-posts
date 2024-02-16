const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`),
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      // gridTemplateColumns: {
      //   "1/5": "1fr 5fr",
      // },
      colors: {
        primary: "#6E51E0",
        lightPrimary: "#F5F3FF",
        secondary: "#64748B",
        "primary-dark": "#7f65e6",
        lightGray: "#DBDBDB",
        drakWhite: "#F8FAFC",
        primaryGreen: "#10B981",
        orange: "#F97316",
        dark: "#0F172A",
        darkTwo: "#525252",
        btnGroup: "#1E293B",
      },

      container: {
        center: true,
      },
      maxWidth: {
        twelveEighty: "1280px",
        authWidth: "540px",
      },
      padding: {
        p_105: "105px",
        p_113: "113px",
        p_125: "125px",
        p_148: "148px",
        p_153: "153px",
        p_168: "168px",
        p_173: "173px",
        p_188: "188px",
        p_276: "276px",
        p_236: "236px",
        p_228: "228px",
        p_254: "254px",
        p_268: "268px",
      },

      fontSize: {},

      lineHeight: {},
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};
