function ImagePage(props){

    return(
            <>
                <img src={props.imageUrl} alt={props.caption}></img>
                <form>
                    <input type="text">{props.caption}</input>
                    <input type="submit" value="Generate Image"></input>
                </form>
            </> 
    );
}

export default ImagePage;