import { Button, InputGroup, Stack } from "@chakra-ui/react";

//This is made by Kyle just for funsies, mostly.

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
          />
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
        </Button>
        </InputRightElement>
    </InputGroup>
    )
}

function Login(){
    return(
        <Stack spacing = {4}>
            <Input isRequired = {true} type = 'username' placeholder = 'username'></Input>
            <PasswordInput />
            <Button>Submit</Button>
            {/* #TODO submit should hook into the backend here*/}
            {/* #TODO loging in should be full-featured: 'forgot password', 'username or password incorrect', etc */}
        </Stack>
    );
}

export default Login;