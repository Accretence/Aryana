import React from 'react';
export default function (_ref) {
  var embedId = _ref.embedId;
  return /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "500rem",
    src: "https://www.youtube.com/embed/".concat(embedId),
    frameBorder: "0",
    allowFullScreen: true
  });
}