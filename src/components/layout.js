import React from 'react'
import Helmet from 'react-helmet'

import Theme from '../system/theme'

const Layout = ({ title, children }) => (
  <Theme>
    <div>
      <Helmet title={title} />
      {children}
    </div>
  </Theme>
)

export default Layout
