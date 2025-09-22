/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // adjust if your files live elsewhere
	],
	theme: {
		extend: {
			screens: {
				"3xl": "1920px",
				"4xl": "2560px",
				"5xl": "3840px",
			},
		},
	},
	plugins: [],
};
