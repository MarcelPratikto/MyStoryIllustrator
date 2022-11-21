import { Textarea } from "@chakra-ui/react"
import GenericPage from "./genericPage"

function LeftPage(props) {

    console.log(props.text)
    return (
        <GenericPage>
            <Textarea
                variant="unstyled"
                cursor="text"
                maxH="100%"
                placeholder="Once upon a time..."
                focusBorderColor="lightGrey"
                fontSize="2xl"
                resize="none"
                value={props.text}
            />
        </GenericPage>
    )
}

export default LeftPage