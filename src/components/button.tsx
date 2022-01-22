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
			borderRadius="25px"
			fontSize="16px"
			fontWeight="semibold"
			border="1px solid var(--chakra-colors-brand-primary)"
			background="brand.transparent"
			color="var(--chakra-colors-brand-primary)"
			_hover={{
				background: "brand.primary",
				color: "white",
			}}
			_active={{
				transform: "scale(0.90)",
				boxShadow: "md",
			}}
			{...props}
			boxShadow="lg"
		>
			{props.children}
		</Box>
	);
}
