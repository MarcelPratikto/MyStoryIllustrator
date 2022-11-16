import { IconButton } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";
import React from "react";
import BookSetupModal from "../read_book/bookSetupModal";
import { isModalOpenAtom } from '../../store/atoms';
import { useAtom } from 'jotai';

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

function UserSettingsButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()

    });

    return (
        <>
            <IconButton onClick={onOpen} aria-label="settings" variant="link" color="white" icon={<BsGearFill />} />

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

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Delete Book
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                             Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UserSettingsButton;