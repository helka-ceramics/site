import { userMoveIndex } from '../store/effects'
import { setNavDirection } from '../store/actions'

const imageGuard = (state) => [state?.gallery.pictures, state?.gallery.index]

const Gallery = ({ state, action, effect, guard }) => ({
  onclick: (e) => {
    if (e.pageX < window.innerWidth / 2) {
      effect(userMoveIndex, -1)
    } else {
      effect(userMoveIndex, +1)
    }
  },

  onmousemove: (e) => {
    const { nav } = state.gallery
    const isLeft = e.pageX < window.innerWidth / 2

    if (isLeft && nav !== 'left') {
      action(setNavDirection, 'left')
    } else if (!isLeft && nav !== 'right') {
      action(setNavDirection, 'right')
    }
  },

  '@img.picture': guard(imageGuard, (pictures, index) => ({
    src: pictures[index]?.image,
    title: pictures[index]?.description
  }))
})

export default Gallery
