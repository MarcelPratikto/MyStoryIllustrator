function GoBackButton(){

    // TODO test that history.back() works
    
    // TODO get our own commercially-usable arrow image


    return(
        <button onclick="history.back()" style={{background: 'images/Long-arrow-alt-left.jpg'}}></button>  
    );
}

export default GoBackButton;