import React, { forwardRef, useState } from 'react'
import { InputGroup, InputRightElement, Button, Input } from '@chakra-ui/react'


function PasswordInput(props, ref) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password'
          ref={ref}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} tabIndex={-1}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
}
  
export default forwardRef(PasswordInput);