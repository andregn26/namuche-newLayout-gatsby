import { graphql, useStaticQuery } from "gatsby"

export const useMainMenuQuery = () => {
  const data = useStaticQuery(graphql`
     {
      site {
        siteMetadata {
          title
        }
      }
       wpMenu(name: {eq: "MainMenu"}) {
    menuItems {
      nodes {
        url
        id
        label
      }
    }
  }
  wpPage(databaseId: {eq: 2}) {
    uri
  }
    }
  `)

  return data
}