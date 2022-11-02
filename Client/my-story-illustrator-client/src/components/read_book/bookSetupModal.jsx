import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input
} from "@chakra-ui/react";
import { useEffect } from "react";
import StyleChoices from "./styleChoices";

function BookSetupModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()

    });

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Setup</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Author</FormLabel>
                            <Input type='text' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Art Style</FormLabel>
                            <StyleChoices />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Go
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookSetupModal