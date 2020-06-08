import db from '~/db.json'

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
