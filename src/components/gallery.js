import React from 'react'

import Picture from './picture'
import Nav from './nav'

class Gallery extends React.Component {
  state = {
    index: 0
  }

  get index() {
    return this.state.index
  }

  get size() {
    return this.props.pictures.length
  }

  navigate = direction =>
    this.setState({ index: (this.size + this.index + direction) % this.size })

  render() {
    const { id, image, description } = this.props.pictures[this.index]

    return (
      <Nav onNavigate={this.navigate}>
        <Picture key={id} image={image} title={description} />
      </Nav>
    )
  }
}

export default Gallery
