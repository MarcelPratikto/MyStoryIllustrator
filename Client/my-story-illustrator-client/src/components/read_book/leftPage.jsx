import { Textarea } from "@chakra-ui/react"
import GenericPage from "./genericPage"

function LeftPage() {


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
            />
        </GenericPage>
    )
}

export default LeftPage