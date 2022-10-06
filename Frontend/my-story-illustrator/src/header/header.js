function Headers(){
    return(
        <header>
            {/*TODO the arrow link needs to go back to the previous page*/}
            {/*TODO get our own commercially-usable arrow image*/}
            <a onclick="history.back()"><img src="images/Long-arrow-alt-left.jpg" alt="go back" style="width:42px;height:42px;"></img></a>
        </header>
    );
}