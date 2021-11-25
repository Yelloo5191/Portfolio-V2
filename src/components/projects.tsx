import { SimpleGrid, VStack, Heading } from "@chakra-ui/react";
import Panel from "./panel";

export default function Projects(): JSX.Element {
	return (
		<VStack h="100vh" my="25vh" id="projects">
			<Heading fontSize="75px">Projects</Heading>

			<SimpleGrid columns={2} spacing={8}>
				{projects?.map((project) => (
					<Panel
						key={project.id}
						title={project.title}
						desc={project.desc}
						image={project.image}
						link={project.link}
					/>
				))}
			</SimpleGrid>
		</VStack>
	);
}

const projects = [
	{
		id: 1,
		title: "School Simplified",
		desc: "Frontend Developer",
		image: "projects/school.png",
		link: "https://schoolsimplified.org/",
	},
	{
		id: 2,
		title: "Programming Simplified",
		desc: "Frontend Developer",
		image: "projects/programming.png",
		link: "https://programming.schoolsimplified.org/",
	},
	{
		id: 3,
		title: "Ares",
		desc: "Solo Developer",
		image: "projects/ares.png",
		link: "https://github.com/Yelloo5191/Ares-Bot",
	},
	{
		id: 4,
		title: "Learner Projects",
		desc: "Various Mini-Python Projects",
		image: "projects/learner.png",
		link: "https://github.com/Yelloo5191/Learner-Projects",
	},
];
