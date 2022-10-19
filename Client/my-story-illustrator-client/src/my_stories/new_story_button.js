import {Text, VStack, IconButton} from '@chakra-ui/react'
import {BsFillPlusCircleFill} from 'react-icons/bs'

function NewStoryButton(){

    return(
        <>
            <VStack  border="none" background="none">
                <Text >New Story</Text>
                <IconButton aria-label='Write a new story.' icon={<BsFillPlusCircleFill />} size='lg' ></IconButton>
            </VStack>
        </>
    );
}

export default NewStoryButton;