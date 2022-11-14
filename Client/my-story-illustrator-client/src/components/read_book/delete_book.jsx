import React from 'react'

function delete_book() {
  return (
    <Stack direction='row' spacing={4} align='center'>
  <Button
    isLoading
    loadingText='Deleting'
    colorScheme='blue'
    variant='outline'
    spinnerPlacement='start'
  >
    Delete Book
  </Button>
  </Stack>
  )
}

export default delete_book