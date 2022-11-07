import { WrapItem, Center} from '@chakra-ui/react';


function StoryButtonWrapper(props){

    return(

        <WrapItem
            borderRadius="10px"
            shadow="lg"
            bg={props.bg || "white"}
            width={256}
            height={353}
            overflow="hidden"
            paddingLeft={0}
            padding={2}
            display="block"
        >
            <Center h="100%">
                {props.children}
            </Center>
            
        </WrapItem>
    );
}

export default StoryButtonWrapper;