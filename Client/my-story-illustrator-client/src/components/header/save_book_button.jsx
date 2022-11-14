import React from 'react'
import { Button, Stack } from "@chakra-ui/react";

function save_book_button() {
  return (
  <Stack direction='row' spacing={4} align='center'>
  <Button
    isLoading
    loadingText='Saving'
    colorScheme='blue'
    variant='outline'
    spinnerPlacement='start'
  >
    Save
  </Button>
  </Stack>
  )
}

export default save_book_button