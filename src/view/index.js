import Style from './style'
import Gallery from './gallery'
import Footer from './footer'

const App = (store) => ({
  '@style#dynamic-css': Style(store),
  '@main.gallery': Gallery(store),
  '@footer.info': Footer(store)
})

export default App
