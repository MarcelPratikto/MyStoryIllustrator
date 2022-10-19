import { WrapItem, Center} from '@chakra-ui/react';

import {story_image_width, story_image_height} from '../constants';

function StoryButtonWrapper(props){

    return(

        <WrapItem borderRadius="20px" shadow="lg" borderColor="blue" borderWidth="1px" borderStyle="solid" width={256} height={353} overflow="hidden">
            <Center width={story_image_width} height={story_image_height + 53}>
                {props.element}
            </Center>
            
        </WrapItem>
    );
}

export default StoryButtonWrapper;