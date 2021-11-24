import { VStack, HStack, Image, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
	const fadeInRight = {
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
		<div>
			<a
				id="aboutme"
				style={{
					display: "block",
					position: "relative",
					top: "-250px",
					left: "0",
					width: "100%",
					visibility: "hidden",
				}}
			></a>

			<VStack minW="100%" bg="brand.accent" p="25px" mb="25em">
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					variants={fadeInRight}
				>
					<HStack>
						<VStack>
							<Image
								filter="hue-rotate(200deg)"
								w="500px"
								src="logo.png"
							/>
						</VStack>
						<VStack alignItems="start">
							<Heading>Who am I?</Heading>
							<Text>
								I am a passionate Software Developer, looking to
								learn and grow.
							</Text>
							<Text>
								My pronouns are{" "}
								<b
									style={{
										color: "var(--chakra-colors-brand-primary)",
									}}
								>
									he/him
								</b>{" "}
								and I am{" "}
								<b
									style={{
										color: "var(--chakra-colors-brand-primary)",
									}}
								>
									17 years old
								</b>
								.
							</Text>
						</VStack>
					</HStack>
				</motion.div>
			</VStack>
		</div>
	);
}
