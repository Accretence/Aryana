import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { burnToast } from '../helpers/index.js';
export function handleOrderData(_x) {
  return _handleOrderData.apply(this, arguments);
}

function _handleOrderData() {
  _handleOrderData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var response, router, setOrder, setToast, noDataToast, data, error;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = _ref.response, router = _ref.router, setOrder = _ref.setOrder, setToast = _ref.setToast, noDataToast = _ref.noDataToast;
            data = response.data, error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            if (!data) {
              router.replace('/');
              burnToast(setToast, noDataToast);
            }

            setOrder(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleOrderData.apply(this, arguments);
}