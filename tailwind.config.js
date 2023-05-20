/** @type {import('tailwindcss').Config} */

const twUiKit = require('./ui')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './tailwind-whitelist.txt',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
	darkMode: 'class',
  theme: {
		extend: {
			colors: {
				primary: {},
				// secondary: { DEFAULT: '#9C27B0' },
				// alt: { DEFAULT: '#FFC107' }
			},
		}
  },
	plugins: [
		twUiKit,
	],
}