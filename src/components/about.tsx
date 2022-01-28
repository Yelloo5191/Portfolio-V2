import { Heading, Text, Stack } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import { motion } from "framer-motion";
import React from "react";

export default function About(): JSX.Element {
	const headingVariants = {
		offscreen: {
			opacity: 0,
			y: -50,
		},
		onscreen: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 2,
				delay: 0.3,
			},
		},
	};
	const textVariants = {
		offscreen: {
			opacity: 0,
			y: 50,
		},
		onscreen: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 2,
				delay: 0.3,
			},
		},
	};

	return (
		<Container minH="100vh">
			<ContainerInside>
				<Stack
					direction={{ base: "column", lg: "row" }}
					id="aboutme"
					my="10em"
					spacing={{ base: 5, lg: 20 }}
					align="center"
				>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1 }}
						variants={headingVariants}
						style={{ width: "100%" }}
					>
						<Heading>About Me</Heading>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1 }}
						variants={textVariants}
						style={{ width: "100%" }}
					>
						<Text w="100%">
							My name is Hovhannes Muradyan and I am an aspiring
							Software Engineer looking to learn and grow. I am
							currently a 17 year old High School student and all
							of my knowledge with programming has been
							self-taught.
						</Text>
					</motion.div>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
