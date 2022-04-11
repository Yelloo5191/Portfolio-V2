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
import NextChakraLink from "./nextChakraLink";

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
			title: "Infinite Monkey Simulation",
			role: "Solo Developer",
			image: "projects/monkeys.png",
			desc: "An infinite amount of mokneys given infinite amount of time will eventually write Shakespeare.",
			github: "https://github.com/Yelloo5191/Monkeys",
			link: "",
		},
		{
			title: "Auth System",
			role: "Solo Developer",
			image: "projects/auth.png",
			desc: "Basic Auth System made with ExpressJS and PassportJS.",
			github: "https://github.com/Yelloo5191/AuthSystem",
			link: "",
		},
		{
			title: "Hermes Ticket Bot",
			role: "Solo Developer",
			desc: "Simple Ticket Bot made with Discord.py.",
			image: "projects/hermes.png",
			github: "https://github.com/Yelloo5191/Hermes-Ticket-Bot",
			link: "",
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
			display={{ base: "none", lg: "flex" }}
		>
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
						w="100%"
					>
						{projects.map((project, index) => {
							return index != 4 ? (
								<NextChakraLink target="_blank" key={index} href={project.link != "" ? project.link : project.github}>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5 }}
									>
										<Image
											src={project.image}
											alt={project.title}
											width="400px"
											height="200px"
											borderRadius="5px"
											boxShadow="0px 0px 10px rgba(0,0,0,0.5)"
											transition="all 0.2s ease-in-out"
											filter="grayscale(100%) invert(25%)"
											cursor="pointer"
											_hover={{
												filter: "grayscale(0%) invert(0%)",
												zIndex: 1,
												borderRadius: "0",
												transform: "scale(1.1)",
											}}
										/>
									</motion.div>
								</NextChakraLink>
							) : (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<Heading textAlign={"center"}>My Projects</Heading>
									<Text textAlign={"center"}>
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
