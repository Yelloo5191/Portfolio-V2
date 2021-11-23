import { Heading, HStack, Link, StackDivider } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<HStack
			justify="space-between"
			bg="brand.transparent"
			backdropFilter="blur(12px)"
			px="50px"
			py="10px"
			as="header"
			top="0"
			pos="sticky"
			boxShadow="0px 10px 30px rgba(3,7,30,0.6)"
		>
			<Heading>Yelloo</Heading>
			<HStack
				divider={<StackDivider borderColor="gray.200" />}
				px="50px"
				align="center"
				spacing={4}
			>
				<Link>Home</Link>
				<Link>Projects</Link>
				<Link>Contact</Link>
			</HStack>
		</HStack>
	);
}
