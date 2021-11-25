import { Box, VStack, HStack, Heading, Link, Image } from "@chakra-ui/react";
import Button from "@components/button";
// import NextChakraLink from "./nextChakraLink";
// import { GoMarkGithub } from "react-icons/go";
// import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Intro(): JSX.Element {
	const fadeInRight = {
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
		exit: {
			x: 100,
			opacity: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		// <motion.div
		// 	initial="initial"
		// 	animate="animate"
		// 	exit="exit"
		// 	variants={fadeInLeft}
		// >
		// 	<Center id="intro">
		// 		<VStack my="50px" minH="100vh" align="start">
		// 			<Heading fontSize="75px">Greetings,</Heading>
		// 			<HStack>
		// 				<Heading color="#FFDDB5" fontSize="52px">
		// 					I am{" "}
		// 					<span
		// 						style={{
		// 							fontWeight: "bold",
		// 							color: "var(--chakra-colors-brand-primary)",
		// 						}}
		// 					>
		// 						Hovhannes M.
		// 					</span>
		// 				</Heading>
		// 			</HStack>
		// 			<Link href="#aboutme">
		// 				<Button>Who?</Button>
		// 			</Link>
		// 		</VStack>
		// 	</Center>
		// </motion.div>
		<VStack my="25vh" minH="100vh" id="intro">
			<HStack>
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					variants={fadeInRight}
				>
					<Box
						transition="all 0.2s ease"
						_hover={{
							boxShadow: "0px 10px 30px 5px rgba(0,0,0,0.5)",
							transform: "scale(1.05)",
						}}
						display={{ base: "none", md: "block" }}
						borderRadius="15px"
						w="50vh"
						minH="50vh"
						bg="brand.glossy"
						mx="10px"
						p="10px"
					>
						<Image
							transition="all 0.2s ease"
							_hover={{
								transform: "scale(1.10)",
							}}
							draggable="false"
							pos="relative"
							top="50"
							src="programming.svg"
						/>
					</Box>
				</motion.div>
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					variants={fadeInLeft}
				>
					<VStack mx="10px" align="start">
						<Heading fontSize="50px">
							Developing the future...
						</Heading>
						<Heading fontSize="40px" color="brand.light">
							Greetings,
						</Heading>
						<Heading fontSize="25px" color="brand.light">
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
						<Link href="#aboutme">
							<Button>Who?</Button>
						</Link>
					</VStack>
				</motion.div>
			</HStack>
		</VStack>
	);
}
