import {Text, VStack, IconButton} from '@chakra-ui/react';
import {BsFillPlusCircleFill} from 'react-icons/bs';

import {story_image_width, story_image_height} from '../constants';

function NewStoryButton(){

    return(
        <>
            <VStack  border="none" background="none">
                <Text >New Story</Text>
                <IconButton border='none' bg="transparent" width={story_image_width - 16} height={story_image_height} aria-label='Write a new story.' icon={<BsFillPlusCircleFill />} size='lg' ></IconButton>
            </VStack>
        </>
    );
}

export default NewStoryButton;