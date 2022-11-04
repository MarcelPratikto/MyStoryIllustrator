import { IconButton } from '@chakra-ui/react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import {go_back_button_width} from '../../util/constants'

function GoBackButton(){
    const navigate = useNavigate()

    return(
        <IconButton
            width={go_back_button_width}
            variant="link"
            color="white"
            aria-label='Go Back'
            icon={<FaArrowLeft />}
            onClick={() => navigate(-1)}
        />
    );
}

export default GoBackButton;