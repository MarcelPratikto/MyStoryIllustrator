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
    {
      name: "Clement Hurd", image: 'http://weylin.ddns.net/kparksrsp/ae29b190645111ed830cfd2024f9ff11.png',
      //Goodnight Moon
    },
    {
      name: "cross stitch", image: 'http://weylin.ddns.net/kparksrsp/dd1b6790645211ed830cfd2024f9ff11.png',
    },
    {
      name: "Eric Carle", image: "http://weylin.ddns.net/kparksrsp/1786b240645311ed830cfd2024f9ff11.png",
      //Very Hungry Caterpilliar
    },
    {
      name: "Berenstain Bears", image: "http://weylin.ddns.net/kparksrsp/2c4e68c0645411ed830cfd2024f9ff11.png",
    },
    {
      name: "Where The Wild Things Are", image: "http://weylin.ddns.net/kparksrsp/baaace60645411ed830cfd2024f9ff11.png",
    },
    {
      name: "Winnie the Pooh", image: "http://weylin.ddns.net/kparksrsp/0f7188d0645511ed830cfd2024f9ff11.png",
    },
    {
      name: "Cocomellon", image: "http://weylin.ddns.net/kparksrsp/37be8030645611ed830cfd2024f9ff11.png",
    },
    {
      name: "crayon", image: "http://weylin.ddns.net/kparksrsp/905d1da0645611ed830cfd2024f9ff11.png",
    },
    {
      name: "watercolor", image: "http://weylin.ddns.net/kparksrsp/0ca9fd00645811ed830cfd2024f9ff11.png",
    },
    {
      name: "colored pencil", image: "http://weylin.ddns.net/kparksrsp/4b601b50645911ed830cfd2024f9ff11.png",
    },
    {
      name: "pencil sketch", image: "http://weylin.ddns.net/kparksrsp/e1947d80645b11ed830cfd2024f9ff11.png",
    }

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