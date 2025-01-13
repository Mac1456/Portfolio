/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '410px',
				s: '480px',
			},
			fontSize: {
				sm: '13px',
				base: '14px',
				md: '16px',
			},
			colors: {
				dark: '#171717',
				'gray-1': '#2E2E2E',
				'gray-2': '#3A3A3A',
				'gray-3': '#5A5A5A',
				'gray-4': '#8E8E8E',
				'gray-5': '#979797',
				'gray-6': '#C5C5C5',
				'gray-7': '#D0D0D0',
				'gray-8': '#DFDFDF',
				'gray-9': '#FFFFFF',
				'accent-yellow': '#E6D94B',
				'accent-green': '#26A71A',
				'accent-blue': '#8AB5F5',
				'accent-orange': '#EA9A4F',
				'highlight-green': '#92E3A0',
				'highlight-blue': '#92BEE3',
				'muted-green': '#496E5D',
				'muted-blue': '#486E84',
			},
			fontFamily: {
				mono: [
					'Geist Mono',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace',
				],
				hand: [
					'Grape Nuts',
					'Caveat',
					'Segoe Print',
					'Bradley Hand',
					'Marker Felt',
					'casual',
					'cursive',
				],
			},
			keyframes: {
				shake: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-20deg)' },
					'75%': { transform: 'rotate(20deg)' },
				},
			},
			animation: {
				shake: 'shake 0.5s ease-in-out 0.2s',
			},
		},
	},
	plugins: [],
};
