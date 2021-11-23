import { Center, VStack, HStack, Heading, Link } from "@chakra-ui/react";
import Button from "@components/button";

export default function Intro(): JSX.Element {
	return (
		<Center>
			<VStack my="50px" h="75em" align="start" w="50%" px={50}>
				<Heading fontSize="75px">Greetings,</Heading>
				<HStack>
					<Heading color="#FFDDB5" fontSize="52px">
						I am Hovhannes M
					</Heading>
				</HStack>
				<Link href="#aboutme">
					<Button>Who?</Button>
				</Link>
			</VStack>
		</Center>
	);
}
