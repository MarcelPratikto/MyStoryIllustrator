import { Box, Flex } from "@chakra-ui/react"
import LeftPage from "../components/read_book/leftPage"
import RightPage from "../components/read_book/rightPage"
import PageFooter from "../components/read_book/page_footer"
import Header from "../components/header/header"

//the main page showing an open book
function BookPage() {


    return (
        <Box>
            <Header/>
            <Flex justify="space-between">
                <LeftPage />
                <RightPage />
            </Flex>
            <PageFooter />
        </Box>
    )
}

export default BookPage