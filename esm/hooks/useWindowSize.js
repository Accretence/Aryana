import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';
export default function () {
  var _useState = useState({
    width: undefined,
    height: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  useEffect(function () {
    if (typeof window !== 'undefined') {
      var handleResize = function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return windowSize;
}