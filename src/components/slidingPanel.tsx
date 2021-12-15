import {
	Box,
	Heading,
	HStack,
	VStack,
	Text,
	Image,
	Circle,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import NextChakraLink from "./nextChakraLink";
import { GoMarkGithub, GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { MdCircle } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

export function SlidingPanel({
	title,
	role,
	desc,
	image,
	github,
	link,
}): JSX.Element {
	const light = "var(--chakra-colors-brand-light)";
	return (
		<Box w="75vw" h="50vh" bg="brand.transparentLight" rounded="15px">
			<HStack align="start">
				<Image
					src={image}
					overflow="hidden"
					draggable="false"
					objectFit="cover"
					display={{ base: "none", md: "block" }}
					borderRadius="15px 0 0 15px"
					h="50vh"
					w="100%"
				/>
				<VStack h="50vh" justify="space-between" p="15px" w="100%">
					<VStack w="100%" align="start">
						<Heading>{title}</Heading>
						<Text color="brand.light">{role}</Text>
						<Text>{desc}</Text>
					</VStack>
					<HStack>
						<NextChakraLink href={github}>
							<GoMarkGithub size="30px" color={light} />
						</NextChakraLink>
						<NextChakraLink href={link}>
							<BiLinkExternal size="30px" color={light} />
						</NextChakraLink>
					</HStack>
				</VStack>
			</HStack>
		</Box>
	);
}

export function Slide({ infos, selected, setSelected }): JSX.Element {
	return (
		<VStack>
			<SlidingPanel
				key={selected}
				title={infos[selected].title}
				role={infos[selected].role}
				desc={infos[selected].desc}
				image={infos[selected].image}
				github={infos[selected].github}
				link={infos[selected].link}
			/>
			<HStack>
				<button
					onClick={() => {
						setSelected(
							selected - 1 < 0
								? Object.keys(infos).length - 1
								: selected - 1
						);
					}}
				>
					<IconContext.Provider value={{ size: "2em" }}>
						<GoTriangleLeft />
					</IconContext.Provider>
				</button>
				{infos.map((_, index) => {
					return (
						<Circle
							key={index}
							size="50px"
							onClick={() => setSelected(index)}
							bg={
								index === selected
									? "brand.light"
									: "brand.transparentLight"
							}
							cursor="pointer"
						>
							{index === selected ? (
								<IconContext.Provider value={{ size: "2em" }}>
									<MdCircle />
								</IconContext.Provider>
							) : (
								<IconContext.Provider value={{ size: "2em" }}>
									<MdCircle />
								</IconContext.Provider>
							)}
						</Circle>
					);
				})}
				<button
					onClick={() => {
						setSelected(
							selected + 1 >= Object.keys(infos).length
								? 0
								: selected + 1
						);
					}}
				>
					<IconContext.Provider value={{ size: "2em" }}>
						<GoTriangleRight />
					</IconContext.Provider>
				</button>
			</HStack>
		</VStack>
	);
}
