// You can put if statements in the return statement using the && notation

function PageFooter(props) {
    // if (typeof(props.nextPage) !== 'undefined' && props.nextPage != null) {
    //     const nextPage = props.nextPage
    // }else{
    //     const nextPage = null
    // }

    // if (typeof(props.previousPage) !== 'undefined' && props.previousPage != null) {
    //     const previousPage = props.previousPage
    // }else{
    //     const previousPage = null
    // }
    
    return(
        <div>
            {/* {(previousPage != null) &&
                <PreviousPageArrow /> 
            }
            {(nextPage != null) &&
                <NextPageArrow /> 
            } */}
        </div>
    );
}

export default PageFooter