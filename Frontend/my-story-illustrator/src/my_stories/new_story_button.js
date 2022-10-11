import {Text, Image, VStack, Box} from '@chakra-ui/react'

function NewStoryButton(){
    //TODO have a images folder, get plus button there
    return(
        <Box as='button' border="none">
            <VStack  border="none" background="none">
                <Text >New Story</Text>
                <Image src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt="Write a new story." width={100} height={100}></Image>
            </VStack>
        </Box>
    );
}

export default NewStoryButton;