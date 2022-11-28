import { Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { GrNext, GrPrevious } from 'react-icons/gr'

function PageFooter({ spreadNum, incrementSpreadNum, decrementSpreadNum }) {
    return(
        <Flex alignItems={"center"} p="3">
            <Text>{spreadNum * 2 - 1}</Text>
            <Spacer />
            <IconButton mx="3" disabled={spreadNum <= 1} icon={<GrPrevious />} onClick={decrementSpreadNum}/>
            <IconButton mx="3" icon={<GrNext />} onClick={incrementSpreadNum} />
            <Spacer />
            <Text>{spreadNum * 2}</Text>
        </Flex>
    )
}

export default PageFooter