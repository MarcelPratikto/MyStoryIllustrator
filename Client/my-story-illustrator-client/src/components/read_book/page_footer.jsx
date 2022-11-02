// You can put if statements in the return statement using the && notation

function PageFooter(props) {

    const nextPage = props.pageNumber + 1

    //TODO what happens if we ask for a page we don't have?


    if (props.pageNumber <= 1) {
        const previousPage = null
        
    }else{
        const previousPage = props.pageNumber - 1
    }
    
    return(
        <div>
            {(previousPage != null) &&
                <PreviousPageArrow /> 
            }
            {(nextPage != null) &&
                <NextPageArrow /> 
            }
        </div>
    );
}