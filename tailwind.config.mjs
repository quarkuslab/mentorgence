const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        primary: '#92193b',
        customblue: '#0F2F64',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Add Poppins as the default font
      },
			backgroundImage: {
        'one': "url('/images/1.svg')",
        'two': "url('/images/2.svg')",
        'three': "url('/images/3.svg')",
      },
			
		},
	},
	plugins: [],
}


