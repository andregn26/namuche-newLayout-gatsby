import React from "react"
import { Link } from "gatsby"

import FlexBetween from "../../Helpers/FlexBetween"
import { Box } from "@mui/material"

const MainMenu = ({ wpMenu }) => {
  const menuItemsArray = wpMenu.menuItems.nodes
  return (
    <>
      <FlexBetween>
        {menuItemsArray !== 0 ? (
          <>
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              {menuItemsArray.map(mainItem => (
                <Link
                  key={mainItem.id}
                  to={mainItem.url}
                  activeClassName="nav-active"
                >
                  {mainItem.label}
                </Link>
              ))}
            </Box>
          </>
        ) : null}
      </FlexBetween>
    </>
  )
}

export default MainMenu
