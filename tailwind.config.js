/** @type {import('tailwindcss').Config} */

const customColors = {
  'card-hover': '#2e3f5b',
  'page-bg': '#0f172a',
};


module.exports = {
  prefix:'pf-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: {
        "4-px":  "4px",
        "8-px":  "8px",
        "16-px": "16px",
        "24-px": "24px",
        "48-px": "48px",
        "90-px": "90px" ,
        "96-px": "96px",  
        "114-px":"114px",
      },
      margin: {
        "8-px":"8px",
        "16-px":"16px",
        "24-px":"24px",
        "48-px":"48px",
        "64-px":"64px",
        "90-px":"90px",
      },
      borderRadius:{
        "8-px":"8px",
      },
      colors: {
        ...customColors,
      },
      boxShadow: {
        'project-card-shadow': '0px 0px 4px 2px #506486',
      }
    },
  },
  plugins: [],
};
