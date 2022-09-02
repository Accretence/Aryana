import Head from 'next/head';
import { useRouter } from 'next/router';
export default function (_ref) {
  var config = _ref.config,
      i18n = _ref.i18n,
      title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  var _useRouter = useRouter(),
      _useRouter$locale = _useRouter.locale,
      locale = _useRouter$locale === void 0 ? config.defaultLocale : _useRouter$locale;

  title = title ? title : i18n['meta']['title'][locale];
  description = description ? description : i18n['meta']['description'][locale];
  image = image ? image : config.meta.image;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:type",
    content: "application"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:locale",
    content: "en_US"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:site",
    content: config.meta.handle
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:creator",
    content: config.meta.handle
  }), /*#__PURE__*/React.createElement("link", {
    rel: "canonical",
    href: config.meta.url
  }), /*#__PURE__*/React.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:text:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: image
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:image",
    content: image
  }), /*#__PURE__*/React.createElement("meta", {
    name: "og:url",
    content: config.meta.url
  }), /*#__PURE__*/React.createElement("meta", {
    name: "keyword",
    content: config.meta.keywords
  }));
}