// pageText will be blank if it's a new page
import ImagePage from "./generateImage";

function ReadBook(props) {
    const mode = props.mode
    
    if (typeof(props.nextPage) !== 'undefined' && props.nextPage != null) {
        const nextPage = props.nextPage
    }else{
        const nextPage = null
    }

    if (typeof(props.previousPage) !== 'undefined' && props.previousPage != null) {
        const previousPage = props.previousPage
    }else{
        const previousPage = null
    }


    return(
        <div>
            {mode == "edit" &&
                <form>
                    <input type="text">{props.pageText}</input>
                </form> 
            }
            {(mode != "edit") &&
                <p>{props.pageText}</p>
            }
            
            <ImagePage caption={props.caption} imageUrl={props.imageUrl} mode={mode} />
            <PageFooter previousPage={previousPage} nextPage={nextPage} />
        </div>
        
        
    );
}

export default ReadBook;