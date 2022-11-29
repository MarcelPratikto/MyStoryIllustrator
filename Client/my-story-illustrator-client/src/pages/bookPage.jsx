import { useState, useEffect } from "react"
import { Flex } from "@chakra-ui/react"
import LeftPage from "../components/read_book/leftPage"
import RightPage from "../components/read_book/rightPage"
import PageFooter from "../components/read_book/footer"
import Header from "../components/header/header"
import { useParams } from "react-router-dom"
import { currentBookAtom, userTokenAtom } from "../store/atoms";
import { useAtom } from "jotai"
import useHttp from '../util/use-http';

//the main page showing an open book
//this component needs to keep track of pages for each page and the footer component
function BookPage(props) {
    const [currentBook, setCurrentBook] = useAtom(currentBookAtom);
    const [userToken] = useAtom(userTokenAtom)
    const params = useParams();
    const { error, sendRequest } = useHttp();
    let [spreadNum, setSpreadNum] = useState(1);
    const [maxSpreadNum, setMaxSpreadNum] = useState(1);
    
    //this useEffect is to set the book we are reading, or get it from db if it wasn't passed in.
    useEffect(() => {
        if (!props.books) {
            //TODO: get book from db if it wasn't passed in
            sendRequest({
                url: `http://localhost:8080/getBook/${params.id}`,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userToken
                }
            }, response => {
                if (!error) {
                    setCurrentBook(() => response.book)
                }
            })
        }
        else {
            setCurrentBook(props.books.filter(b => b.id = params.id)[0]);
        }
    }, [props.books, params.id, setCurrentBook, error, sendRequest, userToken])

    useEffect(() => {
        if (!currentBook) return
        setMaxSpreadNum(currentBook.spreads.length - 1)
    }, [currentBook]);


    const incrementSpreadNum = () => {
        //  Check if > than max spread num, if so add new page?
        if (spreadNum > maxSpreadNum) {
            console.log('making a new spread')
            let newSpreads = currentBook.spreads;
            newSpreads.push({
                bookId: parseInt(params.id),
                imageUrl: '',
                caption: '',
                text: '',
                spreadNumber: spreadNum + 1 
            })
            setCurrentBook({
                ...currentBook
            })
        }
        setSpreadNum(spreadNum + 1)

        console.log('currentBook:', currentBook)
    }

    const decrementSpreadNum = () => {
        setSpreadNum(spreadNum - 1)
    }

    const updateText = (text) => {

        let newSpreads = currentBook.spreads
        newSpreads[spreadNum - 1].text = text
        setCurrentBook({
            ...currentBook,
            spreads: newSpreads
        })
    }

    const updateImage = (imageUrl) => {
        let newSpreads = currentBook.spreads
        newSpreads[spreadNum - 1].imageUrl = imageUrl

        setCurrentBook({
            ...currentBook,
            spreads: newSpreads
        })
    }

    const updateCaption = (caption) => {
        let newSpreads = currentBook.spreads
        newSpreads[spreadNum - 1].caption = caption
        setCurrentBook({
            ...currentBook,
            spreads: newSpreads
        })
    }

    return (
        <Flex h="100%" flexDir="column">
            <Header heading={currentBook?.title} />
            <Flex justify="space-between" h="100%">
                <LeftPage
                    text={currentBook?.spreads[spreadNum - 1]?.text}
                    updateText={updateText} />
                <RightPage
                    image={currentBook?.spreads[spreadNum - 1]?.imageUrl}
                    caption={currentBook?.spreads[spreadNum - 1]?.caption}
                    updateImage={updateImage}
                    updateCaption={updateCaption}
                />
            </Flex>
            <PageFooter spreadNum={spreadNum} incrementSpreadNum={incrementSpreadNum} decrementSpreadNum={decrementSpreadNum} />
        </Flex>
    )
}

export default BookPage