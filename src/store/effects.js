import db from '~/db.json'

import arrow from '../utils/arrow'
import { moveIndex, saveInterval, adaptPictures, setNavDirection } from './actions' // prettier-ignore

export function carousel({ state, action }) {
  if (state.gallery.interval) {
    clearInterval(state.gallery.interval)
  }

  const interval = setInterval(
    () => action(moveIndex, 1),
    db['gallery.md'].meta.interval * 1000
  )

  action(saveInterval, interval)
}

export function userMoveIndex({ action, effect }, distance) {
  effect(carousel)
  action(moveIndex, distance)
}

export function fitScreen({ action }) {
  action(adaptPictures)
  window.addEventListener('resize', () => action(adaptPictures))
}

export function setCSSColors({ state }) {
  const style = document.documentElement.style
  const { text, background } = state.site.colors

  style.setProperty('--text-color', text)
  style.setProperty('--background-color', background)
}

export function setCSSArrow({ state, action }, direction) {
  if (direction === state.gallery.nav) return

  const style = document.documentElement.style
  const shape = arrow(direction, state.site.colors.background)

  style.setProperty('--arrow-shape', `url(${shape}) 24 24, auto`)

  action(setNavDirection, direction)
}
