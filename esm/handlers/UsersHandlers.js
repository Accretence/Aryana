import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Link from 'next/link';
import { Link as LinkIcon } from '@geist-ui/icons';
import { burnToast } from '../helpers/index.js';
export function handleUserData(_x) {
  return _handleUserData.apply(this, arguments);
}

function _handleUserData() {
  _handleUserData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var response, router, setUser, setToast, noDataToast, notVerifiedToast, data, error, orders, pOrders;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = _ref.response, router = _ref.router, setUser = _ref.setUser, setToast = _ref.setToast, noDataToast = _ref.noDataToast, notVerifiedToast = _ref.notVerifiedToast;
            data = response.data, error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            if (!data) {
              router.replace('/');
              burnToast(setToast, noDataToast);
            }

            if (!data.isEmailVerified) {
              router.replace('/auth/verify');
              burnToast(setToast, notVerifiedToast);
            }

            orders = data.orders;
            pOrders = orders.map(function (order) {
              return _extends({}, order, {
                link: /*#__PURE__*/React.createElement(Link, {
                  href: "/order/".concat(order.id)
                }, /*#__PURE__*/React.createElement("a", null, "Order #".concat(order.index), " ", '  ', " ", /*#__PURE__*/React.createElement(LinkIcon, {
                  size: 12
                })))
              });
            });
            data.orders = pOrders;
            setUser(data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleUserData.apply(this, arguments);
}