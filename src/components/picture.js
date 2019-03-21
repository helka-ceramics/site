import GatsbyImage from 'gatsby-image'
import Styled from 'react-systyle'

const Picture = Styled.as(GatsbyImage).with(
  ({ image, description, ...props }) => ({
    ...props,

    fluid: image,
    title: description,

    flex: 1,
    imgStyle: { objectFit: 'contain' },
    pointerEvents: 'none'
  })
)

export default Picture
