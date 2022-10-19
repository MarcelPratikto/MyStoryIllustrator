import {Text, VStack, Image} from '@chakra-ui/react'

function StoryCoverButton(props){
    return(
        <>
            <VStack  border="none" background="none" >
                <Text>{props.Title}</Text>
                <Image src={props.CoverImageUri} alt={props.Title}></Image>
            </VStack>
        </>
    );
}

export default StoryCoverButton;