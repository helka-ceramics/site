import React from 'react'

import Box from '../system/box'
import Img from '../system/img'

import leftArrow from '../icons/left-arrow.svg'
import rightArrow from '../icons/right-arrow.svg'

function side({ left = false, right = false, hide = false, ...props }) {
  return {
    ...props,

    children: <NavIcon source={left ? leftArrow : right ? rightArrow : null} />,

    visibility: hide ? 'hidden' : 'visible',
    justifyContent: left ? 'flex-start' : right ? 'flex-end' : null
  }
}

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

const NavPanel = Box.with(side).with({
  flex: 1,
  alignItems: 'center',
  opacity: 0.1,
  px: 4,

  '&:hover': {
    opacity: 0.5
  },

  '&:active': {
    opacity: 0.9
  }
})

const Nav = ({ index, size, onPrevious, onNext }) => (
  <NavContainer>
    <NavPanel left hide={index === 0} onClick={onPrevious} />
    <NavPanel right hide={index === size - 1} onClick={onNext} />
  </NavContainer>
)

export default Nav
