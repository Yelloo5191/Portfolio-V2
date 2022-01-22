import ContainerBackground from "./containerBackground";
import { VStack, HStack, Heading, Link, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Button from "./button";

export default function Intro(): JSX.Element {
	const upVariant = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	return (
		<ContainerBackground
			minH="100vh"
			src="https://c.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif"
		>
			<ContainerBackground minH="100vh" src="images/skills_bg.jpg">
				<VStack height="100%" width="100%">
					<HStack>
						<Box
							width="100%"
							height="100vh"
							display="flex"
							alignItems="center"
							overflow="hidden"
						>
							<VStack>
								<motion.div
									initial="hidden"
									whileInView="visible"
									variants={upVariant}
									transition={{
										type: "spring",
										duration: 2,
										delay: 0.3,
									}}
								>
									<Heading>
										Hi, I'm Hovhannes. I like to create.
									</Heading>
								</motion.div>
								<motion.div
									initial="hidden"
									whileInView="visible"
									variants={upVariant}
									transition={{
										type: "spring",
										duration: 2,
										delay: 0.6,
									}}
								>
									<Link href="#aboutme">
										<Button> Come again? </Button>
									</Link>
								</motion.div>
							</VStack>
						</Box>
					</HStack>
				</VStack>
			</ContainerBackground>
		</ContainerBackground>
	);
}
