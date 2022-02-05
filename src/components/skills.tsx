// import {
// VStack,
// Stack,
// Box,
// Heading,
// Text,
// List,
// ListItem,
// ListIcon,
// SimpleGrid,
// } from "@chakra-ui/react";
import {
	Stack,
	VStack,
	Heading,
	Text,
	Circle,
	SimpleGrid,
	Tooltip,
} from "@chakra-ui/react";
import ContainerBackground from "./containerBackground";
import ContainerInside from "./containerInside";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
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
	const circleVariants = {
		offscreen: {
			opacity: 0,
			x: 50,
		},
		onscreen: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 2,
				delay: 0.3,
			},
		},
	};

	const skills = [
		{
			key: 0,
			name: "JS",
			tooltip: "JavaScript",
		},
		{
			key: 1,
			name: "TS",
			tooltip: "TypeScript",
		},
		{
			key: 2,
			name: "Py",
			tooltip: "Python",
		},
		{
			key: 3,
			name: "HTML",
			tooltip: "HTML",
		},
		{
			key: 4,
			name: "CSS",
			tooltip: "CSS",
		},
		{
			key: 5,
			name: "SQL",
			tooltip: "SQL",
		},
		{
			key: 6,
			name: "NxtJS",
			tooltip: "Next.js",
		},
		{
			key: 7,
			name: "React",
			tooltip: "React.js",
		},
		{
			key: 8,
			name: "Chakra",
			tooltip: "Chakra UI",
		},
		{
			key: 9,
			name: "Git",
			tooltip: "Git & GitHub",
		},
	];

	return (
		<ContainerBackground
			src="images/skills.svg"
			minH="100vh"
			position="relative"
		>
			<ContainerInside>
				<VStack>
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
							<Heading w="100%">My Skills</Heading>
						</motion.div>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ amount: 0.1 }}
							variants={textVariants}
							style={{ width: "100%" }}
						>
							<Text w="100%">
								Throughout my programming journey, I’ve picked
								up a handful amount of skills and experience.
								Here are just some of the technologies I’ve
								worked with...
							</Text>
						</motion.div>
					</Stack>
					<Stack
						direction={{ base: "column", lg: "row" }}
						id="aboutme"
						my="10em"
						spacing={{ base: 5, lg: 10 }}
						align="center"
					>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ amount: 0.1 }}
							variants={circleVariants}
							style={{ width: "100%" }}
						>
							<SimpleGrid
								columns={{ base: 3, lg: 5 }}
								spacing={10}
							>
								{skills.map((skill) => (
									<SkillItem
										key={skill.name}
										title={skill.name}
										tooltip={skill.tooltip}
									/>
								))}
							</SimpleGrid>
						</motion.div>
					</Stack>
				</VStack>
			</ContainerInside>
		</ContainerBackground>
	);
}

function SkillItem({ title, tooltip }: { title: string; tooltip?: string }) {
	return (
		<Tooltip label={tooltip}>
			<Circle
				border="1px solid"
				p={15}
				w="75px"
				h="75px"
				cursor={`pointer`}
				_hover={{
					borderColor: "brand.primary",
				}}
			>
				<Heading fontSize={20}>{title}</Heading>
			</Circle>
		</Tooltip>
	);
}
