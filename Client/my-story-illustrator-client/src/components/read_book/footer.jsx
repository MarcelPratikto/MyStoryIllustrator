import { Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { GrNext, GrPrevious } from 'react-icons/gr'

function PageFooter({ spreadNum, incrementSpreadNum, decrementSpreadNum }) {
    const ARROW_COLOR = "#f9c524"

    return(
        <Flex alignItems={"center"} p="3" bg="#c2dee8">
            <Text>{spreadNum * 2 - 1}</Text>
            <Spacer />
            <IconButton mx="3" disabled={spreadNum <= 1} icon={<GrPrevious />} onClick={decrementSpreadNum} bg={ARROW_COLOR} />
            <IconButton mx="3" icon={<GrNext />} onClick={incrementSpreadNum} bg={ARROW_COLOR} />
            <Spacer />
            <Text>{spreadNum * 2}</Text>
        </Flex>
    )
}

export default PageFooter