/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  // other configurations
  corePlugins: {
    // deshabilitar algunos plugins de Tailwind si no son necesarios
    preflight: false, // desactiva los estilos base de Tailwind
  },
  theme: {
    extend: {
      colors: {
        appPrimary: {
          50: "#E8EAEE",
          100: "#D0D6DC",
          200: "#A4AFBC",
          300: "#758699",
          400: "#52606F",
          500: "#303841",
          600: "#272D35",
          700: "#1C2126",
          800: "#14171A",
          900: "#090A0C",
          950: "#040506",
          1000: "#303841",
          1100: "#68798d",
          1200: "#416c89",
          1300: "#1d303d",
        },
      },
    },
  },
  plugins: [],
};
