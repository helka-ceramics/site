import React from 'react'
import Box from '../system/box'

const NavPanel = Box.with({
  flex: 1,
  alignItems: 'center',
  color: '#000',
  opacity: 0,
  fontSize: 64,
  letterSpacing: -12,
  font: 'monospace',
  transform: 'scale(1, 1.618)',
  px: 4,

  '&:hover': {
    opacity: 0.6,
    textShadow: '0 0 1px #fff'
  },

  '&:active': {
    opacity: 0.8
  }
})

const NavLeft = NavPanel.with(({ first, ...props }) => ({
  ...props,
  display: first ? 'none' : 'flex',
  justifyContent: 'flex-start',
  children: '<'
}))

const NavRight = NavPanel.with(({ last, ...props }) => ({
  ...props,
  display: last ? 'none' : 'flex',
  justifyContent: 'flex-end',
  children: '>'
}))

const NavContainer = Box.as('nav').with({
  position: 'fixed',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
})

const Nav = ({ index, size, onPrevious, onNext }) => (
  <NavContainer>
    <NavLeft first={index === 0} onClick={onPrevious} />
    <NavRight last={index === size - 1} onClick={onNext} />
  </NavContainer>
)

export default Nav
