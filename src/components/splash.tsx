import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

export default function SplashAnimation(): JSX.Element {
	return (
		<Box
			m={0}
			p={0}
			h="100vh"
			w="100%"
			d="flex"
			alignItems="center"
			justifyContent="center"
			background="brand.secondary"
		>
			<motion.div
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
				}}
				transition={{
					duration: 2,
					ease: "easeInOut",
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 1,
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
