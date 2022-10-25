import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Link,
} from '@chakra-ui/react'
import React from 'react';

function LoginForm() {
    return (
      <div className="App">
        <Box m={20}
         boxSize="sm"
         border='2px'
         borderColor='gray.200'
         boxShadow='dark-lg' 
         p='6' 
         rounded='md' 
         bg='white'
         alignItems='center'
         justifyContent='center'
         textAlign='center'>
            <Box m={5}>
              <FormControl isRequired>
              <FormLabel> Username </FormLabel>
              <Input placeholder='Username' />
              </FormControl>
            </Box>
            <Box m={5}>
              <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <PasswordInput></PasswordInput>
              </FormControl>
            </Box>
            <Box>
              <Button borderRadius="10">Login</Button>
            </Box>
            <Box m={7}>
            <Link>Don't have an account? Click Here.</Link>
            </Box>
        </Box>
      </div>
    );
  }
  
  
  function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  export default LoginForm;