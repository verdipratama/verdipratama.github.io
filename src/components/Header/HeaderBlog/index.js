import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import * as styles from './styles'
import { Contact } from '../../Contact'
import { ver } from '../../../images/ver.jpg'

export function HeaderBlog(props) {
    return (
        <StaticQuery
            query={query}
            render={data => <ContentComponent {...data} {...props} />}
        />
    )
}

function ContentComponent({ site, customText }) {
    const { siteMetadata } = site

    return (
        <div css={styles.container}>
            <div css={styles.nameContainer}>
                <Link css={styles.title} to="/">
                    {siteMetadata.author}
                </Link>
                <Contact iconColor="#56b6c2" />
            </div>
            <div css={styles.jokes}>{customText || siteMetadata.tagline}</div>
            <div css={styles.imgContainer}>
                <img src={ver} alt="perry-platypus" css={styles.profleImg} />
            </div>
        </div>
    )
}

HeaderBlog.defaultProps = {
    hideImage: false,
}

const query = graphql`
    query {
        site {
            siteMetadata {
                tagline
                author
            }
        }
    }
`
