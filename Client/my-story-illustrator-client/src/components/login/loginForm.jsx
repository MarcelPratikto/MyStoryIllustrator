import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Link,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react';
import useHttp from '../../util/use-http';
import PasswordInput from './passwordInput';
import {useAtom} from 'jotai';
import { userTokenAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [userToken, setUserToken] = useAtom(userTokenAtom);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest } = useHttp();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const tryLogin = () => {
    const request = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value
    } 
    sendRequest({
      url: 'http://localhost:8080/login',
      method: 'POST',
      body: request,
      headers: {
        "Content-Type": "application/json"
      }
    }, response => {
      if (!error) {
        setUserToken(response.token);
        navigate("/");
      } else {
        console.error(error)
      }
    })
  }

  useEffect(() => {
    if (userToken) {
      navigate('/')
    }

  }, [navigate, userToken]);

  return (
    <Box >
      <Box 
        m="auto"
        mt={20}
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
            <Input placeholder='Username' ref={usernameInputRef} />
          </FormControl>
        </Box>
        <Box m={5}>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput ref={passwordInputRef}></PasswordInput>
          </FormControl>
          {
            error && <Text color="red">Invalid username/password</Text>
          }
        </Box>
        <Box>
          {isLoading
            ?
            <Spinner />
            :
            <Button borderRadius="10" onClick={tryLogin}>Login</Button>
          }
          
        </Box>
        <Box m={7}>
          <Link as={ReactRouterLink} to={'/signup'}>Don't have an account? Click Here.</Link>
        </Box>
      </Box>
    </Box>
  );
}



export default LoginForm;