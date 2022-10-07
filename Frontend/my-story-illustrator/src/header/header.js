import GoBackButton from "./go_back_button";
import UserSettingsButton from "./user_settings_button";

function Header(props){
    // going back after loging in will take you back to the login. The button shouldn't do that. 
    // an if/then statement to include it or not

    // pageTitle should be "Title Here..." if this is called as an editor of a new book

    //TODO I think read_book should handle these conditions by itself, but I wasn't sure I could include a header in it

    const justSignedIn = props.justSignedIn;
    const editingStory = props.editingStory;

    return(
        <header id="header">
            {(justSignedIn === false) &&
                <GoBackButton />
            }
            {(editingStory) &&
                <form id="title">
                    <input type="text">{props.pageTitle}</input>
                </form>
            }
            {(editingStory === false) &&
                <h1 id="title">{props.pageTitle}</h1>
            }
            
            <UserSettingsButton />
        </header>
    );
}

export default Header;