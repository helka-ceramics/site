import React from 'react'
import Styled from 'react-systyle'

const img = ({ image, ...props }) => <img {...props} src={image.src} />

const Picture = Styled.as(img).with({
  maxWidth: '100%',
  maxHeight: '100%',
  pointerEvents: 'none',
  userSelect: 'none'
})

export default Picture
