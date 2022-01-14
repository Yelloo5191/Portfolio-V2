import ContainerBackground from "./containerBackground";
import { VStack } from "@chakra-ui/react";

export default function Intro(): JSX.Element {
	return (
		<ContainerBackground src="https://c.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif">
			<VStack height="100vh" width="100%"></VStack>
		</ContainerBackground>
	);
}
