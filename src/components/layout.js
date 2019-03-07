import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Theme } from '../system/theme'
import Box from '../system/box'

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

function selectTitle() {
  return useStaticQuery(titleQuery).site.siteMetadata.title
}

const Main = Box.as('main').with({
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden'
})

const Layout = ({ children }) => (
  <Theme>
    <Helmet title={selectTitle()} />
    <Main children={children} />
  </Theme>
)

export default Layout
