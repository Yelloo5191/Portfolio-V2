import { Heading, Text, Stack } from "@chakra-ui/layout";
import Container from "./container";
import ContainerInside from "./containerInside";

export default function About(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Stack
					direction={{ base: "column", lg: "row" }}
					id="aboutme"
					my="10em"
					minH="50vh"
					spacing={{ base: 5, lg: 20 }}
					align="center"
				>
					<Heading w="100%">About Me</Heading>
					<Text color="brand.light" w="100%">
						My name is Hovhannes Muradyan and I am an aspiring
						Software Engineer looking to learn and grow. I am
						currently a High School student and I am 17 years old. A
						fun fact about me is that everything I know about
						programming has been self taught.
					</Text>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
