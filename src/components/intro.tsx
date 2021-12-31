import { HStack, VStack, Text, Heading, Link } from "@chakra-ui/react";
import Button from "@components/button";
// import NextChakraLink from "./nextChakraLink";
import { motion } from "framer-motion";
import ContainerBackground from "./containerBackground";

export default function Intro(): JSX.Element {
	const fadeInTop = {
		initial: {
			opacity: 0,
			y: -50,
		},
		animation: {
			opacity: 1,
			y: 0,
		},
	};
	return (
		<ContainerBackground src="https://c.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif">
			<HStack
				mr="auto"
				p={{ base: "0", md: "100px" }}
				minH="100vh"
				id="intro"
			>
				<motion.div
					initial="initial"
					animate="animation"
					variants={fadeInTop}
					transition={{ duration: 1, delay: 0.3 }}
				>
					<VStack mx="10px" align="left">
						<Heading fontSize={{ base: "50px", md: "90px" }}>
							Hovhannes Muradyan.
						</Heading>
						<Text
							color="brand.light"
							fontSize={{ base: "15px", md: "20px" }}
						>
							Greetings, I am a student{" "}
							<strong>programmer</strong> and hobbyist helping{" "}
							<strong>develop</strong> the future.
						</Text>
						<Link href="#aboutme">
							<Button>Who?</Button>
						</Link>
					</VStack>
				</motion.div>
			</HStack>
		</ContainerBackground>
	);
}
