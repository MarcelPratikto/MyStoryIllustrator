import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login';
import { userTokenAtom, userIdAtom } from './store/atoms';
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
    const [userId, setUserId] = useAtom(userIdAtom);
    const { isLoading, error, sendRequest } = useHttp();
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        if (userToken) {
            const request = {
                userId: userId
            }

            sendRequest({
                url: 'http://localhost:8080/getAllBooks',
                method: 'POST',
                body: request,
                headers: {
                    "Content-Type": "application/json",
                }
            }, response => {
                if (!error) {
                    setBooks(() => response.books)
                } else {
                    console.log(error)
                }
            })
        }

    },[userToken, sendRequest, error]);

    return (
        <ChakraProvider>
            <Router>
                {userToken ? (
                    <Routes>
                        <Route path="/" element={<HomePage stories={books} pageTitle={"My Stories"} />} />
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