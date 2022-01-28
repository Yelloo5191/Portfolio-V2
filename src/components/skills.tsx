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

	const skills = [
		{
			key: 0,
			name: "JS",
			tooltip:
				"JavaScript: I primarily use it for front-end development though I have dabbled with it in Express for back-end.",
		},
		{
			key: 1,
			name: "TS",
			tooltip:
				"TypeScript: I use TypeScript for front-end development, in fact, this website uses Typescript.",
		},
		{
			key: 2,
			name: "Py",
			tooltip:
				"Python: Python was my first programming language and it is definitely the one I am most confident in; though, nowadays I mainly use it for small scripts.",
		},
		{
			key: 3,
			name: "HTML",
			tooltip:
				"HTML: HTML is the foundation of most websites and as a result I've become very familiar with it.",
		},
		{
			key: 4,
			name: "CSS",
			tooltip:
				"CSS: CSS is the foundation of the visuals of most websites and as a result I've become very familiar with it.",
		},
		{
			key: 5,
			name: "SQL",
			tooltip:
				"SQL: I learned SQL recently to interact with my databases and I haven't looked back since.",
		},
		{
			key: 6,
			name: "NxtJS",
			tooltip:
				"Next.js: I use Next.js for front-end development, in fact, this website uses Next.js.",
		},
		{
			key: 7,
			name: "React",
			tooltip:
				"React: I also use React for front-end development, though usually I use it for smaller projects.",
		},
		{
			key: 8,
			name: "Chakra",
			tooltip:
				"Chakra UI: I use Chakra UI for styling my webpages, in fact, this website uses Chakra UI.",
		},
		{
			key: 9,
			name: "Git",
			tooltip:
				"Git: Git is my go to version control system and I use it for almost every project I make alongside GitHub.",
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
						<SimpleGrid columns={5} spacing={10}>
							{skills.map((skill) => (
								<SkillItem
									key={skill.name}
									title={skill.name}
									tooltip={skill.tooltip}
								/>
							))}
						</SimpleGrid>
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
