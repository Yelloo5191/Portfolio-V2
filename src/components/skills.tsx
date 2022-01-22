// import {
// VStack,
// Stack,
// Box,
// Heading,
// Text,
// List,
// ListItem,
// ListIcon,
// SimpleGrid,
// } from "@chakra-ui/react";
import ContainerBackground from "./containerBackground";
// import { HiOutlineFastForward } from "react-icons/hi";
// import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
	// const fadeUpVariants = {
	// 	offscreen: {
	// 		opacity: 0,
	// 		y: 50,
	// 	},
	// 	onscreen: {
	// 		opacity: 1,
	// 		y: 0,
	// 		transition: {
	// 			duration: 1,
	// 			delay: 0.3,
	// 		},
	// 	},
	// };
	return (
		<ContainerBackground
			src="images/skills.svg"
			minH="100vh"
			position="relative"
		></ContainerBackground>
	);
}

// function SkillItem({ title }: { title: string }) {
// 	return (
// 		<ListItem color="brand.light" fontSize="20px" fontWeight="bold">
// 			<ListIcon as={HiOutlineFastForward} color="brand.primary" />
// 			{title}
// 		</ListItem>
// 	);
// }
