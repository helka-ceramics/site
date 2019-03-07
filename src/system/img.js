import React from 'react'
import Styled from 'react-systyle'

const Img = Styled.as(({ source, ...props }) => <img {...props} src={source} />)

export default Img
