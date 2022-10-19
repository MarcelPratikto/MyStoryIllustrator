import StoryCoverButton from "./story_cover_button";
import NewStoryButton from "./new_story_button";
import StoryButtonWrapper from "./story_button_wrapper";

import { Wrap } from '@chakra-ui/react';

function MyStories(props){

    const stories = props.stories

    return(
        <Wrap>
            <StoryButtonWrapper element={<NewStoryButton/>}/>
            
            {stories.map((story) => <StoryButtonWrapper element={<StoryCoverButton Title = {story.Title} CoverImageUri={story.CoverImageUri} />}/>)}
        </Wrap>
    );
}

export default MyStories;