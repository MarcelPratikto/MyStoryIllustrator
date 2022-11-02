import { ChakraProvider } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './components/pages/homepage';
import Login from './components/pages/login';

import { editingStory, justSignedIn, pageTitle, stories } from './util/constants';
//These were for testing.

const tempJustSignedIn = false;

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/book">
            <readBook />
          </Route>
          <Route path="/login">
            <login />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

const dummy_db = {
  2814 : {
    books: {
      1: {
        title: "The Little Engine that Couldn't",
        coverUrl: 'https://picsum.photos/{story_image_width}/{story_image_height}',
        pages: {
          1: {
            text: "What kinda dumb train can't get up a hill?",
            imageCaption: "Ha! Ha! Look at it's stubby little wheels!",
            imageUrl : 'https://picsum.photos/200/300'
          }
        } 
      }
    }
  }
};

//TODO who knows what the actual data sturcture's gonna be?
//TODO java syntax for dicts is probably different

//we only need routes for HomePage ("My Stories"), a story, and the login
//I think login is already handled?

const logged_in = false;

function getStories(userId){
  return(
    dummy_db[userId]['books']
  )
}

function Homepage() {
  if (logged_in == true){
    user_stories = getStories(userId)
    pageTitle = "My Stories"

    tempJustSignedIn = justSignedIn;

    justSignedIn = false;

    return(
      <HomePage stories={user_stories} pageTitle={pageTitle}></HomePage>
    )
  }else{
    //don't need to keep track of where to come back to, we'll always go to <HomePage>
    logged_in = true;
    //TODO I didn't want to try testing the server. put this back in an have the logged_in look at Jotai

    justSignedIn = true;
    //return(
    //  <Login />
    //)

  }  
}

//TODO should this be moved to 'homepage.jsx?'
//TODO this is pseudocode
function readBook(bookID, pageNumber) {

  tempJustSignedIn = justSignedIn;

  justSignedIn = false;
            
  if (bookID != null) {
    book = user_stories[bookID]
    title = book[title]
    page = book['pages'][pageNumber]
    pageText = page['text']
    imageCaption = page['imageCaption']
    image = page['imageUrl']
  }else{
    title = "Title Here..."
    pageText = "Start Writting..."
    imageCaption = "Write a caption to make a new picture..."
    image = "" //TODO what do we use for the url if there's no picture?
  }
    


  return(
    <ReadBook justSignedIn={tempJustSignedIn} title={title} pageNumber={pageNumber} pageText={pageText} imageCaption={imageCaption} image={image}></ReadBook>
  )
}

export default App;
