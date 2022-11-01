import { useRadioGroup, Stack, Text, HStack, Flex, Wrap } from '@chakra-ui/react';
import StyleChoiceInput from './styleChoiceInput';

function StyleChoices() {
    const images = [
        {
            name: "Dr Suess", image: 'https://uw.org/wp-content/uploads/2018/05/dr-seuss.jpg',
        },
        {
            name: "Van Gogh", image: 'https://static01.nyt.com/images/2019/03/27/arts/26VANGOGH-BRITAIN-1/26VANGOGH-BRITAIN-1-videoSixteenByNineJumbo1600.jpg'
        },

    ]

    const { value, getRadioProps, getRootProps } = useRadioGroup({
        defaultValue: 'Dr Suess'
    })
    
    return (

          <Wrap {...getRootProps()}> 
            {images.map((image) => {
              return (
                <StyleChoiceInput
                  key={image.name}
                  image={image.image}
                  {...getRadioProps({ value: image.name })}
                />
              )
            })}
          </Wrap>
      )
}

export default StyleChoices;