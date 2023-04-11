import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"


import Layout from "../components/Layout/Layout"

const BlogPostTemplate = ({ data: { post } }) => {

    return (
        <Layout>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >

                {!!post.content && (
                    <section itemProp="articleBody">{parse(post.content)}</section>
                )}

                <hr />

                <footer>
                    Este é o footer
                </footer>
            </article>

        </Layout>
    )
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      content
    }
  }
`


