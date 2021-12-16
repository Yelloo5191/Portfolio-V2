import { Heading, Text, Stack } from "@chakra-ui/react";
import { useControllableState } from "@chakra-ui/react";
import { useEffect } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import { motion } from "framer-motion";
import { Slide } from "./slidingPanel";

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
	];

	const [selected, setSelected] = useControllableState({ defaultValue: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			setSelected(
				selected + 1 >= Object.keys(projects).length ? 0 : selected + 1
			);
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [selected]);

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
				delay: 0.3,
			},
		},
	};

	return (
		<Container id="projects">
			<ContainerInside>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ amount: 0.1, once: true }}
					variants={fadeUpVariants}
				>
					<Stack my="10em" minH="100vh">
						<Heading textAlign="center">Projects</Heading>
						<Text textAlign="center" color="brand.light">
							Here are some projects I've worked on...
						</Text>
						<Slide
							infos={projects}
							selected={selected}
							setSelected={setSelected}
						/>
					</Stack>
				</motion.div>
			</ContainerInside>
		</Container>
	);
}
