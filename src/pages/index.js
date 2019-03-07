import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Gallery from '../components/gallery'
import Picture from '../components/picture'

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { type: { eq: "gallery" } }) {
      frontmatter {
        pictures {
          image {
            id
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`

function selectIndex(data) {
  return {
    title: data.site.siteMetadata.title,
    pictures: data.markdownRemark.frontmatter.pictures.map(pic => ({
      id: pic.image.id,
      image: pic.image.childImageSharp.fluid,
      description: pic.description
    }))
  }
}

const IndexPage = ({ data }) => {
  const { title, pictures } = selectIndex(data)

  return (
    <Layout title={title}>
      <Gallery>
        {pictures.map(({ id, image, description }, i) => (
          <Picture key={id + i} image={image} description={description} />
        ))}
      </Gallery>
    </Layout>
  )
}

export default IndexPage
