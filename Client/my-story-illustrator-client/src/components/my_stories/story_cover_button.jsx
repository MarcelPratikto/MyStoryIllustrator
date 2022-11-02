import {Text, VStack, Image} from '@chakra-ui/react';

import {story_image_height, story_image_width} from '../../util/constants';

//TODO make a solid color instead of a cover image to make things easier on ourselves

function StoryCoverButton(props){
    return(
        <>
            <VStack  border="none" background="none" >
                <Text>{props.Title}</Text>
                <Image height={story_image_height} width={story_image_width} src={props.CoverImageUri} alt={props.Title}></Image>
            </VStack>
        </>
    );
}

export default StoryCoverButton;