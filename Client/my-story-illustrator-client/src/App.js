import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/login/loginForm';
import CreateAccForm from './components/login/createAccForm';
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
    <ChakraProvider>
      <div className="App">
        <LoginForm />
        <CreateAccForm />
      </div>
    </ChakraProvider>
    </Provider>
  );
}

export default App;
