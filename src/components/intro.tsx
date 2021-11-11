import { VStack, HStack, Heading } from "@chakra-ui/react";
import Button from "@components/button";

export default function Intro(): JSX.Element {
    return (
        <VStack h="75em" align="start" w="50%" px={50}>
            <Heading fontSize="75px" >Greetings,</Heading>
            <HStack>
                <Heading color="#FFDDB5" fontSize="52px" isTruncated >I am</Heading>
                <Heading fontSize="72px" fontWeight="extrabold">Yelloo</Heading>
            </HStack>
            <Button>Who?</Button>
        </VStack>
    )
}