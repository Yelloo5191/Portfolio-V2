import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Splash() {
	return (
		<Box
			position="absolute"
			m={0}
			p={0}
			h="100vh"
			w="100%"
			d="flex"
			alignItems="center"
			justifyContent="center"
		>
			<motion.div
				animate={{
					scale: [1, 2, 3, 2, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 0.1,
				}}
				style={{
					padding: "2",
					width: "12",
					height: "12",
					display: "flex",
				}}
			>
				<Image src="images/favicon.ico.png" w="100px" />
			</motion.div>
		</Box>
	);
}
