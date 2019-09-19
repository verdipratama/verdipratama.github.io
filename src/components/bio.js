/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class Bio extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        document
            .querySelector(".bio__content")
            .classList.toggle("bio__content--active")
    }

    render() {
        return (
            <StaticQuery
                query={bioQuery}
                render={data => {
                    const { author, social } = data.site.siteMetadata
                    const location = this.props.location
                        ? this.props.location
                        : ""
                    const classes = `bio ${location}`
                    return (
                        <div>
                            <div className={classes} onClick={this.handleClick}>
                                <Image
                                    fixed={data.avatar.childImageSharp.fixed}
                                    alt={author}
                                    style={{
                                        marginBottom: 0,
                                        minWidth: 35,
                                        borderRadius: `100%`,
                                    }}
                                    imgStyle={{
                                        borderRadius: `50%`,
                                    }}
                                    className="bio__image"
                                />

                                <div className="bio__content">
                                    Hello, saya{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://verside.com"
                                    >
                                        {author}
                                    </a>{" "}
                                    menulis adalah salah satu terapi terbaik
                                    saat kita mulai lelah berbicara. &nbsp;{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://www.instagram.com/${social.instagram}`}
                                    >
                                        {" "}
                                        - Jangan lupa Follow Instagram
                                    </a>{" "}
                                    👋
                                </div>
                            </div>
                        </div>
                    )
                }}
            />
        )
    }
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 35, height: 35) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    instagram
                }
            }
        }
    }
`

export default Bio
