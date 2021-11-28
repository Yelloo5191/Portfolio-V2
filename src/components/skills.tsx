import {
	VStack,
	Stack,
	Box,
	Heading,
	Text,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
} from "@chakra-ui/react";
import ContainerBackground from "./containerBackground";
import { HiOutlineFastForward } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
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
	const fadeUpVariants = {
		offscreen: {
			opacity: 0,
			y: 50,
		},
		onscreen: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};
	return (
		<ContainerBackground src="skills_bg.jpg">
			<VStack
				mx="15px"
				spacing={50}
				id="skills"
				my="10em"
				minH="100vh"
				justify="space-evenly"
			>
				<Stack
					minH="100%"
					align="center"
					direction={{ base: "column", lg: "row" }}
					spacing={{ base: 5, lg: 20 }}
				>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1, once: true }}
						variants={headingVariants}
						style={{ width: "100%" }}
					>
						<Heading w="100%">Skills</Heading>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ amount: 0.1, once: true }}
						variants={textVariants}
						style={{ width: "100%" }}
					>
						<Text color="brand.light" w="100%">
							Throughout my programming journey, I’ve picked up a
							handful amount of skills and experience. Here are
							just some of the technologies I’ve worked with...
						</Text>
					</motion.div>
				</Stack>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ amount: 0.1, once: true }}
					variants={fadeUpVariants}
					style={{ width: "100%" }}
				>
					<Box
						align="center"
						borderRadius="15px"
						w="100%"
						bg="brand.transparentLight"
						backdropFilter="blur(12px)"
						p="3"
						zIndex={999}
					>
						<List spacing={5} p="15px">
							<SimpleGrid columns={2} spacing={5}>
								<SkillItem title="Python" />
								<SkillItem title="JavaScript" />
								<SkillItem title="TypeScript" />
								<SkillItem title="HTML" />
								<SkillItem title="CSS" />
								<SkillItem title="SQL" />
								<SkillItem title="React" />
								<SkillItem title="NextJS" />
								<SkillItem title="ChakraUI" />
								<SkillItem title="Git & GitHub" />
							</SimpleGrid>
						</List>
					</Box>
				</motion.div>
			</VStack>
		</ContainerBackground>
	);
}

function SkillItem({ title, ...props }: { title: string }) {
	return (
		<ListItem color="brand.light" fontSize="20px" fontWeight="bold">
			<ListIcon as={HiOutlineFastForward} color="brand.primary" />
			{title}
		</ListItem>
	);
}
