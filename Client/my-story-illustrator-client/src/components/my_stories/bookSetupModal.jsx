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
import React, { useRef, useEffect } from 'react';
import useHttp from '../../util/use-http';
import {useAtom} from 'jotai';
import { userTokenAtom, userIdAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import StyleChoices from "../read_book/styleChoices";

function BookSetupModal() {
    const [userToken, setUserToken] = useAtom(userTokenAtom);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {error, sendRequest } = useHttp();
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const styleInputRef = useRef();

    const saveBook = () => {
        const request = {
          title: titleInputRef.current.value,
          author: authorInputRef.current.value,
          style: styleInputRef.current.value
        } 
        sendRequest({
          url: 'http://localhost:8080/my_stories',
          //TODO is this right? /\
          method: 'POST',
          body: request,
          headers: {
            "Content-Type": "application/json",
            "Authorization": userToken
          }
          //TODO if the userToken's deleted/ the person's logged out, does the book take them back to login?
        }, response => {
          if (!error) {
            navigate("/read_book/{response.book_id}");
            //TODO navigate where? /\
          } else {
            console.error(error)
          }
        })
    }

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
                        <Button colorScheme='blue' mr={3} onClick={saveBook}>
                            Go
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookSetupModal