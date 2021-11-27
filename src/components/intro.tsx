import { VStack, HStack, Heading, Link } from "@chakra-ui/react";
import Button from "@components/button";
// import NextChakraLink from "./nextChakraLink";
import { motion } from "framer-motion";
import ContainerBackground from "./containerBackground";

export default function Intro(): JSX.Element {
	const fadeInLeft = {
		initial: {
			x: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<ContainerBackground src="intro_bg.png">
			<VStack minH="100vh" id="intro">
				<HStack>
					<motion.div
						initial="initial"
						animate="animate"
						variants={fadeInLeft}
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
				</HStack>
			</VStack>
		</ContainerBackground>
	);
}
