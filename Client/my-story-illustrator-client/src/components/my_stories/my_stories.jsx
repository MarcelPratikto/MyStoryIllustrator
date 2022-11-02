import StoryCoverButton from "./story_cover_button";
import NewStoryButton from "./new_story_button";
import StoryButtonWrapper from "./story_button_wrapper";
import {Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'; 

import { Wrap } from '@chakra-ui/react';

//TODO how does react/java do Dictionaries?
//TODO keep track of book indices/ids in order to read them

function MyStories(props) {

    const stories = props.stories

    return (
        <Wrap>
            <StoryButtonWrapper element={<NewStoryButton />} />

            {stories.map((story) => {
                return (
                    <Link as={ReactRouterLink} to={'/book/' + story.id} key={story.id}>
                        <StoryButtonWrapper element={<StoryCoverButton Title={story['title']} CoverImageUri={story['coverUrl']} />} />
                    </Link>
                    
                )
            }
            )}
        </Wrap>
    );
}

export default MyStories;