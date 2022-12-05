import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login';
import { currentBookAtom, userTokenAtom } from './store/atoms';
import { useAtom } from "jotai";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import HomePage from './pages/homepage';
import BookPage from './pages/bookPage';

function App() {
    const [userToken] = useAtom(userTokenAtom);

    return (
        <ChakraProvider>
            <Router>
                {userToken ? (
                    <Routes>
                        <Route path="/" element={<HomePage pageTitle={"My Stories"} />} />
                        <Route path="/book/:id" element={<BookPage />} />
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