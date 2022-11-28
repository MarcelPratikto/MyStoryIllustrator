import { Textarea } from "@chakra-ui/react"
import GenericPage from "./genericPage"

function LeftPage({text, updateText}) {
    const handleChange = (newText) => {
        updateText(newText.target.value)
    }

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
                value={text}
                onChange={handleChange}
            />
        </GenericPage>
    )
}

export default LeftPage