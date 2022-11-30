import { IconButton } from '@chakra-ui/react';
import { FaArrowLeft } from "react-icons/fa";

import {go_back_button_width} from '../../util/constants'

function GoBackButton({goBackHandler}){

    return(
        <IconButton
            width={go_back_button_width}
            variant="link"
            color="white"
            aria-label='Go Back'
            icon={<FaArrowLeft />}
            onClick={goBackHandler}
        />
    );
}

export default GoBackButton;