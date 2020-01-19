/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Video Chat App</Link>
    </header>
    <main>{children}</main>
  </>
)

export default Layout
