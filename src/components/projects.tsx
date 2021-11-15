import { Flex, Center, Heading } from "@chakra-ui/react";
import Panel from "./panel";

export default function Projects(): JSX.Element {
	return (
		<>
			<Center>
				<Heading fontSize="75px">Projects</Heading>
			</Center>

			<Center>
				<Flex justify="space-between" padding="5px" flexWrap="wrap">
					{projects?.map((project) => (
						<Panel
							title={project.title}
							desc={project.desc}
							image={project.image}
						/>
					))}
				</Flex>
			</Center>
		</>
	);
}

const projects = [
	{
		title: "School Simplified",
		desc: "Frontend Developer",
		image: "python101.png",
	},
	{
		title: "Programming Simplified",
		desc: "Frontend Developer",
		image: "python101.png",
	},
	{
		title: "Game",
		desc: "good game yes",
		image: "python101.png",
	},
	{
		title: "Game",
		desc: "good game yes",
		image: "python101.png",
	},
];
