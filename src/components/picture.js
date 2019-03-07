import React from 'react'
import Styled from 'react-systyle'
import GatsbyImage from 'gatsby-image'
import Box from '../system/box'

const Container = Box.with({
  display: 'flex',
  flexDirection: 'column',
  p: 1
})

const Img = Styled.as(GatsbyImage).with({
  flex: 1,
  imgStyle: { objectFit: 'contain' }
})

const Description = Styled.as('span').with({
  flexShrink: 0,
  textAlign: 'center',
  p: 1
})

const Picture = ({ image, description, ...props }) => (
  <Container {...props}>
    <Img fluid={image} mb={1} />
    <Description children={description} />
  </Container>
)

export default Picture
