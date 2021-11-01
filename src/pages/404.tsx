import { Heading, Link } from "@chakra-ui/react";

export default function FourOhFour(): JSX.Element {
	return (
		<>
			<Heading as="h1">404 Page not Found</Heading>
			<Link href="/">Return home</Link>
		</>
	);
}
