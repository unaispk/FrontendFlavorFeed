module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.jpg')",
        Logo: "url('assets/Logo.png')",
        Home: "url('assets/HomeWall.jpg')",
        Homewall: "url('assets/Home.jpg')",
        Homebg: "url('assets/Homebg1.jpg')",
        Cook: "url('assets/cooking.jpg')"
      },
    },
  },
  plugins: [require("daisyui"),require('flowbite/plugin'),],
};


