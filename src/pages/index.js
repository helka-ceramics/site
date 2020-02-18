import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Gallery from '../components/gallery'

export const query = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { type: { eq: "gallery" } }) {
      frontmatter {
        colors {
          background
        }

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

        mobilePictures {
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

function isMobile() {
  return typeof window !== 'undefined' && window.innerWidth <= 600
}

function selectBackground(data) {
  return data.markdownRemark.frontmatter.colors.background
}

function selectPictures(data) {
  const desktopPictures = data.markdownRemark.frontmatter.pictures
  const mobilePictures = data.markdownRemark.frontmatter.mobilePictures

  const pictures =
    isMobile() && mobilePictures && mobilePictures.length > 0
      ? mobilePictures
      : desktopPictures

  return pictures.map(picture => ({
    id: picture.image.id,
    image: picture.image.childImageSharp.fluid,
    description: picture.description
  }))
}

const IndexPage = ({ data }) => {
  const [pictures, setPictures] = useState([])
  const background = selectBackground(data)

  useEffect(() => {
    // set pictures in a timeout to avoid SSR
    setTimeout(() => setPictures(selectPictures(data)), 0)
    window.onresize = () => setPictures(selectPictures(data))
  }, [])

  return (
    <Layout height="100%">
      <Gallery background={background} pictures={pictures} />
    </Layout>
  )
}
export default IndexPage
