import { Heading, Box } from "@chakra-ui/react";

export default function Panel(): JSX.Element {

    return (
        <>
            <Box
                bg="brand.gradient"
                w="100%"
                h="20em"
            >
                <Heading>Project Name</Heading>

            </Box>
        </>        
    );

}