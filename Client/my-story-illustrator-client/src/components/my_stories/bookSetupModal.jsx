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

import { Heading, VStack, Center, Icon } from '@chakra-ui/react';
import { BsPlusCircle } from 'react-icons/bs';

import React, { useRef, useEffect } from 'react';
import useHttp from '../../util/use-http';
import {useAtom} from 'jotai';
import { userTokenAtom, userIdAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import StyleChoices from "../read_book/styleChoices";

function NewStoryButton() {
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

    return (
        <>
            
            <VStack border="none" background="none" onClick={onOpen} h='100%' w='100%' cursor='pointer'>
                <Heading size="lg">New Story</Heading>
                <Center>
                    <Icon as={BsPlusCircle} boxSize={24} />
                </Center>
            </VStack>

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

export default NewStoryButton;