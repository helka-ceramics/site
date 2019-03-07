import React from 'react'

import Box from '../system/box'
import Img from '../system/img'

import leftArrow from '../icons/left-arrow.svg'
import rightArrow from '../icons/right-arrow.svg'

const NavContainer = Box.as('nav').with({
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  userSelect: 'none'
})

const NavIcon = Img.with({
  width: 66,
  height: 66
})

const NavPanel = Box.with(
  ({ left = false, right = false, hide = false, ...props }) => ({
    ...props,

    children: <NavIcon source={left ? leftArrow : right ? rightArrow : null} />,

    flex: 1,
    alignItems: 'center',
    visibility: hide ? 'hidden' : 'visible',
    justifyContent: left ? 'flex-start' : right ? 'flex-end' : null,
    opacity: 0.1,
    px: 4,

    '&:hover': {
      opacity: 0.5
    },

    '&:active': {
      opacity: 0.9
    }
  })
)

const Nav = ({ index, size, onPrevious, onNext }) => (
  <NavContainer>
    <NavPanel left hide={index === 0} onClick={onPrevious} />
    <NavPanel right hide={index === size - 1} onClick={onNext} />
  </NavContainer>
)

export default Nav
