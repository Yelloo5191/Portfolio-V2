import {
	chakra,
	Heading,
	VStack,
	HStack,
	Center,
	FormControl,
	FormLabel,
	Textarea,
	Input,
	Box,
	Text,
	Alert,
	AlertTitle,
	AlertDescription,
	CloseButton,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Button from "@components/button";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact(): JSX.Element {
	const ChaForm = chakra(Form);
	const [viewAlert, setViewAlert] = useState(false);

	const upVariant = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<Container>
			<ContainerInside py="15px">
				<Box display={viewAlert ? "block" : "none"}>
					<Alert status="success">
						<AlertTitle color="black" mr={2}>
							Contacted!
						</AlertTitle>
						<AlertDescription color="black">
							Your message was successfully sent, thank you for
							contacting me.
						</AlertDescription>
						<CloseButton
							color="black"
							position="absolute"
							right="8px"
							top="8px"
							onClick={() => setViewAlert(false)}
						/>
					</Alert>
				</Box>
				<VStack minH="100vh">
					<Center width="100%">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={upVariant}
							transition={{ duration: 1 }}
						>
							<Box
								bg="brand.transparentLight"
								p="15px"
								rounded={15}
								w="100%"
							>
								<Heading textAlign="center">Contact Me</Heading>
								<Text color="brand.light">
									Have a request, offer, or complain? Contact
									me directly through the site!
								</Text>
							</Box>
						</motion.div>
					</Center>
					<Formik
						initialValues={{
							name: "",
							email: "",
							message: "",
						}}
						onSubmit={(values, actions) => {
							fetch("/api/contact", {
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
						}}
					>
						<ChaForm w={{ base: "100%", md: "50%" }}>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={upVariant}
								transition={{ duration: 1, delay: 0.5 }}
							>
								<Box
									bg="brand.transparentLight"
									p={15}
									my={15}
									rounded={15}
								>
									<FormControl isRequired>
										<FormLabel color="brand.light">
											Name
										</FormLabel>
										<Field
											name="name"
											render={({ field }) => (
												<Input
													placeholder="Ex: Jeff"
													borderColor="brand.light"
													{...field}
												/>
											)}
										/>
									</FormControl>
								</Box>
							</motion.div>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={upVariant}
								transition={{ duration: 1, delay: 0.7 }}
							>
								<Box
									bg="brand.transparentLight"
									p={15}
									my={15}
									rounded={15}
								>
									<FormControl isRequired>
										<FormLabel color="brand.light">
											Email
										</FormLabel>
										<Field
											name="email"
											render={({ field }) => (
												<Input
													type="email"
													placeholder="Ex: hovhannes@yello.tech"
													borderColor="brand.light"
													{...field}
												/>
											)}
										/>
									</FormControl>
								</Box>
							</motion.div>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={upVariant}
								transition={{ duration: 1, delay: 0.9 }}
							>
								<Box
									bg="brand.transparentLight"
									p={15}
									my={15}
									rounded={15}
								>
									<FormControl isRequired>
										<FormLabel color="brand.light">
											Message
										</FormLabel>
										<Field
											name="message"
											render={({ field }) => (
												<Textarea
													placeholder="Ex: Hey, nice website!"
													borderColor="brand.light"
													{...field}
												/>
											)}
										/>
									</FormControl>
								</Box>
							</motion.div>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={upVariant}
								transition={{ duration: 1, delay: 1.1 }}
							>
								<HStack justify="space-between">
									<Button
										type="reset"
										bg="brand.transparentLight"
										color="brand.light"
									>
										Reset
									</Button>
									<Button type="submit">Send</Button>
								</HStack>
							</motion.div>
						</ChaForm>
					</Formik>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
