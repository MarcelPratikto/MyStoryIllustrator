import MyStories from '../../my_stories/my_stories';
import Header from '../../header/header';

import {stories, justSignedIn, editingStory, pageTitle} from '../../constants';
//These were for testing.
//TODO this won't work to show off until we get states working and send these props here

//TODO make this just editing, nothing else (don't forget to change the sub-elements)

function HomePage(props) {
    return(
        <>
            <Header justSignedIn = {props.justSignedIn} editingStory = {props.editingStory} pageTitle = {props.pageTitle}/>
            <MyStories stories={props.stories} />
        </>
    )

}

export default HomePage;