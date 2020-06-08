import arrow from '../utils/arrow'

const styleGuard = (state) => [state?.site.colors, state?.gallery.nav]

const css = (colors, nav) => `
  html {
    color: ${colors.text};
    background-color: ${colors.background};
  }

  main.gallery {
    cursor: url(${arrow(nav, colors.background)}) 24 24, auto;
  }
`

const Style = ({ guard }) => ({
  textContent: guard(styleGuard, css)
})

export default Style
