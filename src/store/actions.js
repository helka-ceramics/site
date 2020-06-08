import db from '~/db.json'
import merge from 'ramda/es/mergeDeepRight'

export function moveIndex(state, distance) {
  const size = state.gallery.pictures.length
  const index = (state.gallery.index + distance + size) % size
  return merge(state, { gallery: { index } })
}

export function saveInterval(state, interval) {
  return merge(state, { gallery: { interval } })
}

export function setNavDirection(state, nav) {
  return merge(state, { gallery: { nav } })
}

export function adaptPictures(state) {
  const pictures =
    window.innerWidth < 600
      ? db['gallery.md'].meta.mobilePictures
      : db['gallery.md'].meta.pictures

  return merge(state, { gallery: { pictures } })
}
