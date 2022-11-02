import { Box } from "@chakra-ui/react"

function GenericPage(props) {


    return (
        <Box
            w="100%"
            maxH="800px"
            h="100vh"
            m={3}
            p={3}
            borderRadius="md"
            shadow="base"
        >
            {props.children}
        </Box>
    )
}

export default GenericPage