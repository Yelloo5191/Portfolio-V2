import {
	VStack,
	HStack,
	Stack,
	Box,
	Heading,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	FormControl,
	FormLabel,
	DrawerBody,
	DrawerFooter,
	Textarea,
	Alert,
	AlertTitle,
	AlertDescription,
	CloseButton,
} from "@chakra-ui/react";
import Button from "./button";
import { useDisclosure } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReqHelp(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [viewAlert, setViewAlert] = useState(false);
	const [viewReq, setViewReq] = useState(true);

	const upVariant = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 2,
				delay: 0.3,
			},
		},
	};

	return (
		<>
			<Stack zIndex={1} m={15} pos="fixed" bottom={0} right={0}>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={upVariant}
				>
					<Box
						display={viewReq ? "block" : "none"}
						w="300px"
						bg="brand.transparentLight"
						p={15}
						borderRadius={15}
					>
						<Heading fontSize="25px">Need help?</Heading>
						<Text>Send a message!</Text>
						<Button onClick={onOpen}>Yes!</Button>
						<CloseButton
							color="white"
							position="absolute"
							right="8px"
							top="8px"
							onClick={() => setViewReq(false)}
						/>
					</Box>
				</motion.div>
			</Stack>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					backdropFilter="blur(12px)"
					bg="brand.transparentLight"
				>
					<DrawerCloseButton />
					<DrawerHeader>Report an issue</DrawerHeader>

					<DrawerBody>
						<Formik
							initialValues={{
								message: "",
							}}
							onSubmit={(values, actions) => {
								setTimeout(() => {
									fetch("/api/reqHelp", {
										method: "POST",
										headers: {
											Accept: "application/json, text/plain, */*",
											"Content-Type": "application/json",
										},
										body: JSON.stringify(values),
									});
									setViewAlert(true);
									actions.setSubmitting(false);
									actions.resetForm();
								}, 1000);
							}}
						>
							<FormControl isRequired>
								<FormLabel color="brand.light">
									Report
								</FormLabel>
								<Form id="reqHelp">
									<Field
										name="message"
										render={({ field }) => (
											<Textarea
												placeholder="Ex: Contact page isn't loading!"
												borderColor="brand.light"
												{...field}
											/>
										)}
									/>
								</Form>
							</FormControl>
						</Formik>
					</DrawerBody>
					<DrawerFooter>
						<VStack>
							<Box display={viewAlert ? "block" : "none"}>
								<Alert status="success">
									<VStack>
										<AlertTitle color="black" mr={2}>
											Contacted!
										</AlertTitle>
										<AlertDescription color="black">
											Your message was successfully sent,
											thank you for contacting me.
										</AlertDescription>
									</VStack>
									<CloseButton
										color="black"
										position="absolute"
										right="8px"
										top="8px"
										onClick={() => setViewAlert(false)}
									/>
								</Alert>
							</Box>
							<HStack>
								<Button
									variant="outline"
									mr={3}
									onClick={onClose}
								>
									Cancel
								</Button>
								<Button
									type="submit"
									form="reqHelp"
									colorScheme="blue"
								>
									Send
								</Button>
							</HStack>
						</VStack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
