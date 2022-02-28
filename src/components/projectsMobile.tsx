import Container from "./container";
import ContainerInside from "./containerInside";
import ContainerBackground from "./containerBackground";
import { HStack, Stack, VStack, Heading, Text, Button } from "@chakra-ui/react";
import NextChakraLink from "./nextChakraLink";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useControllableState } from "@chakra-ui/react";

export default function ProjectsMobile(): JSX.Element {
	const [selected, setSelected] = useControllableState({ defaultValue: 0 });

	const projects = [
		{
			title: "School Simplified",
			role: "Frontend Developer",
			desc: "School Simplified is a verified, student-ran NPO dedicated to expanding opportunitities for students throughout the globe.",
			image: "projects/school.png",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://schoolsimplified.org/",
		},
		{
			title: "Programming Simplified",
			role: "Frontend Developer",
			image: "projects/programming.png",
			desc: "Programming Simplified is a program meant to help beginner programmers learn the necessary basic skills to start their own careers and projects.",
			github: "",
			link: "https://programmingsimplified.org/",
		},
		{
			title: "Ares",
			role: "Solo Developer",
			image: "projects/ares.png",
			desc: "Ares is a War-Based Economy Discord Bot.",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://github.com/Yelloo5191/Ares-Bot",
		},
		{
			title: "Learner Projects",
			role: "Solo Developer",
			desc: "Various Mini-Python Projects",
			image: "projects/learner.png",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://github.com/Yelloo5191/Learner-Projects",
		},
		{
			title: "Programming Simplified",
			role: "Frontend Developer",
			image: "projects/programming.png",
			desc: "Programming Simplified is a program meant to help beginner programmers learn the necessary basic skills to start their own careers and projects.",
			github: "",
			link: "https://programmingsimplified.org/",
		},
		{
			title: "Ares",
			role: "Solo Developer",
			image: "projects/ares.png",
			desc: "Ares is a War-Based Economy Discord Bot.",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://github.com/Yelloo5191/Ares-Bot",
		},
		{
			title: "Learner Projects",
			role: "Solo Developer",
			desc: "Various Mini-Python Projects",
			image: "projects/learner.png",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://github.com/Yelloo5191/Learner-Projects",
		},
		{
			title: "Learner Projects",
			role: "Solo Developer",
			desc: "Various Mini-Python Projects",
			image: "projects/learner.png",
			github: "https://github.com/HazimAr/School-Simplified",
			link: "https://github.com/Yelloo5191/Learner-Projects",
		},
	];

	return (
		<Container
			minH="100vh"
			id="projects"
			display={{ base: "flex", lg: "none" }}
		>
			<ContainerInside>
				<Slides
					projects={projects}
					selected={selected}
					setSelected={setSelected}
				/>
			</ContainerInside>
		</Container>
	);
}

function Slide({ title, role, image, desc, github, link }): JSX.Element {
	return (
		<Stack
			bg="brand.secondary"
			overflow="hidden"
			borderRadius={5}
			w={["300px", "600px"]}
			h="600px"
		>
			<ContainerBackground
				minH="30vh"
				zIndex="0"
				display="block"
				bgImg={image}
				objectFit="cover"
				bgSize="cover"
				bgPos="center"
			></ContainerBackground>
			<VStack
				align="start"
				justify="start"
				w="100%"
				h="100%"
				p="10px"
				rounded="lg"
			>
				<Heading>
					{title} - <span style={{ fontSize: "20px" }}>{role}</span>
				</Heading>
				<Text fontSize={["15px", "20px"]}>{desc}</Text>
				<HStack>
					<NextChakraLink
						display={link ? "inline" : "none"}
						href={link}
					>
						<BiLinkExternal size="30" />
					</NextChakraLink>
					<NextChakraLink
						display={github ? "inline" : "none"}
						href={github}
					>
						<AiFillGithub size="30" />
					</NextChakraLink>
				</HStack>
			</VStack>
		</Stack>
	);
}

function Slides({ projects, selected, setSelected }): JSX.Element {
	return (
		<VStack>
			<Slide
				title={projects[selected].title}
				role={projects[selected].role}
				image={projects[selected].image}
				desc={projects[selected].desc}
				github={projects[selected].github}
				link={projects[selected].link}
			/>
			<HStack>
				<Button
					onClick={() => {
						setSelected(
							selected != 0 ? selected - 1 : projects.length - 1
						);
					}}
					variant="ghost"
					_active={{}}
					_hover={{}}
				>
					<FiArrowLeftCircle size="30" />
				</Button>
				<Button
					onClick={() => {
						setSelected(
							selected != projects.length - 1 ? selected + 1 : 0
						);
					}}
					variant="ghost"
					_active={{}}
					_hover={{}}
				>
					<FiArrowRightCircle size="30" />
				</Button>
			</HStack>
		</VStack>
	);
}
