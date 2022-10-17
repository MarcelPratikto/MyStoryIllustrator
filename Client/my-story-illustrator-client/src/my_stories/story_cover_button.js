import {Box, Text, VStack, Image} from '@chakra-ui/react'

function StoryCoverButton(props){
    return(
        <Box as='button' border="none">
            <VStack  border="none" background="none" >
                <Text>{props.Title}</Text>
                <Image src={props.CoverImageUri} alt={props.Title}></Image>
            </VStack>
        </Box>
    );
}

export default StoryCoverButton;