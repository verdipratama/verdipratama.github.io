module.exports = {
    siteMetadata: {
        title: `Journal of Verdi Pratama`,
        author: `Verdi Pratama`,
        description: `Personal github web and blog by Verdi Pratama`,
        siteUrl: `https://dev.verside.com`,
        social: {
            twitter: `versucks`,
            instagram: `verdipratama`,
            github: `verdipratama`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 740,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embed-gist",
                        options: {
                            // Optional:

                            // the github handler whose gists are to be accessed
                            username: "verdipratama",

                            // a flag indicating whether the github default gist css should be included or not
                            // default: true
                            includeDefaultCss: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-emoji`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-3363703-15`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Verdi Pratama Blog`,
                short_name: `VP`,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: `/sitemap.xml`,
            },
        },
    ],
}
