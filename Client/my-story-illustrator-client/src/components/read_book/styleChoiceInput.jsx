import {
    Image,
    useRadio,
    chakra,
    Box
} from "@chakra-ui/react"


function StyleChoiceInput(props) {
    const { image, ...radioProps } = props
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
        useRadio(radioProps)

    return (
        <chakra.label {...htmlProps} cursor='pointer'>
            <input {...getInputProps({})} hidden />
            <Box
                {...getCheckboxProps()}
                bg={state.isChecked ? 'green.200' : 'transparent'}
                w={150}
                p={1}
            >
                <Image src={image} boxSize="150" objectFit="cover" alt={props.alt} {...getLabelProps()} />
            </Box>
        </chakra.label>
    )

}

export default StyleChoiceInput;