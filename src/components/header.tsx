import { Image, HStack, StackDivider } from "@chakra-ui/react";
import NextLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<HStack
			p="3"
			justify="space-between"
			bg="brand.transparent"
			backdropFilter="blur(12px)"
			as="header"
			top="0"
			pos="sticky"
			boxShadow="0px 10px 30px rgba(3,7,30,0.6)"
		>
			<NextLink href="/">
				<Image
					draggable="false"
					_hover={{ cursor: "pointer" }}
					src="icon.png"
					w="65px"
				/>
			</NextLink>
			<HStack
				divider={<StackDivider borderColor="gray.200" />}
				align="center"
				spacing={4}
			>
				<NextLink href="/">Home</NextLink>
				<NextLink href="#projects">Projects</NextLink>
				<NextLink href="/contact">Contact</NextLink>
			</HStack>
		</HStack>
	);
}
