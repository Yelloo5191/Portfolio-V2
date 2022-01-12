import { Stack, VStack, Text, Image } from "@chakra-ui/react";
import NextChakraLink from "./nextChakraLink";
import { SocialIcon } from "react-social-icons";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Stack
			width="250px"
			height="100%"
			position="fixed"
			zIndex={1}
			top="0"
			left="0"
			backgroundColor="brand.transparent"
			transition="0.3s ease-in-out"
			overflowX="hidden"
			display="flex"
			flexDir="column"
			align="center"
			fontSize="25px"
			justify="space-evenly"
		>
			<VStack>
				<Image src="/images/favicon.ico.png" />
			</VStack>
			<VStack>
				<NextChakraLink justify="center" href="/">
					<FloatUnderline text="Home" cursor="pointer" />
				</NextChakraLink>
				<NextChakraLink href="/#projects">
					<FloatUnderline text="Projects" cursor="pointer" />
				</NextChakraLink>
				<NextChakraLink href="/contact">
					<FloatUnderline text="Contact" cursor="pointer" />
				</NextChakraLink>
			</VStack>
			<VStack>
				<SocialIcon
					url="https://www.linkedin.com/in/hovhannes-muradyan-ba516b228/"
					bgColor="var(--chakra-colors-brand-primary)"
				/>
				<SocialIcon
					url="https://github.com/yelloo5191"
					bgColor="var(--chakra-colors-brand-primary)"
				/>
				<SocialIcon
					url="https://www.instagram.com/hmuradyan5191/"
					bgColor="var(--chakra-colors-brand-primary)"
				/>
				<SocialIcon
					url="https://twitter.com/hm156_"
					bgColor="var(--chakra-colors-brand-primary)"
				/>
			</VStack>
		</Stack>
	);
}

function FloatUnderline({ text, ...props }): JSX.Element {
	return (
		<Text
			cursor="pointer"
			transition="all 0.2s"
			my={2}
			_hover={{
				transform: "translateY(-2px)",
			}}
			{...props}
		>
			{text}
		</Text>
	);
}
