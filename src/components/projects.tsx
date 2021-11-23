import { SimpleGrid, VStack, Heading } from "@chakra-ui/react";
import Panel from "./panel";

export default function Projects(): JSX.Element {
	return (
		<VStack>
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
		image: "projects/python101.png",
		link: "https://schoolsimplified.org/",
	},
	{
		id: 2,
		title: "Programming Simplified",
		desc: "Frontend Developer",
		image: "projects/python101.png",
		link: "https://programming.schoolsimplified.org/",
	},
	{
		id: 3,
		title: "Game",
		desc: "good game yes",
		image: "projects/python101.png",
		link: "/",
	},
	{
		id: 4,
		title: "Game",
		desc: "good game yes",
		image: "projects/python101.png",
		link: "/",
	},
];
