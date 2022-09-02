import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _JSXStyle from "../styled-jsx.es.js";
import Link from 'next/link';
import useState from 'react-usestateref';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Modal, Collapse, Input, Divider, Tabs, Text, useTheme, Drawer, ButtonGroup, Button, useToasts } from '@geist-ui/core';
import { Sun, Moon, LogIn, User, UserPlus, ShoppingCart, Menu, Search, Mail, Lock } from '@geist-ui/icons';
import { GoogleIcon } from './SVGs.js';
import { getGoogleURL, isEmail, getLocaleDirection, isLocaleRTL } from '../helpers/index.js';
import { registerHandler, loginHandler } from '../handlers/index.js';
import { useWindowSize } from '../hooks/index.js';
export default function (_ref) {
  var config = _ref.config,
      i18n = _ref.i18n,
      useThemeProvider = _ref.useThemeProvider,
      useAuth = _ref.useAuth;
  var theme = useTheme();
  var themeProvider = useThemeProvider();

  var _useWindowSize = useWindowSize(),
      width = _useWindowSize.width,
      height = _useWindowSize.height;

  var router = useRouter();

  var _useToasts = useToasts(),
      setToast = _useToasts.setToast;

  var _useAuth = useAuth(),
      isAuthenticated = _useAuth.isAuthenticated,
      setLocalAuthentication = _useAuth.setLocalAuthentication;

  var _router$locale = router.locale,
      locale = _router$locale === void 0 ? config.defaultLocale : _router$locale,
      locales = router.locales,
      pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;

  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      sticky = _useState2[0],
      setSticky = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      drawerVis = _useState4[0],
      setDrawerVis = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      placement = _useState6[0],
      setPlacement = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      modalVis = _useState8[0],
      setModalVis = _useState8[1];

  var buttons = i18n.buttons,
      header = i18n.components.header;
  useEffect(function () {
    var scrollHandler = function scrollHandler() {
      return setSticky(document.documentElement.scrollTop > 54);
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      return document.removeEventListener('scroll', scrollHandler);
    };
  }, [setSticky]);
  var matchedURL = router['pathname'].match(/(?:^\/)?[^/]+/g);

  function drawDrawer() {
    setPlacement('left');
    setDrawerVis(true);
  }

  var LoginModal = function LoginModal() {
    var _useState9 = useState(''),
        _useState10 = _slicedToArray(_useState9, 3),
        email = _useState10[0],
        setEmail = _useState10[1],
        refEmail = _useState10[2];

    var _useState11 = useState(''),
        _useState12 = _slicedToArray(_useState11, 3),
        password = _useState12[0],
        setPassword = _useState12[1],
        refPassword = _useState12[2];

    var _useState13 = useState(''),
        _useState14 = _slicedToArray(_useState13, 3),
        confirmPassword = _useState14[0],
        setConfirmPassword = _useState14[1],
        refConfirmPassword = _useState14[2];

    var _useState15 = useState(false),
        _useState16 = _slicedToArray(_useState15, 3),
        loading = _useState16[0],
        setLoading = _useState16[1],
        refLoading = _useState16[2];

    return /*#__PURE__*/React.createElement(React.Fragment, null, config && i18n && buttons && /*#__PURE__*/React.createElement(Modal, {
      py: 0.2,
      visible: modalVis,
      onClose: function onClose() {
        return setModalVis(false);
      }
    }, /*#__PURE__*/React.createElement(Modal.Content, {
      pt: 0.5,
      pb: 2.5
    }, /*#__PURE__*/React.createElement(Collapse.Group, null, /*#__PURE__*/React.createElement(Collapse, {
      title: /*#__PURE__*/React.createElement(Text, {
        style: {
          fontSize: '1rem',
          fontWeight: '600'
        },
        my: 0
      }, header['modal']['login']['title'][locale]),
      subtitle: /*#__PURE__*/React.createElement(Text, {
        small: true
      }, header['modal']['login']['subtitle'][locale])
    }, /*#__PURE__*/React.createElement(Input, {
      label: !isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Mail, {
        size: 16
      }),
      labelRight: isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Mail, {
        size: 16
      }),
      placeholder: i18n['inputs']['email']['placeholder'][locale],
      width: "100%",
      value: email,
      type: refEmail.current == '' ? 'default' : isEmail(refEmail.current) ? 'default' : 'error',
      onChange: function onChange(e) {
        setEmail(e.target.value.trim());
      }
    }), /*#__PURE__*/React.createElement(Input.Password, {
      label: !isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      labelRight: isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      placeholder: i18n['inputs']['password']['placeholder'][locale],
      width: "100%",
      mt: 1,
      value: password,
      type: refPassword.current == '' ? 'default' : refPassword.current.length > 7 ? 'default' : 'error',
      onChange: function onChange(e) {
        setPassword(e.target.value.trim());
      }
    }), /*#__PURE__*/React.createElement(Button, {
      loading: loading,
      disabled: !refEmail.current || !refPassword.current || !isEmail(refEmail.current) || refPassword.current.length < 8,
      width: "100%",
      mt: 1,
      type: "secondary",
      onClick: function onClick(e) {
        return loginHandler({
          config: config,
          setLoading: setLoading,
          setToast: setToast,
          setLocalAuthentication: setLocalAuthentication,
          router: router,
          refEmail: refEmail,
          refPassword: refPassword,
          toast: i18n['toasts']['login'][locale]
        });
      },
      icon: /*#__PURE__*/React.createElement(LogIn, null)
    }, buttons['login'][locale]), /*#__PURE__*/React.createElement(Link, {
      href: "/auth/reset"
    }, /*#__PURE__*/React.createElement("a", {
      className: _JSXStyle.dynamic([["4150216034", [theme.palette.accents_6, theme.palette.code, theme.palette.background]]]) + " " + "Peculiar"
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        direction: getLocaleDirection(locale),
        textAlign: isLocaleRTL(locale) ? 'right' : 'left'
      }
    }, buttons['forgot'][locale])))), /*#__PURE__*/React.createElement(Collapse, {
      id: "Register",
      style: {
        borderBottom: 'none'
      },
      title: /*#__PURE__*/React.createElement(Text, {
        style: {
          fontSize: '1rem',
          fontWeight: '600'
        },
        my: 0
      }, header['modal']['register']['title'][locale]),
      subtitle: /*#__PURE__*/React.createElement(Text, {
        small: true
      }, header['modal']['register']['subtitle'][locale])
    }, /*#__PURE__*/React.createElement(Input, {
      label: !isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Mail, {
        size: 16
      }),
      labelRight: isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Mail, {
        size: 16
      }),
      placeholder: i18n['inputs']['email']['placeholder'][locale],
      width: "100%",
      value: email,
      type: refEmail.current == '' ? 'default' : isEmail(refEmail.current) ? 'success' : 'error',
      onChange: function onChange(e) {
        setEmail(e.target.value.trim());
      }
    }), !refEmail.current == '' && !isEmail(refEmail.current) && /*#__PURE__*/React.createElement(Text, {
      style: {
        direction: getLocaleDirection(locale)
      },
      small: true,
      type: "error"
    }, i18n['inputs']['email']['error'][locale]), /*#__PURE__*/React.createElement(Input.Password, {
      label: !isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      labelRight: isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      placeholder: i18n['inputs']['password']['placeholder'][locale],
      type: refPassword.current == '' ? 'default' : refPassword.current.length > 7 ? 'success' : 'error',
      width: "100%",
      mt: 1,
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value.trim());
      }
    }), !refPassword.current == '' && refPassword.current.length < 8 && /*#__PURE__*/React.createElement(Text, {
      small: true,
      type: "error"
    }, i18n['inputs']['password']['error'][locale]), /*#__PURE__*/React.createElement(Input.Password, {
      label: !isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      labelRight: isLocaleRTL(locale) && /*#__PURE__*/React.createElement(Lock, {
        size: 16
      }),
      placeholder: i18n['inputs']['confirmPassword']['placeholder'][locale],
      type: refConfirmPassword.current == '' ? 'default' : refConfirmPassword.current.length > 7 && refConfirmPassword.current == refPassword.current ? 'success' : 'error',
      width: "100%",
      mt: 1,
      value: confirmPassword,
      onChange: function onChange(e) {
        setConfirmPassword(e.target.value.trim());
      }
    }), !refConfirmPassword.current == '' && refConfirmPassword.current.length < 8 && /*#__PURE__*/React.createElement(Text, {
      small: true,
      type: "error"
    }, i18n['inputs']['confirmPassword']['error'][locale], ' '), !refConfirmPassword.current == '' && refConfirmPassword.current != refPassword.current && /*#__PURE__*/React.createElement(Text, {
      small: true,
      type: "error"
    }, i18n['inputs']['password']['error'][locale]), /*#__PURE__*/React.createElement(Button, {
      loading: loading,
      disabled: !refEmail.current || !refPassword.current || refConfirmPassword.current != refPassword.current || !isEmail(refEmail.current) || refPassword.current.length < 8 || refConfirmPassword.current.length < 8,
      width: "100%",
      mt: 1,
      type: "secondary",
      onClick: function onClick(e) {
        return registerHandler({
          config: config,
          setLoading: setLoading,
          setToast: setToast,
          setLocalAuthentication: setLocalAuthentication,
          router: router,
          refEmail: refEmail,
          refPassword: refPassword
        });
      },
      icon: /*#__PURE__*/React.createElement(UserPlus, null)
    }, buttons['register'][locale]))), /*#__PURE__*/React.createElement(Divider, {
      mt: 1,
      mb: 3
    }, "/"), /*#__PURE__*/React.createElement("a", {
      href: getGoogleURL(),
      className: _JSXStyle.dynamic([["4150216034", [theme.palette.accents_6, theme.palette.code, theme.palette.background]]])
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(GoogleIcon, null),
      type: "secondary",
      width: "100%",
      mt: 0.8,
      onClick: function onClick() {}
    }, buttons['google']['active'][locale])))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "4150216034",
      dynamic: [theme.palette.accents_6, theme.palette.code, theme.palette.background]
    }, ".Peculiar{color:".concat(theme.palette.accents_6, "!important;font-size:0.75rem;}.Peculiar:hover{color:").concat(theme.palette.code, "!important;}.divider>span{background-color:").concat(theme.palette.background, "!important;}")));
  };

  var Title = function Title() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, i18n && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
      mt: 1.5,
      className: "MenuNavigationTitle"
    }, /*#__PURE__*/React.createElement(Link, {
      className: "MenuNavigationTitle",
      href: "/"
    }, i18n['components']['header']['title'][locale].toUpperCase()))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "10417662",
      dynamic: [theme.palette.foreground, locale == 'en' ? '0.3rem' : 0]
    }, ".MenuNavigationTitle a{color:".concat(theme.palette.foreground, "!important;font-size:2.2rem;font-weight:600;-webkit-letter-spacing:").concat(locale == 'en' ? '0.3rem' : 0, ";-moz-letter-spacing:").concat(locale == 'en' ? '0.3rem' : 0, ";-ms-letter-spacing:").concat(locale == 'en' ? '0.3rem' : 0, ";letter-spacing:").concat(locale == 'en' ? '0.3rem' : 0, ";}")));
  };

  var Submenu = function Submenu() {
    var submenu = i18n['components']['header']['submenu'];
    return /*#__PURE__*/React.createElement(React.Fragment, null, config && i18n && submenu && /*#__PURE__*/React.createElement("nav", {
      className: _JSXStyle.dynamic([["2633528102", [theme.palette.border, theme.palette.background, theme.type === 'dark' ? "inset 0 -1px ".concat(theme.palette.border) : 'rgba(0, 0, 0, 0.1) 0 0 15px 0', config.theme.width, theme.layout.pageMargin, theme.palette.accents_5, theme.palette.foreground, theme.palette.foreground]]]) + " " + "SubmenuWrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: _JSXStyle.dynamic([["2633528102", [theme.palette.border, theme.palette.background, theme.type === 'dark' ? "inset 0 -1px ".concat(theme.palette.border) : 'rgba(0, 0, 0, 0.1) 0 0 15px 0', config.theme.width, theme.layout.pageMargin, theme.palette.accents_5, theme.palette.foreground, theme.palette.foreground]]]) + " " + "Submenu ".concat(sticky ? 'SubmenuSticky' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: _JSXStyle.dynamic([["2633528102", [theme.palette.border, theme.palette.background, theme.type === 'dark' ? "inset 0 -1px ".concat(theme.palette.border) : 'rgba(0, 0, 0, 0.1) 0 0 15px 0', config.theme.width, theme.layout.pageMargin, theme.palette.accents_5, theme.palette.foreground, theme.palette.foreground]]]) + " " + "SubmenuInner"
    }, /*#__PURE__*/React.createElement(Tabs, {
      align: "center",
      value: matchedURL ? matchedURL[0] : router.pathname,
      onChange: function onChange(route) {
        return router.push(route);
      }
    }, submenu.unprotected.map(function (tab) {
      return /*#__PURE__*/React.createElement(Tabs.Item, {
        key: tab['label'][locale],
        label: tab['label'][locale],
        value: tab.value
      });
    }), submenu["protected"].map(function (tab) {
      return /*#__PURE__*/React.createElement(Tabs.Item, {
        key: tab['label'][locale],
        label: tab['label'][locale],
        value: tab.value,
        disabled: !isAuthenticated
      });
    }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "2633528102",
      dynamic: [theme.palette.border, theme.palette.background, theme.type === 'dark' ? "inset 0 -1px ".concat(theme.palette.border) : 'rgba(0, 0, 0, 0.1) 0 0 15px 0', config.theme.width, theme.layout.pageMargin, theme.palette.accents_5, theme.palette.foreground, theme.palette.foreground]
    }, ".scroll-container{padding-left:0px !important;border:none !important;}.SubmenuWrapper{height:50px;position:relative;overflow:hidden;box-shadow:inset 0 -1px ".concat(theme.palette.border, ";}.SubmenuSticky{-webkit-transition:box-shadow 1s ease;transition:box-shadow 1s ease;}.SubmenuSticky{position:fixed;z-index:1100;top:0;right:0;left:0;background:").concat(theme.palette.background, ";box-shadow:").concat(theme.type === 'dark' ? "inset 0 -1px ".concat(theme.palette.border) : 'rgba(0, 0, 0, 0.1) 0 0 15px 0', ";}.SubmenuInner{width:").concat(config.theme.width, ";max-width:100%;margin:0 auto;padding:0 ").concat(theme.layout.pageMargin, ";height:50px;overflow-y:hidden;overflow-x:auto;overflow:-moz-scrollbars-none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;box-sizing:border-box;}.SubmenuInner::-webkit-scrollbar{display:none;}.SubmenuInner .content{display:none;}.SubmenuInner .tabs,.SubmenuInner header{height:100%;border:none !important;}.SubmenuInner .tab{height:calc(100% - 2px);padding-top:0;padding-bottom:0;color:").concat(theme.palette.accents_5, ";font-size:0.9rem !important;}.SubmenuInner .tab:hover{color:").concat(theme.palette.foreground, ";}.SubmenuInner .active{color:").concat(theme.palette.foreground, ";border:none !important;}")));
  };

  var TabletNav = function TabletNav() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true,
      icon: /*#__PURE__*/React.createElement(Search, null)
    }), themeProvider && /*#__PURE__*/React.createElement(Button, {
      icon: theme.type === 'dark' ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null),
      "aria-label": "Toggle Theme",
      mx: 0.5,
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true,
      onClick: function onClick() {
        return themeProvider.setLocalTheme(theme.type === 'dark' ? 'light' : 'dark');
      }
    })), /*#__PURE__*/React.createElement(Title, {
      config: config,
      i18n: i18n
    }), /*#__PURE__*/React.createElement("div", null, isAuthenticated ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
      href: "/cart"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(ShoppingCart, null),
      "aria-label": "Shopping Cart",
      mx: 0.5,
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true
    })), /*#__PURE__*/React.createElement(Link, {
      href: "/user"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(User, null),
      "aria-label": "Toggle Theme",
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true
    }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LogIn, null),
      "aria-label": "Login Button",
      type: "secondary",
      style: {
        border: 'none'
      },
      auto: true,
      px: 1.2,
      onClick: function onClick(e) {
        return setModalVis(true);
      }
    }, buttons['login'][locale]), /*#__PURE__*/React.createElement(LoginModal, null))));
  };

  var PhoneNav = function PhoneNav() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true,
      icon: /*#__PURE__*/React.createElement(Search, null)
    }), /*#__PURE__*/React.createElement(Title, {
      config: config,
      i18n: i18n
    }), /*#__PURE__*/React.createElement(Button, {
      type: "secondary",
      ghost: true,
      style: {
        border: 'none'
      },
      auto: true,
      icon: /*#__PURE__*/React.createElement(Menu, null),
      onClick: function onClick() {
        return drawDrawer();
      }
    }), /*#__PURE__*/React.createElement(Drawer, {
      visible: drawerVis,
      onClose: function onClose() {
        return setDrawerVis(false);
      },
      placement: placement,
      width: "60%"
    }, /*#__PURE__*/React.createElement(Drawer.Content, null, /*#__PURE__*/React.createElement(ButtonGroup, {
      type: "secondary",
      mx: 0,
      mb: 2,
      width: "100%"
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: theme.type === 'dark',
      icon: /*#__PURE__*/React.createElement(Moon, null),
      scale: 1.3,
      "aria-label": "Toggle Dark Mode",
      onClick: function onClick() {
        return themeProvider.setLocalTheme('dark');
      }
    }), /*#__PURE__*/React.createElement(Button, {
      disabled: theme.type === 'light',
      icon: /*#__PURE__*/React.createElement(Sun, null),
      scale: 1.3,
      "aria-label": "Toggle Light Mode",
      onClick: function onClick() {
        return themeProvider.setLocalTheme('light');
      }
    })), isAuthenticated ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
      href: "/cart"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(ShoppingCart, null),
      "aria-label": "Shopping Cart",
      type: "secondary",
      width: "100%",
      scale: 1.5,
      mb: 0.5,
      style: {
        border: 'none'
      }
    })), /*#__PURE__*/React.createElement(Link, {
      href: "/user"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(User, null),
      "aria-label": "Toggle Theme",
      type: "secondary",
      width: "100%",
      scale: 1.5,
      style: {
        border: 'none'
      }
    }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LogIn, null),
      "aria-label": "Login Button",
      type: "secondary",
      style: {
        border: 'none'
      },
      width: "100%",
      scale: 1.5,
      onClick: function onClick(e) {
        return setModalVis(true);
      }
    }), /*#__PURE__*/React.createElement(LoginModal, null)))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "3843846058"
    }, ".btn-group>button{width:100% !important;}"));
  };

  var Binder = function Binder(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React.createElement(React.Fragment, null, config && i18n && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
      className: _JSXStyle.dynamic([["4130135573", [config.theme.width, theme.layout.pageMargin, isLocaleRTL(locale) ? '' : '0.5rem', isLocaleRTL(locale) ? '0.5rem' : '']]]) + " " + "Navigation"
    }, children), /*#__PURE__*/React.createElement(Submenu, {
      config: config,
      i18n: i18n,
      sticky: sticky
    }), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "4130135573",
      dynamic: [config.theme.width, theme.layout.pageMargin, isLocaleRTL(locale) ? '' : '0.5rem', isLocaleRTL(locale) ? '0.5rem' : '']
    }, ".Navigation{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:".concat(config.theme.width, ";max-width:100%;margin:0 auto;padding:2rem ").concat(theme.layout.pageMargin, ";height:55px;box-sizing:border-box;}.Navigation>div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.MainDropdown{margin-left:").concat(isLocaleRTL(locale) ? '' : '0.5rem', ";margin-right:").concat(isLocaleRTL(locale) ? '0.5rem' : '', ";}.MainDropdown>button{white-space:nowrap;}"))));
  };

  return /*#__PURE__*/React.createElement(Binder, null, width > 650 ? /*#__PURE__*/React.createElement(TabletNav, null) : /*#__PURE__*/React.createElement(PhoneNav, null));
}