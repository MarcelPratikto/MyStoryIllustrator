import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/loginForm';
import CreateAccForm from './components/createAccForm';

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
