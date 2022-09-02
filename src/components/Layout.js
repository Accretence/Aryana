import Crown from './Crown'
import Footer from './Footer'
import Header from './Header'
import Helmet from './Helmet'
import Wrapper from './Wrapper'

import defaultProps from '../config/props.config'

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
