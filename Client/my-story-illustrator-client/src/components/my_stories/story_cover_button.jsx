import { Heading } from '@chakra-ui/react';

function StoryCoverButton(props) {
    return (
        <Heading textAlign={"center"} size="lg">
            {props.Title}
        </Heading>
    );
}

export default StoryCoverButton;