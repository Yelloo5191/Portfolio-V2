/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
    return (
        <Box
            px={4}
            py={2}
            as="button"
            fontSize={40}
            background="transparent"
            color="brand.text"
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "white",
                zIndex: -1,
                transition: "left .5s ease",
            }}
            _hover={{
                color: "brand.dark",
                _before: {
                    left: 0,
                },
            }}
            _active={{
                transform: "scale(0.90)",
                boxShadow: "md",
            }}
            {...props}
            display="flex"
            alignItems="center"
        >
            {props.children}
        </Box>
    );
}