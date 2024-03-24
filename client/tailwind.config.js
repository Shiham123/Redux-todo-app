export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-bg-primary": "#e4f0fa",
				"light-bg-secondary": "#e6eef8",
				"dark-bg-primary": "#121215",
				"dark-bg-secondary": "#18181c",
				"text-primary": "#2b3c5b",
				"text-secondary": "#f8917e",
				"dark-text-primary": "#dfe0fb",
				"dark-text-secondary": "#7f5bf7",
			},
			fontFamily: {
				Lexend: ["Lexend Deca", "sans-serif"],
			},
			boxShadow: {
				one: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				two: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
			},
		},
	},
	plugins: [],
}
