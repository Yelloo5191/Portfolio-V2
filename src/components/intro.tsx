import { VStack, HStack, Heading, Box } from "@chakra-ui/react";
import Button from "./button";
import Container from "./container";

// import MyCanvas from "./myCanvas";
import { useState } from "react";
import Info from "./info";
import Projects from "./projects";

export default function Intro(): JSX.Element {
	const upVariant = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	const [sphereState, setSphereState] = useState({
		idle: true,
		info: false,
		projects: false,
		contact: false,
		paused: false,
	});

	return (
		<Container
			width="90vw"
			height="80vh"
			margin="0"
			border="1px solid"
			position="absolute"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)"
			justify="space-between"
			padding={15}
		>
			<VStack
				w="100%"
				height="100%"
				align="start"
				justify="space-between"
			>
				<HStack>
					{/* <MyCanvas /> */}
					<Box>
						<Heading fontSize={40}>
							Greetings, I am Hovhannes.
						</Heading>
						<Heading fontSize={24}>I like to create.</Heading>
					</Box>
				</HStack>
				<Box>
					<VStack>
						<Button
							width={200}
							height={50}
							textAlign="left"
							onClick={(event) => {
								event.stopPropagation();
								setSphereState({
									idle: false,
									info: true,
									projects: false,
									contact: false,
									paused: false,
								});
							}}
						>
							Info
						</Button>
						<Button
							width={200}
							height={50}
							textAlign="left"
							onClick={(event) => {
								event.stopPropagation();
								setSphereState({
									idle: false,
									info: false,
									projects: true,
									contact: false,
									paused: false,
								});
							}}
						>
							Projects
						</Button>
						<Button
							width={200}
							height={50}
							textAlign="left"
							onClick={(event) => {
								event.stopPropagation();
								setSphereState({
									idle: false,
									info: false,
									projects: false,
									contact: true,
									paused: false,
								});
							}}
						>
							Contact
						</Button>
					</VStack>
				</Box>
				<Box></Box>
			</VStack>
			<Info display="none" />
			<Projects />
		</Container>
	);
}
