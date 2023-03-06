/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			secondary:
				"linear-gradient(to bottom right, rgba(34, 37, 51, 1) 0%, rgba(0, 0, 0, 1) 100%)",
			primary: "#FFBA08",
			accent: "#370617",
			glossy: "linear-gradient(to top left, rgba(255, 245, 220, 0.5) 0%, rgba(255, 221, 181, 1) 100%)",
			transparent: "rgba(3,7,30,0.3)",
			transparentLight: "rgba(252,247,225,0.1)",
			scrollbar:
				"linear-gradient(to bottom, rgba(34, 37, 51, 1) 0%, rgba(0, 0, 0, 1) 100%)",
			navBg: "linear-gradient(to bottom, rgba(34, 37, 51, 1) 0%, rgba(0, 0, 0, 1) 100%)",

			dark: "#2C2C30",
			mid: "#525259",
			light: "#7B7B8C",
			text: "#FFFFFF",
		},
	},
	components: {
		Heading: {
			baseStyle: {
				fontFamily: "Neue Montreal",
				fontWeight: "light",
				color: "brand.text",
			},
		},
	},
	styles: {
		global: () => ({
			html: {
				scrollBehavior: "smooth",
				height: "100%",
			},
			body: {
				fontFamily: "Neue Montreal",
				color: "brand.light",
				fontSize: "1.2em",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				background: "brand.dark",
				height: "100%",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
				background: "brand.scrollbar",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;
