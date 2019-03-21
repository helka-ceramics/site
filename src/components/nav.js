import React from 'react'
import Box from '../system/box'

import leftArrow from '../icons/left-arrow.svg'
import rightArrow from '../icons/right-arrow.svg'

const NavContainer = Box.with(({ left, ...props }) => ({
  ...props,
  cursor: `url(${left ? leftArrow : rightArrow}), auto`
}))

class Nav extends React.Component {
  state = {
    left: false
  }

  computePosition = e => {
    if (typeof window === undefined) return

    const left = e.pageX < window.innerWidth / 2

    if (this.state.left !== left) {
      this.setState({ left })
    }
  }

  navigate = () => {
    const { onNavigate } = this.props
    const { left } = this.state

    onNavigate(left ? -1 : +1)
  }

  render() {
    const { onNavigate, ...props } = this.props
    const { left } = this.state

    return (
      <NavContainer
        {...props}
        left={left}
        onClick={this.navigate}
        onMouseMove={this.computePosition}
      />
    )
  }
}

export default Nav
