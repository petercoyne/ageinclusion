/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				wai: {
					100: '#abc9e7',
					200: '#96b5d5',
					300: '#81a1c2',
					400: '#6c8eb1',
					500: '#587b9f',
					600: '#42647f',
					700: '#2f4d61',
					800: '#1f3744',
					900: '#11222a'
				},
				'waix-blue-dark': '#587B9F',
				'waix-blue-light': '#ABC9E7',
				'waix-blue-saturated': '#D7F0FF',
				'waix-grey-dark': '#676767',
				'waix-grey-mid': '#E0E0E0',
				'waix-grey-light': '#F9F9F9',
        'waix-white': '#FFFFFF',
        'waix-blank': 'clear',
        'waix-green': '#A4CF00',
        'waix-green-dark': '#81954B',
        'waix-green-light': '#e9fdb3',
			}
		}
	},
  plugins: [],
}