import React from 'react'

import Box from '../system/box'
import Nav from './nav'
import HotKeys from './hotkeys'

const Container = Box.with({ position: 'relative', flex: 1 })

const Scrollable = Box.with(({ index = 0, ...props }) => ({
  ...props,

  style: { transform: `translate3d(-${index * 100}%, 0, 0)` },

  flex: 1,
  willChange: 'transform',
  transition: 'transform 0.6s ease-in-out',

  '& > *': { flex: '1 0 100%' }
}))

class Gallery extends React.Component {
  state = {
    index: 0,
    x: 0,
    y: 0
  }

  get index() {
    return this.state.index
  }

  get size() {
    return React.Children.count(this.props.children)
  }

  scrollTo = index => this.setState({ index: (this.size + index) % this.size })

  previous = () => this.scrollTo(this.index - 1)

  next = () => this.scrollTo(this.index + 1)

  hotkeys = {
    ArrowLeft: this.previous,
    ArrowRight: this.next
  }

  render() {
    return (
      <HotKeys keys={this.hotkeys}>
        <Container>
          <Scrollable {...this.props} index={this.index} />

          <Nav
            index={this.index}
            size={this.size}
            onPrevious={this.previous}
            onNext={this.next}
          />
        </Container>
      </HotKeys>
    )
  }
}

export default Gallery
