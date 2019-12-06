import React from 'react'
import Styled from 'react-systyle'

const img = ({ image, ...props }) => <img {...props} src={image.src} />

const Picture = Styled.as(img).with({
  objectFit: 'contain',
  pointerEvents: 'none',
  maxWidth: '75%',
  maxHeight: '75%'
})

export default Picture
