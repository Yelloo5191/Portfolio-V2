/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			secondary: "#03071E",
			primary: "#FFBA08",
			accent: "#370617",
			gradient:
				"linear-gradient(to bottom, rgba(232, 93, 4, 1) 0%, rgba(250, 163, 7, 1) 100%)",
			transparent: "rgba(3,7,30,0.3)",
		},
	},
	components: {
		Heading: {
			baseStyle: {
				fontFamily: "montserrat",
				fontWeight: "light",
				color: "brand.primary",
			},
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
				scrollBehavior: "smooth",
			},
			body: {
				fontFamily: "montserrat",
				color: "white",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "brand.secondary",
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
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;
