import { useRadioGroup, Wrap } from '@chakra-ui/react';

import StyleChoiceInput from './styleChoiceInput';

function StyleChoices({handleChange, value}) {
  

  const images = [
    {
      name: "Van Gogh", image: 'http://weylin.ddns.net/testuser/e30cd500703511edb5d43b0e0c6b45f6.png'
    },
    {
      name: "cross stitch", image: 'http://weylin.ddns.net/kparksrsp/dd1b6790645211ed830cfd2024f9ff11.png',
    },
    {
      name: "Eric Carle", image: "http://weylin.ddns.net/kparksrsp/1786b240645311ed830cfd2024f9ff11.png",
      //Very Hungry Caterpilliar
    },
    {
      name: "watercolor painting", image: "http://weylin.ddns.net/kparksrsp/0ca9fd00645811ed830cfd2024f9ff11.png",
    },
    {
      name: "colored pencil", image: "http://weylin.ddns.net/kparksrsp/4b601b50645911ed830cfd2024f9ff11.png",
    },
    {
      name: "acrylic painting", image: "http://weylin.ddns.net/testuser/c764f2a0703611edb5d43b0e0c6b45f6.png"
    },
    {
      name: "a vibrant digital illustration", image: "http://weylin.ddns.net/testuser/fcfc2a90703711edb5d43b0e0c6b45f6.png"
    },
    {
      name: "drawn in MS paint", image: "http://weylin.ddns.net/testuser/a34522d0703811edb5d43b0e0c6b45f6.png"
    },
    {
      name: "mixed media", image: "http://weylin.ddns.net/testuser/e1120f10703811edb5d43b0e0c6b45f6.png"
    },
    {
      name: "a vibrant, minimalistic children's illustration", image: "http://weylin.ddns.net/testuser/a9265870703a11edb5d43b0e0c6b45f6.png"
    }

  ]

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: value,
    onChange: handleChange,
  })

  return (

    <Wrap {...getRootProps()}>
      {images.map((image) => {
        return (
          <StyleChoiceInput
            key={image.name}
            image={image.image}
            alt={image.name}
            {...getRadioProps({ value: image.name })}
          />
        )
      })}
    </Wrap>
  )
}

export default StyleChoices;