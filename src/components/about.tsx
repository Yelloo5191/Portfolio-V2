import { Heading, Text, Stack } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import { motion } from "framer-motion";
import React from "react";

export default function About(): JSX.Element {
	const headingVariants = {
		offscreen: {
			opacity: 0,
			x: -50,
		},
		onscreen: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};
	const textVariants = {
		offscreen: {
			opacity: 0,
			x: 50,
		},
		onscreen: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<Container>
			<ContainerInside>
				<Stack
					direction={{ base: "column", lg: "row" }}
					id="aboutme"
					my="10em"
					minH="50vh"
					spacing={{ base: 5, lg: 20 }}
					align="center"
				>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1, once: true }}
						variants={headingVariants}
						style={{ width: "100%" }}
					>
						<Heading>About Me</Heading>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1, once: true }}
						variants={textVariants}
						style={{ width: "100%" }}
					>
						<Text color="brand.light" w="100%">
							My name is Hovhannes Muradyan and I am an aspiring
							Software Engineer looking to learn and grow. All I
							know about programming has been self taught and I am
							currently a 17 year old High School student.
						</Text>
					</motion.div>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
