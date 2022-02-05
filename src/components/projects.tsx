import {
	Heading,
	Text,
	Stack,
	// VStack,
	// Wrap,
	// WrapItem,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
// import { useControllableState } from "@chakra-ui/react";
// import { useEffect } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import { motion } from "framer-motion";

export default function Projects(): JSX.Element {
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
		{},
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
		<Container minH="100vh" id="projects">
			<ContainerInside>
				<Stack
					direction={{ base: "column", lg: "row" }}
					id="aboutme"
					spacing={{ base: 5, lg: 10 }}
					align="center"
				>
					<SimpleGrid
						columns={{ base: 1, lg: 3 }}
						spacing={{ base: 5, lg: 10 }}
						justify="center"
						align="center"
						w="100%"
					>
						{projects.map((project, index) => {
							return index != 4 ? (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<Image
										src={project.image}
										alt={project.title}
										width="400px"
										filter="grayscale(0%)"
										borderRadius="5px"
										boxShadow="0px 0px 10px rgba(0,0,0,0.5)"
										transition="all 0.2s ease-in-out"
										_hover={{
											filter: "grayscale(100%) invert(25%)",
											zIndex: 1,
											borderRadius: "0",
											transform: "scale(1.1)",
										}}
									/>
								</motion.div>
							) : (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<Heading>My Projects</Heading>
									<Text>
										I've also worked on a lot of various
										projects, some I worked on with a team,
										and others I did on my own. Regardless,
										I find project creation fun and
										rewarding.
									</Text>
								</motion.div>
							);
						})}
					</SimpleGrid>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
