import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login';
import { userTokenAtom } from './store/atoms';
import { useAtom } from "jotai";
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import useHttp from './util/use-http';

import HomePage from './pages/homepage';
import BookPage from './pages/bookPage';

function App() {
    const [userToken, setUserToken] = useAtom(userTokenAtom);
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

    }, [error, sendRequest, userToken]);

    if (error) {
        // for now just assume it is an expired jwt or something. Refine once we have more specific error messages in place
        console.log('could not get books')
        setUserToken(null)
    }

    return (
        <ChakraProvider>
            <Router>
                {userToken ? (
                    <Routes>
                        <Route path="/" element={<HomePage stories={books} pageTitle={"My Stories"} loading={isLoading} />} />
                        <Route path="/book/:id" element={<BookPage books={books} />} />
                        <Route path="*" element={<Navigate replace to="/" />} />

                    </Routes>
                ) : (

                    <Routes>
                        <Route path="/" element={<Navigate replace to="/login" />} />
                        <Route path="/login" element={<Login isSignUp={false} />} />
                        <Route path="/signup" element={<Login isSignUp={true} />} />
                        <Route path="*" element={<Navigate replace to="/login" />} />
                    </Routes>
                )
                }
            </Router>
        </ChakraProvider>
    );
}


export default App;