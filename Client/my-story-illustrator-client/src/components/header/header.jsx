import { Input, Heading, Flex, Spacer, Box, Center  } from "@chakra-ui/react";
import GoBackButton from "./go_back_button";
import UserSettingsButton from "./user_settings_button";

import {go_back_button_width} from '../../util/constants'

function Header(props){
    //Header expects to be told:
        //* Have we come from the login page?
            //*It runs an if/then statement to include the goBack button or not. Don't need a button to go back to the login page.
        //* The title of a page
            //* If this is a new book, "Title Here..."
            //* If this is an old book, the book's title
            //* If this is the "My Books" page, "My Books"

    const justSignedIn = props.justSignedIn;

    return(
        <Flex minWidth='max-content' alignItems='center' justify='space-between'>
            
            {(justSignedIn === false) &&
                <GoBackButton />
            }
            {(justSignedIn === true) &&
                <Box width={go_back_button_width}></Box>
            }
            <Spacer/>

            <Center>
                <Input placeholder={props.pageTitle} />
            </Center>

            <Spacer/>
            
            <UserSettingsButton />
        </Flex>
    );
}

export default Header;