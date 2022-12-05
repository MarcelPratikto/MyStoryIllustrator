import MyStories from '../components/my_stories/my_stories';
import Header from '../components/header/header';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { userTokenAtom } from '../store/atoms';
import { useAtom } from 'jotai';
import useHttp from '../util/use-http';

function HomePage() {
    const [userToken] = useAtom(userTokenAtom);
    const { isLoading, error, sendRequest } = useHttp();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (userToken) {
            sendRequest({
                url: 'http://localhost:8080/getAllBooks',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userToken
                }
            }, response => {
                if (!error) {
                    setBooks(() => response.books)
                }
            })
        }


    }, [userToken, sendRequest, error]);


    return (
        <Flex h="100%" flexDir="column">
            <Header heading="My Stories" showSettings={false} showBackArrow={false} showSaveIcon={false} />
            <MyStories stories={books} flexGrow="1" loading={isLoading} />
        </Flex>
    )

}

export default HomePage;