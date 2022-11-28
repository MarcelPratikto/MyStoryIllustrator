import { useState, useEffect } from "react"
import { Flex } from "@chakra-ui/react"
import LeftPage from "../components/read_book/leftPage"
import RightPage from "../components/read_book/rightPage"
import PageFooter from "../components/read_book/footer"
import Header from "../components/header/header"
import { useParams } from "react-router-dom"
import { currentBookAtom } from "../store/atoms";
import { useAtom } from "jotai"

//the main page showing an open book
//this component needs to keep track of pages for each page and the footer component
function BookPage(props) {
    const [currentBook, setCurrentBook] = useAtom(currentBookAtom);
    const params = useParams();
    let [spreadNum, setSpreadNum] = useState(1);
    const [maxSpreadNum, setMaxSpreadNum] = useState(1);
    //this useEffect is to set the book we are reading, or get it from db if it wasn't passed in.
    useEffect(() => {
        if (!props.books) {
            //TODO: get book from db if it wasn't passed in

            //temporary dummy data:
            setCurrentBook({
                "id": 1,
                "title": "A book by Cierra",
                "author": "me",
                "userId": 1,
                "spreads": [
                    {
                        "spreadNumber": 1,
                        "imageUrl": "https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
                        "text": "this is about github logo and a small house on a green hill",
                        "caption": "a small house on a green hill",
                        "bookId": 1
                    },
                    {
                        "spreadNumber": 2,
                        "imageUrl": "https://www.realsimple.com/thmb/w5geXAkGNIPl694NoAIifjRDQLQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthiest-food-for-every-day-2000-e807f4237f3345769c78114cca8c5f4a.jpg",
                        "text": "This is the story of my whole life",
                        "caption": "a picture of fried rice with spam",
                        "bookId": 1,
                        "updatedAt": "2022-11-18T00:03:03.081Z",
                        "createdAt": "2022-11-18T00:03:03.081Z"
                    }
                ]
            });
        }
        else {
            setCurrentBook(props.books.filter(b => b.id = params.id)[0]);
        }
    }, [props.books, params.id, setCurrentBook])

    useEffect(() => {
        if (!currentBook) return
        setMaxSpreadNum(currentBook.spreads.length - 1)
    }, [currentBook]);


    const incrementSpreadNum = () => {
        console.log('spreadNum:', spreadNum)
        console.log('maxSpreadNum:', maxSpreadNum)
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
        newSpreads[spreadNum].imageUrl = imageUrl

        setCurrentBook({
            ...currentBook,
            spreads: newSpreads
        })
    }

    const updateCaption = (caption) => {
        let newSpreads = currentBook.spreads
        newSpreads[spreadNum].caption = caption
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