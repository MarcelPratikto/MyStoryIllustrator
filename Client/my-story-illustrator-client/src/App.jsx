import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/login/loginForm';
import CreateAccForm from './components/login/createAccForm';
import BookPage from './pages/bookPage';

function App() {
  return (
    <ChakraProvider>
      <BookPage />
    </ChakraProvider>
  );
}

export default App;
