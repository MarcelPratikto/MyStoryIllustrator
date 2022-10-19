import { IconButton } from '@chakra-ui/react';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import {go_back_button_width} from '../constants'

function GoBackButton(){

    // TODO test that history.back() works
    
    // TODO get our own commercially-usable arrow image


    return(
        <IconButton width={go_back_button_width} border='none' bg="transparent" onClick="history.back()" aria-label='Go Back' icon={<BsFillArrowLeftSquareFill />}></IconButton>  
    );
}

export default GoBackButton;