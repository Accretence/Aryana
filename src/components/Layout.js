import React from 'react'

import Crown from './Crown.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Helmet from './Helmet.js'
import Wrapper from './Wrapper.js'

import defaultProps from '../../config/props.config.js'

const Layout = ({
  config,
  i18n,
  useThemeProvider,
  useAuth,
  crownLarge,
  crownSmall,
  metaTitle,
  metaDescription,
  metaImage,
  children,
}) => {
  return (
    <>
      <Helmet
        config={config}
        i18n={i18n}
        title={metaTitle}
        image={metaImage}
        description={metaDescription}
      />
      <Header
        config={config}
        i18n={i18n}
        useThemeProvider={useThemeProvider}
        useAuth={useAuth}
      />
      <Crown config={config} i18n={i18n} large={crownLarge} small={crownSmall} />
      <Wrapper config={config}>{children}</Wrapper>
      <Footer config={config} i18n={i18n} />
    </>
  )
}

Layout.defaultProps = defaultProps

export default Layout
