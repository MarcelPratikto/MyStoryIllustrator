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

import React, { useRef, useState} from 'react';
import useHttp from '../../util/use-http';
import {useAtom} from 'jotai';
import { userTokenAtom, currentBookAtom } from '../../store/atoms';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import StyleChoices from "../read_book/styleChoices";

function NewStoryButton() {
    const [userToken] = useAtom(userTokenAtom);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {error, sendRequest } = useHttp();
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const [styleValue, styleSetValue] = useState()
    //TODO use ref or use the atom?

    //any time you set the book atom, it overwrites the whole thing
    //onChangeHandler to update each proprty

    const saveBook = () => {
        console.log('saving book...')
        const request = {
          title: titleInputRef.current.value,
          author: authorInputRef.current.value,
          style: styleValue
        }
        //TODO figgure out how to get something out of StyleChoices
        //TODO should StyleChoices be StyleCHoiceInput?
        console.log(request) 
        sendRequest({
          url: 'http://localhost:8080/saveBook',
          method: 'POST',
          body: request,
          headers: {
            "Content-Type": "application/json",
            "Authorization": userToken
          }
        }, response => {
            console.log(response)
          if (!error) {
            navigate(`/read_book/${response.id}`);
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
                            <Input type='text' ref={titleInputRef}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Author</FormLabel>
                            <Input type='text' ref={authorInputRef}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Art Style</FormLabel>
                            <StyleChoices handleChange={styleSetValue}/>
                            
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