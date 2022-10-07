function StoryCoverButton(props){
    return(
        <button className="myStoryButton">
            {props.Title}
            <img className="storyCoverImage" src={props.CoverImageUri} alt={props.Title}></img>
        </button>
    );
}

export default StoryCoverButton;