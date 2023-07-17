import { VStack, HStack, Heading, Link, Box } from "@chakra-ui/react";
import Button from "./button";
import Container from "./container";

import ThreeCanvas from "./canvas";
import { useState } from "react";

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

	const [sphereState, setSphereState] = useState("idle");

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
				<Box>
					<Heading fontSize={40}>Greetings, I am Hovhannes.</Heading>
					<Heading fontSize={24}>I like to create.</Heading>
				</Box>
				<Box>
					<VStack>
						<Button
							width={200}
							height={50}
							textAlign="left"
							onClick={(event) => {
								event.stopPropagation();
								setSphereState("info");
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
								setSphereState("projects");
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
								setSphereState("contact");
							}}
						>
							Contact
						</Button>
					</VStack>
				</Box>
				<Box></Box>
			</VStack>
			<VStack w="100%" height="100%" justify="center" align="end">
				<ThreeCanvas key={sphereState} sphereState={sphereState} />
			</VStack>
		</Container>
	);
}
