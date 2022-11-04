import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/login';
import { Provider } from "jotai";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import HomePage from './pages/homepage';
import BookPage from './pages/bookPage';

const dummy_books = [
    {
        id: 1,
        title: "The little engine that could not",
        author: "",
        userId: "",
        pages: [
            {
                bookID: "",
                id: "",
                pageNumber: 1,
                text: "What kind of dumb engine can't get up a hill?",
                caption: "Ha! Ha! Look at its stubby little wheels!",
                imageUrl: 'https://picsum.photos/200/300'
            }
        ]
    }
]

function App() {
    return (
        <Provider>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage stories={dummy_books} pageTitle={"My Stories"} />} />
                        <Route path="/book/:id" element={<BookPage />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </ChakraProvider>
        </Provider>
    );
}


export default App;