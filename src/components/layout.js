import React from 'react'
import Helmet from 'react-helmet'

import Theme from '../system/theme'
import Box from '../system/box'

const Main = Box.as('main').with({
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden'
})

const Layout = ({ title, children }) => (
  <Theme>
    <Helmet title={title} />
    <Main children={children} />
  </Theme>
)

export default Layout
