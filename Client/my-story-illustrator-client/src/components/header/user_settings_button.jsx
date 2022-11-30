import { IconButton } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";
import React, { useRef, useState} from "react";
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
import { useAtom } from "jotai"
import useHttp from '../../util/use-http';
import { userTokenAtom, currentBookAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

function UserSettingsButton(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentBook, setCurrentBook] = useAtom(currentBookAtom);
    const [userToken] = useAtom(userTokenAtom);
    const navigate = useNavigate();
    const {error, sendRequest } = useHttp();
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const [styleValue, styleSetValue] = useState()

    const saveBook = () => {
        const request = {
          title: titleInputRef.current.value,
          author: authorInputRef.current.value,
          style: styleValue
        }

        sendRequest({
          url: 'http://localhost:8080/saveBook',
          method: 'POST',
          body: request,
          headers: {
            "Content-Type": "application/json",
            "Authorization": userToken
          }
        }, response => {
          if (!error) {
            navigate(`/book/${response.id}`);
          } else {
            console.error(error)
          }
        })
    }

    const deleteBook = () => {
            const request = {
                bookId: currentBook.id
            }

        sendRequest({
          url: 'http://localhost:8080/deleteBook',
          method: 'POST',
          body: request,
          headers: {
            "Content-Type": "application/json",
            "Authorization": userToken
          }
        }, response => {
          if (!error) {
            navigate(`/book/${response.id}`);
          } else {
            console.error(error)
          }
        })
    }
    
    function HandleTitleChange(event) {
         setCurrentBook({
             ...currentBook, title: event.target.value
        })
    }

    function HandleAuthorChange(event) {
        console.log(event)
        setCurrentBook({
            ...currentBook, author: event.target.value
        })
    }

    //function HandleDeleteButtonPress() {
       // deleteBook;
        //() => navigate(-1);
    //}

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
                            <Input type='text' ref={titleInputRef} placeholder="New Title Here" value={currentBook.title} onChange={HandleTitleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Author</FormLabel>
                            <Input type='text' ref={authorInputRef} placeholder="New Author Here" value={currentBook.author} onChange={HandleAuthorChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Change Art Style</FormLabel>
                            <StyleChoices value={currentBook.style} handleChange={styleSetValue}/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            
                            loadingText='Deleting'
                            colorScheme='red'
                            mr={3} 
                            onClick={deleteBook}
                            variant='outline'
                            spinnerPlacement='start'
                        >
                            Delete Book
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={saveBook}>
                            Update Book
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