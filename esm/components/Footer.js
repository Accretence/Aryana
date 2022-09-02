import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import Link from 'next/link';
import { Text, Grid, useTheme, Collapse } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { isLocaleRTL, getLocaleDirection } from '../helpers/index.js';
export default function (_ref) {
  var config = _ref.config,
      i18n = _ref.i18n;
  var theme = useTheme();

  var _useRouter = useRouter(),
      _useRouter$locale = _useRouter.locale,
      locale = _useRouter$locale === void 0 ? config.defaultLocale : _useRouter$locale;

  var footer = i18n['components']['footer'];

  var Copyright = function Copyright() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'block',
        justifyItems: 'right'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      h4: true,
      my: 0,
      style: {
        textAlign: 'left',
        direction: isLocaleRTL(locale) ? 'rtl' : 'ltr'
      }
    }, footer['title'][locale].toUpperCase()), /*#__PURE__*/React.createElement(Text, {
      mt: 0,
      style: {
        fontSize: '0.7rem',
        textAlign: 'right',
        direction: isLocaleRTL(locale) ? 'rtl' : 'ltr'
      },
      type: "secondary"
    }, footer['copyright'][locale]));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, footer && /*#__PURE__*/React.createElement("footer", {
    className: _JSXStyle.dynamic([["2186344485", [theme.palette.border, config.theme.width, theme.layout.pageMargin]]])
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2186344485", [theme.palette.border, config.theme.width, theme.layout.pageMargin]]]) + " " + "FooterWrapper"
  }, /*#__PURE__*/React.createElement(Grid.Container, null, /*#__PURE__*/React.createElement(Grid, {
    xs: 24,
    md: 0
  }, /*#__PURE__*/React.createElement(Mobile, {
    config: config,
    footer: footer
  })), /*#__PURE__*/React.createElement(Grid, {
    xs: 0,
    md: 24
  }, /*#__PURE__*/React.createElement(Desktop, {
    config: config,
    footer: footer
  })), /*#__PURE__*/React.createElement(Grid, {
    xs: 24,
    md: 0
  }, /*#__PURE__*/React.createElement(Copyright, {
    className: _JSXStyle.dynamic([["2186344485", [theme.palette.border, config.theme.width, theme.layout.pageMargin]]])
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2186344485",
    dynamic: [theme.palette.border, config.theme.width, theme.layout.pageMargin]
  }, "footer{border-top:1px solid ".concat(theme.palette.border, ";}.FooterWrapper{width:").concat(config.theme.width, ";max-width:100%;margin:0 auto;padding:0 ").concat(theme.layout.pageMargin, ";vertical-align:text-top;box-sizing:border-box;}")));
}

function Desktop(_ref2) {
  var config = _ref2.config,
      footer = _ref2.footer;

  var _useRouter2 = useRouter(),
      _useRouter2$locale = _useRouter2.locale,
      locale = _useRouter2$locale === void 0 ? config.defaultLocale : _useRouter2$locale;

  return /*#__PURE__*/React.createElement(Grid.Container, {
    gap: 1,
    my: 2
  }, isLocaleRTL(locale) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DesktopLinks, {
    config: config,
    footer: footer
  }), /*#__PURE__*/React.createElement(Grid, {
    px: 0,
    style: {
      display: 'block'
    },
    xs: 24,
    md: 8,
    mb: 2
  }, /*#__PURE__*/React.createElement(Text, {
    h4: true,
    my: 0,
    style: {
      textAlign: 'start',
      direction: 'rtl'
    }
  }, footer['title'][locale].toUpperCase()), /*#__PURE__*/React.createElement(Text, {
    mt: 0,
    style: {
      fontSize: '0.7rem',
      textAlign: 'right',
      direction: 'rtl'
    },
    type: "secondary"
  }, footer['copyright'][locale]))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    px: 0,
    style: {
      display: 'block'
    },
    xs: 24,
    md: 8,
    mb: 2
  }, /*#__PURE__*/React.createElement(Text, {
    h4: true,
    my: 0
  }, footer['title'][locale].toUpperCase()), /*#__PURE__*/React.createElement(Text, {
    mt: 0,
    small: true,
    style: {
      fontSize: '0.7rem'
    },
    type: "secondary"
  }, footer['copyright'][locale])), /*#__PURE__*/React.createElement(DesktopLinks, {
    config: config,
    footer: footer
  })));
}

function DesktopLinks(_ref3) {
  var config = _ref3.config,
      footer = _ref3.footer;

  var _useRouter3 = useRouter(),
      _useRouter3$locale = _useRouter3.locale,
      locale = _useRouter3$locale === void 0 ? config.defaultLocale : _useRouter3$locale;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, footer && footer.links.map(function (category) {
    return /*#__PURE__*/React.createElement(Grid, {
      style: {
        display: 'block'
      },
      xs: 12,
      md: 4,
      key: Math.random()
    }, /*#__PURE__*/React.createElement(Text, {
      h5: true,
      b: true,
      style: {
        direction: getLocaleDirection(locale),
        textAlign: 'end'
      }
    }, category[locale]), category['links'].map(function (link) {
      return /*#__PURE__*/React.createElement(Link, {
        key: link['label'][locale],
        href: link.value
      }, /*#__PURE__*/React.createElement("a", {
        className: "jsx-988996493" + " " + "FooterLink"
      }, /*#__PURE__*/React.createElement(Text, {
        px: 0,
        style: {
          fontSize: '0.8rem',
          direction: getLocaleDirection(locale),
          textAlign: 'end'
        }
      }, link['label'][locale])));
    }));
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "988996493"
  }, "h5{white-space:nowrap;}"));
}

function Mobile(_ref4) {
  var config = _ref4.config,
      footer = _ref4.footer;

  var _useRouter4 = useRouter(),
      _useRouter4$locale = _useRouter4.locale,
      locale = _useRouter4$locale === void 0 ? config.defaultLocale : _useRouter4$locale;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Collapse.Group, {
    width: "100%",
    mt: 1,
    mb: 2
  }, /*#__PURE__*/React.createElement(MobileLinks, {
    config: config,
    footer: footer
  })));
}

function MobileLinks(_ref5) {
  var config = _ref5.config,
      footer = _ref5.footer;
  var theme = useTheme();

  var _useRouter5 = useRouter(),
      _useRouter5$locale = _useRouter5.locale,
      locale = _useRouter5$locale === void 0 ? config.defaultLocale : _useRouter5$locale;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, footer && footer.links.map(function (category) {
    return /*#__PURE__*/React.createElement(Collapse, {
      width: "100%",
      title: category[locale],
      key: category[locale]
    }, category['links'].map(function (link) {
      return /*#__PURE__*/React.createElement(Link, {
        key: link['label'][locale],
        href: link.value
      }, /*#__PURE__*/React.createElement("a", {
        className: _JSXStyle.dynamic([["3433617154", [theme.palette.accents_6, theme.palette.accents_6]]])
      }, /*#__PURE__*/React.createElement(Text, {
        px: 0,
        style: {
          direction: getLocaleDirection(locale),
          textAlign: isLocaleRTL(locale) ? 'end' : 'start'
        }
      }, link['label'][locale])));
    }));
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3433617154",
    dynamic: [theme.palette.accents_6, theme.palette.accents_6]
  }, ".FooterWrapper>.item>.item>.collapse-group>.collapse>.view>.title>h3{font-size:1rem !important;font-weight:400 !important;color:".concat(theme.palette.accents_6, ";}.FooterWrapper>.item>.item>.collapse-group>.collapse>.view>.title>svg{color:").concat(theme.palette.accents_6, "!important;}.collapse{border-top:none !important;}")));
}