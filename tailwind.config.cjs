/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: 'true'
			},
			fontFamily: {
				sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
			},
			colors: {
				'pink':"hsl(328, 70%, 70%, 100%)",
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
