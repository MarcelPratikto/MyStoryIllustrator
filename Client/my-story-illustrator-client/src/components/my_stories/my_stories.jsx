import StoryCoverButton from "./story_cover_button";
import NewStoryButton from "./new_story_button";
import StoryButtonWrapper from "./story_button_wrapper";
import { Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';

import { Wrap } from '@chakra-ui/react';

function MyStories(props) {

    const stories = props.stories
    // TODO: make books a different colors
    // TODO: add subtle hover effect on the books
    return (
        <Wrap padding="20px" bg="#c6caef" flexGrow="1">
            <StoryButtonWrapper bg="#e1e1ea" >
                <NewStoryButton/>
            </StoryButtonWrapper>
            
            { stories && stories.map((story) => {
                return (
                    <StoryButtonWrapper key={story.id}>
                        <Link as={ReactRouterLink} to={'/book/' + story.id}  display="block" h="100%" _hover={{textDecoration: "none"}} >
                            <StoryCoverButton Title={story.title} CoverImageUri={story.coverUrl} />
                        </Link>
                    </StoryButtonWrapper>

                )
            }
            )}
        </Wrap>
    );
}

export default MyStories;