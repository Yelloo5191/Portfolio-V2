import {
	VStack,
	Stack,
	Box,
	Heading,
	Text,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
} from "@chakra-ui/react";
import ContainerBackground from "./containerBackground";
import { HiOutlineFastForward } from "react-icons/hi";

export default function Skills(): JSX.Element {
	return (
		<ContainerBackground src="skills_bg.jpg">
			<VStack
				mx="15px"
				spacing={50}
				id="skills"
				my="10em"
				minH="100vh"
				justify="space-evenly"
			>
				<Stack
					minH="100%"
					align="center"
					direction={{ base: "column", lg: "row" }}
					spacing={{ base: 5, lg: 20 }}
				>
					<Heading w="100%">Skills</Heading>
					<Text color="brand.light" w="100%">
						Throughout my programming journey, I’ve picked up a
						handful amount of skills and experience. Here are just
						some of the technologies I’ve worked with...
					</Text>
				</Stack>
				<Box
					align="center"
					borderRadius="15px"
					w="100%"
					bg="brand.transparentLight"
					backdropFilter="blur(12px)"
					p="3"
					zIndex={999}
				>
					<List spacing={5} p="15px">
						<SimpleGrid columns={2} spacing={5}>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								Python
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								JavaScript
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								TypeScript
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								HTML
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								CSS
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								SQL
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								React
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								NextJS
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								ChakraUI
							</ListItem>
							<ListItem
								color="brand.light"
								fontSize="20px"
								fontWeight="bold"
							>
								<ListIcon
									as={HiOutlineFastForward}
									color="brand.primary"
								/>
								Git & GitHub
							</ListItem>
						</SimpleGrid>
					</List>
				</Box>
			</VStack>
		</ContainerBackground>
	);
}
