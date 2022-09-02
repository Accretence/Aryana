import React from 'react';
import Crown from './Crown.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Helmet from './Helmet.js';
import Wrapper from './Wrapper.js';
var defaultProps = {
  useThemeProvider: null,
  useAuth: null,
  config: {
    theme: {
      width: '900pt'
    },
    meta: {
      title: 'NEXT-DASHBOARD-ABSTRACTION',
      image: 'https://i.imgur.com/NitQE9d.jpg',
      url: 'https://example.com',
      handle: '@example',
      keywords: 'geist-ui, nextjs, reactjs'
    },
    links: {
      email: 'mailto:example@example.com',
      twitter: 'https://twitter.com/example',
      linkedin: 'https://linkedin.com/in/example',
      github: 'https://github.com/example'
    },
    tabs: [{
      label: 'CONTACT',
      value: '/contact'
    }]
  }
};

var Layout = function Layout(_ref) {
  var config = _ref.config,
      i18n = _ref.i18n,
      useThemeProvider = _ref.useThemeProvider,
      useAuth = _ref.useAuth,
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
    useThemeProvider: useThemeProvider,
    useAuth: useAuth
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