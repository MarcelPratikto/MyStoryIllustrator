function GoBackButton(){

    // TODO test that history.back() works
    
    // TODO get our own commercially-usable arrow image


    return(
        <button id="goBackButton" onClick="history.back()" style={{background: require('./images/Long-arrow-alt-left.jpg')}}></button>  
    );
}

export default GoBackButton;