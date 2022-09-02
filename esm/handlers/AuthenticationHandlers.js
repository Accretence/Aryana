import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import axios from 'axios';
import { burnToast } from '../helpers/index.js';
export function loginHandler(_x) {
  return _loginHandler.apply(this, arguments);
}

function _loginHandler() {
  _loginHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var config, setLoading, setToast, setLocalAuthentication, router, refEmail, refPassword, toast, response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref.config, setLoading = _ref.setLoading, setToast = _ref.setToast, setLocalAuthentication = _ref.setLocalAuthentication, router = _ref.router, refEmail = _ref.refEmail, refPassword = _ref.refPassword, toast = _ref.toast;
            setLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return axios.post(config.backend.routes.login, {
              email: refEmail.current,
              password: refPassword.current
            }, config.backend.axios.simple);

          case 5:
            response = _context.sent;

            if (response && response.status && response.status == 200) {
              burnToast(setToast, toast);
              setLocalAuthentication(true);
              router.replace('/user');
            }

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            setLoading(false);
            burnToast(setToast, _context.t0 && _context.t0.response && _context.t0.response.data ? _context.t0.response.data : 'Error');

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _loginHandler.apply(this, arguments);
}

export function registerHandler(_x2) {
  return _registerHandler.apply(this, arguments);
}

function _registerHandler() {
  _registerHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
    var config, setLoading, setToast, setLocalAuthentication, router, refEmail, refPassword, response;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = _ref2.config, setLoading = _ref2.setLoading, setToast = _ref2.setToast, setLocalAuthentication = _ref2.setLocalAuthentication, router = _ref2.router, refEmail = _ref2.refEmail, refPassword = _ref2.refPassword;
            setLoading(true);
            _context2.prev = 2;
            _context2.next = 5;
            return axios.post(config.backend.routes.register, {
              email: refEmail.current,
              password: refPassword.current
            }, config.backend.axios.simple);

          case 5:
            response = _context2.sent;

            if (response && response.status && response.status == 200) {
              setLocalAuthentication(true);
              router.replace('/user');
            }

            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            setLoading(false);
            burnToast(setToast, _context2.t0 && _context2.t0.response && _context2.t0.response.data ? _context2.t0.response.data : 'Error');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _registerHandler.apply(this, arguments);
}

export function verifyHandler(_x3) {
  return _verifyHandler.apply(this, arguments);
}

function _verifyHandler() {
  _verifyHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_ref3) {
    var config, setLoading, setToast, router, refCode, toast, response;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = _ref3.config, setLoading = _ref3.setLoading, setToast = _ref3.setToast, router = _ref3.router, refCode = _ref3.refCode, toast = _ref3.toast;
            setLoading(true);
            _context3.prev = 2;
            _context3.next = 5;
            return axios.post(config.backend.routes.verify, {
              code: refCode.current
            }, config.backend.axios.simple);

          case 5:
            response = _context3.sent;

            if (response && response.status && response.status == 200) {
              burnToast(setToast, toast);
              router.replace('/');
            }

            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            setLoading(false);
            burnToast(setToast, _context3.t0 && _context3.t0.response && _context3.t0.response.data ? _context3.t0.response.data : 'Error');

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _verifyHandler.apply(this, arguments);
}

export function logoutHandler(_x4) {
  return _logoutHandler.apply(this, arguments);
}

function _logoutHandler() {
  _logoutHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(_ref4) {
    var config, setToast, setLocalAuthentication, router, toast, response;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            config = _ref4.config, setToast = _ref4.setToast, setLocalAuthentication = _ref4.setLocalAuthentication, router = _ref4.router, toast = _ref4.toast;
            _context4.prev = 1;
            _context4.next = 4;
            return axios.post(config.backend.routes.logout);

          case 4:
            response = _context4.sent;

            if (response && response.status && response.status == 200) {
              setLocalAuthentication(false);
              router.replace('/');
              burnToast(setToast, toast);
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            burnToast(setToast, _context4.t0 && _context4.t0.response && _context4.t0.response.data ? _context4.t0.response.data : 'Error');

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _logoutHandler.apply(this, arguments);
}

export function unsubscribeHandler(_x5, _x6, _x7, _x8) {
  return _unsubscribeHandler.apply(this, arguments);
}

function _unsubscribeHandler() {
  _unsubscribeHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(config, setLoading, setToast, toast) {
    var response;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            setLoading(true);
            _context5.prev = 1;
            _context5.next = 4;
            return axios.post(config.backend.routes.unsubscribe);

          case 4:
            response = _context5.sent;

            if (response && response.status && response.status == 200) {
              router.replace('/');
              burnToast(setToast, toast);
            }

            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            setLoading(false);
            burnToast(setToast, _context5.t0 && _context5.t0.response && _context5.t0.response.data ? _context5.t0.response.data : 'Error');

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _unsubscribeHandler.apply(this, arguments);
}

export function subscribeHandler(_x9, _x10, _x11, _x12) {
  return _subscribeHandler.apply(this, arguments);
}

function _subscribeHandler() {
  _subscribeHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(config, setLoading, setToast, toast) {
    var response;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            setLoading(true);
            _context6.prev = 1;
            _context6.next = 4;
            return axios.post(config.backend.routes.subscribe);

          case 4:
            response = _context6.sent;

            if (response && response.status && response.status == 200) {
              router.replace('/');
              burnToast(setToast, toast);
            }

            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            setLoading(false);
            burnToast(setToast, _context6.t0 && _context6.t0.response && _context6.t0.response.data ? _context6.t0.response.data : 'Error');

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _subscribeHandler.apply(this, arguments);
}

export function forgotHandler(_x13, _x14, _x15, _x16, _x17, _x18) {
  return _forgotHandler.apply(this, arguments);
}

function _forgotHandler() {
  _forgotHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(config, refEmail, setLoading, setToast, setNextStage, toast) {
    var response;
    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            setLoading(true);
            _context7.prev = 1;
            _context7.next = 4;
            return axios.post(config.backend.routes.forgot, {
              email: refEmail.current
            }, config.backend.axios.simple);

          case 4:
            response = _context7.sent;

            if (response && response.status && response.status == 200) {
              setLoading(false);
              setNextStage(true);
              burnToast(setToast, toast);
            }

            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            setLoading(false);
            burnToast(setToast, _context7.t0 && _context7.t0.response && _context7.t0.response.data ? _context7.t0.response.data : 'Error');

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _forgotHandler.apply(this, arguments);
}

export function resetHandler(_x19, _x20, _x21, _x22, _x23, _x24, _x25) {
  return _resetHandler.apply(this, arguments);
}

function _resetHandler() {
  _resetHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(config, refCode, refPassword, setLoading, setToast, router, toast) {
    var response;
    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            setLoading(true);
            _context8.prev = 1;
            _context8.next = 4;
            return axios.post(config.backend.routes.reset, {
              code: refCode.current,
              password: refPassword.current
            }, config.backend.axios.simple);

          case 4:
            response = _context8.sent;

            if (response && response.status && response.status == 200) {
              router.replace('/');
              burnToast(setToast, toast);
            }

            _context8.next = 12;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            setLoading(false);
            burnToast(setToast, _context8.t0 && _context8.t0.response && _context8.t0.response.data ? _context8.t0.response.data : 'Error');

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _resetHandler.apply(this, arguments);
}