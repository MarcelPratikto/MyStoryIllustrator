function UserSettingsButton(){

    //TODO update where the link points to
    //TODO actually add the icon
    return(
        <a id="userSettingsButton" href="UserSettings"><img src={require('./images/gear_icon.jpg')} alt="settings"></img></a>
    );
}

export default UserSettingsButton;