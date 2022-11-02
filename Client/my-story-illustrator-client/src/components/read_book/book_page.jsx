// pageText will be blank if it's a new page
import ImagePage from "./image_page";

//Renamed to 'BookPage' to reduce confusion

function BookPage(props) {

    const nextPage = props.pageNumber + 1


    if (props.pageNumber <= 1) {
        const previousPage = null
    }else{
        
        const previousPage = props.pageNumber - 1
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