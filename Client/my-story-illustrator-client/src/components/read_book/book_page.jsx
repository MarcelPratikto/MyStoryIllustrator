// pageText will be blank if it's a new page
import ImagePage from "./image_page";
import PageFooter from "./page_footer";

//Renamed to 'BookPage' to reduce confusion

function BookPage(props) {

    const nextPage = props.pageNumber + 1

    let previousPage = null


    if (props.pageNumber <= 1) {
        previousPage = null 
    }else{
        
        previousPage = props.pageNumber - 1
    }


    return(
        <>
            <form>
                <input type="text">{props.pageText}</input>
            </form> 

            
            <ImagePage caption={props.caption} imageUrl={props.imageUrl} />
            <PageFooter previousPage={previousPage} nextPage={nextPage} />
        </>
        
        
    );
}

export default BookPage;