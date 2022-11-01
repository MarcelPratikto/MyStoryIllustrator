import MyStories from '../components/my_stories/my_stories';
import Header from '../components/header/header';
import {useAtom} from 'jotai';
import { isLoggedInAtom } from '../../store/atoms';


import { stories, justSignedIn, editingStory, pageTitle } from '../util/constants';
//These were for testing.
//TODO this won't work to show off until we get states working and send these props here

function HomePage(props) {
    const [isLoggedIn, updateIsLoggedIn] = useAtom(isLoggedInAtom);
    return(
        <>
            <Header justSignedIn = {props.justSignedIn} editingStory = {props.editingStory} pageTitle = {props.pageTitle}/>
            <MyStories stories={props.stories} />
        </>
    )

}

export default HomePage;