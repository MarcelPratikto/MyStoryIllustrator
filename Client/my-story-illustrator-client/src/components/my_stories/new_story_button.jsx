import { Heading, VStack, Center, Icon } from '@chakra-ui/react';
import { BsPlusCircle } from 'react-icons/bs';
import BookSetupModal from './bookSetupModal';

function NewStoryButton() {

    return (
        <>
            <VStack border="none" background="none" onClick={BookSetupModal.onOpen}>
                <Heading size="lg">New Story</Heading>
                <Center>
                    <Icon as={BsPlusCircle} boxSize={24} />
                </Center>
            </VStack>
        </>
    );
}

export default NewStoryButton;