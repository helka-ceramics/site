import { userMoveIndex, setCSSArrow } from '../store/effects'

const pictureGuard = (state) => [state?.gallery.pictures, state?.gallery.index]

const Gallery = ({ state, effect, guard }) => ({
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
      effect(setCSSArrow, 'left')
    } else if (!isLeft && nav !== 'right') {
      effect(setCSSArrow, 'right')
    }
  },

  '@img.picture': guard(pictureGuard, (pictures, index) => ({
    src: pictures[index]?.image,
    title: pictures[index]?.description,
  })),
})

export default Gallery
