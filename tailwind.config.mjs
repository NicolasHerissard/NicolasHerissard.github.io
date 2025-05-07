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
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			backgroundSize: {
				'200': '200% 200%',
			},
			animation: {
				fadeInUp: 'fadeInUp 0.6s ease-out forwards',
			},
		},
	},
	plugins: [],
}
