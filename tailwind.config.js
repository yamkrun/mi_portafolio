module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      screens: {
        yami: '325px', // ahora podés usar "yami:" en tus clases
      },
    },
  },
  content: ["./*.html"], // o la ruta de tus archivos
  plugins: [],
}