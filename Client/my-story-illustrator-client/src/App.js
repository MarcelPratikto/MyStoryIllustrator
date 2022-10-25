import { ChakraProvider } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './components/pages/homepage';
import Login from './components/pages/login';

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

function Homepage() {
  if (logged_in == true){
    return(
      <HomePage></HomePage>
    )
  }else{
    return(
      <Login />
    )
  }  
}

export default App;
