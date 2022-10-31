import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/login/loginForm';
import CreateAccForm from './components/login/createAccForm';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <LoginForm />
        <CreateAccForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
