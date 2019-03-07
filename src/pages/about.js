import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Markdown from '../components/markdown'

export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
    }
  }
`

function selectHTML(data) {
  return data.markdownRemark.html
}

const AboutMarkdown = Markdown.with({ p: 1 })

const AboutPage = ({ data }) => (
  <Layout>
    <AboutMarkdown html={selectHTML(data)} />
  </Layout>
)

export default AboutPage
