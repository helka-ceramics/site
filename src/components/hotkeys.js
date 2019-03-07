import React from 'react'

class HotKeys extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys)
  }

  handleKeys = e => {
    const { keys } = this.props

    if (e.key in keys) {
      keys[e.key](e)
    }
  }

  render() {
    return this.props.children
  }
}

export default HotKeys
