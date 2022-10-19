import { WrapItem, Center} from '@chakra-ui/react'

function StoryButtonWrapper(props){
    const width = 256;
    const height = 353;
    return(

        <WrapItem borderRadius="20px" shadow="lg" borderColor="blue" borderWidth="1px" borderStyle="solid" width={256} height={353} overflow="hidden">
            <Center width={width} height={height}>
                {props.element}
            </Center>
            
        </WrapItem>
    );
}

export default StoryButtonWrapper;