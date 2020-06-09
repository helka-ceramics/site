import { Store, View } from 'stitchz'

import state from './store'
import render from './view'

import { carousel, fitScreen, setCSSColors } from './store/effects'

const store = Store(state)
const view = View(render)

store.subscribe(view)

store.effect(carousel)
store.effect(fitScreen)
store.effect(setCSSColors)
