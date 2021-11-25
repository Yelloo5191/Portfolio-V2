import { Heading, VStack, Link } from "@chakra-ui/react";

export default function FourOhFour(): JSX.Element {
	return (
		<VStack h="100vh">
			<Heading as="h1">
				404! Yello didn't promote Tyler so he didn't give us the page
				back.
			</Heading>
			<Link href="/">Return To Home! </Link>
		</VStack>
	);
}
