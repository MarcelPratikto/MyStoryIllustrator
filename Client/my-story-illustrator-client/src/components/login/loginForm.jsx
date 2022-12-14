import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Link,
  Spinner,
  Text,
  Image
} from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react';
import useHttp from '../../util/use-http';
import PasswordInput from './passwordInput';
import {useAtom} from 'jotai';
import { userTokenAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-png.png';

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
        h="lg"
        boxShadow='dark-lg'
        p='3'
        rounded='md'
        bg='white'
        alignItems='center'
        justifyContent='center'
        textAlign='center'>
        <Image src={logo} boxSize='175px' justifyContent='center' m='auto'/>
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
            <Button type="submit" onSubmit={tryLogin} borderRadius="10" onClick={tryLogin}>Login</Button>
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