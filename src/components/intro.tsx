import { Center, VStack, HStack, Heading, Link } from "@chakra-ui/react";
import Button from "@components/button";
import { motion } from "framer-motion";

export default function Intro(): JSX.Element {
	const fadeInLeft = {
		initial: {
			x: -100,
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
		exit: {
			x: -100,
			opacity: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeInLeft}
		>
			<Center id="intro">
				<VStack my="50px" minH="100vh" align="start">
					<Heading fontSize="75px">Greetings,</Heading>
					<HStack>
						<Heading color="#FFDDB5" fontSize="52px">
							I am{" "}
							<span
								style={{
									fontWeight: "bold",
									color: "var(--chakra-colors-brand-primary)",
								}}
							>
								Hovhannes M.
							</span>
						</Heading>
					</HStack>
					<Link href="#aboutme">
						<Button>Who?</Button>
					</Link>
				</VStack>
			</Center>
		</motion.div>
	);
}
