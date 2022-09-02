import _JSXStyle from "../styled-jsx.es.js";
import { useRouter } from 'next/router';
import { Spacer, Text, useTheme } from '@geist-ui/core';
import { getLocaleDirection } from '../helpers';
export default function (_ref) {
  var config = _ref.config,
      i18n = _ref.i18n,
      large = _ref.large,
      small = _ref.small;
  var theme = useTheme();

  var _useRouter = useRouter(),
      _useRouter$locale = _useRouter.locale,
      locale = _useRouter$locale === void 0 ? config.defaultLocale : _useRouter$locale;

  var smallComponent = small;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3758566510", [config.theme.width, theme.layout.pageMargin]]]) + " " + "Banner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem',
      marginBottom: '3rem'
    },
    className: _JSXStyle.dynamic([["3758566510", [config.theme.width, theme.layout.pageMargin]]])
  }, large && small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    h3: true,
    mb: 0,
    pb: 0,
    style: {
      direction: getLocaleDirection(locale)
    }
  }, large.toUpperCase()), /*#__PURE__*/React.createElement(Text, {
    mt: 0.2,
    type: "secondary",
    style: {
      fontSize: '0.85rem',
      direction: getLocaleDirection(locale)
    }
  }, smallComponent)))), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3758566510",
    dynamic: [config.theme.width, theme.layout.pageMargin]
  }, ".Banner{width:".concat(config.theme.width, ";max-width:100%;margin:0 auto;padding:0 ").concat(theme.layout.pageMargin, ";box-sizing:border-box;text-align:justify !important;}")));
}