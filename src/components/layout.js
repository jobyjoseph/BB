/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header/header"
import Footer from "./footer/footer";
import styles from "./layout.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/nxq8pto.css" />
        <script src={withPrefix('mailchimppopup.js')} />
      </Helmet>
      <Header/>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
