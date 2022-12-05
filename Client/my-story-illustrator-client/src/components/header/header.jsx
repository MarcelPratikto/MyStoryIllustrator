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
    let [currentBook, setCurrentBook] = useAtom(currentBookAtom);
    let showSettings = props.showSettings === undefined ? true : props.showSettings;
    let showBackArrow = props.showBackArrow === undefined ? true : props.showBackArrow;
    let showSaveIcon = props.showSaveIcon === undefined ? true : props.showSaveIcon;
    const { isLoading, error, sendRequest } = useHttp();

    const logout = () => {
        setUserToken(null);
        navigate('/login')
    }

    const saveStory = () => {
        // TODO: update the book when this button is clicked
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
            } else {
                console.log(error)
            }
        })
    }

    const goBackHandler = () => {
        //when someone hits the back arrow, let's save their story, clear the current book, and then navigate.
        saveStory();
        setCurrentBook({
            title: '',
            imageUrl: '',
            author: '',
            style: '',
            spreads: []
        });
        navigate('/');
    }

    return (
        <Flex minWidth='max-content' alignItems='center' justify='space-between' background="#f37d22" py={2} px={3}>
            {showBackArrow && <GoBackButton goBackHandler={goBackHandler}/>}
            <Spacer />
            <Center>
                <Heading color="white" >{props.heading}</Heading>
            </Center>
            <Spacer />
            {showSaveIcon && <IconButton icon={<RiSave3Fill />} color="white" size="lg" variant="link" onClick={saveStory} disabled={isLoading} />}
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