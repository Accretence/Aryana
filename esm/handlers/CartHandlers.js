import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { burnToast } from '../helpers/index.js';
export function handleCartData(_x) {
  return _handleCartData.apply(this, arguments);
}

function _handleCartData() {
  _handleCartData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var response, router, setCart, setToast, noDataToast, data, error;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = _ref.response, router = _ref.router, setCart = _ref.setCart, setToast = _ref.setToast, noDataToast = _ref.noDataToast;
            data = response.data, error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            if (!data || !data.cart) {
              router.replace('/');
              burnToast(setToast, noDataToast);
            }

            setCart(data.cart);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleCartData.apply(this, arguments);
}

export function handleAddToCartData(_x2) {
  return _handleAddToCartData.apply(this, arguments);
}

function _handleAddToCartData() {
  _handleAddToCartData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
    var response, router, setToast, toast, error;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = _ref2.response, router = _ref2.router, setToast = _ref2.setToast, toast = _ref2.toast;
            error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            burnToast(setToast, toast);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handleAddToCartData.apply(this, arguments);
}