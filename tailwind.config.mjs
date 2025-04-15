/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'gradient-x': 'gradient-x 15s ease infinite',
			},
			keyframes: {
				'gradient-x': {
				  '0%, 100%': {
					'background-position': '0% 50%',
				  },
				  '50%': {
					'background-position': '100% 50%',
				  },
				},
			},
			backgroundSize: {
				'200': '200% 200%',
			},
		},
	},
	plugins: [],
}
