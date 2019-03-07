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

function selectTitle(data) {
  return data.site.siteMetadata.title
}

const Main = Box.as('main').with({
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden'
})

const Layout = props => {
  const data = useStaticQuery(titleQuery)
  const title = selectTitle(data)

  return (
    <Theme>
      <Helmet title={title} />
      <Main {...props} />
    </Theme>
  )
}

export default Layout
