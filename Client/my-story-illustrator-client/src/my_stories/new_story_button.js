import {Text, VStack, Box, IconButton} from '@chakra-ui/react'

function NewStoryButton(){

    return(
        <Box as='button' border="none">
            <VStack  border="none" background="none">
                <Text >New Story</Text>
                <IconButton aria-label='Write a new story.' icon={<BsFillPlusCircleFill />} ></IconButton>
            </VStack>
        </Box>
    );
}

export default NewStoryButton;