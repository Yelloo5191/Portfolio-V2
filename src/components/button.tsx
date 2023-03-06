/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
	return (
		<Box
			px={4}
			py={2}
			as="button"
			transition="all 0.3s ease"
			fontSize={40}
			background="transparent"
			color="brand.text"
			_hover={{
				background: "white",
				color: "brand.dark",
			}}
			_active={{
				transform: "scale(0.90)",
				boxShadow: "md",
			}}
			{...props}
			display="flex"
			alignItems="center"
		>
			{props.children}
		</Box>
	);
}
