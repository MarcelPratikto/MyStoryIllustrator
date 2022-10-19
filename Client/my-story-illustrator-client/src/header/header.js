import { Input } from "@chakra-ui/react";
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
        <>
            
            {(justSignedIn === false) &&
                <GoBackButton />
            }
            {(editingStory) &&
                <Input placeholder={props.pageTitle} />
            }
            {(editingStory === false) &&
                <Heading size='2xl' noOfLines={1}>{props.pageTitle}</Heading>
            }
            
            <UserSettingsButton />
        </>
    );
}

export default Header;