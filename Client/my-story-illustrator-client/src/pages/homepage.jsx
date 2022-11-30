import MyStories from '../components/my_stories/my_stories';
import Header from '../components/header/header';
import {Flex} from '@chakra-ui/react'
import UserSettingsButton from "../components/header/user_settings_button"

function HomePage(props) {
    return (
        <Flex h="100%" flexDir="column">
            <Header heading="My Stories" showSettings={false} showBackArrow={false} />
            <MyStories stories={props.stories} flexGrow="1" loading={props.loading} />
        </Flex>
    )

}

export default HomePage;