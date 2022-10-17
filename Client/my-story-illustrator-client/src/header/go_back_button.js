import { IconButton } from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function GoBackButton(){

    // TODO test that history.back() works
    
    // TODO get our own commercially-usable arrow image


    return(
        <IconButton onClick="history.back()" aria-label='Go Back' icon={<BsFillArrowLeftSquareFill />}></IconButton>  
    );
}

export default GoBackButton;