import { VStack, Image, Heading, Center, Stack, Text } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";

export default function Panel({
	title,
	desc,
	image,
	link,
	...props
}): JSX.Element {
	return (
		<>
			<NextChakraLink href={link}>
				<VStack
					my="15px"
					mx="15px"
					borderRadius="10px"
					bg="brand.gradient"
					maxW="100%"
					w="500px"
					overflow="hidden"
					position="relative"
					transition="all 0.3s ease-in-out"
					cursor="pointer"
					filter="brightness(75%)"
					_hover={{
						filter: "brightness(100%)",
						boxShadow: "0px 0px 10px rgba(255,255,255,0.5)",
						top: "-8px",
					}}
					{...props}
				>
					<Center>
						<Image src={image} />
					</Center>
					<Stack w="100%" p="25px">
						<Heading
							fontWeight="bold"
							color="brand.transparent"
							size="md"
						>
							{title}
						</Heading>
						<Text>{desc}</Text>
					</Stack>
				</VStack>
			</NextChakraLink>
		</>
	);
}
