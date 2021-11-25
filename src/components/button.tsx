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
			transition="all 0.2s ease"
			borderRadius="25px"
			fontSize="16px"
			fontWeight="semibold"
			bg="brand.gradient"
			_hover={{ transform: "scale(0.95)", boxShadow: "md" }}
			_active={{
				transform: "scale(0.90)",
			}}
			{...props}
			boxShadow="lg"
		>
			{props.children}
		</Box>
	);
}
