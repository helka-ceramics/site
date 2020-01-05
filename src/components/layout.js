import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Theme from '../system/theme'
import Global from '../system/global'
import Box from '../system/box'
import Markdown from './markdown'

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { type: { eq: "gallery" } }) {
      html

      frontmatter {
        colors {
          background
          text
        }
      }
    }
  }
`

function selectLayout(data) {
  return {
    title: data.site.siteMetadata.title,
    colors: data.markdownRemark.frontmatter.colors,
    footer: data.markdownRemark.html
  }
}

const Screen = Box.with({
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'auto'
})

const Main = Box.as('main').with({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden'
})

const Footer = Markdown.as('footer').with({
  textAlign: 'center',
  size: 'S',
  flexShrink: 0
})

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(titleQuery)
  const layout = selectLayout(data)

  return (
    <Theme>
      <Global />
      <Helmet title={layout.title} />

      <Screen bg={layout.colors.background} color={layout.colors.text}>
        <Main {...props}>{children}</Main>
        <Footer html={layout.footer} />
      </Screen>
    </Theme>
  )
}

export default Layout
