/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['main-regular, sans-serif']
      },
      fontFace: {
        'main-regular': {
          fontFamily: 'KrossNeueGrotesk',
          fontWeight: 'normal',
          fontStyle: 'normal',
          src: `url('/src/fonts/KrossNeueGrotesk-Regular.ttf') format('truetype')`,
        },
        'main-bold': {
          fontFamily: 'KrossNeueGrotesk',
          fontWeight: 'bold',
          fontStyle: 'normal',
          src: `url('/fonts/KrossNeueGrotesk-Bold.ttf') format('truetype')`,
        },
      },
      colors: {
        primary: '#CFE3CD',
        primaryDark: '#74867A',
        secondary: "#859BC1",
        secondaryDark: "#667895",
        blendedPrimary: "#B7CBC9",
        blendedSecondary: "#9FB3C5",
        tint: {
          '50': "#EAF0EE",
          '100': "#EFF6EF",
          '200': "#DEE8E6",
          '300': "#C0CED8",
          '400': "#7C837E",
          '500': "#6D7A6F",
          '600': "#3D443F",
          '700': "#1F262D",
          '800': "#1A1E23",
          '900': "#0A0E0F",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'theme-gradient': "url('/images/theme-gradient.png')",
        'fog': "url('/images/fog-background.png')",
      },
    },
  },
  plugins: [],
}
