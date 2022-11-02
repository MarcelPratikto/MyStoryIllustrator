import { ChakraProvider } from '@chakra-ui/react'

import BookSetupModal from './components/read_book/bookSetupModal';

function App() {
  return (
    <ChakraProvider>
      <BookSetupModal />
    </ChakraProvider>
  );
}

export default App;
