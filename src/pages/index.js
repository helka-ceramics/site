import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Gallery from '../components/gallery'

export const query = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { type: { eq: "gallery" } }) {
      frontmatter {
        pictures {
          description

          image {
            id

            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

function selectIndex(data) {
  const footer = data.markdownRemark.html

  const pictures = data.markdownRemark.frontmatter.pictures.map(pic => ({
    id: pic.image.id,
    image: pic.image.childImageSharp.fluid,
    description: pic.description
  }))

  return { footer, pictures }
}

const IndexPage = ({ data }) => {
  const index = selectIndex(data)

  return (
    <Layout>
      <Gallery pictures={index.pictures} />
    </Layout>
  )
}
export default IndexPage
