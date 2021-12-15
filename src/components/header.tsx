import { HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
// import {
// 	Section,
// 	useScrollSection,
// 	ScrollingProvider,
// } from "react-scroll-section";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	// const sProject = useScrollSection("projects");

	return (
		<HStack
			minH="100px"
			p="3"
			justify="center"
			bg="brand.transparent"
			backdropFilter="blur(12px)"
			as="header"
			top="0"
			pos="sticky"
			boxShadow="0px 10px 30px rgba(3,7,30,0.6)"
			zIndex={1000}
		>
			<HStack spacing={6}>
				<NextLink href="/">
					<FloatUnderline text="Home" cursor="pointer" />
				</NextLink>
				<NextLink href="/#projects">
					<FloatUnderline
						// onClick={sProject.onClick}
						text="Projects"
						cursor="pointer"
					/>
				</NextLink>
				<NextLink href="/contact">
					<FloatUnderline text="Contact" cursor="pointer" />
				</NextLink>
			</HStack>
		</HStack>
	);
}

function FloatUnderline({ text, ...props }): JSX.Element {
	return (
		<Text
			color="brand.500"
			cursor="pointer"
			transition="all 0.2s"
			_hover={{
				transform: "translateY(-2px)",
			}}
			{...props}
		>
			{text}
		</Text>
	);
}
