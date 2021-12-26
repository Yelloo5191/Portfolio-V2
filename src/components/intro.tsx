import { VStack, Heading, Link } from "@chakra-ui/react";
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
			<VStack minH="100vh" id="intro">
				<motion.div
					initial="initial"
					animate="animation"
					variants={fadeInTop}
					transition={{ duration: 1, delay: 0.3 }}
				>
					<VStack
						mt="25vh"
						mx="10px"
						align={{ base: "left", lg: "center" }}
					>
						<Heading fontSize="50px">
							Developing the future...
						</Heading>
						<Heading fontSize="40px" color="brand.light">
							Greetings,
						</Heading>
						<Heading fontSize="15px" color="brand.light">
							I am{" "}
							<span
								style={{
									fontSize: "25px",
									fontWeight: "bold",
									color: "var(--chakra-colors-brand-primary)",
								}}
							>
								Hovhannes M.
							</span>
						</Heading>
						<Link href="#aboutme">
							<Button>Who?</Button>
						</Link>
					</VStack>
				</motion.div>
			</VStack>
		</ContainerBackground>
	);
}
