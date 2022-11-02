import { Image, Box, Flex, Button, Textarea, Spinner, Text } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import useHttp from '../../util/use-http';

function GenerateImage(props) {
    const [prompt] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const { isLoading, error, sendRequest } = useHttp();

    const captionInputRef = useRef();

    const generateImage = () => {

        const request = {
            prompt: captionInputRef.current.value,
            username: 'testUser', //change this later to use real username
            style: "Vincent Van Gogh"
        } 
        sendRequest({
          url: 'http://localhost:8080/generateImage',
          method: 'POST',
          body: request,
          headers: {
            "Content-Type": "application/json"
          }
        }, response => {
                //handle success
                setImageUrl(response.imageUrl);
                 
        })
 
    }
    useEffect(() => {
        if (error) {
            //image generation server is down. Use dummy image instead
            setImageUrl(`https://lightwidget.com/wp-content/uploads/local-file-not-found.png`)
            console.log('there was an error getting the image')
        }

    }, [error]);
    
    return(
        <Flex flexDirection="column" height="100%">
            <Flex flexGrow={1} border={imageUrl == "" && "2px"} borderColor="lightGrey" justify="center">
                <Image
                    src={imageUrl}
                    alt={prompt}
                />
            </Flex>
            <Box>
                <Textarea
                    mt={3}
                    px={3}
                    w="full"
                    ref={captionInputRef}
                    placeholder='Write a description of the picture you would like to create. Use nouns and adjectives as much as possible.'
                    variant="unstyled"
                    cursor="text"
                ></Textarea>
                <Flex alignItems="center">
                    <Button my={3} onClick={generateImage} disabled={isLoading}>Generate Image</Button>
                    {isLoading && <Spinner ml={2} />}
                    {error && <Text color="red" ml={2}>An error occurred. Please try again later.</Text>}
                </Flex>
            </Box>
        </Flex>   
        
    );
}

export default GenerateImage;