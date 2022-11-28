import { Heading, Flex, Spacer, Center, IconButton, Spinner } from "@chakra-ui/react";
import GoBackButton from "./go_back_button";
import UserSettingsButton from "./user_settings_button";
import { userTokenAtom, currentBookAtom } from "../../store/atoms";
import { useAtom } from "jotai";
import { RiLogoutBoxLine, RiSave3Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import useHttp from '../../util/use-http';

function Header(props) {
    const navigate = useNavigate();
    let [userToken, setUserToken] = useAtom(userTokenAtom);
    let [currentBook] = useAtom(currentBookAtom);
    let showSettings = props.showSettings === undefined ? true : props.showSettings;
    let showBackArrow = props.showBackArrow === undefined ? true : props.showBackArrow;
    let showSaveIcon = props.showSaveIcon === undefined ? true : props.showBackArrow;
    const { isLoading, error, sendRequest } = useHttp();

    const logout = () => {
        setUserToken(null);
        navigate('/login')
    }

    const saveStory = () => {
        // TODO: update the book when this button is clicked
        console.log(currentBook)
        const request = currentBook
        sendRequest({
            url: 'http://localhost:8080/updateBook',
            method: 'PUT',
            body: request,
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            }
        }, response => {
            if (!error) {
                console.log('book saved successfully')
                console.log(response)
            } else {
                console.log('error')
                console.log(error)
            }
        })
    }

    return (
        <Flex minWidth='max-content' alignItems='center' justify='space-between' background="darkblue" py={2} px={3}>
            {showBackArrow && <GoBackButton />}
            <Spacer />
            <Center>
                <Heading color="white" >{props.heading}</Heading>
            </Center>
            <Spacer />
            {showSaveIcon && isLoading ? <Spinner color="white" variant="link" /> : <IconButton icon={<RiSave3Fill />} color="white" size="lg" variant="link" onClick={saveStory} />}
            {showSettings && <UserSettingsButton />}
            {userToken &&
                <IconButton
                    color="white"
                    variant="link"
                    size="lg"
                    icon={<RiLogoutBoxLine />}
                    onClick={logout}
                />}
        </Flex>
    );
}

export default Header;