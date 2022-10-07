function StoryCoverButton(props){
    return(
        <button className="myStoryButton storyCover">
            {props.title}
            <img className="storyCoverImage" src={props.cover_image_uri}></img>
        </button>
    );
}

export default StoryCoverButton;