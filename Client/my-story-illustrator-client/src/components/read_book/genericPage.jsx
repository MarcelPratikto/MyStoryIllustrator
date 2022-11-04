import { Box } from "@chakra-ui/react"

function GenericPage(props) {


    return (
        <Box
            w="100%"
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