import Header from '../header/header';
import BookPage from '../read_book/book_page';

//a better naming scheme between this page, 
//which has everyhting including the header
//and the one in the read_book folder which has just the text/images and the footer (with left-right buttons)

function ReadBook(props){
    return(
        <>
        <Header justSignedIn={props.justSignedIn} pageTitle={props.pageTitle}></Header>
        <BookPage pageNumber={props.pageNumber} pageText={props.pageText} caption={props.caption} imageUrl={props.imageUrl}></BookPage>
        </>
    )
}