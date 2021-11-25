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
import { HiOutlineFastForward } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
	const fadeInTop = {
		initial: {
			y: -100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeInTop}
		>
			<Stack
				direction={["column-reverse", "row"]}
				m="auto"
				w={["100%", "50%"]}
				p="25px"
				mb="25em"
			>
				<VStack my={["100px", "0px"]} mr="50px" w="100%">
					<Box
						transition="all 0.2s ease"
						_hover={{
							boxShadow: "0px 10px 30px 5px rgba(0,0,0,0.5)",
							transform: "scale(1.05)",
						}}
						minW="100%"
						minH="50vh"
						bg="brand.glossy"
						borderRadius="15px"
					>
						<List spacing={5} p="15px">
							<SimpleGrid columns={2} spacing={5}>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									Python
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									JavaScript
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									TypeScript
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									HTML
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									CSS
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									SQL
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									React
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									NextJS
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									ChakraUI
								</ListItem>
								<ListItem
									color="brand.transparent"
									fontSize="20px"
									fontWeight="bold"
								>
									<ListIcon
										as={HiOutlineFastForward}
										color="brand.accent"
									/>
									Git & GitHub
								</ListItem>
							</SimpleGrid>
						</List>
					</Box>
				</VStack>
				<VStack h="50vh" align={["center", "end"]} w="100%">
					<Heading fontSize="70px">Skills</Heading>
					<Text textAlign={["center", "right"]} fontSize="30px">
						Throughout my programming journey, I’ve picked up a
						handful amount of skills and experience. Here are just
						some of the technologies I’ve worked with...
					</Text>
				</VStack>
			</Stack>
		</motion.div>
	);
}
