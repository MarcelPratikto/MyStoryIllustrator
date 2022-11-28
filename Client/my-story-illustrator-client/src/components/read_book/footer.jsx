import { Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import {GrNext, GrPrevious} from 'react-icons/gr'

function PageFooter(props) {

    return(
        <Flex alignItems={"center"} p="3">
            <Text>{props.spreadNum * 2 - 1}</Text>
            <Spacer />
            <IconButton mx="3" disabled={props.spreadNum <= 1} icon={<GrPrevious />} onClick={() => {props.setSpreadNum(props.spreadNum - 1)} }/>
            <IconButton mx="3" icon={<GrNext />} onClick={() => {props.setSpreadNum(props.spreadNum + 1)} } />
            <Spacer />
            <Text>{props.spreadNum * 2}</Text>
        </Flex>
    )
}

export default PageFooter