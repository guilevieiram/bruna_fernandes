module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "#f4f4f4",
        dark: "#454545",
        primary: "#366473",
        secondary: "#724130"
      }
    },
    fontFamily: {
      display: ['Mr Dafoe', 'sans-serif'],
      body: ['Poppins', 'Sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
