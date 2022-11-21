import { Heading, Flex, Spacer, Center, IconButton } from "@chakra-ui/react";
import GoBackButton from "./go_back_button";
import UserSettingsButton from "./user_settings_button";
import { userTokenAtom } from "../../store/atoms";
import { useAtom } from "jotai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    let [userToken, setUserToken] = useAtom(userTokenAtom);
    let showSettings = props.showSettings === undefined ? true : props.showSettings;
    let showBackArrow = props.showBackArrow === undefined ? true : props.showBackArrow;

    const logout = () => {
        setUserToken(null);
        navigate('/login')
    }

    return (
        <Flex minWidth='max-content' alignItems='center' justify='space-between' background="darkblue" py={2} px={3}>
            {showBackArrow && <GoBackButton />}
            <Spacer />
            <Center>
                <Heading color="white" >{props.heading}</Heading>
            </Center>
            <Spacer />
            {userToken &&
                <IconButton
                    color="white"
                    variant="link"
                    size="lg"
                    icon={<RiLogoutBoxLine />}
                    onClick={logout}
                />}
            {showSettings && <UserSettingsButton />}
        </Flex>
    );
}

export default Header;