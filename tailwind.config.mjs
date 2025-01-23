/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bl: "#111",
        wh: "#bbb",
        buttonPrimary: "#53c28b",
        buttonSecondary: "#275e43"
      },
      maxWidth: {
        box: "35rem",
      },
      borderRadius: {
        round: '50%'
      },
      height: {
        box: "30rem",
      },
      fontSize: {
        heading: "6vw"
      },
      backgroundImage: {
        heading: "linear-gradient(180deg, rgba(89,157,132,1) 0%, rgba(187,187,187,1) 100%)"
      },
      animation: {
        "contact": "contact 3s ease infinite alternate",
        "move": "move 3s linear infinite alternate",
      }
    },
  },
  plugins: [],
};
