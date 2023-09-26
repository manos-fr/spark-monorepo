/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./apps/ui/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#000',
        gray: {
          50: '#f7f7f7',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#191919',
        },
        red: {
          DEFAULT: '#ef4444',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        green: {
          DEFAULT: '#22c55e',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        blue: {
          DEFAULT: '#0071b9',
          100: '#e6f1f8',
          200: '#cce2f1',
          300: '#b3d3ea',
          400: '#99c5e3',
          500: '#80b7dc',
          600: '#66a8d5',
          700: '#4d9ace',
          800: '#338bc7',
          900: '#197dc0',
        },
        yellow: {
          DEFAULT: '#eab308',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
  "tailwindCSS.classAttributes": [
    "style"
  ],
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    ["tw.style\\(([^)]*)\\)", "'([^']*)'"]
  ]
};
