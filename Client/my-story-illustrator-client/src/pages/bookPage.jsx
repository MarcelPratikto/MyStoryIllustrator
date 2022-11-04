import { Box, Flex } from "@chakra-ui/react"
import LeftPage from "../components/read_book/leftPage"
import RightPage from "../components/read_book/rightPage"
import PageFooter from "../components/read_book/page_footer"
import Header from "../components/header/header"
import {useParams} from "react-router-dom"

//the main page showing an open book
function BookPage(props) {
    const params = useParams();
    const book = props.books.filter(b => b.id = params.id)[0]
    return (
        <Box>
            <Header heading={book.title} />
            <Flex justify="space-between">
                <LeftPage />
                <RightPage />
            </Flex>
            <PageFooter />
        </Box>
    )
}

export default BookPage