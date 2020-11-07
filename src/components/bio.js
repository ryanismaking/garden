/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          {/*<p>Written by <strong>{author.name}</strong> {author?.summary || null}
            {` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              You should follow them on Twitter
            </a></p>*/}
          <p>
            Hi. I’m Ryan. My goal is to create useful, accessible, well-crafted digital products with awesome people, and ultimately teach others how to do the same.
          </p>
          <p>Currently, I’m looking for opportunities to learn and contribute as an associate-level product designer in a product-driven company. ✨</p>
        </div>
      )}
    </div>
  )
}

export default Bio
