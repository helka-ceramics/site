import Gallery from './gallery'
import Footer from './footer'

const App = (store) => ({
  '@main.gallery': Gallery(store),
  '@footer.info': Footer(store),
})

export default App
