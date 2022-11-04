import { IconButton } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";

function UserSettingsButton(){

    return(
        <IconButton aria-label="settings" variant="link" color="white" icon={<BsGearFill />} />
    );
}

export default UserSettingsButton;