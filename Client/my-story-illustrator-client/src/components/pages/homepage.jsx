import MyStories from '../my_stories/my_stories';
import Header from '../../header/header';

function HomePage(props) {
    return(
        <>
            <Header justSignedIn = {props.justSignedIn} pageTitle = {props.pageTitle}/>
            <MyStories stories={props.stories} />
        </>
    )

}

export default HomePage;