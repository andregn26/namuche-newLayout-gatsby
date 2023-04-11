import * as React from "react"
import { useState } from "react"
import Navbar from "./Header/Navbar"
import { CssBaseline, useMediaQuery } from "@mui/material"
import { Box } from "@mui/material"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <CssBaseline />

      <Box display={isNonMobile ? null : "block"} width="100%" height="100%">
        <Box flexGrow={1}>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
