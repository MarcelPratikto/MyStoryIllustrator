import StoryCoverButton from "./storyCoverButton";
import NewStoryButton from "./bookSetupModal";
import StoryButtonWrapper from "./storyButtonWrapper";
import { Link, Spinner } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';

import { Wrap } from '@chakra-ui/react';

function MyStories(props) {

    const stories = props.stories
    
    const colors = ["#049BC5", "#EE4425", "#F9C524", "#F37D22", "#53498d", "#049BC5", "#EE4425", "#F9C524", "#F37D22", "#53498d"];
    const iterator = colors.values();

    // TODO: add subtle hover effect on the books

    return (
        <Wrap padding="20px" bg="white" flexGrow="1" overflowY="auto">
            <StoryButtonWrapper bg="#e1e1ea" color="black">
                <NewStoryButton/>
            </StoryButtonWrapper>
            { stories && stories.map((story) => {
                return (
                    <StoryButtonWrapper key={story.id} bg={iterator.next().value} color="white">
                        <Link as={ReactRouterLink} to={'/book/' + story.id}  display="block" h="100%" _hover={{textDecoration: "none"}} >
                            <StoryCoverButton Title={story.title} CoverImageUri={story.coverUrl} />
                        </Link>
                    </StoryButtonWrapper>

                )
            }
            )}
            {props.loading && <Spinner />
                
            }
        </Wrap>
    );
}

export default MyStories;