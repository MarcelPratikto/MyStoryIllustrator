import { Heading, Flex, Spacer, Box, Center } from "@chakra-ui/react";
import GoBackButton from "./go_back_button";
import UserSettingsButton from "./user_settings_button";


function Header(props) {
    let showSettings = props.showSettings === undefined ? true : props.showSettings 
    let showBackArrow = props.showBackArrow === undefined ? true : props.showBackArrow

    return (
        <Flex minWidth='max-content' alignItems='center' justify='space-between' background="darkblue" py={2} px={3}>
            {showBackArrow && <GoBackButton />}
            <Spacer />
            <Center>
                <Heading color="white" >{props.heading}</Heading>
            </Center>
            <Spacer />
            {showSettings && <UserSettingsButton />}
        </Flex>
    );
}

export default Header;