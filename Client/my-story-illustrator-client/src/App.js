import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/loginForm';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
