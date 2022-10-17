import { WrapItem} from '@chakra-ui/react'

function StoryButtonWrapper(props){
    return(
        <WrapItem borderRadius="20px" shadow="lg" borderColor="blue" borderWidth="1px" borderStyle="solid" width={256} height={353} overflow="hidden">
            {props.element}
        </WrapItem>
    );
}

export default StoryButtonWrapper;