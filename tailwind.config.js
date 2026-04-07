// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       fontSize: {
//         'responsive': 'clamp(0.875rem, 2vw, 1.25rem)', 
//       },
//        screens: {
//         xsm: '450px',// 👈 custom breakpoint
//       },
//     },
//   },
// };


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'responsive': 'clamp(0.875rem, 2vw, 1.25rem)', 
      },
    },
    // screens: {
    //   xsm: '450px', 
    // },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./comman-component/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
