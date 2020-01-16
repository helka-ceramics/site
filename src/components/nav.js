import React from 'react'
import Box from '../system/box'

import arrow from '../icons/arrows'

const NavContainer = Box.with({
  justifyContent: 'center',
  alignSelf: 'center',
  maxWidth: '75%',
  maxHeight: '75%'
}).with(({ left, background, ...props }) => ({
  ...props,
  cursor: `url(${arrow(left, background)}) 24 24, auto`
}))

class Nav extends React.Component {
  state = {
    left: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.navigateKeyboard)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigateKeyboard)
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

  navigateKeyboard = e => {
    const { onNavigate } = this.props

    if (e.key === 'ArrowRight') {
      onNavigate(1)
    } else if (e.key === 'ArrowLeft') {
      onNavigate(-1)
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
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
