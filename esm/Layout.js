import Crown from './Crown';
import Footer from './Footer';
import Header from './Header';
import Helmet from './Helmet';
import Wrapper from './Wrapper';
import defaultProps from '../config/props.config';

var Layout = function Layout(_ref) {
  var config = _ref.config,
      i18n = _ref.i18n,
      useThemeProvider = _ref.useThemeProvider,
      crownLarge = _ref.crownLarge,
      crownSmall = _ref.crownSmall,
      metaTitle = _ref.metaTitle,
      metaDescription = _ref.metaDescription,
      metaImage = _ref.metaImage,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Helmet, {
    config: config,
    i18n: i18n,
    title: metaTitle,
    image: metaImage,
    description: metaDescription
  }), /*#__PURE__*/React.createElement(Header, {
    config: config,
    i18n: i18n,
    useThemeProvider: useThemeProvider
  }), /*#__PURE__*/React.createElement(Crown, {
    config: config,
    i18n: i18n,
    large: crownLarge,
    small: crownSmall
  }), /*#__PURE__*/React.createElement(Wrapper, {
    config: config
  }, children), /*#__PURE__*/React.createElement(Footer, {
    config: config,
    i18n: i18n
  }));
};

Layout.defaultProps = defaultProps;
export default Layout;