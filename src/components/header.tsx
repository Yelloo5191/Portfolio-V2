import { Stack, VStack, Text, Image, Button } from "@chakra-ui/react";
import NextChakraLink from "./nextChakraLink";
import { AiOutlineMenu } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	const [isHeaderOpen, setHeaderOpen] = useState(false);

	return (
		<>
			<Stack
				width="250px"
				height="100%"
				position="fixed"
				zIndex={1000}
				top="0"
				left={isHeaderOpen ? "0" : "-250px"}
				background="brand.navBg"
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
			<Button
				transition="0.3s ease-in-out"
				position="fixed"
				left={isHeaderOpen ? "250px" : "0px"}
				variant="outline"
				colorScheme="yellow"
				m={15}
				cursor="pointer"
				onClick={() => setHeaderOpen(!isHeaderOpen)}
				_hover={{
					background: "var(--chakra-colors-brand-primary)",
					color: "var(--chakra-colors-white)",
				}}
				_focus={{
					background: "transparent",
				}}
			>
				<AiOutlineMenu size={20} />
			</Button>
		</>
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
