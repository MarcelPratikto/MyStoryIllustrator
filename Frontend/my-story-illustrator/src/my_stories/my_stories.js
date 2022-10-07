import StoryCoverButton from "./story_cover_button";
import NewStoryButton from "./new_story_button"

function MyStories(props){

    const stories = props.stories


    return(
        <div id="myStories">
            <NewStoryButton />
            {stories.map((story) => <StoryCoverButton CoverImageUri={story.CoverImageUri} />)}
        </div>
    );
}

export default MyStories;