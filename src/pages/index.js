import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Gallery from '../components/gallery'
import Picture from '../components/picture'

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

function selectPictures(data) {
  return data.markdownRemark.frontmatter.pictures.map(pic => ({
    id: pic.image.id,
    image: pic.image.childImageSharp.fluid,
    description: pic.description
  }))
}

const IndexPage = ({ data }) => (
  <Layout>
    <Gallery>
      {selectPictures(data).map(({ id, image, description }) => (
        <Picture key={id} image={image} description={description} />
      ))}
    </Gallery>
  </Layout>
)

export default IndexPage
