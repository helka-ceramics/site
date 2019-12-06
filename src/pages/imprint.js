import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Markdown from '../components/markdown'

export const query = graphql`
  query ImprintQuery {
    markdownRemark(frontmatter: { type: { eq: "imprint" } }) {
      html
    }
  }
`

const ImprintPage = ({ data }) => {
  const imprint = data.markdownRemark.html

  return (
    <Layout>
      <Markdown html={imprint} width="66%" alignSelf="center" />
    </Layout>
  )
}
export default ImprintPage
