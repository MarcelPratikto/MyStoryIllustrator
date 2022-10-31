import { ChakraProvider } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './components/pages/homepage';
import Login from './components/pages/login';

import { editingStory, justSignedIn, pageTitle, stories } from './constants';
//These were for testing.

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

//we only need routes for HomePage ("My Stories"), a story, and the login
//I think login is already handled?

function getStories(userId){
  return(
    stories
  )
}

function Homepage() {
  if (logged_in == true){
    user_stories = getStories(userId)
    return(
      <HomePage stories={user_stories} justSignedIn={justSignedIn} editingStory={editingStory} pageTitle={pageTitle}></HomePage>
    )
  }else{
    //don't need to keep track of where to come back to, we'll always go to <HomePage>
    return(
      <Login />
    )
  }  
}

//TODO I don't want to tackle routing for the Login stuff without a team huddle about it

function getBook(bookID){
  return (stories[0])
}

function getPage(bookID, page){

  return (pageText, imageCaption, image)
}

//TODO should this be moved to 'homepage.jsx?'
//TODO this is pseudocode
function readBook(bookID, page) {
  book = getBook(bookID)
  title = book.title
  pageText, imageCaption, image = getPage(bookID, page)


  return(
    <ReadBook title={title} pageText={pageText} imageCaption={imageCaption} image={image}></ReadBook>
  )
}

export default App;
