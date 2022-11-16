import MyStories from '../components/my_stories/my_stories';
import Header from '../components/header/header';
import {Flex} from '@chakra-ui/react'

function HomePage(props) {
    return (
        <Flex h="100%" flexDir="column">
            <Header heading="My Stories" showSettings={false} showBackArrow={false} />
            <MyStories stories={props.stories} flexGrow="1"/>
        </Flex>
    )

}

export default HomePage;