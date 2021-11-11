import { HStack, VStack, Center, Heading } from "@chakra-ui/react";
import Panel from "./panel";


export default function Projects(): JSX.Element {
    return (
        <VStack h="75em" px={50}>
            <Center>
                <Heading fontSize="75px">Projects</Heading>
            </Center>
            <HStack>
                <Panel />
                <Panel />
            </HStack>
            <HStack>
                <Panel />
                <Panel />
            </HStack>
        </VStack>
    )
}