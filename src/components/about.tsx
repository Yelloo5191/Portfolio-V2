import { VStack, Heading, Text } from "@chakra-ui/layout";

export default function About(): JSX.Element {
	return (
		<>
			<a
				id="aboutme"
				style={{
					display: "block",
					position: "relative",
					top: "-250px",
					left: "0",
					width: "100%",
					visibility: "hidden",
				}}
			></a>

			<VStack w="100%" bg="brand.accent" py="25px" mb="25em">
				<Heading>Who am I?</Heading>
				<Text>
					I am a passionate Software Developer, looking to learn and
					grow.
				</Text>
			</VStack>
		</>
	);
}
