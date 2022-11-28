import { IconButton } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";
import React from "react";
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
import StyleChoices from "../read_book/styleChoices"
import { useParams } from "react-router-dom"
import { currentBookAtom } from "../../store/atoms";
import { useAtom } from "jotai"

function UserSettingsButton(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()

    });

    const [currentBook, setCurrentBook] = useAtom(currentBookAtom);

    function HandleTitleChange(title) {
        setCurrentBook({
            ...currentBook, title: title
        })
    }

    function HandleAuthorChange(author) {
        setCurrentBook({
            ...currentBook, author: author
        })
    }

   // const {getinfo, updateInfo} = 

    return (
        <>
            <IconButton onClick={onOpen} aria-label="settings" variant="link" color="white" icon={<BsGearFill />} />

            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Settings</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel> Title </FormLabel>
                            <Input type='text' placeholder="New Title Here" value={currentBook.title} onChange={HandleTitleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Author</FormLabel>
                            <Input type='text' placeholder="New Author Here" value={currentBook.author} onChange={HandleAuthorChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Change Art Style</FormLabel>
                            <StyleChoices/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            isLoading
                            loadingText='Deleting'
                            colorScheme='red'
                            mr={3} 
                            onClick={onClose}
                            variant='outline'
                            spinnerPlacement='start'
                        >
                            Delete Book
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                             Update
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