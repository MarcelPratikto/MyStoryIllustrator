import { useState } from "react"
import { Flex } from "@chakra-ui/react"
import LeftPage from "../components/read_book/leftPage"
import RightPage from "../components/read_book/rightPage"
import PageFooter from "../components/read_book/footer"
import Header from "../components/header/header"
import {json, useParams} from "react-router-dom"

//the main page showing an open book
//this component needs to keep track of pages for each page and the footer component
function BookPage(props) {
    let book = {};
    const params = useParams();
    if (!props.book) {
        //TODO: get book fresh from db if it wasn't passed in

        //temporary dummy data:
        book = {
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
        }
    }
    else {
        book = props.books.filter(b => b.id = params.id)[0]
    }
    let spreads = book.spreads

    let [curSpread, setCurSpread] = useState(spreads[0]);

    const setSpreadNum = (index) => {
        if (index > spreads.length) {
            setCurSpread({
                "spreadNumber": index,
                    "imageUrl": "",
                    "text": "",
                    "caption": "",
            })
        }
        else {
            setCurSpread(spreads[index - 1])
        }
    }

    return (
        <Flex h="100%" flexDir="column">
            <Header heading={book.title} />
            <Flex justify="space-between" h="100%">
                <LeftPage text={ curSpread.text } />
                <RightPage image={curSpread.imageUrl} caption={curSpread.caption} />
            </Flex>
            <PageFooter spreadNum={curSpread.spreadNumber} setSpreadNum={setSpreadNum} />
        </Flex>
    )
}

export default BookPage