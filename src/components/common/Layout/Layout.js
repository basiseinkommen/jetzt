import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Navbar from '@common/Navbar'
import Footer from '@sections/Footer'

import SEO from '@common/SEO'

import theme from '@styles/theme'
import GlobalStyles from '@styles/GlobalStyles'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout