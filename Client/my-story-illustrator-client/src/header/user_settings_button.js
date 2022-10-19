import { IconButton } from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";

function UserSettingsButton(){

    return(
        <IconButton aria-label="settings" icon={<BsGearFill />} />
    );
}

export default UserSettingsButton;