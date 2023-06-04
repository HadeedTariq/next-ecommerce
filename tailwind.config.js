/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing:{
        '80vh':"80vh",
        '85vh':"85vh",
        '90vh':"90vh",
        "74":"18.5rem",
        "1/7":"60%"
      },
    },
    fontFamily:{
     anton:['var(--font-anton)'],
     alkatra:['var(--font-alkatra)'],
     kanit:['var(--font-kanit)'],
    },
    screens:{
      'tablet':'828px',
      'lg':'1024px',
      'md':"829px"
    }
  },
  plugins: [],
}
