import { ChakraProvider } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './components/pages/homepage';
import ReadBook from './components/pages/read_book';
import Login from './components/pages/login';

const dummy_books = [
  {
    id: "",
    title: "The little engine that could not",
    author: "",
    userId: "",
    pages: [
      {
        bookID: "",
        id: "",
        pageNumber:  1,
        text: "What kind of dumb engine can't get up a hill?",
        caption: "Ha! Ha! Look at its stubby little wheels!",
        imageUrl: 'https://picsum.photos/200/300'
      }
    ]
  }
]
//TODO who knows what the actual data sturcture's gonna be?
//java syntax for dicts is like objects

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage stories={dummy_books} pageTitle={"My Stories"}/>}/>
          <Route path="/book" element={<ReadBook/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

//we only need routes for HomePage ("My Stories"), a story, and the login

export default App;
