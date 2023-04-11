import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import MainMenu from "../Navigation/MainMenu"
import WidthContainer from "../../Helpers/WidthContainer"
import { useMainMenuQuery } from "../../../hooks/useMenuQuery"
import { Link } from "gatsby"

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function Navbar(props) {
  const { site, wpMenu, wpPage } = useMainMenuQuery()
  const siteName = site.siteMetadata.title

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <WidthContainer>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Link to={wpPage.uri}>{siteName}</Link>
              <MainMenu wpMenu={wpMenu} />
            </Toolbar>
          </WidthContainer>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
