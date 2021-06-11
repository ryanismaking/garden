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
      <div>
        <p>I’m Ryan—a fledgling product designer from Melbourne who cares about creating thoughtful products which balance businesses’ need for sustainability with customers’ desire for progress.</p>
        <p>Currently, I help scale great design in <a href="https://realestate.com.au">realestate.com.au</a>’s design ops team. We give our designers and engineers a leg up so they can make awesome shiz. Together, we help millions of Australians find their forever homes.</p>
      </div>
    </div>
  )
}

export default Bio
