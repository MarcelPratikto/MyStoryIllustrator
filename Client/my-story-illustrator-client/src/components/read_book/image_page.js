function ImagePage(props){
    const mode = props.mode

    return(
        <div className="imagePage">
        {(mode == "edit") &&
            <>
                <img src={props.imageUrl} alt={props.caption}></img>
                <form>
                    <input type="text">{props.caption}</input>
                    <input type="submit" value="Generate Image"></input>
                </form>
            </>
            
        }
        {(mode != "edit") &&
            <>
                <img src={props.imageUrl} alt={props.caption}></img>
                <p>{props.caption}</p>
            </>
            
        }
        </div>   
        
    );
}

export default ImagePage;