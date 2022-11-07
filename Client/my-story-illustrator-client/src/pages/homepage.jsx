import MyStories from '../components/my_stories/my_stories';
import Header from '../components/header/header';
import {useAtom} from 'jotai';
import { isLoggedInAtom } from '../store/atoms';
import {Flex} from '@chakra-ui/react'

function HomePage(props) {
    const [isLoggedIn, updateIsLoggedIn] = useAtom(isLoggedInAtom);
    return (
        <Flex h="100%" flexDir="column">
            <Header heading="My Stories" showSettings={false} showBackArrow={false} />
            <MyStories stories={props.stories} flexGrow="1"/>
        </Flex>
    )

}

export default HomePage;