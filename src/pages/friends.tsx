import { VStack, Heading } from "@chakra-ui/layout";

export default function Friends(): JSX.Element {
	return (
		<VStack h="100vh">
			<Heading>Friends and Contributors</Heading>
			<Heading> {">"} Tyler</Heading>
			<Heading>{">"} Zim</Heading>
			<Heading>{">"} Daddy Space</Heading>
		</VStack>
	);
}
