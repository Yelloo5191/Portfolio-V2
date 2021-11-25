import {
	VStack,
	HStack,
	Box,
	Heading,
	Text,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";
import { HiOutlineFastForward } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
	return (
		<HStack m="auto" w="50%" p="25px" mb="25em">
			<VStack mr="50px" w="100%">
				<Box w="100%" minH="50vh" bg="brand.glossy" borderRadius="15px">
					<List spacing={5} p="15px">
						<ListItem color="brand.accent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.primary"
							/>
							Python
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							JavaScript
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							TypeScript
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							HTML
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							CSS
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							SQL
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							React
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							NextJS
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							ChakraUI
						</ListItem>
						<ListItem color="brand.transparent" size="54px">
							<ListIcon
								as={HiOutlineFastForward}
								color="brand.accent"
							/>
							Git & GitHub
						</ListItem>
					</List>
				</Box>
			</VStack>
			<VStack h="50vh" align="end" w="100%">
				<Heading fontSize="70px">Skills</Heading>
				<Text textAlign="right" fontSize="30px">
					Throughout my programming journey, I’ve picked up a handful
					amount of skills and experience. Here are just some of the
					technologies I’ve worked with...
				</Text>
			</VStack>
		</HStack>
	);
}
