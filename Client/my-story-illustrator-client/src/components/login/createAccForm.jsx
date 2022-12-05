import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Link
} from '@chakra-ui/react'
import React, { useRef } from 'react';
import PasswordInput from './passwordInput';
import useHttp from '../../util/use-http';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateAccForm() {
  const { isLoading, error, sendRequest } = useHttp();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const navigate = useNavigate();

  const trySignup = () => {

    const request = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
      confirmPassword: confirmPasswordInputRef.current.value
    }
    sendRequest({
      url: 'http://localhost:8080/signup',
      method: 'POST',
      body: request,
      headers: {
        "Content-Type": "application/json"
      }
    }, response => {
      console.log(response)
      if (!error) {
        //handle success
        navigate(`/login`)
        // redirect to login page
      }
      
    })
  }

  //TODO: add field validation
  return (
    <Box >
      <Box m={"auto"}
        mt={20}
        boxSize="md"
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
            <Input placeholder='Username' ref={usernameInputRef} />
          </FormControl>
        </Box>
        <Box m={5}>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput ref={passwordInputRef}></PasswordInput>
          </FormControl>
        </Box>
        <Box m={5}>
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput ref={confirmPasswordInputRef}></PasswordInput>
          </FormControl>
        </Box>
        <Box>
          <Button borderRadius="10" onClick={trySignup}>Create Account</Button>
        </Box>
        <Box m={7}>
          <Link as={ReactRouterLink} to={'/login'}>Already have an account? Click Here.</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateAccForm;