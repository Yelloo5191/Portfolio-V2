import {
	VStack,
	Heading,
	Box,
	Image,
	HStack,
	Text,
	Stack,
	Circle,
} from "@chakra-ui/react";
import NextChakraLink from "./nextChakraLink";
import { IconContext } from "react-icons";
import { GoMarkGithub, GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { useControllableState } from "@chakra-ui/react";

export default function Projects(): JSX.Element {
	const [selected, setSelected] = useControllableState({ defaultValue: 0 });

	function NavSlide({ index }): JSX.Element {
		return (
			<HStack>
				<button onClick={() => setSelected(index)}>
					<Circle
						transition="all 0.3s ease-in-out"
						_hover={{ position: "relative", bottom: "2px" }}
						size={selected === index ? "50px" : "30px"}
						bg="brand.light"
						cursor="pointer"
					/>
				</button>
			</HStack>
		);
	}
	return (
		<VStack h="100vh" my={["50vh", "25vh"]} id="projects">
			<Heading textAlign="left" w={["45vh", "100vh"]} fontSize="75px">
				Projects
			</Heading>
			<Text textAlign="left" w={["45vh", "100vh"]} fontSize="30px">
				Here are some projects I've worked on...
			</Text>
			<Slide
				title={projects[selected].title}
				role={projects[selected].role}
				desc={projects[selected].desc}
				image={projects[selected].image}
				github={projects[selected].github}
				link={projects[selected].link}
			/>

			<HStack justify="space-between">
				<button
					onClick={() =>
						setSelected(selected - 1 < 0 ? selected : selected - 1)
					}
				>
					<IconContext.Provider
						value={{
							color: "brand.light",
						}}
					>
						<GoTriangleLeft size="40px" />
					</IconContext.Provider>
				</button>
				{projects.map((project) => {
					return <NavSlide index={project.id} />;
				})}
				<button
					onClick={() => {
						setSelected(
							selected + 1 >= Object.keys(projects).length
								? selected
								: selected + 1
						);
					}}
				>
					<IconContext.Provider
						value={{
							color: "brand.light",
						}}
					>
						<GoTriangleRight size="40px" />
					</IconContext.Provider>
				</button>
			</HStack>
		</VStack>
	);
}

function Slide({ title, role, desc, image, github, link }: any): JSX.Element {
	return (
		<Box
			borderRadius="15px"
			w={["45vh", "100vh"]}
			h={["100vh", "50vh"]}
			bg="brand.glossy"
		>
			<Stack direction={["column", "row"]}>
				<Image
					overflow="hidden"
					draggable="false"
					borderRadius={["15px 15px 0px 0px", "15px 0px 0px 15px"]}
					objectFit="cover"
					h="50vh"
					w="100%"
					src={image}
				/>
				<VStack p="15px" align="start" h="50vh" w="100%">
					<Heading
						fontSize={["30px", "60px"]}
						color="brand.transparent"
						fontWeight="bold"
					>
						{title}
					</Heading>
					<Heading fontSize="20px" color="brand.light">
						{role}
					</Heading>
					<Text fontSize={["15px", "30px"]} py="15px">
						{desc}
					</Text>
					<HStack
						cursor="pointer"
						w="100%"
						h="100%"
						align="end"
						justify="right"
					>
						<NextChakraLink target="_blank" href={github}>
							<IconContext.Provider
								value={{
									color: "var(--chakra-colors-brand-primary)",
								}}
							>
								<GoMarkGithub size="40px" />
							</IconContext.Provider>
						</NextChakraLink>
						<NextChakraLink target="_blank" href={link}>
							<IconContext.Provider
								value={{
									color: "var(--chakra-colors-brand-primary)",
								}}
							>
								<BiLinkExternal size="40px" />
							</IconContext.Provider>
						</NextChakraLink>
					</HStack>
				</VStack>
			</Stack>
		</Box>
	);
}

const projects = [
	{
		id: 0,
		title: "School Simplified",
		role: "Frontend Developer",
		desc: "School Simplified is a verified, student-ran NPO dedicated to expanding opportunitities for students throughout the globe.",
		image: "projects/school.png",
		github: "https://github.com/HazimAr/School-Simplified",
		link: "https://schoolsimplified.org/",
	},
	{
		id: 1,
		title: "Programming Simplified",
		role: "Frontend Developer",
		image: "projects/programming.png",
		desc: "Programming Simplified is a program meant to help beginner programmers learn the necessary basic skills to start their own careers and projects.",
		github: "",
		link: "https://programming.schoolsimplified.org/",
	},
	{
		id: 2,
		title: "Ares",
		role: "Solo Developer",
		image: "projects/ares.png",
		desc: "Ares is a War-Based Economy Discord Bot.",
		github: "https://github.com/HazimAr/School-Simplified",
		link: "https://github.com/Yelloo5191/Ares-Bot",
	},
	{
		id: 3,
		title: "Learner Projects",
		role: "Solo Developer",
		desc: "Various Mini-Python Projects",
		image: "projects/learner.png",
		github: "https://github.com/HazimAr/School-Simplified",
		link: "https://github.com/Yelloo5191/Learner-Projects",
	},
];
