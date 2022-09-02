'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

function getGoogleURL () {
  var rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  var options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(' ')
  };
  var qs = new URLSearchParams(options);
  return "".concat(rootUrl, "?").concat(qs.toString());
}

function isEmail (email) {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function isLocaleRTL(locale) {
  var RTLs = new Set(['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi']);
  if (RTLs.has(locale)) return true;
  return false;
}
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? 'rtl' : 'ltr';
}
function getLocaleAlignment(locale) {
  return isLocaleRTL(locale) ? 'right' : 'left';
}

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var style$1 = {};

var stylesheetRegistry = {};

function hash(str) {
  var hash = 5381,
    i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0
}

var stringHash = hash;

var stylesheet = {}

;(function (exports) {
  exports.__esModule = true;
  exports['default'] = void 0;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
  }

  /*
  Based on Glamor's sheet
  https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
  */
  var isProd =
    typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

  var isString = function isString(o) {
    return Object.prototype.toString.call(o) === '[object String]'
  };

  var StyleSheet = /*#__PURE__*/ (function () {
    function StyleSheet(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed =
          _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser =
          _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

      invariant(isString(name), '`name` must be a string');
      this._name = name;
      this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';
      invariant(
        typeof optimizeForSpeed === 'boolean',
        '`optimizeForSpeed` must be a boolean',
      );
      this._optimizeForSpeed = optimizeForSpeed;
      this._isBrowser = isBrowser;
      this._serverSheet = undefined;
      this._tags = [];
      this._injected = false;
      this._rulesCount = 0;
      var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
      this._nonce = node ? node.getAttribute('content') : null;
    }

    var _proto = StyleSheet.prototype;

    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(
        this._rulesCount === 0,
        'optimizeForSpeed cannot be when rules have already been inserted',
      );
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    };

    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
      return this._optimizeForSpeed
    };

    _proto.inject = function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn(
              'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.',
            );
          }

          this.flush();
          this._injected = true;
        }

        return
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule,
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule,
            });
          }

          return index
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        },
      };
    };

    _proto.getSheetForTag = function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet
      } // this weirdness brought to you by firefox

      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i]
        }
      }
    };

    _proto.getSheet = function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1])
    };

    _proto.insertRule = function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn(
              'StyleSheet: illegal rule: \n\n' +
                rule +
                '\n\nSee https://stackoverflow.com/q/20007992 for more info',
            );
          }

          return -1
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++
    };

    _proto.replaceRule = function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn(
              'StyleSheet: illegal rule: \n\n' +
                rule +
                '\n\nSee https://stackoverflow.com/q/20007992 for more info',
            );
          } // In order to preserve the indices we insert a deleteRulePlaceholder

          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }

      return index
    };

    _proto.deleteRule = function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    };

    _proto.flush = function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag)
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    };

    _proto.cssRules = function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(
            Array.prototype.map.call(
              _this2.getSheetForTag(tag).cssRules,
              function (rule) {
                return rule.cssText === _this2._deletedRulePlaceholder ? null : rule
              },
            ),
          );
        } else {
          rules.push(null);
        }

        return rules
      }, [])
    };

    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(
          isString(cssString),
          'makeStyleTag acceps only strings as second parameter',
        );
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag
    };

    _createClass(StyleSheet, [
      {
        key: 'length',
        get: function get() {
          return this._rulesCount
        },
      },
    ]);

    return StyleSheet
  })();

  exports['default'] = StyleSheet;

  function invariant(condition, message) {
    if (!condition) {
      throw new Error('StyleSheet: ' + message + '.')
    }
  }
})(stylesheet)
;(function (exports) {
  exports.__esModule = true;
  exports['default'] = void 0;

  var _stringHash = _interopRequireDefault(stringHash);

  var _stylesheet = _interopRequireDefault(stylesheet);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
  }

  var sanitize = function sanitize(rule) {
    return rule.replace(/\/style/gi, '\\/style')
  };

  var StyleSheetRegistry = /*#__PURE__*/ (function () {
    function StyleSheetRegistry(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed =
          _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser =
          _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

      this._sheet =
        styleSheet ||
        new _stylesheet['default']({
          name: 'styled-jsx',
          optimizeForSpeed: optimizeForSpeed,
        });

      this._sheet.inject();

      if (styleSheet && typeof optimizeForSpeed === 'boolean') {
        this._sheet.setOptimizeForSpeed(optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      this._isBrowser = isBrowser;
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }

    var _proto = StyleSheetRegistry.prototype;

    _proto.add = function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (
          acc,
          tagName,
        ) {
          acc[tagName] = 0;
          return acc
        },
        {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.

      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return
      }

      var indices = rules
        .map(function (rule) {
          return _this._sheet.insertRule(rule)
        }) // Filter out invalid rules
        .filter(function (index) {
          return index !== -1
        });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    };

    _proto.remove = function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index)
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    };

    _proto.update = function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    };

    _proto.flush = function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    };

    _proto.cssRules = function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer
        ? Object.keys(this._fromServer).map(function (styleId) {
            return [styleId, _this3._fromServer[styleId]]
          })
        : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(
        Object.keys(this._indices)
          .map(function (styleId) {
            return [
              styleId,
              _this3._indices[styleId]
                .map(function (index) {
                  return cssRules[index].cssText
                })
                .join(_this3._optimizeForSpeed ? '' : '\n'),
            ]
          }) // filter out empty rules
          .filter(function (rule) {
            return Boolean(rule[1])
          }),
      )
    };
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

    _proto.createComputeId = function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash['default'])(baseId + '-' + propsToString);
        }

        return cache[key]
      }
    };
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

    _proto.createComputeSelector = function createComputeSelector(
      selectoPlaceholderRegexp,
    ) {
      if (selectoPlaceholderRegexp === void 0) {
        selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
      }

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss]
      }
    };

    _proto.getIdAndRules = function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css)
            ? css.map(function (rule) {
                return _this4.computeSelector(styleId, rule)
              })
            : [this.computeSelector(styleId, css)],
        }
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css],
      }
    };
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

    _proto.selectFromServer = function selectFromServer() {
      var elements = Array.prototype.slice.call(
        document.querySelectorAll('[id^="__jsx-"]'),
      );
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc
      }, {})
    };

    return StyleSheetRegistry
  })();

  exports['default'] = StyleSheetRegistry;

  function invariant(condition, message) {
    if (!condition) {
      throw new Error('StyleSheetRegistry: ' + message + '.')
    }
  }
})(stylesheetRegistry)
;(function (exports) {
  exports.__esModule = true;
  exports['default'] = JSXStyle;
  exports.flush = flush;

  var _react = React__default["default"];

  var _stylesheetRegistry = _interopRequireDefault(stylesheetRegistry);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
  }

  var styleSheetRegistry = new _stylesheetRegistry['default']();

  function JSXStyle(props) {
    if (typeof window === 'undefined') {
      styleSheetRegistry.add(props);
      return null
    }
(0, _react.useLayoutEffect)(
      function () {
        styleSheetRegistry.add(props);
        return function () {
          styleSheetRegistry.remove(props);
        } // props.children can be string[], will be striped since id is identical
      },
      [props.id, String(props.dynamic)],
    );
    return null
  }

  JSXStyle.dynamic = function (info) {
    return info
      .map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props)
      })
      .join(' ')
  };

  function flush() {
    var cssRules = styleSheetRegistry.cssRules();
    styleSheetRegistry.flush();
    return cssRules
  }
})(style$1);

var style = style$1.default || style$1;
style.flush = style$1.flush;

var server = {}

;(function (exports) {
  exports.__esModule = true;
  exports['default'] = flushToReact;
  exports.flushToHTML = flushToHTML;

  var _react = _interopRequireDefault(React__default["default"]);

  var _style = style$1.default || style$1;
  _style.flush = style$1.flush;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
  }

  function flushToReact(options) {
    if (options === void 0) {
      options = {};
    }

    return (0, _style.flush)().map(function (args) {
      var id = args[0];
      var css = args[1];
      return _react['default'].createElement('style', {
        id: '__' + id,
        // Avoid warnings upon render with a key
        key: '__' + id,
        nonce: options.nonce ? options.nonce : undefined,
        dangerouslySetInnerHTML: {
          __html: css,
        },
      })
    })
  }

  function flushToHTML(options) {
    if (options === void 0) {
      options = {};
    }

    return (0, _style.flush)().reduce(function (html, args) {
      var id = args[0];
      var css = args[1];
      html +=
        '<style id="__' +
        id +
        '"' +
        (options.nonce ? ' nonce="' + options.nonce + '"' : '') +
        '>' +
        css +
        '</style>';
      return html
    }, '')
  }
})(server);
var _server = server.default || server;
_server.flushToHTML = server.flushToHTML;

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var defaultFont = {
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  prism: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace'
};
var defaultBreakpoints = {
  xs: {
    min: '0',
    max: '650px'
  },
  sm: {
    min: '650px',
    max: '900px'
  },
  md: {
    min: '900px',
    max: '1280px'
  },
  lg: {
    min: '1280px',
    max: '1920px'
  },
  xl: {
    min: '1920px',
    max: '10000px'
  }
};
var defaultLayout = {
  gap: '16pt',
  gapNegative: '-16pt',
  gapHalf: '8pt',
  gapHalfNegative: '-8pt',
  gapQuarter: '4pt',
  gapQuarterNegative: '-4pt',
  pageMargin: '16pt',
  pageWidth: '750pt',
  pageWidthWithMargin: '782pt',
  breakpointMobile: defaultBreakpoints.xs.max,
  breakpointTablet: defaultBreakpoints.sm.max,
  radius: '6px',
  unit: '16px'
};

var palette$1 = {
  accents_1: '#fafafa',
  accents_2: '#eaeaea',
  accents_3: '#999',
  accents_4: '#888',
  accents_5: '#666',
  accents_6: '#444',
  accents_7: '#333',
  accents_8: '#111',
  background: '#fff',
  foreground: '#000',
  selection: '#79ffe1',
  secondary: '#666',
  code: '#f81ce5',
  border: '#eaeaea',
  error: '#e00',
  errorLight: '#ff1a1a',
  errorLighter: '#f7d4d6',
  errorDark: '#c50000',
  success: '#0070f3',
  successLight: '#3291ff',
  successLighter: '#d3e5ff',
  successDark: '#0761d1',
  warning: '#f5a623',
  warningLight: '#f7b955',
  warningLighter: '#ffefcf',
  warningDark: '#ab570a',
  cyan: '#50e3c2',
  cyanLighter: '#aaffec',
  cyanLight: '#79ffe1',
  cyanDark: '#29bc9b',
  violet: '#7928ca',
  violetLighter: '#e3d7fc',
  violetLight: '#8a63d2',
  violetDark: '#4c2889',
  purple: '#f81ce5',
  alert: '#ff0080',
  magenta: '#eb367f',
  link: '#0070f3'
};
var expressiveness$1 = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
  portalOpacity: 0.25
};
var font$1 = defaultFont;
var breakpoints$1 = defaultBreakpoints;
var layout$1 = defaultLayout;
var themes$1 = {
  type: 'light',
  font: font$1,
  layout: layout$1,
  palette: palette$1,
  breakpoints: breakpoints$1,
  expressiveness: expressiveness$1
};

var palette = {
  accents_1: '#111',
  accents_2: '#333',
  accents_3: '#444',
  accents_4: '#666',
  accents_5: '#888',
  accents_6: '#999',
  accents_7: '#eaeaea',
  accents_8: '#fafafa',
  background: '#000',
  foreground: '#fff',
  selection: '#f81ce5',
  secondary: '#888',
  code: '#79ffe1',
  border: '#333',
  error: '#e00',
  errorLighter: '#f7d4d6',
  errorLight: '#ff1a1a',
  errorDark: '#c50000',
  success: '#0070f3',
  successLighter: '#d3e5ff',
  successLight: '#3291ff',
  successDark: '#0761d1',
  warning: '#f5a623',
  warningLighter: '#ffefcf',
  warningLight: '#f7b955',
  warningDark: '#ab570a',
  cyan: '#50e3c2',
  cyanLighter: '#aaffec',
  cyanLight: '#79ffe1',
  cyanDark: '#29bc9b',
  violet: '#7928ca',
  violetLighter: '#e3d7fc',
  violetLight: '#8a63d2',
  violetDark: '#4c2889',
  purple: '#f81ce5',
  alert: '#ff0080',
  magenta: '#eb367f',
  link: '#3291ff'
};
var expressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 0 0 1px #333',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  shadowSmall: '0 0 0 1px #333',
  shadowMedium: '0 0 0 1px #333',
  shadowLarge: '0 0 0 1px #333',
  portalOpacity: 0.75
};
var font = defaultFont;
var breakpoints = defaultBreakpoints;
var layout = defaultLayout;
var themes = {
  type: 'dark',
  font: font,
  layout: layout,
  palette: palette,
  breakpoints: breakpoints,
  expressiveness: expressiveness
};

var isObject = function isObject(target) {
  return target && _typeof(target) === 'object';
};
var deepDuplicable = function deepDuplicable(source, target) {
  if (!isObject(target) || !isObject(source)) return source;
  var sourceKeys = Object.keys(source);
  var result = {};

  for (var _i = 0, _sourceKeys = sourceKeys; _i < _sourceKeys.length; _i++) {
    var key = _sourceKeys[_i];
    var sourceValue = source[key];
    var targetValue = target[key];

    if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
      result[key] = targetValue.concat(sourceValue);
    } else if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepDuplicable(sourceValue, _extends({}, targetValue));
    } else if (targetValue) {
      result[key] = targetValue;
    } else {
      result[key] = sourceValue;
    }
  }

  return result;
};

var getPresets = function getPresets() {
  return [themes$1, themes];
};

var getPresetStaticTheme = function getPresetStaticTheme() {
  return themes$1;
};

var isAvailableThemeType = function isAvailableThemeType(type) {
  if (!type) return false;
  var presetThemes = getPresets();
  var hasType = presetThemes.find(function (theme) {
    return theme.type === type;
  });
  return !hasType;
};

var isPresetTheme = function isPresetTheme(themeOrType) {
  if (!themeOrType) return false;
  var isType = typeof themeOrType === 'string';
  var type = isType ? themeOrType : themeOrType.type;
  return !isAvailableThemeType(type);
};

var hasUserCustomTheme = function hasUserCustomTheme() {
  var themes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return !!themes.find(function (item) {
    return isAvailableThemeType(item.type);
  });
};

var create = function create(base, custom) {
  if (!isAvailableThemeType(custom.type)) {
    throw new Error('Duplicate or unavailable theme type');
  }

  return deepDuplicable(base, custom);
};

var createFromDark = function createFromDark(custom) {
  return create(themes, custom);
};

var createFromLight = function createFromLight(custom) {
  return create(themes$1, custom);
};

var Themes = {
  isPresetTheme: isPresetTheme,
  isAvailableThemeType: isAvailableThemeType,
  hasUserCustomTheme: hasUserCustomTheme,
  getPresets: getPresets,
  getPresetStaticTheme: getPresetStaticTheme,
  create: create,
  createFromDark: createFromDark,
  createFromLight: createFromLight
};

var defaultTheme = Themes.getPresetStaticTheme();
var ThemeContext = /*#__PURE__*/React__default["default"].createContext(defaultTheme);
var useTheme = function useTheme() {
  return React__default["default"].useContext(ThemeContext);
};

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children,
      isRight = _ref.isRight;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3089782703", [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]]]) + " " + ((isRight ? 'right' : '') || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3089782703",
    dynamic: [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]
  }, "span.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:initial;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0;padding:0 ".concat(theme.layout.gapHalf, ";color:").concat(theme.palette.accents_4, ";background-color:").concat(theme.palette.accents_1, ";border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-top:1px solid ").concat(theme.palette.border, ";border-left:1px solid ").concat(theme.palette.border, ";border-bottom:1px solid ").concat(theme.palette.border, ";font-size:inherit;line-height:1;}span.right.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";border-left:0;border-right:1px solid ").concat(theme.palette.border, ";}")));
};

var MemoInputLabel = /*#__PURE__*/React__default["default"].memo(InputLabel);

var InputBlockLabelComponent = function InputBlockLabelComponent(_ref) {
  var children = _ref.children;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("label", {
    className: style.dynamic([["1278828862", [theme.palette.accents_6]]])
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1278828862",
    dynamic: [theme.palette.accents_6]
  }, "label.__jsx-style-dynamic-selector{display:block;font-weight:normal;color:".concat(theme.palette.accents_6, ";padding:0 0 0 1px;margin-bottom:0.5em;font-size:1em;line-height:1.5;}label.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}label.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

InputBlockLabelComponent.displayName = 'GeistInputBlockLabel';
var InputBlockLabel = /*#__PURE__*/React__default["default"].memo(InputBlockLabelComponent);

var InputIconComponent = function InputIconComponent(_ref) {
  var icon = _ref.icon,
      clickable = _ref.clickable,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    onClick: onClick,
    className: style.dynamic([["4247656379", [clickable ? 'pointer' : 'default', clickable ? 'auto' : 'none']]]) + " " + "input-icon"
  }, icon, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4247656379",
    dynamic: [clickable ? 'pointer' : 'default', clickable ? 'auto' : 'none']
  }, ".input-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;line-height:1;position:relative;cursor:".concat(clickable ? 'pointer' : 'default', ";pointer-events:").concat(clickable ? 'auto' : 'none', ";}.input-icon.__jsx-style-dynamic-selector svg{width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
};

InputIconComponent.displayName = 'GeistInputIcon';
var InputIcon = /*#__PURE__*/React__default["default"].memo(InputIconComponent);

var classObjectToString = function classObjectToString(className) {
  var keys = Object.keys(className);
  var len = keys.length;
  var str = '';

  for (var index = 0; index < len; index++) {
    var key = keys[index];
    var val = className[keys[index]];
    if (!val) continue;
    str = str ? "".concat(str, " ").concat(String(key)) : String(key);
  }

  return str;
};

var isObjectClassName = function isObjectClassName(value) {
  return _typeof(value) === 'object' && !Array.isArray(value);
};

var useClasses = function useClasses() {
  var len = arguments.length;
  var classes = '';
  if (len === 0) return classes;

  for (var index = 0; index < len; index++) {
    var val = index < 0 || arguments.length <= index ? undefined : arguments[index];
    if (!val) continue;

    if (isObjectClassName(val)) {
      classes += " ".concat(classObjectToString(val));
    } else {
      classes += " ".concat(String(val).trim());
    }
  }

  return classes.trim();
};

var InputIconClear = function InputIconClear(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      visible = _ref.visible;
  var theme = useTheme();
  var classes = useClasses('clear-icon', {
    visible: visible
  });

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    onClick && onClick(event);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: clickHandler,
    className: style.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 6L6 18",
    className: style.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 6l12 12",
    className: style.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1567030211",
    dynamic: [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]
  }, ".clear-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;margin:0;padding:0;color:").concat(theme.palette.accents_3, ";visibility:hidden;opacity:0;}.visible.__jsx-style-dynamic-selector{visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(disabled ? theme.palette.accents_3 : theme.palette.foreground, ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
};

var MemoInputIconClear = /*#__PURE__*/React__default["default"].memo(InputIconClear);

var getColors$7 = function getColors(palette, status) {
  var colors = {
    "default": {
      color: palette.foreground,
      borderColor: palette.border,
      hoverBorder: palette.accents_5
    },
    secondary: {
      color: palette.foreground,
      borderColor: palette.secondary,
      hoverBorder: palette.secondary
    },
    success: {
      color: palette.foreground,
      borderColor: palette.successLight,
      hoverBorder: palette.success
    },
    warning: {
      color: palette.foreground,
      borderColor: palette.warningLight,
      hoverBorder: palette.warning
    },
    error: {
      color: palette.error,
      borderColor: palette.error,
      hoverBorder: palette.errorDark
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var defaultProps$1x = {
  disabled: false,
  readOnly: false,
  clearable: false,
  iconClickable: false,
  type: 'default',
  htmlType: 'text',
  autoComplete: 'off',
  className: '',
  placeholder: '',
  initialValue: ''
};

var ScalePropKeys = ['width', 'height', 'padding', 'margin', 'w', 'h', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'pl', 'pr', 'pt', 'pb', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'ml', 'mr', 'mt', 'mb', 'px', 'py', 'mx', 'my', 'font', 'unit', 'scale'];

var defaultDynamicLayoutPipe = function defaultDynamicLayoutPipe(scale1x) {
  return "".concat(scale1x);
};

var defaultContext$e = {
  getScaleProps: function getScaleProps() {
    return undefined;
  },
  getAllScaleProps: function getAllScaleProps() {
    return {};
  },
  SCALES: {
    pl: defaultDynamicLayoutPipe,
    pr: defaultDynamicLayoutPipe,
    pb: defaultDynamicLayoutPipe,
    pt: defaultDynamicLayoutPipe,
    px: defaultDynamicLayoutPipe,
    py: defaultDynamicLayoutPipe,
    mb: defaultDynamicLayoutPipe,
    ml: defaultDynamicLayoutPipe,
    mr: defaultDynamicLayoutPipe,
    mt: defaultDynamicLayoutPipe,
    mx: defaultDynamicLayoutPipe,
    my: defaultDynamicLayoutPipe,
    width: defaultDynamicLayoutPipe,
    height: defaultDynamicLayoutPipe,
    font: defaultDynamicLayoutPipe
  },
  unit: '16px'
};
var ScaleContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$e);
var useScale = function useScale() {
  return React__default["default"].useContext(ScaleContext);
};

var getId = function getId() {
  return Math.random().toString(32).slice(2, 10);
};
var hasChild = function hasChild(children, child) {
  var types = React__default["default"].Children.map(children, function (item) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return null;
    return item.type;
  });
  return (types || []).includes(child);
};
var pickChild = function pickChild(children, targetChild) {
  var target = [];
  var withoutTargetChildren = React__default["default"].Children.map(children, function (item) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return item;

    if (item.type === targetChild) {
      target.push(item);
      return null;
    }

    return item;
  });
  var targetChildren = target.length >= 0 ? target : undefined;
  return [withoutTargetChildren, targetChildren];
};
var pickChildByProps = function pickChildByProps(children, key, value) {
  var target = [];
  var isArray = Array.isArray(value);
  var withoutPropChildren = React__default["default"].Children.map(children, function (item) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return null;
    if (!item.props) return item;

    if (isArray) {
      if (value.includes(item.props[key])) {
        target.push(item);
        return null;
      }

      return item;
    }

    if (item.props[key] === value) {
      target.push(item);
      return null;
    }

    return item;
  });
  var targetChildren = target.length >= 0 ? target : undefined;
  return [withoutPropChildren, targetChildren];
};
var setChildrenProps = function setChildrenProps(children, props) {
  var targetComponents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (React__default["default"].Children.count(children) === 0) return [];
  var allowAll = targetComponents.length === 0;

  var clone = function clone(child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return /*#__PURE__*/React__default["default"].cloneElement(child, props);
  };

  return React__default["default"].Children.map(children, function (item) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return item;
    if (allowAll) return clone(item, props);
    var isAllowed = targetComponents.find(function (child) {
      return child === item.type;
    });
    if (isAllowed) return clone(item, props);
    return item;
  });
};
var setChildrenIndex = function setChildrenIndex(children) {
  var targetComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (React__default["default"].Children.count(children) === 0) return [];
  var allowAll = targetComponents.length === 0;

  var clone = function clone(child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return /*#__PURE__*/React__default["default"].cloneElement(child, props);
  };

  var index = 0;
  return React__default["default"].Children.map(children, function (item) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return item;
    index = index + 1;
    if (allowAll) return clone(item, {
      index: index
    });
    var isAllowed = targetComponents.find(function (child) {
      return child === item.type;
    });
    if (isAllowed) return clone(item, {
      index: index
    });
    index = index - 1;
    return item;
  });
};
var getReactNode = function getReactNode(node) {
  if (!node) return null;
  if (typeof node !== 'function') return node;
  return node();
};
var isChildElement = function isChildElement(parent, child) {
  if (!parent || !child) return false;
  var node = child;

  while (node) {
    if (node === parent) return true;
    node = node.parentNode;
  }

  return false;
};
var isGeistElement = function isGeistElement(el) {
  if (!el) return false;
  if (el !== null && el !== void 0 && el.dataset && el !== null && el !== void 0 && el.dataset['geist']) return true;
  el.attributes.getNamedItem('data-geist');
  return !!el.attributes.getNamedItem('data-geist');
};
var isBrowser = function isBrowser() {
  return Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
};
var isMac = function isMac() {
  if (!isBrowser()) return false;
  return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
};
var isCSSNumberValue = function isCSSNumberValue(value) {
  return value !== undefined && !Number.isNaN(+value);
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var generateGetScaleProps = function generateGetScaleProps(props) {
  var getScaleProps = function getScaleProps(keyOrKeys) {
    if (!Array.isArray(keyOrKeys)) return props[keyOrKeys];
    var value = undefined;

    var _iterator = _createForOfIteratorHelper(keyOrKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var currentValue = props[key];

        if (typeof currentValue !== 'undefined') {
          value = currentValue;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return value;
  };

  return getScaleProps;
};
var generateGetAllScaleProps = function generateGetAllScaleProps(props) {
  var getAllScaleProps = function getAllScaleProps() {
    var scaleProps = {};

    var _iterator2 = _createForOfIteratorHelper(ScalePropKeys),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        var value = props[key];

        if (typeof value !== 'undefined') {
          scaleProps[key] = value;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return scaleProps;
  };

  return getAllScaleProps;
};

var _excluded$1k = ["children"],
    _excluded2 = ["paddingLeft", "pl", "paddingRight", "pr", "paddingTop", "pt", "paddingBottom", "pb", "marginTop", "mt", "marginRight", "mr", "marginBottom", "mb", "marginLeft", "ml", "px", "py", "mx", "my", "width", "height", "font", "w", "h", "margin", "padding", "unit", "scale"];

var reduceScaleCoefficient = function reduceScaleCoefficient(scale) {
  if (scale === 1) return scale;
  var diff = Math.abs((scale - 1) / 2);
  return scale > 1 ? 1 + diff : 1 - diff;
};

var withScale = function withScale(Render) {
  var ScaleFC = /*#__PURE__*/React$1.forwardRef(function (_ref, ref) {
    var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33;

    var children = _ref.children,
        props = _objectWithoutProperties(_ref, _excluded$1k);

    var _useTheme = useTheme(),
        layout = _useTheme.layout;

    var paddingLeft = props.paddingLeft,
        pl = props.pl,
        paddingRight = props.paddingRight,
        pr = props.pr,
        paddingTop = props.paddingTop,
        pt = props.pt,
        paddingBottom = props.paddingBottom,
        pb = props.pb,
        marginTop = props.marginTop,
        mt = props.mt,
        marginRight = props.marginRight,
        mr = props.mr,
        marginBottom = props.marginBottom,
        mb = props.mb,
        marginLeft = props.marginLeft,
        ml = props.ml,
        px = props.px,
        py = props.py,
        mx = props.mx,
        my = props.my,
        width = props.width,
        height = props.height,
        font = props.font,
        w = props.w,
        h = props.h,
        margin = props.margin,
        padding = props.padding,
        _props$unit = props.unit,
        unit = _props$unit === void 0 ? layout.unit : _props$unit,
        _props$scale = props.scale,
        scale = _props$scale === void 0 ? 1 : _props$scale,
        innerProps = _objectWithoutProperties(props, _excluded2);

    var makeScaleHandler = function makeScaleHandler(attrValue) {
      return function (scale1x, defaultValue) {
        // 0 means disable scale and the default value is 0
        if (scale1x === 0) {
          scale1x = 1;
          defaultValue = defaultValue || 0;
        }

        var factor = reduceScaleCoefficient(scale) * scale1x;

        if (typeof attrValue === 'undefined') {
          if (typeof defaultValue !== 'undefined') return "".concat(defaultValue);
          return "calc(".concat(factor, " * ").concat(unit, ")");
        }

        if (!isCSSNumberValue(attrValue)) return "".concat(attrValue);
        var customFactor = factor * Number(attrValue);
        return "calc(".concat(customFactor, " * ").concat(unit, ")");
      };
    };

    var value = {
      unit: unit,
      SCALES: {
        pt: makeScaleHandler((_ref2 = (_ref3 = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pt) !== null && _ref3 !== void 0 ? _ref3 : py) !== null && _ref2 !== void 0 ? _ref2 : padding),
        pr: makeScaleHandler((_ref4 = (_ref5 = paddingRight !== null && paddingRight !== void 0 ? paddingRight : pr) !== null && _ref5 !== void 0 ? _ref5 : px) !== null && _ref4 !== void 0 ? _ref4 : padding),
        pb: makeScaleHandler((_ref6 = (_ref7 = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pb) !== null && _ref7 !== void 0 ? _ref7 : py) !== null && _ref6 !== void 0 ? _ref6 : padding),
        pl: makeScaleHandler((_ref8 = (_ref9 = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : pl) !== null && _ref9 !== void 0 ? _ref9 : px) !== null && _ref8 !== void 0 ? _ref8 : padding),
        px: makeScaleHandler((_ref10 = (_ref11 = (_ref12 = (_ref13 = px !== null && px !== void 0 ? px : paddingLeft) !== null && _ref13 !== void 0 ? _ref13 : paddingRight) !== null && _ref12 !== void 0 ? _ref12 : pl) !== null && _ref11 !== void 0 ? _ref11 : pr) !== null && _ref10 !== void 0 ? _ref10 : padding),
        py: makeScaleHandler((_ref14 = (_ref15 = (_ref16 = (_ref17 = py !== null && py !== void 0 ? py : paddingTop) !== null && _ref17 !== void 0 ? _ref17 : paddingBottom) !== null && _ref16 !== void 0 ? _ref16 : pt) !== null && _ref15 !== void 0 ? _ref15 : pb) !== null && _ref14 !== void 0 ? _ref14 : padding),
        mt: makeScaleHandler((_ref18 = (_ref19 = marginTop !== null && marginTop !== void 0 ? marginTop : mt) !== null && _ref19 !== void 0 ? _ref19 : my) !== null && _ref18 !== void 0 ? _ref18 : margin),
        mr: makeScaleHandler((_ref20 = (_ref21 = marginRight !== null && marginRight !== void 0 ? marginRight : mr) !== null && _ref21 !== void 0 ? _ref21 : mx) !== null && _ref20 !== void 0 ? _ref20 : margin),
        mb: makeScaleHandler((_ref22 = (_ref23 = marginBottom !== null && marginBottom !== void 0 ? marginBottom : mb) !== null && _ref23 !== void 0 ? _ref23 : my) !== null && _ref22 !== void 0 ? _ref22 : margin),
        ml: makeScaleHandler((_ref24 = (_ref25 = marginLeft !== null && marginLeft !== void 0 ? marginLeft : ml) !== null && _ref25 !== void 0 ? _ref25 : mx) !== null && _ref24 !== void 0 ? _ref24 : margin),
        mx: makeScaleHandler((_ref26 = (_ref27 = (_ref28 = (_ref29 = mx !== null && mx !== void 0 ? mx : marginLeft) !== null && _ref29 !== void 0 ? _ref29 : marginRight) !== null && _ref28 !== void 0 ? _ref28 : ml) !== null && _ref27 !== void 0 ? _ref27 : mr) !== null && _ref26 !== void 0 ? _ref26 : margin),
        my: makeScaleHandler((_ref30 = (_ref31 = (_ref32 = (_ref33 = my !== null && my !== void 0 ? my : marginTop) !== null && _ref33 !== void 0 ? _ref33 : marginBottom) !== null && _ref32 !== void 0 ? _ref32 : mt) !== null && _ref31 !== void 0 ? _ref31 : mb) !== null && _ref30 !== void 0 ? _ref30 : margin),
        width: makeScaleHandler(width !== null && width !== void 0 ? width : w),
        height: makeScaleHandler(height !== null && height !== void 0 ? height : h),
        font: makeScaleHandler(font)
      },
      getScaleProps: generateGetScaleProps(props),
      getAllScaleProps: generateGetAllScaleProps(props)
    };
    return /*#__PURE__*/React__default["default"].createElement(ScaleContext.Provider, {
      value: value
    }, /*#__PURE__*/React__default["default"].createElement(Render, _extends({}, innerProps, {
      ref: ref
    }), children));
  });
  ScaleFC.displayName = "Scale".concat(Render.displayName || 'Wrapper');
  return ScaleFC;
};

var _excluded$1j = ["label", "labelRight", "type", "htmlType", "icon", "iconRight", "iconClickable", "onIconClick", "initialValue", "onChange", "readOnly", "value", "onClearClick", "clearable", "className", "onBlur", "onFocus", "autoComplete", "placeholder", "children", "disabled"];

var simulateChangeEvent = function simulateChangeEvent(el, event) {
  return _extends({}, event, {
    target: el,
    currentTarget: el
  });
};

var InputComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var label = _ref.label,
      labelRight = _ref.labelRight,
      type = _ref.type,
      htmlType = _ref.htmlType,
      icon = _ref.icon,
      iconRight = _ref.iconRight,
      iconClickable = _ref.iconClickable,
      onIconClick = _ref.onIconClick,
      initialValue = _ref.initialValue,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      value = _ref.value,
      onClearClick = _ref.onClearClick,
      clearable = _ref.clearable,
      className = _ref.className,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autoComplete = _ref.autoComplete,
      placeholder = _ref.placeholder,
      children = _ref.children,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$1j);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var inputRef = React$1.useRef(null);
  React$1.useImperativeHandle(ref, function () {
    return inputRef.current;
  });

  var _useState = React$1.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfValue = _useState2[0],
      setSelfValue = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var isControlledComponent = React$1.useMemo(function () {
    return value !== undefined;
  }, [value]);
  var labelClasses = React$1.useMemo(function () {
    return labelRight ? 'right-label' : label ? 'left-label' : '';
  }, [label, labelRight]);
  var iconClasses = React$1.useMemo(function () {
    return iconRight ? 'right-icon' : icon ? 'left-icon' : '';
  }, [icon, iconRight]);

  var _useMemo = React$1.useMemo(function () {
    return getColors$7(theme.palette, type);
  }, [theme.palette, type]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      hoverBorder = _useMemo.hoverBorder;

  var changeHandler = function changeHandler(event) {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  var clearHandler = function clearHandler(event) {
    setSelfValue('');
    onClearClick && onClearClick(event);
    /* istanbul ignore next */

    if (!inputRef.current) return;
    var changeEvent = simulateChangeEvent(inputRef.current, event);
    changeEvent.target.value = '';
    onChange && onChange(changeEvent);
    inputRef.current.focus();
  };

  var focusHandler = function focusHandler(e) {
    setHover(true);
    onFocus && onFocus(e);
  };

  var blurHandler = function blurHandler(e) {
    setHover(false);
    onBlur && onBlur(e);
  };

  var iconClickHandler = function iconClickHandler(e) {
    if (disabled) return;
    onIconClick && onIconClick(e);
  };

  var iconProps = React$1.useMemo(function () {
    return {
      clickable: iconClickable,
      onClick: iconClickHandler
    };
  }, [iconClickable, iconClickHandler]);
  React$1.useEffect(function () {
    if (isControlledComponent) {
      setSelfValue(value);
    }
  });
  var controlledValue = isControlledComponent ? {
    value: selfValue
  } : {
    defaultValue: initialValue
  };

  var inputProps = _extends({}, props, controlledValue);

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + "with-label"
  }, children && /*#__PURE__*/React__default["default"].createElement(InputBlockLabel, null, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (useClasses('input-container', className) || "")
  }, label && /*#__PURE__*/React__default["default"].createElement(MemoInputLabel, null, label), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (useClasses('input-wrapper', {
      hover: hover,
      disabled: disabled
    }, labelClasses) || "")
  }, icon && /*#__PURE__*/React__default["default"].createElement(InputIcon, _extends({
    icon: icon
  }, iconProps)), /*#__PURE__*/React__default["default"].createElement("input", _extends({
    type: htmlType,
    ref: inputRef,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onFocus: focusHandler,
    onBlur: blurHandler,
    onChange: changeHandler,
    autoComplete: autoComplete
  }, inputProps, {
    className: style.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (inputProps && inputProps.className != null && inputProps.className || useClasses({
      disabled: disabled
    }, iconClasses) || "")
  })), clearable && /*#__PURE__*/React__default["default"].createElement(MemoInputIconClear, {
    visible: Boolean(inputRef.current && inputRef.current.value !== ''),
    disabled: disabled || readOnly,
    onClick: clearHandler
  }), iconRight && /*#__PURE__*/React__default["default"].createElement(InputIcon, _extends({
    icon: iconRight
  }, iconProps))), labelRight && /*#__PURE__*/React__default["default"].createElement(MemoInputLabel, {
    isRight: true
  }, labelRight)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "575189429",
    dynamic: [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]
  }, ".with-label.__jsx-style-dynamic-selector{display:inline-block;box-sizing:border-box;-webkit-box-align:center;--input-height:".concat(SCALES.height(2.25), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'initial'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.input-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:").concat(SCALES.width(1, 'initial'), ";height:var(--input-height);}.input-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:").concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;}.input-wrapper.left-label.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;}.input-wrapper.right-label.__jsx-style-dynamic-selector{border-top-right-radius:0;border-bottom-right-radius:0;}.input-wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}input.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}.input-wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}input.__jsx-style-dynamic-selector{margin:0.25em 0.625em;padding:0;box-shadow:none;font-size:").concat(SCALES.font(0.875), ";background-color:transparent;border:none;color:").concat(color, ";outline:none;border-radius:0;width:100%;min-width:0;-webkit-appearance:none;}input.left-icon.__jsx-style-dynamic-selector{margin-left:0;}input.right-icon.__jsx-style-dynamic-selector{margin-right:0;}.__jsx-style-dynamic-selector::-webkit-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-ms-reveal{display:none !important;}input.__jsx-style-dynamic-selector:-webkit-autofill,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;-webkit-text-fill-color:").concat(color, " !important;}")));
});
InputComponent.defaultProps = defaultProps$1x;
InputComponent.displayName = 'GeistInput';
var Input = withScale(InputComponent);

var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var tupleNumber = function tupleNumber() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};
tuple('default', 'secondary', 'success', 'warning', 'error', 'abort', 'secondary-light', 'success-light', 'warning-light', 'error-light');
tuple('default', 'secondary', 'success', 'warning', 'error');
tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite');
tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite', 'alert', 'purple', 'violet', 'cyan');
tuple('default', 'silent', 'prevent');
tuple('hover', 'click');
tuple('top', 'topStart', 'topEnd', 'left', 'leftStart', 'leftEnd', 'bottom', 'bottomStart', 'bottomEnd', 'right', 'rightStart', 'rightEnd');
tuple('start', 'center', 'end', 'left', 'right');

var _excluded$1i = ["type", "disabled", "readOnly", "onFocus", "onBlur", "className", "initialValue", "onChange", "value", "placeholder", "resize"];
tuple('none', 'both', 'horizontal', 'vertical', 'initial', 'inherit');
var defaultProps$1w = {
  initialValue: '',
  type: 'default',
  disabled: false,
  readOnly: false,
  className: '',
  resize: 'none'
};
var TextareaComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      className = _ref.className,
      initialValue = _ref.initialValue,
      onChange = _ref.onChange,
      value = _ref.value,
      placeholder = _ref.placeholder,
      resize = _ref.resize,
      props = _objectWithoutProperties(_ref, _excluded$1i);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var textareaRef = React$1.useRef(null);
  React$1.useImperativeHandle(ref, function () {
    return textareaRef.current;
  });
  var isControlledComponent = React$1.useMemo(function () {
    return value !== undefined;
  }, [value]);

  var _useState = React$1.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfValue = _useState2[0],
      setSelfValue = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var _useMemo = React$1.useMemo(function () {
    return getColors$7(theme.palette, type);
  }, [theme.palette, type]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      hoverBorder = _useMemo.hoverBorder;

  var classes = useClasses('wrapper', {
    hover: hover,
    disabled: disabled
  }, className);

  var changeHandler = function changeHandler(event) {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  var focusHandler = function focusHandler(e) {
    setHover(true);
    onFocus && onFocus(e);
  };

  var blurHandler = function blurHandler(e) {
    setHover(false);
    onBlur && onBlur(e);
  };

  React$1.useEffect(function () {
    if (isControlledComponent) {
      setSelfValue(value);
    }
  });
  var controlledValue = isControlledComponent ? {
    value: selfValue
  } : {
    defaultValue: initialValue
  };

  var textareaProps = _extends({}, props, controlledValue);

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("textarea", _extends({
    ref: textareaRef,
    disabled: disabled,
    placeholder: placeholder,
    readOnly: readOnly,
    onFocus: focusHandler,
    onBlur: blurHandler,
    onChange: changeHandler
  }, textareaProps, {
    className: style.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (textareaProps && textareaProps.className != null && textareaProps.className || "")
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "12276481",
    dynamic: [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]
  }, ".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:".concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";color:").concat(color, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;min-width:12.5rem;max-width:95vw;--textarea-font-size:").concat(SCALES.font(0.875), ";--textarea-height:").concat(SCALES.height(1, 'auto'), ";width:").concat(SCALES.width(1, 'initial'), ";height:var(--textarea-height);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}.wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}textarea.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:none;display:block;font-family:").concat(theme.font.sans, ";font-size:var(--textarea-font-size);width:100%;height:var(--textarea-height);border:none;outline:none;padding:").concat(SCALES.pt(0.5), " ").concat(SCALES.pr(0.5), " ").concat(SCALES.pb(0.5), " ").concat(SCALES.pl(0.5), ";resize:").concat(resize, ";}.disabled.__jsx-style-dynamic-selector>textarea.__jsx-style-dynamic-selector{cursor:not-allowed;}textarea.__jsx-style-dynamic-selector:-webkit-autofill,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;}")));
});
TextareaComponent.defaultProps = defaultProps$1w;
TextareaComponent.displayName = 'GeistTextarea';
var Textarea = withScale(TextareaComponent);

var PasswordIcon = function PasswordIcon(_ref) {
  var visible = _ref.visible;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    style: {
      color: 'currentColor'
    }
  }, !visible ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1 1l22 22"
  })));
};

var MemoPasswordIcon = /*#__PURE__*/React__default["default"].memo(PasswordIcon);

var _excluded$1h = ["hideToggle", "children"];

var passwordDefaultProps = _extends({}, defaultProps$1x, {
  hideToggle: false
});

var InputPasswordComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var hideToggle = _ref.hideToggle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$1h);

  var _useScale = useScale(),
      getAllScaleProps = _useScale.getAllScaleProps;

  var inputRef = React$1.useRef(null);

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  React$1.useImperativeHandle(ref, function () {
    return inputRef.current;
  });

  var iconClickHandler = function iconClickHandler() {
    setVisible(function (v) {
      return !v;
    });
    /* istanbul ignore next */

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  var inputProps = React$1.useMemo(function () {
    return _extends({}, props, {
      ref: inputRef,
      iconClickable: true,
      onIconClick: iconClickHandler,
      htmlType: visible ? 'text' : 'password'
    });
  }, [props, iconClickHandler, visible, inputRef]);
  var icon = React$1.useMemo(function () {
    if (hideToggle) return null;
    return /*#__PURE__*/React__default["default"].createElement(MemoPasswordIcon, {
      visible: visible
    });
  }, [hideToggle, visible]);
  return /*#__PURE__*/React__default["default"].createElement(Input, _extends({
    iconRight: icon
  }, getAllScaleProps(), inputProps), children);
});
InputPasswordComponent.defaultProps = passwordDefaultProps;
InputPasswordComponent.displayName = 'GeistInputPassword';
var InputPassword = withScale(InputPasswordComponent);

Input.Textarea = Textarea;
Input.Password = InputPassword;

var defaultContext$d = {
  visible: false
};
var AutoCompleteContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$d);
var useAutoCompleteContext = function useAutoCompleteContext() {
  return React__default["default"].useContext(AutoCompleteContext);
};

var Ellipsis = function Ellipsis(_ref) {
  var children = _ref.children,
      height = _ref.height;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["822089635", [height]]])
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "822089635",
    dynamic: [height]
  }, "span.__jsx-style-dynamic-selector{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:".concat(height, ";min-width:0;}")));
};

var Ellipsis$1 = /*#__PURE__*/React__default["default"].memo(Ellipsis);

var defaultProps$1v = {};

var AutoCompleteItemComponent = function AutoCompleteItemComponent(_ref) {
  var identValue = _ref.value,
      children = _ref.children,
      isLabelOnly = _ref.isLabelOnly;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useAutoCompleteConte = useAutoCompleteContext(),
      value = _useAutoCompleteConte.value,
      updateValue = _useAutoCompleteConte.updateValue,
      updateVisible = _useAutoCompleteConte.updateVisible;

  var selectHandler = function selectHandler() {
    updateValue && updateValue(identValue);
    updateVisible && updateVisible(false);
  };

  var isActive = React$1.useMemo(function () {
    return value === identValue;
  }, [identValue, value]);
  var classes = useClasses('item', {
    active: isActive
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: selectHandler,
    className: style.dynamic([["2003094915", [theme.palette.background, theme.palette.foreground, SCALES.font(0.875), SCALES.width(1, 'auto'), isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.75), SCALES.pb(0), SCALES.pl(0.75), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.palette.accents_1, theme.palette.accents_1, theme.palette.success]]]) + " " + (classes || "")
  }, isLabelOnly ? /*#__PURE__*/React__default["default"].createElement(Ellipsis$1, {
    height: SCALES.height(2)
  }, children) : children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2003094915",
    dynamic: [theme.palette.background, theme.palette.foreground, SCALES.font(0.875), SCALES.width(1, 'auto'), isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.75), SCALES.pb(0), SCALES.pl(0.75), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.palette.accents_1, theme.palette.accents_1, theme.palette.success]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;white-space:pre;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:pointer;-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.75), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.75), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.item.__jsx-style-dynamic-selector:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";border-top-right-radius:").concat(theme.layout.radius, ";}.item.__jsx-style-dynamic-selector:last-of-type{border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.item.__jsx-style-dynamic-selector:hover{background-color:").concat(theme.palette.accents_1, ";}.item.active.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";color:").concat(theme.palette.success, ";}")));
};

AutoCompleteItemComponent.defaultProps = defaultProps$1v;
AutoCompleteItemComponent.displayName = 'GeistAutoCompleteItem';
var AutoCompleteItem = withScale(AutoCompleteItemComponent);

var useSSR = function useSSR() {
  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      browser = _useState2[0],
      setBrowser = _useState2[1];

  React$1.useEffect(function () {
    setBrowser(isBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser
  };
};

var createElement = function createElement(id) {
  var el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

var usePortal = function usePortal() {
  var selectId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getId();
  var getContainer = arguments.length > 1 ? arguments[1] : undefined;
  var id = "geist-ui-".concat(selectId);

  var _useSSR = useSSR(),
      isBrowser = _useSSR.isBrowser;

  var _useState = React$1.useState(isBrowser ? createElement(id) : null),
      _useState2 = _slicedToArray(_useState, 2),
      elSnapshot = _useState2[0],
      setElSnapshot = _useState2[1];

  React$1.useEffect(function () {
    var customContainer = getContainer ? getContainer() : null;
    var parentElement = customContainer || document.body;
    var hasElement = parentElement.querySelector("#".concat(id));
    var el = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }

    setElSnapshot(el);
  }, []);
  return elSnapshot;
};

var useResize = function useResize(callback) {
  var immediatelyInvoke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  React$1.useEffect(function () {
    var fn = function fn() {
      return callback();
    };

    if (immediatelyInvoke) {
      fn();
    }

    window.addEventListener('resize', fn);
    return function () {
      return window.removeEventListener('resize', fn);
    };
  }, []);
};

var _excluded$1g = ["children", "className", "visible", "enterTime", "leaveTime", "clearTime", "name"];
var defaultProps$1u = {
  visible: false,
  enterTime: 60,
  leaveTime: 60,
  clearTime: 60,
  className: '',
  name: 'transition'
};

var CssTransition = function CssTransition(_ref) {
  var children = _ref.children,
      className = _ref.className,
      visible = _ref.visible,
      enterTime = _ref.enterTime,
      leaveTime = _ref.leaveTime,
      clearTime = _ref.clearTime,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, _excluded$1g);

  var _useState = React$1.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      classes = _useState2[0],
      setClasses = _useState2[1];

  var _useState3 = React$1.useState(visible),
      _useState4 = _slicedToArray(_useState3, 2),
      renderable = _useState4[0],
      setRenderable = _useState4[1];

  React$1.useEffect(function () {
    var statusClassName = visible ? 'enter' : 'leave';
    var time = visible ? enterTime : leaveTime;

    if (visible && !renderable) {
      setRenderable(true);
    }

    setClasses("".concat(name, "-").concat(statusClassName)); // set class to active

    var timer = setTimeout(function () {
      setClasses("".concat(name, "-").concat(statusClassName, " ").concat(name, "-").concat(statusClassName, "-active"));
      clearTimeout(timer);
    }, time); // remove classess when animation over

    var clearClassesTimer = setTimeout(function () {
      if (!visible) {
        setClasses('');
        setRenderable(false);
      }

      clearTimeout(clearClassesTimer);
    }, time + clearTime);
    return function () {
      clearTimeout(timer);
      clearTimeout(clearClassesTimer);
    };
  }, [visible, renderable]);
  if (! /*#__PURE__*/React__default["default"].isValidElement(children) || !renderable) return null;
  return /*#__PURE__*/React__default["default"].cloneElement(children, _extends({}, props, {
    className: "".concat(children.props.className, " ").concat(className, " ").concat(classes)
  }));
};

CssTransition.defaultProps = defaultProps$1u;
CssTransition.displayName = 'GeistCssTransition';

var useClickAnyWhere = function useClickAnyWhere(handler) {
  React$1.useEffect(function () {
    var callback = function callback(event) {
      return handler(event);
    };

    document.addEventListener('click', callback);
    return function () {
      return document.removeEventListener('click', callback);
    };
  }, [handler]);
};

var useDOMObserver = function useDOMObserver(ref) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var config = {
    attributes: false,
    childList: true,
    subtree: true
  };
  React$1.useEffect(function () {
    if (!ref || !ref.current) return;
    var unmount = false;

    var done = function done() {
      if (unmount) return;
      callback.apply(void 0, arguments);
    };

    var observer = new MutationObserver(done);
    observer.observe(ref.current, config);
    return function () {
      unmount = true;
      observer.disconnect();
    };
  }, [ref]);
};

var warningStack = {};

var useWarning = function useWarning(message, component) {
  var tag = component ? " [".concat(component, "]") : ' ';
  var log = "[Geist UI]".concat(tag, ": ").concat(message);
  if (typeof console === 'undefined') return;
  if (warningStack[log]) return;
  warningStack[log] = true;

  if (process.env.NODE_ENV !== 'production') {
    return console.error(log);
  }

  console.warn(log);
};

var getElementOffset = function getElementOffset(el) {
  if (!el) return {
    top: 0,
    left: 0
  };

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    top: top,
    left: left
  };
};
var defaultRect$2 = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0,
  height: 0,
  elementTop: -1000
};

var getRectFromDOMWithContainer = function getRectFromDOMWithContainer(domRect, getContainer) {
  if (!domRect) return defaultRect$2;
  var container = getContainer ? getContainer() : null;
  var scrollElement = container || document.documentElement;

  var _getElementOffset = getElementOffset(container),
      offsetTop = _getElementOffset.top,
      offsetLeft = _getElementOffset.left;

  return _extends({}, domRect, {
    width: domRect.width || domRect.right - domRect.left,
    height: domRect.height || domRect.top - domRect.bottom,
    top: domRect.bottom + scrollElement.scrollTop - offsetTop,
    left: domRect.left + scrollElement.scrollLeft - offsetLeft,
    elementTop: domRect.top + scrollElement.scrollTop - offsetTop
  });
};

var isUnplacedRect = function isUnplacedRect(rect) {
  if (!rect) return true;
  return rect.top === defaultRect$2.top && rect.left === defaultRect$2.left;
};
var getRefRect = function getRefRect(ref, getContainer) {
  if (!ref || !ref.current) return defaultRect$2;
  var rect = ref.current.getBoundingClientRect();
  return getRectFromDOMWithContainer(rect, getContainer);
};
var getEventRect = function getEventRect(event, getContainer) {
  var _event$target;

  var rect = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getBoundingClientRect();
  if (!rect) return defaultRect$2;
  return getRectFromDOMWithContainer(rect, getContainer);
};

var isRefTarget = function isRefTarget(eventOrRef) {
  return typeof (eventOrRef === null || eventOrRef === void 0 ? void 0 : eventOrRef.target) === 'undefined';
};

var useRect = function useRect(initialState) {
  var _useState = React$1.useState(initialState || defaultRect$2),
      _useState2 = _slicedToArray(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  var updateRect = function updateRect(eventOrRef, getContainer) {
    if (isRefTarget(eventOrRef)) return setRect(getRefRect(eventOrRef, getContainer));
    setRect(getEventRect(eventOrRef, getContainer));
  };

  return {
    rect: rect,
    setRect: updateRect
  };
};

var defaultRect$1 = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0
};
var Dropdown = /*#__PURE__*/React__default["default"].memo(function (_ref) {
  var children = _ref.children,
      parent = _ref.parent,
      visible = _ref.visible,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer;
  var el = usePortal('dropdown', getPopupContainer);

  var _useState = React$1.useState(defaultRect$1),
      _useState2 = _slicedToArray(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  var classes = useClasses('dropdown', disableMatchWidth ? 'disable-match' : 'width-match');
  if (!parent) return null;
  /* istanbul ignore next */

  if (process.env.NODE_ENV !== 'production') {
    if (getPopupContainer && getPopupContainer()) {
      var _el = getPopupContainer();

      var style$1 = window.getComputedStyle(_el);

      if (style$1.position === 'static') {
        useWarning('The element specified by "getPopupContainer" must have "position" set.');
      }
    }
  }

  var updateRect = function updateRect() {
    var _getRefRect = getRefRect(parent, getPopupContainer),
        top = _getRefRect.top,
        left = _getRefRect.left,
        right = _getRefRect.right,
        nativeWidth = _getRefRect.width;

    setRect({
      top: top,
      left: left,
      right: right,
      width: nativeWidth
    });
  };

  useResize(updateRect);
  useClickAnyWhere(function () {
    var _getRefRect2 = getRefRect(parent, getPopupContainer),
        top = _getRefRect2.top,
        left = _getRefRect2.left;

    var shouldUpdatePosition = top !== rect.top || left !== rect.left;
    if (!shouldUpdatePosition) return;
    updateRect();
  });
  useDOMObserver(parent, function () {
    updateRect();
  });
  React$1.useEffect(function () {
    if (!parent || !parent.current) return;
    parent.current.addEventListener('mouseenter', updateRect);
    /* istanbul ignore next */

    return function () {
      if (!parent || !parent.current) return;
      parent.current.removeEventListener('mouseenter', updateRect);
    };
  }, [parent]);

  var clickHandler = function clickHandler(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
  };

  var mouseDownHandler = function mouseDownHandler(event) {
    event.preventDefault();
  };

  if (!el) return null;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(CssTransition, {
    visible: visible
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: clickHandler,
    onMouseDown: mouseDownHandler,
    className: style.dynamic([["1644673105", [rect.top + 2, rect.left, rect.width, rect.width]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1644673105",
    dynamic: [rect.top + 2, rect.left, rect.width, rect.width]
  }, ".dropdown.__jsx-style-dynamic-selector{position:absolute;top:".concat(rect.top + 2, "px;left:").concat(rect.left, "px;z-index:1100;}.width-match.__jsx-style-dynamic-selector{width:").concat(rect.width, "px;}.disable-match.__jsx-style-dynamic-selector{min-width:").concat(rect.width, "px;}")))), el);
});

var defaultProps$1t = {
  className: '',
  dropdownStyle: {}
};

var AutoCompleteDropdown = function AutoCompleteDropdown(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      className = _ref.className,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer;
  var theme = useTheme();

  var _useAutoCompleteConte = useAutoCompleteContext(),
      ref = _useAutoCompleteConte.ref;

  var isEmpty = React$1.useMemo(function () {
    return !visible || React__default["default"].Children.count(children) === 0;
  }, [children, visible]);
  var classes = useClasses('auto-complete-dropdown', className);

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    parent: ref,
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: dropdownStyle,
    onClick: clickHandler,
    className: style.dynamic([["155200262", [theme.layout.radius, isEmpty ? 'none' : theme.expressiveness.shadowLarge, theme.palette.background]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "155200262",
    dynamic: [theme.layout.radius, isEmpty ? 'none' : theme.expressiveness.shadowLarge, theme.palette.background]
  }, ".auto-complete-dropdown.__jsx-style-dynamic-selector{border-radius:".concat(theme.layout.radius, ";box-shadow:").concat(isEmpty ? 'none' : theme.expressiveness.shadowLarge, ";background-color:").concat(theme.palette.background, ";overflow-y:auto;max-height:15rem;overflow-anchor:none;}"))));
};

AutoCompleteDropdown.defaultProps = defaultProps$1t;
AutoCompleteDropdown.displayName = 'GeistAutoCompleteDropdown';

var defaultProps$1s = {
  className: ''
};

var AutoCompleteSearchComponent = function AutoCompleteSearchComponent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2266351824", [theme.layout.gapHalf, theme.palette.background, theme.palette.accents_5, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.875), SCALES.pb(0.875), SCALES.pl(0.875), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (className || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2266351824",
    dynamic: [theme.layout.gapHalf, theme.palette.background, theme.palette.accents_5, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.875), SCALES.pb(0.875), SCALES.pl(0.875), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;white-space:pre;padding:".concat(theme.layout.gapHalf, ";line-height:1;background-color:").concat(theme.palette.background, ";color:").concat(theme.palette.accents_5, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:").concat(theme.layout.radius, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.875), " ").concat(SCALES.pr(0.875), " ").concat(SCALES.pb(0.875), " ").concat(SCALES.pl(0.875), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

AutoCompleteSearchComponent.defaultProps = defaultProps$1s;
AutoCompleteSearchComponent.displayName = 'GeistAutoCompleteSearch';
var AutoCompleteSearch = withScale(AutoCompleteSearchComponent);

var defaultProps$1r = {
  hidden: false,
  className: ''
};

var AutoCompleteEmpty = function AutoCompleteEmpty(_ref) {
  var children = _ref.children,
      hidden = _ref.hidden,
      className = _ref.className;
  if (hidden) return null;
  return /*#__PURE__*/React__default["default"].createElement(AutoCompleteSearch, {
    className: className
  }, children);
};

AutoCompleteEmpty.defaultProps = defaultProps$1r;
AutoCompleteEmpty.displayName = 'GeistAutoCompleteEmpty';

var _excluded$1f = ["children", "type", "color", "className", "spaceRatio"];
var defaultProps$1q = {
  type: 'default',
  className: '',
  spaceRatio: 1
};

var getIconBgColor = function getIconBgColor(type, palette, color) {
  var colors = {
    "default": palette.accents_6,
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return color ? color : colors[type];
};

var LoadingComponent = function LoadingComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      color = _ref.color,
      className = _ref.className,
      spaceRatio = _ref.spaceRatio,
      props = _objectWithoutProperties(_ref, _excluded$1f);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('loading-container', className);
  var bgColor = React$1.useMemo(function () {
    return getIconBgColor(type, theme.palette, color);
  }, [type, theme.palette, color]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " " + "loading"
  }, children && /*#__PURE__*/React__default["default"].createElement("label", {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }, children), /*#__PURE__*/React__default["default"].createElement("i", {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }), /*#__PURE__*/React__default["default"].createElement("i", {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }), /*#__PURE__*/React__default["default"].createElement("i", {
    className: style.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2201634259",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]
  }, ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, '100%'), ";min-height:1em;padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:").concat(theme.palette.accents_5, ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:").concat(bgColor, ";margin:0 calc(0.25em / 2 * ").concat(spaceRatio, ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}")));
};

LoadingComponent.defaultProps = defaultProps$1q;
LoadingComponent.displayName = 'GeistLoading';
var Loading = withScale(LoadingComponent);

var useCurrentState = function useCurrentState(initialState) {
  var _useState = React$1.useState(function () {
    return typeof initialState === 'function' ? initialState() : initialState;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var ref = React$1.useRef(initialState);
  React$1.useEffect(function () {
    ref.current = state;
  }, [state]);

  var setValue = function setValue(val) {
    var result = typeof val === 'function' ? val(ref.current) : val;
    ref.current = result;
    setState(result);
  };

  return [state, setValue, ref];
};

var _excluded$1e = ["options", "initialValue", "onSelect", "onSearch", "onChange", "searching", "children", "type", "value", "clearable", "disabled", "dropdownClassName", "dropdownStyle", "disableMatchWidth", "disableFreeSolo", "getPopupContainer"];
var defaultProps$1p = {
  options: [],
  initialValue: '',
  disabled: false,
  clearable: false,
  type: 'default',
  disableMatchWidth: false,
  disableFreeSolo: false,
  className: ''
};

var childrenToOptionsNode = function childrenToOptionsNode(options) {
  return options.map(function (item, index) {
    var key = "auto-complete-item-".concat(index);
    if ( /*#__PURE__*/React__default["default"].isValidElement(item)) return /*#__PURE__*/React__default["default"].cloneElement(item, {
      key: key
    });
    var validItem = item;
    return /*#__PURE__*/React__default["default"].createElement(AutoCompleteItem, {
      key: key,
      value: validItem.value,
      isLabelOnly: true
    }, validItem.label);
  });
}; // When the search is not set, the "clearable" icon can be displayed in the original location.
// When the search is seted, at least one element should exist to avoid re-render.


var getSearchIcon = function getSearchIcon(searching) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (searching === undefined) return null;
  return searching ? /*#__PURE__*/React__default["default"].createElement(Loading, {
    scale: +scale / 2
  }) : /*#__PURE__*/React__default["default"].createElement("span", null);
};

var AutoCompleteComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, userRef) {
  var options = _ref.options,
      customInitialValue = _ref.initialValue,
      onSelect = _ref.onSelect,
      onSearch = _ref.onSearch,
      onChange = _ref.onChange,
      searching = _ref.searching,
      children = _ref.children,
      type = _ref.type,
      value = _ref.value,
      clearable = _ref.clearable,
      disabled = _ref.disabled,
      dropdownClassName = _ref.dropdownClassName,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      disableFreeSolo = _ref.disableFreeSolo,
      getPopupContainer = _ref.getPopupContainer,
      props = _objectWithoutProperties(_ref, _excluded$1e);

  var resetTimer = React$1.useRef();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var ref = React$1.useRef(null);
  var inputRef = React$1.useRef(null);

  var _useCurrentState = useCurrentState(customInitialValue),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      stateRef = _useCurrentState2[2];

  var _useState = React$1.useState(customInitialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selectVal = _useState2[0],
      setSelectVal = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  React$1.useImperativeHandle(userRef, function () {
    return inputRef.current;
  });

  var _pickChild = pickChild(children, AutoCompleteSearch),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      searchChild = _pickChild2[1];

  var _pickChild3 = pickChild(children, AutoCompleteEmpty),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      emptyChild = _pickChild4[1];

  var autoCompleteItems = React$1.useMemo(function () {
    var hasSearchChild = searchChild && React__default["default"].Children.count(searchChild) > 0;
    var hasEmptyChild = emptyChild && React__default["default"].Children.count(emptyChild) > 0;

    if (searching) {
      return hasSearchChild ? searchChild : /*#__PURE__*/React__default["default"].createElement(AutoCompleteSearch, null, "Searching...");
    }

    if (options.length === 0) {
      if (state === '') return null;
      return hasEmptyChild ? emptyChild : /*#__PURE__*/React__default["default"].createElement(AutoCompleteEmpty, null, "No Options");
    }

    return childrenToOptionsNode(options);
  }, [searching, options]);
  var showClearIcon = React$1.useMemo(function () {
    return clearable && searching === undefined;
  }, [clearable, searching]);

  var updateValue = function updateValue(val) {
    if (disabled) return;
    setSelectVal(val);
    onSelect && onSelect(val);
    setState(val);
    inputRef.current && inputRef.current.focus();
  };

  var updateVisible = function updateVisible(next) {
    return setVisible(next);
  };

  var onInputChange = function onInputChange(event) {
    setVisible(true);
    onSearch && onSearch(event.target.value);
    setState(event.target.value);
  };

  var resetInputValue = function resetInputValue() {
    if (!disableFreeSolo) return;
    if (!state || state === '') return;

    if (state !== selectVal) {
      setState(selectVal);
    }
  };

  React$1.useEffect(function () {
    onChange && onChange(state);
  }, [state]);
  React$1.useEffect(function () {
    if (value === undefined) return;
    setState(value);
  }, [value]);
  var initialValue = React$1.useMemo(function () {
    return {
      ref: ref,
      value: state,
      updateValue: updateValue,
      visible: visible,
      updateVisible: updateVisible
    };
  }, [state, visible]);

  var toggleFocusHandler = function toggleFocusHandler(next) {
    clearTimeout(resetTimer.current);
    setVisible(next);

    if (next) {
      onSearch && onSearch(stateRef.current);
    } else {
      resetTimer.current = window.setTimeout(function () {
        resetInputValue();
        clearTimeout(resetTimer.current);
      }, 100);
    }
  };

  var inputProps = _extends({}, props, {
    disabled: disabled,
    value: state
  });

  return /*#__PURE__*/React__default["default"].createElement(AutoCompleteContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: style.dynamic([["2878925540", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "auto-complete"
  }, /*#__PURE__*/React__default["default"].createElement(Input, _extends({
    ref: inputRef,
    type: type,
    onChange: onInputChange,
    onFocus: function onFocus() {
      return toggleFocusHandler(true);
    },
    onBlur: function onBlur() {
      return toggleFocusHandler(false);
    },
    clearable: showClearIcon,
    width: SCALES.width(1, 'initial'),
    height: SCALES.height(2.25),
    iconRight: getSearchIcon(searching, getScaleProps('scale'))
  }, inputProps)), /*#__PURE__*/React__default["default"].createElement(AutoCompleteDropdown, {
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    className: dropdownClassName,
    dropdownStyle: dropdownStyle,
    getPopupContainer: getPopupContainer
  }, autoCompleteItems), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2878925540",
    dynamic: [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".auto-complete.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.auto-complete.__jsx-style-dynamic-selector .loading{width:-webkit-max-content;width:-moz-max-content;width:max-content;}"))));
});
AutoCompleteComponent.defaultProps = defaultProps$1p;
AutoCompleteComponent.displayName = 'GeistAutoComplete';
var AutoComplete = withScale(AutoCompleteComponent);

AutoComplete.Item = AutoCompleteItem;
AutoComplete.Option = AutoCompleteItem;
AutoComplete.Searching = AutoCompleteSearch;
AutoComplete.Empty = AutoCompleteEmpty;

var _excluded$1d = ["src", "stacked", "text", "isSquare", "className"];
var defaultProps$1o = {
  stacked: false,
  text: '',
  isSquare: false,
  className: ''
};

var safeText = function safeText(text) {
  if (text.length <= 4) return text;
  return text.slice(0, 3);
};

var AvatarComponent = function AvatarComponent(_ref) {
  var src = _ref.src,
      stacked = _ref.stacked,
      text = _ref.text,
      isSquare = _ref.isSquare,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$1d);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var showText = !src;
  var radius = isSquare ? theme.layout.radius : '50%';
  var marginLeft = stacked ? SCALES.ml(-0.625) : SCALES.ml(0);
  var classes = useClasses('avatar', className);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (classes || "")
  }, !showText && /*#__PURE__*/React__default["default"].createElement("img", _extends({
    alt: "avatar",
    src: src,
    draggable: false
  }, props, {
    className: style.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || "avatar-img")
  })), showText && /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || "avatar-text")
  }), safeText(text)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2295275975",
    dynamic: [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]
  }, ".avatar.__jsx-style-dynamic-selector{display:inline-block;position:relative;overflow:hidden;border:1px solid ".concat(theme.palette.accents_2, ";border-radius:").concat(radius, ";vertical-align:top;background-color:").concat(theme.palette.background, ";box-sizing:border-box;width:").concat(SCALES.width(1.75) || SCALES.height(1.75), ";height:").concat(SCALES.height(1.75) || SCALES.width(1.75), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(marginLeft, ";}.avatar-img.__jsx-style-dynamic-selector{display:inline-block;object-fit:cover;width:100%;height:100%;border-radius:").concat(radius, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.avatar-text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;font-size:").concat(SCALES.font(1), ";text-align:center;-webkit-transform:translate(-50%,-50%) scale(0.65);-ms-transform:translate(-50%,-50%) scale(0.65);transform:translate(-50%,-50%) scale(0.65);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}")));
};

AvatarComponent.defaultProps = defaultProps$1o;
AvatarComponent.displayName = 'GeistAvatar';
var Avatar = withScale(AvatarComponent);

var defaultProps$1n = {
  className: ''
};

var AvatarGroupComponent = function AvatarGroupComponent(_ref) {
  var count = _ref.count,
      className = _ref.className,
      children = _ref.children;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1135268764", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]]]) + " " + (useClasses('avatar-group', className) || "")
  }, children, count && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1135268764", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]]]) + " " + "count"
  }, "+", count), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1135268764",
    dynamic: [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]
  }, ".avatar-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:".concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.avatar-group.__jsx-style-dynamic-selector .avatar{margin-left:-").concat(SCALES.ml(0.625), ";}.count.__jsx-style-dynamic-selector{font-size:").concat(SCALES.font(0.875), ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:5.5px;color:").concat(theme.palette.accents_7, ";}")));
};

AvatarGroupComponent.defaultProps = defaultProps$1n;
AvatarGroupComponent.displayName = 'GeistAvatarGroup';
var AvatarGroup = withScale(AvatarGroupComponent);

Avatar.Group = AvatarGroup;

var _excluded$1c = ["type", "className", "children", "dot"];
var defaultProps$1m = {
  type: 'default',
  dot: false,
  className: ''
};

var getBgColor = function getBgColor(type, palette) {
  var colors = {
    "default": palette.foreground,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    secondary: palette.secondary
  };
  return colors[type];
};

var BadgeComponent = function BadgeComponent(_ref) {
  var type = _ref.type,
      className = _ref.className,
      children = _ref.children,
      dot = _ref.dot,
      props = _objectWithoutProperties(_ref, _excluded$1c);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var bg = React$1.useMemo(function () {
    return getBgColor(type, theme.palette);
  }, [type, theme.palette]);
  var color = React$1.useMemo(function () {
    if (!type || type === 'default') return theme.palette.background;
    return 'white';
  }, [type, theme.palette.background]);
  var classes = useClasses('badge', {
    dot: dot
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["427831233", [bg, color, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.25), SCALES.pr(0.4375), SCALES.pb(0.25), SCALES.pl(0.4375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.py(0.25), SCALES.px(0.25)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), !dot && children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "427831233",
    dynamic: [bg, color, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.25), SCALES.pr(0.4375), SCALES.pb(0.25), SCALES.pl(0.4375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.py(0.25), SCALES.px(0.25)]
  }, ".badge.__jsx-style-dynamic-selector{display:inline-block;border-radius:16px;font-variant:tabular-nums;line-height:1;vertical-align:middle;background-color:".concat(bg, ";color:").concat(color, ";border:0;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.25), " ").concat(SCALES.pr(0.4375), " ").concat(SCALES.pb(0.25), " ").concat(SCALES.pl(0.4375), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.dot.__jsx-style-dynamic-selector{padding:").concat(SCALES.py(0.25), " ").concat(SCALES.px(0.25), ";border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}")));
};

BadgeComponent.defaultProps = defaultProps$1m;
BadgeComponent.displayName = 'GeistBadge';
var Badge = withScale(BadgeComponent);

tuple('topLeft', 'topRight', 'bottomLeft', 'bottomRight');
var defaultProps$1l = {
  placement: 'topRight',
  className: ''
};

var getTransform = function getTransform(placement) {
  var styles = {
    topLeft: {
      top: '0',
      left: '0',
      value: 'translate(-50%, -50%)',
      origin: '0% 0%'
    },
    topRight: {
      top: '0',
      right: '0',
      value: 'translate(50%, -50%)',
      origin: '100% 0%'
    },
    bottomLeft: {
      left: '0',
      bottom: '0',
      value: 'translate(-50%, 50%)',
      origin: '0% 100%'
    },
    bottomRight: {
      right: '0',
      bottom: '0',
      value: 'translate(50%, 50%)',
      origin: '100% 100%'
    }
  };
  return styles[placement];
};

var BadgeAnchor = function BadgeAnchor(_ref) {
  var children = _ref.children,
      placement = _ref.placement;

  var _pickChild = pickChild(children, Badge),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutBadgeChildren = _pickChild2[0],
      badgeChldren = _pickChild2[1];

  var _useMemo = React$1.useMemo(function () {
    return getTransform(placement);
  }, [placement]),
      top = _useMemo.top,
      bottom = _useMemo.bottom,
      left = _useMemo.left,
      right = _useMemo.right,
      value = _useMemo.value,
      origin = _useMemo.origin;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1121745930", [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]]]) + " " + "anchor"
  }, withoutBadgeChildren, /*#__PURE__*/React__default["default"].createElement("sup", {
    className: style.dynamic([["1121745930", [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]]])
  }, badgeChldren), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1121745930",
    dynamic: [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]
  }, ".anchor.__jsx-style-dynamic-selector{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;box-sizing:border-box;}sup.__jsx-style-dynamic-selector{position:absolute;top:".concat(top || 'auto', ";left:").concat(left || 'auto', ";right:").concat(right || 'auto', ";bottom:").concat(bottom || 'auto', ";-webkit-transform:").concat(value, ";-ms-transform:").concat(value, ";transform:").concat(value, ";-webkit-transform-origin:").concat(origin, ";-ms-transform-origin:").concat(origin, ";transform-origin:").concat(origin, ";z-index:1;}")));
};

BadgeAnchor.defaultProps = defaultProps$1l;
BadgeAnchor.displayName = 'GeistBadgeAnchor';

Badge.Anchor = BadgeAnchor;

var defaultProps$1k = {
  className: ''
};

var Separator = function Separator(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('separator', className);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1571781185", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0.5), SCALES.mb(0), SCALES.ml(0.5)]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1571781185",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0.5), SCALES.mb(0), SCALES.ml(0.5)]
  }, ".separator.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0.5), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0.5), ";}")));
};

Separator.defaultProps = defaultProps$1k;
Separator.displayName = 'GeistBreadcrumbsSeparator';
var BreadcrumbsSeparator = withScale(Separator);

var hexToRgb = function hexToRgb(color) {
  var fullReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var full = color.replace(fullReg, function (_, r, g, b) {
    return "".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  });
  var values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);

  if (!values) {
    throw new Error("Geist UI: Unsupported ".concat(color, " color."));
  }

  return [Number.parseInt(values[1], 16), Number.parseInt(values[2], 16), Number.parseInt(values[3], 16)];
};

var colorToRgbValues = function colorToRgbValues(color) {
  if (color.charAt(0) === '#') return hexToRgb(color);
  var safeColor = color.replace(/ /g, '');
  var colorType = color.substr(0, 4);
  var regArray = safeColor.match(/\((.+)\)/);

  if (!colorType.startsWith('rgb') || !regArray) {
    console.log(color);
    throw new Error("Geist UI: Only support [\"RGB\", \"RGBA\", \"HEX\"] color.");
  }

  return regArray[1].split(',').map(function (str) {
    return Number.parseFloat(str);
  });
};
var addColorAlpha = function addColorAlpha(color, alpha) {
  if (!/^#|rgb|RGB/.test(color)) return color;

  var _colorToRgbValues = colorToRgbValues(color),
      _colorToRgbValues2 = _slicedToArray(_colorToRgbValues, 3),
      r = _colorToRgbValues2[0],
      g = _colorToRgbValues2[1],
      b = _colorToRgbValues2[2];

  var safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(safeAlpha, ")");
};

var defaultProps$1j = {
  separator: '/',
  className: ''
};

var BreadcrumbsComponent = function BreadcrumbsComponent(_ref) {
  var separator = _ref.separator,
      children = _ref.children,
      className = _ref.className;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var hoverColor = React$1.useMemo(function () {
    return addColorAlpha(theme.palette.link, 0.85);
  }, [theme.palette.link]);
  var childrenArray = React__default["default"].Children.toArray(children);
  var withSeparatorChildren = childrenArray.map(function (item, index) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(item)) return item;
    var last = childrenArray[index - 1];
    var lastIsSeparator = /*#__PURE__*/React__default["default"].isValidElement(last) && last.type === BreadcrumbsSeparator;
    var currentIsSeparator = item.type === BreadcrumbsSeparator;

    if (!lastIsSeparator && !currentIsSeparator && index > 0) {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
        key: index
      }, /*#__PURE__*/React__default["default"].createElement(BreadcrumbsSeparator, null, separator), item);
    }

    return item;
  });
  return /*#__PURE__*/React__default["default"].createElement("nav", {
    className: style.dynamic([["524763277", [theme.palette.accents_4, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverColor, theme.palette.accents_6]]]) + " " + (className || "")
  }, withSeparatorChildren, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "524763277",
    dynamic: [theme.palette.accents_4, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverColor, theme.palette.accents_6]
  }, "nav.__jsx-style-dynamic-selector{line-height:inherit;color:".concat(theme.palette.accents_4, ";box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}nav.__jsx-style-dynamic-selector .link:hover{color:").concat(hoverColor, ";}nav.__jsx-style-dynamic-selector>span:last-of-type{color:").concat(theme.palette.accents_6, ";}nav.__jsx-style-dynamic-selector>.separator:last-child{display:none;}nav.__jsx-style-dynamic-selector svg{width:1em;height:1em;margin:0 4px;}nav.__jsx-style-dynamic-selector .breadcrumbs-item{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

BreadcrumbsComponent.defaultProps = defaultProps$1j;
BreadcrumbsComponent.displayName = 'GeistBreadcrumbs';
var Breadcrumbs = withScale(BreadcrumbsComponent);

var LinkIconComponent = function LinkIconComponent() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    width: "0.9375em",
    height: "0.9375em",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: "jsx-3409194595" + " " + "icon"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
    className: "jsx-3409194595"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 3h6v6",
    className: "jsx-3409194595"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10 14L21 3",
    className: "jsx-3409194595"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3409194595"
  }, ".icon.jsx-3409194595{margin:0 0 -1px 0.1875em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:currentColor;}"));
};
LinkIconComponent.displayName = 'GeistLinkIcon';
var LinkIcon = /*#__PURE__*/React__default["default"].memo(LinkIconComponent);

var _excluded$1b = ["href", "color", "underline", "children", "className", "block", "icon"];
var defaultProps$1i = {
  href: '',
  color: false,
  icon: false,
  underline: false,
  block: false,
  className: ''
};
var LinkComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var href = _ref.href,
      color = _ref.color,
      underline = _ref.underline,
      children = _ref.children,
      className = _ref.className,
      block = _ref.block,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded$1b);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var linkColor = color || block ? theme.palette.link : 'inherit';
  var hoverColor = color || block ? theme.palette.successLight : 'inherit';
  var decoration = underline ? 'underline' : 'none';
  var classes = useClasses('link', {
    block: block
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("a", _extends({
    href: href
  }, props, {
    ref: ref,
    className: style.dynamic([["442871747", [linkColor, block ? theme.layout.radius : 0, SCALES.font(1, 'inherit'), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.pt(0.125), SCALES.pr(0.25), SCALES.pb(0.125), SCALES.pl(0.25), SCALES.mt(0), SCALES.mr(-0.125), SCALES.mb(0), SCALES.ml(-0.125), decoration, block ? addColorAlpha(theme.palette.link, 0.1) : 'unset', hoverColor]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, icon && /*#__PURE__*/React__default["default"].createElement(LinkIcon, null), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "442871747",
    dynamic: [linkColor, block ? theme.layout.radius : 0, SCALES.font(1, 'inherit'), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.pt(0.125), SCALES.pr(0.25), SCALES.pb(0.125), SCALES.pl(0.25), SCALES.mt(0), SCALES.mr(-0.125), SCALES.mb(0), SCALES.ml(-0.125), decoration, block ? addColorAlpha(theme.palette.link, 0.1) : 'unset', hoverColor]
  }, ".link.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;line-height:inherit;color:".concat(linkColor, ";-webkit-text-decoration:none;text-decoration:none;border-radius:").concat(block ? theme.layout.radius : 0, ";-webkit-transition:color 200ms ease 0ms;transition:color 200ms ease 0ms;font-size:").concat(SCALES.font(1, 'inherit'), ";width:").concat(SCALES.width(1, 'fit-content'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.block.__jsx-style-dynamic-selector{padding:").concat(SCALES.pt(0.125), " ").concat(SCALES.pr(0.25), " ").concat(SCALES.pb(0.125), " ").concat(SCALES.pl(0.25), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(-0.125), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(-0.125), ";}.link.__jsx-style-dynamic-selector:hover,.link.__jsx-style-dynamic-selector:active,.link.__jsx-style-dynamic-selector:focus{-webkit-text-decoration:").concat(decoration, ";text-decoration:").concat(decoration, ";}.link.__jsx-style-dynamic-selector:hover{background-color:").concat(block ? addColorAlpha(theme.palette.link, 0.1) : 'unset', ";color:").concat(hoverColor, ";}")));
});
LinkComponent.defaultProps = defaultProps$1i;
LinkComponent.displayName = 'GeistLink';
var Link = withScale(LinkComponent);

var _excluded$1a = ["href", "nextLink", "onClick", "children", "className"];
var defaultProps$1h = {
  nextLink: false,
  className: ''
};
var BreadcrumbsItem = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var href = _ref.href,
      nextLink = _ref.nextLink,
      onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$1a);

  var isLink = React$1.useMemo(function () {
    return href !== undefined || nextLink;
  }, [href, nextLink]);

  var _pickChild = pickChild(children, BreadcrumbsSeparator),
      _pickChild2 = _slicedToArray(_pickChild, 1),
      withoutSepChildren = _pickChild2[0];

  var classes = useClasses('breadcrumbs-item', className);

  var clickHandler = function clickHandler(event) {
    onClick && onClick(event);
  };

  if (!isLink) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: classes,
      onClick: clickHandler
    }, withoutSepChildren);
  }

  return /*#__PURE__*/React__default["default"].createElement(Link, _extends({
    className: classes,
    href: href,
    onClick: clickHandler,
    ref: ref
  }, props), withoutSepChildren);
});
BreadcrumbsItem.defaultProps = defaultProps$1h;
BreadcrumbsItem.displayName = 'GeistBreadcrumbsItem';

Breadcrumbs.Item = BreadcrumbsItem;
Breadcrumbs.Separator = BreadcrumbsSeparator;

var defaultProps$1g = {
  x: 0,
  y: 0
};

var ButtonDrip = function ButtonDrip(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      onCompleted = _ref.onCompleted;
  var dripRef = React$1.useRef(null);
  /* istanbul ignore next */

  var top = Number.isNaN(+y) ? 0 : y - 10;
  /* istanbul ignore next */

  var left = Number.isNaN(+x) ? 0 : x - 10;
  React$1.useEffect(function () {
    /* istanbul ignore next */
    if (!dripRef.current) return;
    dripRef.current.addEventListener('animationend', onCompleted);
    return function () {
      /* istanbul ignore next */
      if (!dripRef.current) return;
      dripRef.current.removeEventListener('animationend', onCompleted);
    };
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: dripRef,
    className: "jsx-3424889537" + " " + "drip"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    style: {
      top: top,
      left: left
    },
    className: "jsx-3424889537"
  }, /*#__PURE__*/React__default["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    className: "jsx-3424889537"
  }, /*#__PURE__*/React__default["default"].createElement("g", {
    fill: color,
    className: "jsx-3424889537"
  }, /*#__PURE__*/React__default["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    rx: "10",
    className: "jsx-3424889537"
  })))), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3424889537"
  }, ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"));
};

ButtonDrip.defaultProps = defaultProps$1g;
ButtonDrip.displayName = 'GeistButtonDrip';

var ButtonLoading = function ButtonLoading(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "jsx-3416748964" + " " + "btn-loading"
  }, /*#__PURE__*/React__default["default"].createElement(Loading, {
    color: color
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3416748964"
  }, ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"));
};

ButtonLoading.displayName = 'GeistButtonLoading';

var _excluded$19 = ["isRight", "isSingle", "children", "className"];
var defaultProps$1f = {
  isRight: false,
  className: ''
};

var ButtonIcon = function ButtonIcon(_ref) {
  var isRight = _ref.isRight,
      isSingle = _ref.isSingle,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$19);

  var classes = useClasses('icon', {
    right: isRight,
    single: isSingle
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: "jsx-643337184" + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "643337184"
  }, ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"));
};

ButtonIcon.defaultProps = defaultProps$1f;
ButtonIcon.displayName = 'GeistButtonIcon';

var getButtonChildrenWithIcon = function getButtonChildrenWithIcon(auto, children, icons) {
  var icon = icons.icon,
      iconRight = icons.iconRight;
  var hasIcon = icon || iconRight;
  var isRight = Boolean(iconRight);
  var paddingForAutoMode = auto ? "calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)" : 0;
  var classes = useClasses('text', isRight ? 'right' : 'left');
  if (!hasIcon) return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text"
  }, children);

  if (React__default["default"].Children.count(children) === 0) {
    return /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
      isRight: isRight,
      isSingle: true
    }, hasIcon);
  }

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
    isRight: isRight
  }, hasIcon), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3568181479", [paddingForAutoMode, paddingForAutoMode]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3568181479",
    dynamic: [paddingForAutoMode, paddingForAutoMode]
  }, ".left.__jsx-style-dynamic-selector{padding-left:".concat(paddingForAutoMode, ";}.right.__jsx-style-dynamic-selector{padding-right:").concat(paddingForAutoMode, ";}"))));
};
var filterPropsWithGroup = function filterPropsWithGroup(props, config) {
  if (!config.isButtonGroup) return props;
  return _extends({}, props, {
    auto: true,
    shadow: false,
    ghost: config.ghost || props.ghost,
    type: config.type || props.type,
    disabled: config.disabled || props.disabled
  });
};

var defaultContext$c = {
  isButtonGroup: false,
  disabled: false
};
var ButtonGroupContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$c);
var useButtonGroupContext = function useButtonGroupContext() {
  return React__default["default"].useContext(ButtonGroupContext);
};

var getButtonGhostColors = function getButtonGhostColors(palette, type) {
  var colors = {
    secondary: {
      bg: palette.background,
      border: palette.foreground,
      color: palette.foreground
    },
    success: {
      bg: palette.background,
      border: palette.success,
      color: palette.success
    },
    warning: {
      bg: palette.background,
      border: palette.warning,
      color: palette.warning
    },
    error: {
      bg: palette.background,
      border: palette.error,
      color: palette.error
    }
  };
  return colors[type] || null;
};
var getButtonColors = function getButtonColors(palette, props) {
  var type = props.type,
      disabled = props.disabled,
      ghost = props.ghost;
  var colors = {
    "default": {
      bg: palette.background,
      border: palette.border,
      color: palette.accents_5
    },
    secondary: {
      bg: palette.foreground,
      border: palette.foreground,
      color: palette.background
    },
    success: {
      bg: palette.success,
      border: palette.success,
      color: '#fff'
    },
    warning: {
      bg: palette.warning,
      border: palette.warning,
      color: '#fff'
    },
    error: {
      bg: palette.error,
      border: palette.error,
      color: '#fff'
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.accents_5
    }
  };
  if (disabled) return {
    bg: palette.accents_1,
    border: palette.accents_2,
    color: '#ccc'
  };
  /**
   * The '-light' type is the same color as the common type,
   * only hover's color is different.
   * e.g.
   *   Color['success'] === Color['success-light']
   *   Color['warning'] === Color['warning-light']
   */

  var withoutLightType = type === null || type === void 0 ? void 0 : type.replace('-light', '');
  var defaultColor = colors["default"];
  if (ghost) return getButtonGhostColors(palette, withoutLightType) || defaultColor;
  return colors[withoutLightType] || defaultColor;
};
var getButtonGhostHoverColors = function getButtonGhostHoverColors(palette, type) {
  var colors = {
    secondary: {
      bg: palette.foreground,
      border: palette.background,
      color: palette.background
    },
    success: {
      bg: palette.success,
      border: palette.background,
      color: 'white'
    },
    warning: {
      bg: palette.warning,
      border: palette.background,
      color: 'white'
    },
    error: {
      bg: palette.error,
      border: palette.background,
      color: 'white'
    }
  };
  var withoutLightType = type.replace('-light', '');
  return colors[withoutLightType] || null;
};
var getButtonHoverColors = function getButtonHoverColors(palette, props) {
  var type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      shadow = props.shadow,
      ghost = props.ghost;
  var defaultColor = getButtonColors(palette, props);
  var alphaBackground = addColorAlpha(defaultColor.bg, 0.85);
  var colors = {
    "default": {
      bg: palette.background,
      border: palette.foreground
    },
    secondary: {
      bg: palette.background,
      border: palette.foreground
    },
    success: {
      bg: palette.background,
      border: palette.success
    },
    warning: {
      bg: palette.background,
      border: palette.warning
    },
    error: {
      bg: palette.background,
      border: palette.error
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.accents_5
    },
    'secondary-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'success-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'warning-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'error-light': _extends({}, defaultColor, {
      bg: alphaBackground
    })
  };
  if (disabled) return {
    bg: palette.accents_1,
    border: palette.accents_2,
    color: '#ccc'
  };
  if (loading) return _extends({}, defaultColor, {
    color: 'transparent'
  });
  if (shadow) return defaultColor;
  var hoverColor = (ghost ? getButtonGhostHoverColors(palette, type) : colors[type]) || colors["default"];
  return _extends({}, hoverColor, {
    color: hoverColor.color || hoverColor.border
  });
};
var getButtonCursor = function getButtonCursor(disabled, loading) {
  if (disabled) return {
    cursor: 'not-allowed',
    events: 'auto'
  };
  if (loading) return {
    cursor: 'default',
    events: 'none'
  };
  return {
    cursor: 'pointer',
    events: 'auto'
  };
};
var getButtonDripColor = function getButtonDripColor(palette, props) {
  var type = props.type;
  var isLightHover = type.endsWith('light');
  var hoverColors = getButtonHoverColors(palette, props);
  return isLightHover ? addColorAlpha(hoverColors.bg, 0.65) : addColorAlpha(palette.accents_2, 0.65);
};

var _excluded$18 = ["children", "disabled", "type", "loading", "shadow", "ghost", "effect", "onClick", "auto", "icon", "htmlType", "iconRight", "className"];
var defaultProps$1e = {
  type: 'default',
  htmlType: 'button',
  ghost: false,
  loading: false,
  shadow: false,
  auto: false,
  effect: true,
  disabled: false,
  className: ''
};
var ButtonComponent = /*#__PURE__*/React__default["default"].forwardRef(function (btnProps, ref) {
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var buttonRef = React$1.useRef(null);
  React$1.useImperativeHandle(ref, function () {
    return buttonRef.current;
  });

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dripShow = _useState2[0],
      setDripShow = _useState2[1];

  var _useState3 = React$1.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      dripX = _useState4[0],
      setDripX = _useState4[1];

  var _useState5 = React$1.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      dripY = _useState6[0],
      setDripY = _useState6[1];

  var groupConfig = useButtonGroupContext();
  var filteredProps = filterPropsWithGroup(btnProps, groupConfig);
  /* eslint-disable @typescript-eslint/no-unused-vars */

  var children = filteredProps.children,
      disabled = filteredProps.disabled;
      filteredProps.type;
      var loading = filteredProps.loading,
      shadow = filteredProps.shadow,
      ghost = filteredProps.ghost,
      effect = filteredProps.effect,
      onClick = filteredProps.onClick,
      auto = filteredProps.auto,
      icon = filteredProps.icon,
      htmlType = filteredProps.htmlType,
      iconRight = filteredProps.iconRight,
      className = filteredProps.className,
      props = _objectWithoutProperties(filteredProps, _excluded$18);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  var _useMemo = React$1.useMemo(function () {
    return getButtonColors(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]),
      bg = _useMemo.bg,
      border = _useMemo.border,
      color = _useMemo.color;

  var hover = React$1.useMemo(function () {
    return getButtonHoverColors(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]);

  var _useMemo2 = React$1.useMemo(function () {
    return getButtonCursor(disabled, loading);
  }, [disabled, loading]),
      cursor = _useMemo2.cursor,
      events = _useMemo2.events;

  var dripColor = React$1.useMemo(function () {
    return getButtonDripColor(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]);
  /* istanbul ignore next */

  var dripCompletedHandle = function dripCompletedHandle() {
    setDripShow(false);
    setDripX(0);
    setDripY(0);
  };

  var clickHandler = function clickHandler(event) {
    if (disabled || loading) return;
    var showDrip = !shadow && !ghost && effect;
    /* istanbul ignore next */

    if (showDrip && buttonRef.current) {
      var rect = buttonRef.current.getBoundingClientRect();
      setDripShow(true);
      setDripX(event.clientX - rect.left);
      setDripY(event.clientY - rect.top);
    }

    onClick && onClick(event);
  };

  var childrenWithIcon = React$1.useMemo(function () {
    return getButtonChildrenWithIcon(auto, children, {
      icon: icon,
      iconRight: iconRight
    });
  }, [auto, children, icon, iconRight]);
  var paddingLeft = auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
      paddingRight = auto ? SCALES.pr(1.15) : SCALES.pr(1.375);
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    ref: buttonRef,
    type: htmlType,
    disabled: disabled,
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["86551275", [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : 'none', SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? 'min-content' : SCALES.width(10.5), auto ? 'auto' : 'initial', SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : 'none', shadow ? '-1px' : '0px']]]) + " " + (props && props.className != null && props.className || useClasses('btn', className) || "")
  }), loading && /*#__PURE__*/React__default["default"].createElement(ButtonLoading, {
    color: color
  }), childrenWithIcon, dripShow && /*#__PURE__*/React__default["default"].createElement(ButtonDrip, {
    x: dripX,
    y: dripY,
    color: dripColor,
    onCompleted: dripCompletedHandle
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "86551275",
    dynamic: [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : 'none', SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? 'min-content' : SCALES.width(10.5), auto ? 'auto' : 'initial', SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : 'none', shadow ? '-1px' : '0px']
  }, ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:".concat(SCALES.height(2.5), ";border-radius:").concat(theme.layout.radius, ";font-weight:400;font-size:").concat(SCALES.font(0.875), ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:").concat(color, ";background-color:").concat(bg, ";border:1px solid ").concat(border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : 'none', ";--geist-ui-button-icon-padding:").concat(SCALES.pl(0.727), ";--geist-ui-button-height:").concat(SCALES.height(2.5), ";--geist-ui-button-color:").concat(color, ";--geist-ui-button-bg:").concat(bg, ";min-width:").concat(auto ? 'min-content' : SCALES.width(10.5), ";width:").concat(auto ? 'auto' : 'initial', ";height:").concat(SCALES.height(2.5), ";padding:").concat(SCALES.pt(0), " ").concat(paddingRight, " ").concat(SCALES.pb(0), " ").concat(paddingLeft, ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:").concat(hover.color, ";--geist-ui-button-color:").concat(hover.color, ";background-color:").concat(hover.bg, ";border-color:").concat(hover.border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowMedium : 'none', ";-webkit-transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);-ms-transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}")));
});
ButtonComponent.defaultProps = defaultProps$1e;
ButtonComponent.displayName = 'GeistButton';
var Button = withScale(ButtonComponent);

var useClickAway = function useClickAway(ref, handler) {
  var handlerRef = React$1.useRef(handler);
  React$1.useEffect(function () {
    handlerRef.current = handler;
  }, [handler]);
  React$1.useEffect(function () {
    var callback = function callback(event) {
      var el = ref.current;
      if (!event || !el || el.contains(event.target)) return;
      handlerRef.current(event);
    };

    document.addEventListener('click', callback);
    return function () {
      return document.removeEventListener('click', callback);
    };
  }, [ref]);
};

var getColor$4 = function getColor(palette, type) {
  var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var colors = {
    "default": {
      color: palette.accents_5,
      bgColor: palette.background,
      borderLeftColor: palette.accents_2,
      hoverBgColor: palette.accents_1,
      hoverBorder: palette.accents_2
    },
    secondary: {
      color: palette.background,
      bgColor: palette.foreground,
      borderLeftColor: palette.accents_7,
      hoverBgColor: palette.accents_7,
      hoverBorder: palette.accents_7
    },
    success: {
      color: palette.background,
      bgColor: palette.success,
      borderLeftColor: palette.successDark,
      hoverBgColor: palette.successDark,
      hoverBorder: palette.successDark
    },
    warning: {
      color: palette.background,
      bgColor: palette.warning,
      borderLeftColor: palette.warningDark,
      hoverBgColor: palette.warningDark,
      hoverBorder: palette.warningDark
    },
    error: {
      color: palette.background,
      bgColor: palette.error,
      borderLeftColor: palette.errorDark,
      hoverBgColor: palette.errorDark,
      hoverBorder: palette.errorDark
    }
  };
  if (disabled) return _extends({}, colors["default"], {
    bgColor: palette.accents_1,
    color: palette.accents_4
  });
  return type ? colors[type] : colors["default"];
};

var ButtonDropdownIcon = function ButtonDropdownIcon(_ref) {
  var color = _ref.color,
      height = _ref.height;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    stroke: color,
    style: {
      color: color
    },
    viewBox: "0 0 24 24",
    width: height,
    height: height,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: "jsx-3359574434"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 9l6 6 6-6",
    className: "jsx-3359574434"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3359574434"
  }, "svg.jsx-3359574434{-webkit-transform:scale(0.6);-ms-transform:scale(0.6);transform:scale(0.6);}"));
};

ButtonDropdownIcon.displayName = 'GeistButtonDropdownIcon';

var defaultContext$b = {
  type: 'default',
  auto: false,
  disabled: false,
  loading: false
};
var ButtonDropdownContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$b);
var useButtonDropdown = function useButtonDropdown() {
  return React__default["default"].useContext(ButtonDropdownContext);
};

var _excluded$17 = ["children", "onClick", "className", "main", "type"];
var defaultProps$1d = {
  main: false,
  type: 'default',
  onClick: function onClick() {},
  className: ''
};

var ButtonDropdownItem = function ButtonDropdownItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      main = _ref.main,
      selfType = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded$17);

  var theme = useTheme();

  var _useButtonDropdown = useButtonDropdown(),
      parentType = _useButtonDropdown.type,
      disabled = _useButtonDropdown.disabled,
      loading = _useButtonDropdown.loading;

  var type = main ? parentType : selfType;
  var colors = getColor$4(theme.palette, type, disabled);

  var clickHandler = function clickHandler(event) {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  var cursor = React$1.useMemo(function () {
    if (loading) return 'default';
    return disabled ? 'not-allowed' : 'pointer';
  }, [loading, disabled]);
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["772098729", [cursor, colors.bgColor, colors.color, colors.hoverBorder, colors.hoverBgColor]]]) + " " + (props && props.className != null && props.className || className || "")
  }), loading ? /*#__PURE__*/React__default["default"].createElement(Loading, null) : children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "772098729",
    dynamic: [cursor, colors.bgColor, colors.color, colors.hoverBorder, colors.hoverBgColor]
  }, "button.__jsx-style-dynamic-selector{position:relative;-webkit-appearance:button;text-rendering:auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:middle;text-align:center;cursor:".concat(cursor, ";box-sizing:border-box;margin:0;border:none;background-color:").concat(colors.bgColor, ";color:").concat(colors.color, ";width:100%;height:var(--geist-ui-dropdown-height);min-width:var(--geist-ui-dropdown-min-width);padding:var(--geist-ui-dropdown-padding);font-size:var(--geist-ui-dropdown-font-size);}button.__jsx-style-dynamic-selector:hover{border-color:").concat(colors.hoverBorder, ";background-color:").concat(colors.hoverBgColor, ";}")));
};

ButtonDropdownItem.defaultProps = defaultProps$1d;
ButtonDropdownItem.displayName = 'GeistButtonDropdownItem';

var _excluded$16 = ["children", "type", "auto", "className", "disabled", "loading", "icon"];
var defaultProps$1c = {
  type: 'default',
  auto: false,
  loading: false,
  disabled: false,
  className: ''
};

var stopPropagation$1 = function stopPropagation(event) {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};

var ButtonDropdownComponent = function ButtonDropdownComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      auto = _ref.auto,
      className = _ref.className,
      disabled = _ref.disabled,
      loading = _ref.loading,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded$16);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = React$1.useRef(null);
  var theme = useTheme();
  var colors = getColor$4(theme.palette, type);
  var itemChildren = pickChild(children, ButtonDropdownItem)[1];

  var _pickChildByProps = pickChildByProps(itemChildren, 'main', true),
      _pickChildByProps2 = _slicedToArray(_pickChildByProps, 2),
      itemChildrenWithoutMain = _pickChildByProps2[0],
      mainItemChildren = _pickChildByProps2[1];

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var clickHandler = React$1.useCallback(function (event) {
    event.preventDefault();
    stopPropagation$1(event);
    if (disabled || loading) return;
    setVisible(!visible);
  }, [visible]);
  var initialValue = {
    type: type,
    auto: auto,
    disabled: disabled,
    loading: loading
  };
  var bgColor = React$1.useMemo(function () {
    if (disabled || loading) return theme.palette.accents_1;
    return visible ? colors.hoverBgColor : colors.bgColor;
  }, [visible, colors, theme.palette]);
  var paddingLeft = auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
      paddingRight = auto ? SCALES.pr(1.15) : SCALES.pr(1.375);
  useClickAway(ref, function () {
    return setVisible(false);
  });
  return /*#__PURE__*/React__default["default"].createElement(ButtonDropdownContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: ref,
    onClick: stopPropagation$1
  }, props, {
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + (props && props.className != null && props.className || useClasses('btn-dropdown', className) || "")
  }), mainItemChildren, /*#__PURE__*/React__default["default"].createElement("details", {
    open: visible,
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React__default["default"].createElement("summary", {
    onClick: clickHandler,
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "dropdown-box"
  }, icon ? /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      color: colors.color,
      height: SCALES.height(2.5),
      width: SCALES.height(2.5)
    },
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "dropdown-icon"
  }, icon) : /*#__PURE__*/React__default["default"].createElement(ButtonDropdownIcon, {
    color: colors.color,
    height: SCALES.height(2.5)
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "content"
  }, itemChildrenWithoutMain)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1706659335",
    dynamic: [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]
  }, ".btn-dropdown.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;box-sizing:border-box;border:1px solid ".concat(theme.palette.border, ";border-radius:").concat(theme.layout.radius, ";--geist-ui-dropdown-height:").concat(SCALES.height(2.5), ";--geist-ui-dropdown-min-width:").concat(auto ? 'min-content' : SCALES.width(10.5), ";--geist-ui-dropdown-padding:").concat(SCALES.pt(0), " ").concat(paddingRight, " ").concat(SCALES.pb(0), " ").concat(paddingLeft, ";--geist-ui-dropdown-font-size:").concat(SCALES.font(0.875), ";}.btn-dropdown.__jsx-style-dynamic-selector>button{border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";}details.__jsx-style-dynamic-selector{border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";overflow:hidden;}.dropdown-box.__jsx-style-dynamic-selector{height:").concat(SCALES.height(2.5), ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto;}summary.__jsx-style-dynamic-selector{box-sizing:border-box;-webkit-tap-highlight-color:transparent;list-style:none;outline:none;color:").concat(colors.color, ";background-color:").concat(bgColor, ";height:").concat(SCALES.height(2.5), ";border-left:1px solid ").concat(colors.borderLeftColor, ";cursor:").concat(disabled || loading ? 'not-allowed' : 'pointer', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto;padding:0 1px;-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;}summary.__jsx-style-dynamic-selector:hover{border-color:").concat(colors.hoverBorder, ";background-color:").concat(colors.hoverBgColor, ";}.content.__jsx-style-dynamic-selector{position:absolute;right:0;left:0;z-index:90;width:100%;border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";-webkit-transform:translateY(").concat(theme.layout.gapHalf, ");-ms-transform:translateY(").concat(theme.layout.gapHalf, ");transform:translateY(").concat(theme.layout.gapHalf, ");background-color:").concat(theme.palette.background, ";}.content.__jsx-style-dynamic-selector>button:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";border-top-right-radius:").concat(theme.layout.radius, ";}.content.__jsx-style-dynamic-selector>button:last-of-type{border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.dropdown-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(0.6);-ms-transform:scale(0.6);transform:scale(0.6);}"))));
};

ButtonDropdownComponent.displayName = 'GeistButtonDropdown';
ButtonDropdownComponent.defaultProps = defaultProps$1c;
var ButtonDropdown = withScale(ButtonDropdownComponent);

ButtonDropdown.Item = ButtonDropdownItem;

var _excluded$15 = ["disabled", "type", "ghost", "vertical", "children", "className"];
var defaultProps$1b = {
  disabled: false,
  vertical: false,
  ghost: false,
  type: 'default',
  className: ''
};

var getGroupBorderColors = function getGroupBorderColors(palette, props) {
  var ghost = props.ghost,
      type = props.type;
  if (!ghost && type !== 'default') return palette.background;
  var colors = {
    "default": palette.border,
    success: palette.success,
    secondary: palette.secondary,
    error: palette.error,
    warning: palette.warning
  };
  var withoutLightType = type.replace('-light', '');
  return colors[withoutLightType] || colors["default"];
};

var ButtonGroupComponent = function ButtonGroupComponent(groupProps) {
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var disabled = groupProps.disabled,
      type = groupProps.type,
      ghost = groupProps.ghost,
      vertical = groupProps.vertical,
      children = groupProps.children,
      className = groupProps.className,
      props = _objectWithoutProperties(groupProps, _excluded$15);

  var initialValue = React$1.useMemo(function () {
    return {
      disabled: disabled,
      type: type,
      ghost: ghost,
      isButtonGroup: true
    };
  }, [disabled, type]);
  var border = React$1.useMemo(function () {
    return getGroupBorderColors(theme.palette, groupProps);
  }, [theme, type, disabled, ghost]);
  var classes = useClasses('btn-group', {
    vertical: vertical,
    horizontal: !vertical
  }, className);
  return /*#__PURE__*/React__default["default"].createElement(ButtonGroupContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["3616385743", [theme.layout.radius, border, SCALES.width(1, 'auto'), SCALES.height(1, 'min-content'), SCALES.mt(0.313), SCALES.mr(0.313), SCALES.mb(0.313), SCALES.ml(0.313), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), border, border]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3616385743",
    dynamic: [theme.layout.radius, border, SCALES.width(1, 'auto'), SCALES.height(1, 'min-content'), SCALES.mt(0.313), SCALES.mr(0.313), SCALES.mb(0.313), SCALES.ml(0.313), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), border, border]
  }, ".btn-group.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:".concat(theme.layout.radius, ";border:1px solid ").concat(border, ";background-color:transparent;overflow:hidden;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'min-content'), ";margin:").concat(SCALES.mt(0.313), " ").concat(SCALES.mr(0.313), " ").concat(SCALES.mb(0.313), " ").concat(SCALES.ml(0.313), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.vertical.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn-group.__jsx-style-dynamic-selector .btn{border:none;}.btn-group.__jsx-style-dynamic-selector .btn .text{top:0;}.horizontal.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid ").concat(border, ";}.horizontal.__jsx-style-dynamic-selector .btn:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.vertical.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-top:1px solid ").concat(border, ";}.vertical.__jsx-style-dynamic-selector .btn:not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;}"))));
};

ButtonGroupComponent.defaultProps = defaultProps$1b;
ButtonGroupComponent.displayName = 'GeistButtonGroup';
withScale(ButtonGroupComponent);

/**
 * Calculate the ratio of two numbers, maximum decimal length can be specified.
 *
 * (0, 100) => 0
 * (50, 100) => 50
 * (11.22, 100) => 11.22
 * (11.22, 100, 4) => 11.2200
 */

var getProportions = function getProportions(value, max) {
  var maxFixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var val = value / max;
  var couldBeDecimalValue = (Number.isNaN(val) ? 0 : val) * 100;
  if (couldBeDecimalValue > 100) return 100;
  if (couldBeDecimalValue < 0) return 0;
  if (!"".concat(couldBeDecimalValue).includes('.')) return couldBeDecimalValue;
  var decimal = "".concat(couldBeDecimalValue).split('.')[1];
  if (decimal.length < maxFixed) return couldBeDecimalValue;
  return +couldBeDecimalValue.toFixed(maxFixed);
};
var useProportions = function useProportions(value, max) {
  var maxFixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return React$1.useMemo(function () {
    return getProportions(value, max, maxFixed);
  }, [value, max, maxFixed]);
};

var _excluded$14 = ["value", "limit", "color", "className"];
var defaultProps$1a = {
  value: 0,
  limit: 100,
  color: '',
  className: ''
};

var getColor$3 = function getColor(val, palette) {
  if (val < 33) return palette.cyan;
  if (val < 66) return palette.warning;
  return palette.errorDark;
};

var CapacityComponent = function CapacityComponent(_ref) {
  var value = _ref.value,
      limit = _ref.limit,
      userColor = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$14);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var percentValue = useProportions(value, limit);
  var classes = useClasses('capacity', className);
  var color = React$1.useMemo(function () {
    if (userColor && userColor !== '') return userColor;
    return getColor$3(percentValue, theme.palette);
  }, [userColor, percentValue, theme.palette]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    title: "".concat(percentValue, "%")
  }, props, {
    className: style.dynamic([["2706946339", [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2706946339", [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]]])
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2706946339",
    dynamic: [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]
  }, ".capacity.__jsx-style-dynamic-selector{width:".concat(SCALES.width(3.125), ";height:").concat(SCALES.height(0.625), ";border-radius:").concat(theme.layout.radius, ";overflow:hidden;background-color:").concat(theme.palette.accents_2, ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}span.__jsx-style-dynamic-selector{width:").concat(percentValue, "%;background-color:").concat(color, ";height:100%;margin:0;padding:0;display:block;}")));
};

CapacityComponent.defaultProps = defaultProps$1a;
CapacityComponent.displayName = 'GeistCapacity';
withScale(CapacityComponent);

var getStyles$1 = function getStyles(type, palette, isShadow) {
  var colors = {
    "default": {
      color: palette.foreground,
      bgColor: palette.background
    },
    dark: {
      color: palette.background,
      bgColor: palette.foreground
    },
    secondary: {
      color: palette.background,
      bgColor: palette.secondary
    },
    success: {
      color: palette.background,
      bgColor: palette.success
    },
    warning: {
      color: palette.background,
      bgColor: palette.warning
    },
    error: {
      color: palette.background,
      bgColor: palette.error
    },
    lite: {
      color: palette.foreground,
      bgColor: palette.background
    },
    alert: {
      color: 'white',
      bgColor: palette.alert
    },
    purple: {
      color: 'white',
      bgColor: palette.purple
    },
    violet: {
      color: 'white',
      bgColor: palette.violet
    },
    cyan: {
      color: 'black',
      bgColor: palette.cyan
    }
  };
  var showBorder = type === 'default' && !isShadow;
  return _extends({}, colors[type], {
    borderColor: showBorder ? palette.border : 'transparent'
  });
};

var _excluded$13 = ["children", "className", "disableAutoMargin"];
var defaultProps$19 = {
  disableAutoMargin: false,
  className: ''
};

var CardFooterComponent = function CardFooterComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disableAutoMargin = _ref.disableAutoMargin,
      props = _objectWithoutProperties(_ref, _excluded$13);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses({
    'auto-margin': !disableAutoMargin
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("footer", _extends({}, props, {
    className: style.dynamic([["1602358380", [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1602358380",
    dynamic: [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]
  }, "footer.__jsx-style-dynamic-selector{padding:".concat(SCALES.py(0.66), " ").concat(SCALES.px(1.31), ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:inherit;background-color:inherit;font-size:").concat(SCALES.font(0.875), ";border-top:1px solid ").concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";min-height:").concat(SCALES.height(3.3), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.auto-margin.__jsx-style-dynamic-selector *{margin-top:0;margin-bottom:0;margin-right:").concat(theme.layout.gapQuarter, ";}")));
};

CardFooterComponent.defaultProps = defaultProps$19;
CardFooterComponent.displayName = 'GeistCardFooter';
var CardFooter = withScale(CardFooterComponent);

var _excluded$12 = ["className", "children"];
var defaultProps$18 = {
  className: ''
};

var CardContentComponent = function CardContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$12);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["490544004", [SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(1), SCALES.pr(1), SCALES.pb(1), SCALES.pl(1), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('content', className) || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "490544004",
    dynamic: [SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(1), SCALES.pr(1), SCALES.pb(1), SCALES.pl(1), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".content.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1), " ").concat(SCALES.pr(1), " ").concat(SCALES.pb(1), " ").concat(SCALES.pl(1), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.content.__jsx-style-dynamic-selector>p:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>p:last-child{margin-bottom:0;}")));
};

CardContentComponent.defaultProps = defaultProps$18;
CardContentComponent.displayName = 'GeistCardContent';
var CardContent = withScale(CardContentComponent);

var _excluded$11 = ["opacity"];
var defaultProps$17 = {
  opacity: 0.5
};
var ImageSkeleton = /*#__PURE__*/React__default["default"].memo(function (_ref) {
  var opacity = _ref.opacity,
      props = _objectWithoutProperties(_ref, _excluded$11);

  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2946022605", [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]]]) + " " + (props && props.className != null && props.className || "skeleton")
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2946022605",
    dynamic: [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]
  }, ".skeleton.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient( 270deg, ".concat(theme.palette.accents_1, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_1, " );background-size:400% 100%;-webkit-animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;opacity:").concat(opacity, ";-webkit-transition:opacity 300ms ease-out;transition:opacity 300ms ease-out;}@-webkit-keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}@keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}")));
});
ImageSkeleton.defaultProps = defaultProps$17;
ImageSkeleton.displayName = 'GeistImageSkeleton';

var transformDataSource = function transformDataSource(src) {
  var left = "".concat(src).slice(0, 4);

  if (encodeURIComponent(left) === '%3Csvg') {
    return "data:image/svg+xml;utf8,".concat(src);
  }

  return src;
};
var getHostFromUrl = function getHostFromUrl(url) {
  try {
    return new URL(url).host;
  } catch (e) {
    return url;
  }
};

var _excluded$10 = ["src", "disableSkeleton", "className", "maxDelay"];
var defaultProps$16 = {
  disableSkeleton: false,
  className: '',
  maxDelay: 3000
};

var ImageComponent = function ImageComponent(_ref) {
  var src = _ref.src,
      disableSkeleton = _ref.disableSkeleton,
      className = _ref.className,
      maxDelay = _ref.maxDelay,
      props = _objectWithoutProperties(_ref, _excluded$10);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var width = getScaleProps(['width', 'w']);
  var height = getScaleProps(['height', 'h']);
  var showAnimation = !disableSkeleton && width && height;
  var theme = useTheme();

  var _useState = React$1.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React$1.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showSkeleton = _useState4[0],
      setShowSkeleton = _useState4[1];

  var imageRef = React$1.useRef(null);
  var url = React$1.useMemo(function () {
    return transformDataSource(src);
  }, [src]);

  var imageLoaded = function imageLoaded() {
    if (!showAnimation) return;
    setLoading(false);
  };

  React$1.useEffect(function () {
    if (!showAnimation) return;
    if (!imageRef.current) return;

    if (imageRef.current.complete) {
      setLoading(false);
      setShowSkeleton(false);
    }
  });
  React$1.useEffect(function () {
    var timer = setTimeout(function () {
      if (showAnimation) {
        setShowSkeleton(false);
      }

      clearTimeout(timer);
    }, maxDelay);
    return function () {
      return clearTimeout(timer);
    };
  }, [loading]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["4175752462", [theme.layout.radius, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, 'auto'), SCALES.height(1, 'auto')]]]) + " " + (useClasses('image', className) || "")
  }, showSkeleton && showAnimation && /*#__PURE__*/React__default["default"].createElement(ImageSkeleton, {
    opacity: loading ? 0.5 : 0
  }), /*#__PURE__*/React__default["default"].createElement("img", _extends({
    ref: imageRef,
    onLoad: imageLoaded,
    src: url
  }, props, {
    className: style.dynamic([["4175752462", [theme.layout.radius, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, 'auto'), SCALES.height(1, 'auto')]]]) + " " + (props && props.className != null && props.className || "")
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4175752462",
    dynamic: [theme.layout.radius, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.width(1, 'auto'), SCALES.height(1, 'auto')]
  }, ".image.__jsx-style-dynamic-selector{position:relative;border-radius:".concat(theme.layout.radius, ";overflow:hidden;max-width:100%;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}img.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";object-fit:scale-down;display:inline-block;}")));
};

ImageComponent.defaultProps = defaultProps$16;
ImageComponent.displayName = 'GeistImage';
var Image = withScale(ImageComponent);

var ImageBrowserHttpsIcon = function ImageBrowserHttpsIcon() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "jsx-4165143638"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5 10.2H19V21H5V10.2Z",
    className: "jsx-4165143638"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 12C13.933 12 15.5 10.3882 15.5 8.4C15.5 6.41177 13.933 4.8 12 4.8C10.067 4.8 8.5 6.41177 8.5 8.4C8.5 10.3882 10.067 12 12 12ZM12 13.8C14.8995 13.8 17.25 11.3823 17.25 8.4C17.25 5.41766 14.8995 3 12 3C9.10051 3 6.75 5.41766 6.75 8.4C6.75 11.3823 9.10051 13.8 12 13.8Z",
    className: "jsx-4165143638"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4165143638"
  }, "svg.jsx-4165143638{width:1em;height:1em;}"));
};

var MemoImageBrowserHttpsIcon = /*#__PURE__*/React__default["default"].memo(ImageBrowserHttpsIcon);

var getBrowserColors = function getBrowserColors(invert, palette) {
  return invert ? {
    color: palette.background,
    barBgColor: palette.foreground,
    inputBgColor: palette.accents_8,
    borderColor: palette.accents_7,
    titleColor: palette.accents_2
  } : {
    color: palette.foreground,
    barBgColor: palette.background,
    inputBgColor: palette.accents_1,
    borderColor: palette.border,
    titleColor: palette.accents_5
  };
};

var _excluded$$ = ["url", "title", "children", "showFullLink", "invert", "anchorProps", "className"];
var defaultProps$15 = {
  className: '',
  showFullLink: false,
  anchorProps: {},
  invert: false
};

var getTitle = function getTitle(title, colors) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["524099755", [colors.titleColor]]]) + " " + "title"
  }, title, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "524099755",
    dynamic: [colors.titleColor]
  }, ".title.__jsx-style-dynamic-selector{color:".concat(colors.titleColor, ";font-size:0.75em;}")));
};

var getAddressInput = function getAddressInput(url, showFullLink, colors, anchorProps) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3718009574", [colors.inputBgColor]]]) + " " + "address-input"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3718009574", [colors.inputBgColor]]]) + " " + "https"
  }, /*#__PURE__*/React__default["default"].createElement(MemoImageBrowserHttpsIcon, null)), /*#__PURE__*/React__default["default"].createElement(Link, _extends({
    href: url,
    title: url,
    target: "_blank"
  }, anchorProps), showFullLink ? url : getHostFromUrl(url)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3718009574",
    dynamic: [colors.inputBgColor]
  }, ".address-input.__jsx-style-dynamic-selector{height:1.75em;max-width:60%;min-width:40%;background-color:".concat(colors.inputBgColor, ";color:inherit;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;overflow:hidden;position:relative;}.address-input.__jsx-style-dynamic-selector *{font-size:0.75em;color:inherit;}.address-input.__jsx-style-dynamic-selector a{max-width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;color:inherit;}.https.__jsx-style-dynamic-selector{width:0.75em;height:0.75em;font-size:1em;margin-right:0.31em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-1px;color:inherit;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

var ImageBrowserComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var url = _ref.url,
      title = _ref.title,
      children = _ref.children,
      showFullLink = _ref.showFullLink,
      invert = _ref.invert,
      anchorProps = _ref.anchorProps,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$$);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var colors = React$1.useMemo(function () {
    return getBrowserColors(invert, theme.palette);
  }, [invert, theme.palette]);
  var input = React$1.useMemo(function () {
    if (url) return getAddressInput(url, showFullLink, colors, anchorProps);
    if (title) return getTitle(title, colors);
    return null;
  }, [url, showFullLink, title, colors, anchorProps]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: ref
  }, props, {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + (props && props.className != null && props.className || useClasses('browser', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("header", {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "traffic"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "close"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "mini"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "full"
  })), input), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1856409351",
    dynamic: [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]
  }, ".browser.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:".concat(theme.expressiveness.shadowLarge, ";max-width:100%;border-radius:").concat(theme.layout.radius, ";overflow:hidden;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.browser.__jsx-style-dynamic-selector .image{border-top-left-radius:0;border-top-right-radius:0;}header.__jsx-style-dynamic-selector{height:2.5em;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;color:").concat(colors.color, ";background-color:").concat(colors.barBgColor, ";border-bottom:1px solid ").concat(colors.borderColor, ";}.traffic.__jsx-style-dynamic-selector{width:auto;position:absolute;left:").concat(theme.layout.gapHalf, ";top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);bottom:0;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:inherit;}.traffic.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{border-radius:50%;width:0.75em;height:0.75em;max-width:20px;max-height:20px;display:inline-block;margin-right:0.5em;}.close.__jsx-style-dynamic-selector{background-color:#ff5f56;}.mini.__jsx-style-dynamic-selector{background-color:#ffbd2e;}.full.__jsx-style-dynamic-selector{background-color:#27c93f;}")));
});
ImageBrowserComponent.defaultProps = defaultProps$15;
ImageBrowserComponent.displayName = 'GeistImageBrowser';
var ImageBrowser = withScale(ImageBrowserComponent);

Image.Browser = ImageBrowser;

var _excluded$_ = ["children", "hoverable", "className", "shadow", "type"];
var defaultProps$14 = {
  type: 'default',
  hoverable: false,
  shadow: false,
  className: ''
};

var CardComponent = function CardComponent(_ref) {
  var children = _ref.children,
      hoverable = _ref.hoverable,
      className = _ref.className,
      shadow = _ref.shadow,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded$_);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var hoverShadow = React$1.useMemo(function () {
    if (shadow) return theme.expressiveness.shadowMedium;
    return hoverable ? theme.expressiveness.shadowSmall : 'none';
  }, [hoverable, shadow, theme.expressiveness]);

  var _useMemo = React$1.useMemo(function () {
    return getStyles$1(type, theme.palette, shadow);
  }, [type, theme.palette, shadow]),
      color = _useMemo.color,
      bgColor = _useMemo.bgColor,
      borderColor = _useMemo.borderColor;

  var _pickChild = pickChild(children, CardFooter),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutFooterChildren = _pickChild2[0],
      footerChildren = _pickChild2[1];

  var _pickChild3 = pickChild(withoutFooterChildren, Image),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      withoutImageChildren = _pickChild4[0],
      imageChildren = _pickChild4[1];

  var hasContent = hasChild(withoutImageChildren, CardContent);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["4234389955", [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : 'none', color, bgColor, borderColor, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]]]) + " " + (props && props.className != null && props.className || useClasses('card', className) || "")
  }), imageChildren, hasContent ? withoutImageChildren : /*#__PURE__*/React__default["default"].createElement(CardContent, null, withoutImageChildren), footerChildren, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4234389955",
    dynamic: [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : 'none', color, bgColor, borderColor, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]
  }, ".card.__jsx-style-dynamic-selector{background:".concat(theme.palette.background, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : 'none', ";box-sizing:border-box;color:").concat(color, ";background-color:").concat(bgColor, ";border:1px solid ").concat(borderColor, ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.card.__jsx-style-dynamic-selector:hover{box-shadow:").concat(hoverShadow, ";}.card.__jsx-style-dynamic-selector img{width:100%;}.card.__jsx-style-dynamic-selector .image{border-bottom-left-radius:0;border-bottom-right-radius:0;}")));
};

CardComponent.defaultProps = defaultProps$14;
CardComponent.displayName = 'GeistCard';
var Card = withScale(CardComponent);

Card.Footer = CardFooter;
Card.Actions = CardFooter;
Card.Content = CardContent;
Card.Body = CardContent;

var defaultContext$a = {
  disabledAll: false,
  inGroup: false,
  values: []
};
var CheckboxContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$a);
var useCheckbox = function useCheckbox() {
  return React__default["default"].useContext(CheckboxContext);
};

var CheckboxIconComponent = function CheckboxIconComponent(_ref) {
  var fill = _ref.fill,
      bg = _ref.bg,
      disabled = _ref.disabled,
      checked = _ref.checked;
  var theme = useTheme();

  var _useMemo = React$1.useMemo(function () {
    return {
      propsFill: fill,
      propsBg: bg
    };
  }, [theme.palette]),
      propsFill = _useMemo.propsFill,
      propsBg = _useMemo.propsBg;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, checked ? /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 17 16",
    fill: "none",
    className: style.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.1429 0H3.85714C1.7269 0 0 1.79086 0 4V12C0 14.2091 1.7269 16 3.85714 16H12.1429C14.2731 16 16 14.2091 16 12V4C16 1.79086 14.2731 0 12.1429 0Z",
    fill: propsFill,
    className: style.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 3L7.72491 11L5 8",
    stroke: propsBg,
    strokeWidth: "1.5",
    className: style.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  })) : /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none",
    className: style.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V8.5C0.5 10.1569 1.84315 11.5 3.5 11.5H8.5C10.1569 11.5 11.5 10.1569 11.5 8.5V3.5C11.5 1.84315 10.1569 0.5 8.5 0.5Z",
    stroke: theme.palette.accents_5,
    className: style.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "996181129",
    dynamic: [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']
  }, "svg.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(0.86 * var(--checkbox-size));height:calc(0.86 * var(--checkbox-size));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:".concat(disabled ? 0.4 : 1, ";cursor:").concat(disabled ? 'not-allowed' : 'pointer', ";}")));
};

CheckboxIconComponent.displayName = 'GeistCheckboxIcon';
var CheckboxIcon = /*#__PURE__*/React__default["default"].memo(CheckboxIconComponent);

var getColors$6 = function getColors(palette, status) {
  var colors = {
    "default": {
      fill: palette.foreground,
      bg: palette.background
    },
    secondary: {
      fill: palette.foreground,
      bg: palette.background
    },
    success: {
      fill: palette.success,
      // fondo
      bg: palette.background
    },
    warning: {
      fill: palette.warning,
      bg: palette.background
    },
    error: {
      fill: palette.error,
      bg: palette.background
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var _excluded$Z = ["checked", "initialChecked", "disabled", "onChange", "className", "children", "type", "value"];
var defaultProps$13 = {
  disabled: false,
  type: 'default',
  initialChecked: false,
  className: '',
  value: ''
};

var CheckboxComponent = function CheckboxComponent(_ref) {
  var checked = _ref.checked,
      initialChecked = _ref.initialChecked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded$Z);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(initialChecked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var _useCheckbox = useCheckbox(),
      updateState = _useCheckbox.updateState,
      inGroup = _useCheckbox.inGroup,
      disabledAll = _useCheckbox.disabledAll,
      values = _useCheckbox.values;

  var isDisabled = inGroup ? disabledAll || disabled : disabled;
  var classes = useClasses('checkbox', className);

  if (inGroup && checked) {
    useWarning('Remove props "checked" when [Checkbox] component is in the group.', 'Checkbox');
  }

  if (inGroup) {
    React$1.useEffect(function () {
      var next = values.includes(value);
      if (next === selfChecked) return;
      setSelfChecked(next);
    }, [values.join(',')]);
  }

  var _useMemo = React$1.useMemo(function () {
    return getColors$6(theme.palette, type);
  }, [theme.palette, type]),
      fill = _useMemo.fill,
      bg = _useMemo.bg;

  var changeHandle = React$1.useCallback(function (ev) {
    if (isDisabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: ev.stopPropagation,
      preventDefault: ev.preventDefault,
      nativeEvent: ev
    };

    if (inGroup && updateState) {
      updateState && updateState(value, !selfChecked);
    }

    setSelfChecked(!selfChecked);
    onChange && onChange(selfEvent);
  }, [updateState, onChange, isDisabled, selfChecked]);
  React$1.useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);
  return /*#__PURE__*/React__default["default"].createElement("label", {
    className: style.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement(CheckboxIcon, {
    fill: fill,
    bg: bg,
    disabled: isDisabled,
    checked: selfChecked
  }), /*#__PURE__*/React__default["default"].createElement("input", _extends({
    type: "checkbox",
    disabled: isDisabled,
    checked: selfChecked,
    onChange: changeHandle
  }, props, {
    className: style.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + (props && props.className != null && props.className || "")
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + "text"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4126727675",
    dynamic: [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']
  }, ".checkbox.__jsx-style-dynamic-selector{--checkbox-size:".concat(SCALES.font(0.875), ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";opacity:").concat(isDisabled ? 0.75 : 1, ";line-height:var(--checkbox-size);width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'var(--checkbox-size)'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.text.__jsx-style-dynamic-selector{font-size:var(--checkbox-size);line-height:var(--checkbox-size);padding-left:calc(var(--checkbox-size) * 0.5);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";}input.__jsx-style-dynamic-selector{opacity:0;outline:none;position:absolute;width:0;height:0;margin:0;padding:0;z-index:-1;font-size:0;background-color:transparent;}")));
};

CheckboxComponent.defaultProps = defaultProps$13;
CheckboxComponent.displayName = 'GeistCheckbox';
var Checkbox = withScale(CheckboxComponent);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

var _excluded$Y = ["disabled", "onChange", "value", "children", "className"];
var defaultProps$12 = {
  disabled: false,
  className: ''
};

var CheckboxGroupComponent = function CheckboxGroupComponent(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$Y);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var classes = useClasses('group', className);

  if (!value) {
    value = [];
    useWarning('Props "value" is required.', 'Checkbox Group');
  }

  var updateState = function updateState(val, checked) {
    var removed = selfVal.filter(function (v) {
      return v !== val;
    });
    var next = checked ? [].concat(_toConsumableArray(removed), [val]) : removed;
    setSelfVal(next);
    onChange && onChange(next);
  };

  var providerValue = React$1.useMemo(function () {
    return {
      updateState: updateState,
      disabledAll: disabled,
      inGroup: true,
      values: selfVal
    };
  }, [disabled, selfVal]);
  React$1.useEffect(function () {
    setSelfVal(value);
  }, [value.join(',')]);
  return /*#__PURE__*/React__default["default"].createElement(CheckboxContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["1727163828", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.font(1), SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1727163828",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.font(1), SCALES.font(1)]
  }, ".group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.group.__jsx-style-dynamic-selector label{margin-right:calc(").concat(SCALES.font(1), " * 2);--checkbox-size:").concat(SCALES.font(1), ";}.group.__jsx-style-dynamic-selector label:last-of-type{margin-right:0;}"))));
};

CheckboxGroupComponent.defaultProps = defaultProps$12;
CheckboxGroupComponent.displayName = 'GeistCheckboxGroup';
var CheckboxGroup = withScale(CheckboxGroupComponent);

Checkbox.Group = CheckboxGroup;

var _excluded$X = ["children", "block", "className", "name", "classic"];
var defaultProps$11 = {
  block: false,
  className: '',
  name: '',
  classic: false
};

var CodeComponent = function CodeComponent(_ref) {
  var children = _ref.children,
      block = _ref.block,
      className = _ref.className,
      name = _ref.name,
      classic = _ref.classic,
      props = _objectWithoutProperties(_ref, _excluded$X);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var theme = useTheme();

  var _useMemo = React$1.useMemo(function () {
    if (!classic) return {
      border: theme.palette.accents_1,
      background: addColorAlpha(theme.palette.accents_1, 0.75)
    };
    return {
      border: theme.palette.accents_2,
      background: theme.palette.background
    };
  }, [classic, theme.palette]),
      background = _useMemo.background,
      border = _useMemo.border;

  if (!block) return /*#__PURE__*/React__default["default"].createElement("code", props, children);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2383620185", [border, SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.mt(1.3), SCALES.mr(0), SCALES.mb(1.3), SCALES.ml(0), theme.layout.radius, background, SCALES.pt(1.1), SCALES.pr(1), SCALES.pb(1.1), SCALES.pl(1), theme.layout.radius, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_5, SCALES.font(0.8125), SCALES.font(0.32), SCALES.font(0.5), SCALES.font(0.32), SCALES.font(0.5), theme.layout.radius, theme.layout.radius]]]) + " " + "pre"
  }, name && /*#__PURE__*/React__default["default"].createElement("header", {
    className: style.dynamic([["2383620185", [border, SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.mt(1.3), SCALES.mr(0), SCALES.mb(1.3), SCALES.ml(0), theme.layout.radius, background, SCALES.pt(1.1), SCALES.pr(1), SCALES.pb(1.1), SCALES.pl(1), theme.layout.radius, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_5, SCALES.font(0.8125), SCALES.font(0.32), SCALES.font(0.5), SCALES.font(0.32), SCALES.font(0.5), theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2383620185", [border, SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.mt(1.3), SCALES.mr(0), SCALES.mb(1.3), SCALES.ml(0), theme.layout.radius, background, SCALES.pt(1.1), SCALES.pr(1), SCALES.pb(1.1), SCALES.pl(1), theme.layout.radius, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_5, SCALES.font(0.8125), SCALES.font(0.32), SCALES.font(0.5), SCALES.font(0.32), SCALES.font(0.5), theme.layout.radius, theme.layout.radius]]]) + " " + "name"
  }, name)), /*#__PURE__*/React__default["default"].createElement("pre", _extends({}, props, {
    className: style.dynamic([["2383620185", [border, SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.mt(1.3), SCALES.mr(0), SCALES.mb(1.3), SCALES.ml(0), theme.layout.radius, background, SCALES.pt(1.1), SCALES.pr(1), SCALES.pb(1.1), SCALES.pl(1), theme.layout.radius, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_5, SCALES.font(0.8125), SCALES.font(0.32), SCALES.font(0.5), SCALES.font(0.32), SCALES.font(0.5), theme.layout.radius, theme.layout.radius]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2383620185",
    dynamic: [border, SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.mt(1.3), SCALES.mr(0), SCALES.mb(1.3), SCALES.ml(0), theme.layout.radius, background, SCALES.pt(1.1), SCALES.pr(1), SCALES.pb(1.1), SCALES.pl(1), theme.layout.radius, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_5, SCALES.font(0.8125), SCALES.font(0.32), SCALES.font(0.5), SCALES.font(0.32), SCALES.font(0.5), theme.layout.radius, theme.layout.radius]
  }, ".pre.__jsx-style-dynamic-selector{max-width:100%;border:1px solid ".concat(border, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'initial'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(1.3), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(1.3), " ").concat(SCALES.ml(0), ";border-radius:").concat(theme.layout.radius, ";background-color:").concat(background, ";}pre.__jsx-style-dynamic-selector{max-width:100%;font-size:inherit;border:none;margin:0;line-height:1.5em;padding:").concat(SCALES.pt(1.1), " ").concat(SCALES.pr(1), " ").concat(SCALES.pb(1.1), " ").concat(SCALES.pl(1), ";}.dark.__jsx-style-dynamic-selector{color:white;background:black;}.dark.__jsx-style-dynamic-selector code.__jsx-style-dynamic-selector{color:white;}header.__jsx-style-dynamic-selector{height:auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:").concat(theme.layout.radius, ";background-color:transparent;}.name.__jsx-style-dynamic-selector{border:1px solid ").concat(theme.palette.accents_2, ";background-color:").concat(theme.palette.accents_2, ";color:").concat(theme.palette.accents_5, ";height:auto;line-height:1.35em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:").concat(SCALES.font(0.8125), ";padding:").concat(SCALES.font(0.32), " ").concat(SCALES.font(0.5), " ").concat(SCALES.font(0.32), " ").concat(SCALES.font(0.5), ";width:auto;border-top-left-radius:calc(").concat(theme.layout.radius, " - 1px);border-bottom-right-radius:").concat(theme.layout.radius, ";}")));
};

CodeComponent.defaultProps = defaultProps$11;
CodeComponent.displayName = 'GeistCode';
withScale(CodeComponent);

var CollapseIcon = function CollapseIcon(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    style: {
      color: 'currentColor'
    },
    className: style.dynamic([["2249786880", [active ? '-180deg' : '0']]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 9l6 6 6-6",
    className: style.dynamic([["2249786880", [active ? '-180deg' : '0']]])
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2249786880",
    dynamic: [active ? '-180deg' : '0']
  }, "svg.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;-webkit-transform:rotateZ(".concat(active ? '-180deg' : '0', ");-ms-transform:rotateZ(").concat(active ? '-180deg' : '0', ");transform:rotateZ(").concat(active ? '-180deg' : '0', ");width:1.5em;height:1.5em;}")));
};

var MemoCollapseIcon = /*#__PURE__*/React__default["default"].memo(CollapseIcon);

var getRealShape = function getRealShape(el) {
  var defaultShape = {
    width: 0,
    height: 0
  };
  if (!el || typeof window === 'undefined') return defaultShape;
  var rect = el.getBoundingClientRect();

  var _window$getComputedSt = window.getComputedStyle(el),
      width = _window$getComputedSt.width,
      height = _window$getComputedSt.height;

  var getCSSStyleVal = function getCSSStyleVal(str, parentNum) {
    if (!str) return 0;
    var strVal = str.includes('px') ? +str.split('px')[0] : str.includes('%') ? +str.split('%')[0] * parentNum * 0.01 : str;
    return Number.isNaN(+strVal) ? 0 : +strVal;
  };

  return {
    width: getCSSStyleVal("".concat(width), rect.width),
    height: getCSSStyleVal("".concat(height), rect.height)
  };
};

var useRealShape = function useRealShape(ref) {
  var _useState = React$1.useState({
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var update = function update() {
    var _getRealShape = getRealShape(ref.current),
        width = _getRealShape.width,
        height = _getRealShape.height;

    setState({
      width: width,
      height: height
    });
  };

  React$1.useEffect(function () {
    return update();
  }, [ref.current]);
  return [state, update];
};

var defaultProps$10 = {
  isExpanded: false,
  delay: 200
};

var Expand = function Expand(_ref) {
  var isExpanded = _ref.isExpanded,
      delay = _ref.delay,
      children = _ref.children;

  var _useState = React$1.useState(isExpanded ? 'auto' : '0'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = React$1.useState(isExpanded),
      _useState4 = _slicedToArray(_useState3, 2),
      selfExpanded = _useState4[0],
      setSelfExpanded = _useState4[1];

  var _useState5 = React$1.useState(isExpanded),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var contentRef = React$1.useRef(null);
  var entryTimer = React$1.useRef();
  var leaveTimer = React$1.useRef();
  var resetTimer = React$1.useRef();

  var _useRealShape = useRealShape(contentRef),
      _useRealShape2 = _slicedToArray(_useRealShape, 2),
      state = _useRealShape2[0],
      updateShape = _useRealShape2[1];

  var classes = useClasses('container', {
    expanded: selfExpanded
  });
  React$1.useEffect(function () {
    return setHeight("".concat(state.height, "px"));
  }, [state.height]);
  React$1.useEffect(function () {
    // show element or reset height.
    // force an update once manually, even if the element does not change.
    // (the height of the element might be "auto")
    if (isExpanded) {
      setVisible(isExpanded);
    } else {
      updateShape();
      setHeight("".concat(state.height, "px"));
    } // show expand animation


    entryTimer.current = window.setTimeout(function () {
      setSelfExpanded(isExpanded);
      clearTimeout(entryTimer.current);
    }, 30); // Reset height after animation

    if (isExpanded) {
      resetTimer.current = window.setTimeout(function () {
        setHeight('auto');
        clearTimeout(resetTimer.current);
      }, delay);
    } else {
      leaveTimer.current = window.setTimeout(function () {
        setVisible(isExpanded);
        clearTimeout(leaveTimer.current);
      }, delay / 2);
    }

    return function () {
      clearTimeout(entryTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(resetTimer.current);
    };
  }, [isExpanded]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1918690829", [visible ? 'visible' : 'hidden', delay, height]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: contentRef,
    className: style.dynamic([["1918690829", [visible ? 'visible' : 'hidden', delay, height]]]) + " " + "content"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1918690829",
    dynamic: [visible ? 'visible' : 'hidden', delay, height]
  }, ".container.__jsx-style-dynamic-selector{padding:0;margin:0;height:0;overflow:hidden;visibility:".concat(visible ? 'visible' : 'hidden', ";-webkit-transition:height ").concat(delay, "ms ease;transition:height ").concat(delay, "ms ease;}.expanded.__jsx-style-dynamic-selector{height:").concat(height, ";visibility:visible;}")));
};

Expand.defaultProps = defaultProps$10;
Expand.displayName = 'GeistExpand';

var defaultContext$9 = {
  values: []
};
var CollapseContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$9);
var useCollapseContext = function useCollapseContext() {
  return React__default["default"].useContext(CollapseContext);
};

var _excluded$W = ["children", "title", "subtitle", "initialVisible", "shadow", "className", "index"];
var defaultProps$$ = {
  className: '',
  shadow: false,
  initialVisible: false
};

var CollapseComponent = function CollapseComponent(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      initialVisible = _ref.initialVisible,
      shadow = _ref.shadow,
      className = _ref.className,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, _excluded$W);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCollapseContext = useCollapseContext(),
      values = _useCollapseContext.values,
      updateValues = _useCollapseContext.updateValues;

  var _useCurrentState = useCurrentState(initialVisible),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      visible = _useCurrentState2[0],
      setVisible = _useCurrentState2[1],
      visibleRef = _useCurrentState2[2];

  var classes = useClasses('collapse', {
    shadow: shadow
  }, className);

  if (!title) {
    useWarning('"title" is required.', 'Collapse');
  }

  React$1.useEffect(function () {
    if (!values.length) return;
    var isActive = !!values.find(function (item) {
      return item === index;
    });
    setVisible(isActive);
  }, [values.join(',')]);

  var clickHandler = function clickHandler() {
    var next = !visibleRef.current;
    setVisible(next);
    updateValues && updateValues(index, next);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    role: "button",
    onClick: clickHandler,
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "view"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "title"
  }, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]])
  }, title), " ", /*#__PURE__*/React__default["default"].createElement(MemoCollapseIcon, {
    active: visible
  })), subtitle && /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "subtitle"
  }, subtitle)), /*#__PURE__*/React__default["default"].createElement(Expand, {
    isExpanded: visible
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "content"
  }, children)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3106940587",
    dynamic: [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]
  }, ".collapse.__jsx-style-dynamic-selector{border-top:1px solid ".concat(theme.palette.border, ";border-bottom:1px solid ").concat(theme.palette.border, ";font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1.2), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(1.2), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.shadow.__jsx-style-dynamic-selector{box-shadow:").concat(theme.expressiveness.shadowSmall, ";border:none;border-radius:").concat(theme.layout.radius, ";padding:").concat(theme.layout.gap, ";}.view.__jsx-style-dynamic-selector{cursor:pointer;outline:none;}.title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(theme.palette.foreground, ";}.title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;font-size:1.5em;}.subtitle.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_5, ";margin:0;}.subtitle.__jsx-style-dynamic-selector>*{margin:0;}.content.__jsx-style-dynamic-selector{font-size:inherit;line-height:1.6em;padding:").concat(SCALES.pt(1.2), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(1.2), " ").concat(SCALES.pl(0), ";}.content.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

CollapseComponent.defaultProps = defaultProps$$;
CollapseComponent.displayName = 'GeistCollapse';
var Collapse = withScale(CollapseComponent);

var _excluded$V = ["children", "accordion", "className"];
var defaultProps$_ = {
  accordion: true,
  className: ''
};

var CollapseGroupComponent = function CollapseGroupComponent(_ref) {
  var children = _ref.children,
      accordion = _ref.accordion,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$V);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCurrentState = useCurrentState([]),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      stateRef = _useCurrentState2[2];

  var classes = useClasses('collapse-group', className);

  var updateValues = function updateValues(currentIndex, nextState) {
    var hasChild = stateRef.current.find(function (val) {
      return val === currentIndex;
    });

    if (accordion) {
      if (nextState) return setState([currentIndex]);
      return setState([]);
    }

    if (nextState) {
      // In a few cases, the user will set Collapse Component state manually.
      // If the user incorrectly set the state, Group component should ignore it.

      /* istanbul ignore if */
      if (hasChild) return;
      return setState([].concat(_toConsumableArray(stateRef.current), [currentIndex]));
    }

    setState(stateRef.current.filter(function (item) {
      return item !== currentIndex;
    }));
  };

  var initialValue = React$1.useMemo(function () {
    return {
      values: state,
      updateValues: updateValues
    };
  }, [state.join(',')]);
  var hasIndexChildren = React$1.useMemo(function () {
    return setChildrenIndex(children, [Collapse]);
  }, [children]);
  return /*#__PURE__*/React__default["default"].createElement(CollapseContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2415399140", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.6), SCALES.pb(0), SCALES.pl(0.6), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), hasIndexChildren, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2415399140",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.6), SCALES.pb(0), SCALES.pl(0.6), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".collapse-group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.6), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.6), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.collapse-group.__jsx-style-dynamic-selector>div + div{border-top:none;}"))));
};

CollapseGroupComponent.defaultProps = defaultProps$_;
CollapseGroupComponent.displayName = 'GeistCollapseGroup';
var CollapseGroup = withScale(CollapseGroupComponent);

Collapse.Group = CollapseGroup;

var _excluded$U = ["title", "content", "className"];
var defaultProps$Z = {
  title: 'Title',
  content: '',
  className: ''
};

var DescriptionComponent = function DescriptionComponent(_ref) {
  var title = _ref.title,
      content = _ref.content,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$U);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('description', className);
  return /*#__PURE__*/React__default["default"].createElement("dl", _extends({}, props, {
    className: style.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("dt", {
    className: style.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]])
  }, title), /*#__PURE__*/React__default["default"].createElement("dd", {
    className: style.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]])
  }, content), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2323318745",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]
  }, ".description.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}dt.__jsx-style-dynamic-selector{font-size:0.75em;line-height:1em;margin-bottom:0.5em;text-transform:uppercase;white-space:nowrap;color:").concat(theme.palette.accents_5, ";font-weight:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}dd.__jsx-style-dynamic-selector{font-size:0.875em;margin:0;line-height:1.1em;color:").concat(theme.palette.foreground, ";font-weight:500;}dd.__jsx-style-dynamic-selector p,dt.__jsx-style-dynamic-selector p{margin:0;}")));
};

DescriptionComponent.defaultProps = defaultProps$Z;
DescriptionComponent.displayName = 'GeistDescription';
var Description = withScale(DescriptionComponent);

var _excluded$T = ["children", "caption", "shadow", "className"];
var defaultProps$Y = {
  caption: '',
  shadow: false,
  className: ''
};

var DisplayComponent = function DisplayComponent(_ref) {
  var children = _ref.children,
      caption = _ref.caption,
      shadow = _ref.shadow,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$T);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('display', className);
  var showShadow = React$1.useMemo(function () {
    return shadow && theme.type !== 'dark';
  }, [theme.type, shadow]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + "content"
  }, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + "caption"
  }, caption), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2213400331",
    dynamic: [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']
  }, ".display.__jsx-style-dynamic-selector{display:block;max-width:100%;font-size:".concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(2.5), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(2.5), " ").concat(SCALES.ml(0, 'auto'), ";}.content.__jsx-style-dynamic-selector{display:block;margin:0 auto;border-radius:4px;overflow:hidden;width:").concat(SCALES.width(1, 'max-content'), ";box-shadow:").concat(showShadow ? theme.expressiveness.shadowLarge : 'none', ";max-width:100%;}.content.__jsx-style-dynamic-selector pre{margin:0;-webkit-transition:min-width ease 0.2s;transition:min-width ease 0.2s;}.content.__jsx-style-dynamic-selector img{display:block;}.caption.__jsx-style-dynamic-selector{font-size:inherit;line-height:1.5em;color:").concat(theme.palette.accents_5, ";margin:").concat(shadow ? '2.5em' : '1.3em', " auto 0;text-align:center;max-width:85%;}")));
};

DisplayComponent.defaultProps = defaultProps$Y;
DisplayComponent.displayName = 'GeistDisplay';
withScale(DisplayComponent);

var _excluded$S = ["type", "align", "children", "className"];
var defaultProps$X = {
  align: 'center',
  type: 'default',
  className: ''
};

var getColor$2 = function getColor(type, palette) {
  var colors = {
    "default": palette.border,
    lite: palette.accents_1,
    success: palette.successLight,
    warning: palette.warningLight,
    error: palette.errorLight,
    secondary: palette.secondary,
    dark: palette.foreground
  };
  return colors[type];
};

var DividerComponent = function DividerComponent(_ref) {
  var type = _ref.type,
      align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$S);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('divider', className);
  var color = React$1.useMemo(function () {
    return getColor$2(type, theme.palette);
  }, [type, theme.palette]);
  var alignClassName = React$1.useMemo(function () {
    if (!align || align === 'center') return '';
    if (align === 'left' || align === 'start') return 'start';
    return 'end';
  }, [align]);
  var alignClasses = useClasses('text', alignClassName);
  var textColor = type === 'default' ? theme.palette.foreground : color;
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    role: "separator"
  }, props, {
    className: style.dynamic([["3410666717", [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3410666717", [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]]]) + " " + (alignClasses || "")
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3410666717",
    dynamic: [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]
  }, ".divider.__jsx-style-dynamic-selector{max-width:100%;background-color:".concat(color, ";position:relative;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(0.0625), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0.5), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.5), " ").concat(SCALES.ml(0), ";}.text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;min-height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0 0.75em;font-size:inherit;font-weight:bold;text-transform:capitalize;background-color:").concat(theme.palette.background, ";color:").concat(textColor, ";z-index:10;}.text.start.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:7%;}.text.end.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:auto;right:7%;}")));
};

DividerComponent.defaultProps = defaultProps$X;
DividerComponent.displayName = 'GeistDivider';
withScale(DividerComponent);

var _excluded$R = ["type", "children", "className"];
var defaultProps$W = {
  type: 'default',
  className: ''
};

var getColor$1 = function getColor(type, theme) {
  var colors = {
    "default": theme.palette.accents_2,
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error
  };
  return colors[type] || colors["default"];
};

var DotComponent = function DotComponent(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$R);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var color = React$1.useMemo(function () {
    return getColor$1(type, theme);
  }, [type, theme]);
  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + (props && props.className != null && props.className || useClasses('dot', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + "label"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4077256937",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]
  }, ".dot.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.icon.__jsx-style-dynamic-selector{width:0.625em;height:0.625em;min-width:calc(0.625 * 12px);min-height:calc(0.625 * 12px);line-height:0.625em;border-radius:50%;background-color:").concat(color, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.label.__jsx-style-dynamic-selector{margin-left:0.5em;font-size:1em;line-height:1em;text-transform:capitalize;}")));
};

DotComponent.defaultProps = defaultProps$W;
DotComponent.displayName = 'GeistDot';
withScale(DotComponent);

var defaultOptions$1 = {
  scrollLayer: false,
  delayReset: 0
};
var elementStack = new Map();

var getOwnerPaddingRight = function getOwnerPaddingRight(element) {
  var owner = (element === null || element === void 0 ? void 0 : element.ownerDocument) || document;
  var view = owner.defaultView || window;
  return Number.parseInt(view.getComputedStyle(element).paddingRight, 10) || 0;
};

var getOwnerScrollbarWidth = function getOwnerScrollbarWidth(element) {
  var doc = (element === null || element === void 0 ? void 0 : element.ownerDocument) || document;
  return Math.abs(window.innerWidth - doc.documentElement.clientWidth);
};

var useBodyScroll = function useBodyScroll(elementRef, options) {
  /* istanbul ignore next */
  if (typeof document === 'undefined') return [false, function (t) {
    return t;
  }];
  var elRef = elementRef || React$1.useRef(document.body);

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var safeOptions = _extends({}, defaultOptions$1, options || {});

  React$1.useEffect(function () {
    if (!elRef || !elRef.current) return;
    var lastOverflow = elRef.current.style.overflow;

    if (hidden) {
      if (elementStack.has(elRef.current)) return;
      var paddingRight = getOwnerPaddingRight(elRef.current);
      var scrollbarWidth = getOwnerScrollbarWidth(elRef.current);
      elementStack.set(elRef.current, {
        overflow: lastOverflow,
        paddingRight: elRef.current.style.paddingRight
      });
      elRef.current.style.overflow = 'hidden';
      elRef.current.style.paddingRight = "".concat(paddingRight + scrollbarWidth, "px");
      return;
    } // reset element overflow


    if (!elementStack.has(elRef.current)) return;

    var reset = function reset(el) {
      var store = elementStack.get(el);
      if (!store) return;
      el.style.overflow = store.overflow;
      el.style.paddingRight = store.paddingRight;
      elementStack["delete"](el);
    };

    var timer = window.setTimeout(function () {
      reset(elRef.current);
      window.clearTimeout(timer);
    }, safeOptions.delayReset);
  }, [hidden, elRef]);
  return [hidden, setHidden];
};

/**
 * KeyBinding Codes
 * The content of this file is based on the design of the open source project "microsoft/vscode",
 *   Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * We inherit the KeyMod values from "microsoft/vscode",
 * but use the Browser's KeyboardEvent event implementation, and all values are used only as identification.
 */
var KeyCode;

(function (KeyCode) {
  KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Shift"] = 16] = "Shift";
  KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
  KeyCode[KeyCode["Alt"] = 18] = "Alt";
  KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
  KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
  KeyCode[KeyCode["Escape"] = 27] = "Escape";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
  KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
  KeyCode[KeyCode["End"] = 35] = "End";
  KeyCode[KeyCode["Home"] = 36] = "Home";
  KeyCode[KeyCode["LeftArrow"] = 37] = "LeftArrow";
  KeyCode[KeyCode["UpArrow"] = 38] = "UpArrow";
  KeyCode[KeyCode["RightArrow"] = 39] = "RightArrow";
  KeyCode[KeyCode["DownArrow"] = 40] = "DownArrow";
  KeyCode[KeyCode["Insert"] = 45] = "Insert";
  KeyCode[KeyCode["Delete"] = 46] = "Delete";
  KeyCode[KeyCode["KEY_0"] = 48] = "KEY_0";
  KeyCode[KeyCode["KEY_1"] = 49] = "KEY_1";
  KeyCode[KeyCode["KEY_2"] = 50] = "KEY_2";
  KeyCode[KeyCode["KEY_3"] = 51] = "KEY_3";
  KeyCode[KeyCode["KEY_4"] = 52] = "KEY_4";
  KeyCode[KeyCode["KEY_5"] = 53] = "KEY_5";
  KeyCode[KeyCode["KEY_6"] = 54] = "KEY_6";
  KeyCode[KeyCode["KEY_7"] = 55] = "KEY_7";
  KeyCode[KeyCode["KEY_8"] = 56] = "KEY_8";
  KeyCode[KeyCode["KEY_9"] = 57] = "KEY_9";
  KeyCode[KeyCode["KEY_A"] = 65] = "KEY_A";
  KeyCode[KeyCode["KEY_B"] = 66] = "KEY_B";
  KeyCode[KeyCode["KEY_C"] = 67] = "KEY_C";
  KeyCode[KeyCode["KEY_D"] = 68] = "KEY_D";
  KeyCode[KeyCode["KEY_E"] = 69] = "KEY_E";
  KeyCode[KeyCode["KEY_F"] = 70] = "KEY_F";
  KeyCode[KeyCode["KEY_G"] = 71] = "KEY_G";
  KeyCode[KeyCode["KEY_H"] = 72] = "KEY_H";
  KeyCode[KeyCode["KEY_I"] = 73] = "KEY_I";
  KeyCode[KeyCode["KEY_J"] = 74] = "KEY_J";
  KeyCode[KeyCode["KEY_K"] = 75] = "KEY_K";
  KeyCode[KeyCode["KEY_L"] = 76] = "KEY_L";
  KeyCode[KeyCode["KEY_M"] = 77] = "KEY_M";
  KeyCode[KeyCode["KEY_N"] = 78] = "KEY_N";
  KeyCode[KeyCode["KEY_O"] = 79] = "KEY_O";
  KeyCode[KeyCode["KEY_P"] = 80] = "KEY_P";
  KeyCode[KeyCode["KEY_Q"] = 81] = "KEY_Q";
  KeyCode[KeyCode["KEY_R"] = 82] = "KEY_R";
  KeyCode[KeyCode["KEY_S"] = 83] = "KEY_S";
  KeyCode[KeyCode["KEY_T"] = 84] = "KEY_T";
  KeyCode[KeyCode["KEY_U"] = 85] = "KEY_U";
  KeyCode[KeyCode["KEY_V"] = 86] = "KEY_V";
  KeyCode[KeyCode["KEY_W"] = 87] = "KEY_W";
  KeyCode[KeyCode["KEY_X"] = 88] = "KEY_X";
  KeyCode[KeyCode["KEY_Y"] = 89] = "KEY_Y";
  KeyCode[KeyCode["KEY_Z"] = 90] = "KEY_Z";
  KeyCode[KeyCode["Meta"] = 91] = "Meta";
  KeyCode[KeyCode["F1"] = 112] = "F1";
  KeyCode[KeyCode["F2"] = 113] = "F2";
  KeyCode[KeyCode["F3"] = 114] = "F3";
  KeyCode[KeyCode["F4"] = 115] = "F4";
  KeyCode[KeyCode["F5"] = 116] = "F5";
  KeyCode[KeyCode["F6"] = 117] = "F6";
  KeyCode[KeyCode["F7"] = 118] = "F7";
  KeyCode[KeyCode["F8"] = 119] = "F8";
  KeyCode[KeyCode["F9"] = 120] = "F9";
  KeyCode[KeyCode["F10"] = 121] = "F10";
  KeyCode[KeyCode["F11"] = 122] = "F11";
  KeyCode[KeyCode["F12"] = 123] = "F12";
  KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
  KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
  KeyCode[KeyCode["Equal"] = 187] = "Equal";
  KeyCode[KeyCode["Minus"] = 189] = "Minus";
  KeyCode[KeyCode["Backquote"] = 192] = "Backquote";
  KeyCode[KeyCode["Backslash"] = 220] = "Backslash";
})(KeyCode || (KeyCode = {}));

var KeyMod;

(function (KeyMod) {
  KeyMod[KeyMod["CtrlCmd"] = 2048] = "CtrlCmd";
  KeyMod[KeyMod["Shift"] = 1024] = "Shift";
  KeyMod[KeyMod["Alt"] = 512] = "Alt";
  KeyMod[KeyMod["WinCtrl"] = 256] = "WinCtrl";
})(KeyMod || (KeyMod = {}));

/* istanbul ignore next */

var getCtrlKeysByPlatform = function getCtrlKeysByPlatform() {
  return {
    CtrlCmd: isMac() ? 'metaKey' : 'ctrlKey',
    WinCtrl: isMac() ? 'ctrlKey' : 'metaKey'
  };
};
var getActiveModMap = function getActiveModMap(bindings) {
  var modBindings = bindings.filter(function (item) {
    return !!KeyMod[item];
  });
  var activeModMap = {
    CtrlCmd: false,
    Shift: false,
    Alt: false,
    WinCtrl: false
  };
  modBindings.forEach(function (code) {
    var modKey = KeyMod[code];
    activeModMap[modKey] = true;
  });
  return activeModMap;
};

var useKeyboard = function useKeyboard(handler, keyBindings) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bindings = Array.isArray(keyBindings) ? keyBindings : [keyBindings];
  var _options$disableGloba = options.disableGlobalEvent,
      disableGlobalEvent = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$capture = options.capture,
      capture = _options$capture === void 0 ? false : _options$capture,
      _options$stopPropagat = options.stopPropagation,
      stopPropagation = _options$stopPropagat === void 0 ? false : _options$stopPropagat,
      _options$preventDefau = options.preventDefault,
      preventDefault = _options$preventDefau === void 0 ? true : _options$preventDefau,
      _options$event = options.event,
      event = _options$event === void 0 ? 'keydown' : _options$event;
  var activeModMap = getActiveModMap(bindings);
  var keyCode = bindings.filter(function (item) {
    return !KeyMod[item];
  });

  var _getCtrlKeysByPlatfor = getCtrlKeysByPlatform(),
      CtrlCmd = _getCtrlKeysByPlatfor.CtrlCmd,
      WinCtrl = _getCtrlKeysByPlatfor.WinCtrl;

  var eventHandler = function eventHandler(event) {
    if (activeModMap.Shift && !event.shiftKey) return;
    if (activeModMap.Alt && !event.altKey) return;
    if (activeModMap.CtrlCmd && !event[CtrlCmd]) return;
    if (activeModMap.WinCtrl && !event[WinCtrl]) return;
    var hitOne = keyCode.find(function (k) {
      return k === event.keyCode;
    });
    if (keyCode && !hitOne) return;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (preventDefault) {
      event.preventDefault();
    }

    handler && handler(event);
  };

  React$1.useEffect(function () {
    if (!disableGlobalEvent) {
      document.addEventListener(event, eventHandler);
    }

    return function () {
      document.removeEventListener(event, eventHandler);
    };
  }, [disableGlobalEvent]);

  var elementBindingHandler = function elementBindingHandler(elementEventType) {
    var isCapture = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (elementEventType !== event) return function () {};
    if (isCapture !== capture) return function () {};
    return function (e) {
      return eventHandler(e);
    };
  };

  return {
    bindings: {
      onKeyDown: elementBindingHandler('keydown'),
      onKeyDownCapture: elementBindingHandler('keydown', true),
      onKeyPress: elementBindingHandler('keypress'),
      onKeyPressCapture: elementBindingHandler('keypress', true),
      onKeyUp: elementBindingHandler('keyup'),
      onKeyUpCapture: elementBindingHandler('keyup', true)
    }
  };
};

var _excluded$Q = ["children", "onClick", "visible", "width", "onContentClick", "backdropClassName", "positionClassName", "layerClassName"];
var defaultProps$V = {
  onClick: function onClick() {},
  visible: false,
  onContentClick: function onContentClick() {},
  backdropClassName: '',
  positionClassName: '',
  layerClassName: ''
};
var Backdrop = /*#__PURE__*/React__default["default"].memo(function (_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      visible = _ref.visible,
      width = _ref.width,
      onContentClick = _ref.onContentClick,
      backdropClassName = _ref.backdropClassName,
      positionClassName = _ref.positionClassName,
      layerClassName = _ref.layerClassName,
      props = _objectWithoutProperties(_ref, _excluded$Q);

  var theme = useTheme();

  var _useCurrentState = useCurrentState(false),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setIsContentMouseDown = _useCurrentState2[1],
      IsContentMouseDownRef = _useCurrentState2[2];

  var clickHandler = function clickHandler(event) {
    if (IsContentMouseDownRef.current) return;
    onClick && onClick(event);
  };

  var mouseUpHandler = function mouseUpHandler() {
    if (!IsContentMouseDownRef.current) return;
    var timer = setTimeout(function () {
      setIsContentMouseDown(false);
      clearTimeout(timer);
    }, 0);
  };

  return /*#__PURE__*/React__default["default"].createElement(CssTransition, {
    name: "backdrop-wrapper",
    visible: visible,
    clearTime: 300
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler,
    onMouseUp: mouseUpHandler
  }, props, {
    className: style.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (props && props.className != null && props.className || useClasses('backdrop', backdropClassName) || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (useClasses('layer', layerClassName) || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: onContentClick,
    onMouseDown: function onMouseDown() {
      return setIsContentMouseDown(true);
    },
    className: style.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (useClasses('position', positionClassName) || "")
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2021762493",
    dynamic: [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]
  }, ".backdrop.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;z-index:1000;-webkit-overflow-scrolling:touch;box-sizing:border-box;text-align:center;}.position.__jsx-style-dynamic-selector{position:relative;z-index:1001;outline:none;max-width:90%;width:".concat(width, ";margin:20px auto;vertical-align:middle;display:inline-block;}.backdrop.__jsx-style-dynamic-selector:before{display:inline-block;width:0;height:100%;vertical-align:middle;content:'';}.layer.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;opacity:").concat(theme.expressiveness.portalOpacity, ";background-color:black;-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1);transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1);pointer-events:none;z-index:1000;}.backdrop-wrapper-enter.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:0;}.backdrop-wrapper-enter-active.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:").concat(theme.expressiveness.portalOpacity, ";}.backdrop-wrapper-leave.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:").concat(theme.expressiveness.portalOpacity, ";}.backdrop-wrapper-leave-active.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:0;}"))));
});
Backdrop.defaultProps = defaultProps$V;
Backdrop.displayName = 'GeistBackdrop';

tuple('top', 'right', 'bottom', 'left');
var getDrawerTransform = function getDrawerTransform(placement) {
  var translates = {
    top: {
      initial: 'translate3d(0, -100%, 0)',
      hidden: 'translate3d(0, -100%, 0)',
      visible: 'translate3d(0, 0, 0)'
    },
    left: {
      initial: 'translate3d(-100%, 0, 0)',
      hidden: 'translate3d(-100%, 0, 0)',
      visible: 'translate3d(0, 0, 0)'
    },
    bottom: {
      initial: 'translate3d(0, 100%, 0)',
      hidden: 'translate3d(0, 100%, 0)',
      visible: 'translate3d(0, 0, 0)'
    },
    right: {
      initial: 'translate3d(100%, 0, 0)',
      hidden: 'translate3d(100%, 0, 0)',
      visible: 'translate3d(0, 0, 0)'
    }
  };
  return translates[placement];
};

var _excluded$P = ["className", "children", "visible", "placement"];
var defaultProps$U = {
  className: '',
  visible: false
};

var DrawerWrapper = function DrawerWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      visible = _ref.visible,
      placement = _ref.placement,
      props = _objectWithoutProperties(_ref, _excluded$P);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var modalContent = React$1.useRef(null);
  var tabStart = React$1.useRef(null);
  var tabEnd = React$1.useRef(null);
  var transform = React$1.useMemo(function () {
    return getDrawerTransform(placement);
  }, [placement]);
  var classes = useClasses('wrapper', placement, className);
  React$1.useEffect(function () {
    if (!visible) return;
    var activeElement = document.activeElement;
    var isChild = isChildElement(modalContent.current, activeElement);
    if (isChild) return;
    tabStart.current && tabStart.current.focus();
  }, [visible]);

  var onKeyDown = function onKeyDown(event) {
    var isTabDown = event.keyCode === 9;
    if (!visible || !isTabDown) return;
    var activeElement = document.activeElement;

    if (event.shiftKey) {
      if (activeElement === tabStart.current) {
        tabEnd.current && tabEnd.current.focus();
      }
    } else {
      if (activeElement === tabEnd.current) {
        tabStart.current && tabStart.current.focus();
      }
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(CssTransition, {
    name: "wrapper",
    visible: visible,
    clearTime: 300
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    role: "dialog",
    tabIndex: -1,
    onKeyDown: onKeyDown,
    ref: modalContent
  }, props, {
    className: style.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabStart,
    className: style.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + "hide-tab start"
  }), children, /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabEnd,
    className: style.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + "hide-tab end"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3022633861",
    dynamic: [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]
  }, ".wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;max-width:100%;vertical-align:middle;overflow:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";border-radius:calc(3 * ").concat(theme.layout.radius, ");box-shadow:").concat(theme.expressiveness.shadowLarge, ";opacity:0;outline:none;-webkit-transform:").concat(transform.initial, ";-ms-transform:").concat(transform.initial, ";transform:").concat(transform.initial, ";-webkit-transition:opacity,-webkit-transform 400ms cubic-bezier(0.1,0.6,0.1,1);-webkit-transition:opacity,transform 400ms cubic-bezier(0.1,0.6,0.1,1);transition:opacity,transform 400ms cubic-bezier(0.1,0.6,0.1,1);font-size:").concat(SCALES.font(1), ";--modal-wrapper-padding-left:").concat(SCALES.pl(1.3125), ";--modal-wrapper-padding-right:").concat(SCALES.pr(1.3125), ";padding:").concat(SCALES.pt(1.3125), " var(--modal-wrapper-padding-right) ").concat(SCALES.pb(1.3125), " var(--modal-wrapper-padding-left);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.top.__jsx-style-dynamic-selector,.bottom.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";}.left.__jsx-style-dynamic-selector,.right.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, '100%'), ";}.top.__jsx-style-dynamic-selector{bottom:auto;border-top-left-radius:0;border-top-right-radius:0;}.left.__jsx-style-dynamic-selector{right:auto;border-top-left-radius:0;border-bottom-left-radius:0;}.bottom.__jsx-style-dynamic-selector{top:auto;border-bottom-left-radius:0;border-bottom-right-radius:0;}.right.__jsx-style-dynamic-selector{left:auto;border-top-right-radius:0;border-bottom-right-radius:0;}.wrapper-enter.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:").concat(transform.hidden, ";-ms-transform:").concat(transform.hidden, ";transform:").concat(transform.hidden, ";}.wrapper-enter-active.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:").concat(transform.visible, ";-ms-transform:").concat(transform.visible, ";transform:").concat(transform.visible, ";}.wrapper-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:").concat(transform.visible, ";-ms-transform:").concat(transform.visible, ";transform:").concat(transform.visible, ";-webkit-transition:opacity,-webkit-transform 400ms cubic-bezier(0.1,0.2,0.1,1);-webkit-transition:opacity,transform 400ms cubic-bezier(0.1,0.2,0.1,1);transition:opacity,transform 400ms cubic-bezier(0.1,0.2,0.1,1);}.wrapper-leave-active.__jsx-style-dynamic-selector{opacity:0.4;-webkit-transform:").concat(transform.hidden, ";-ms-transform:").concat(transform.hidden, ";transform:").concat(transform.hidden, ";}.hide-tab.__jsx-style-dynamic-selector{outline:none;overflow:hidden;width:0;height:0;opacity:0;}"))));
};

DrawerWrapper.defaultProps = defaultProps$U;
DrawerWrapper.displayName = 'GeistDrawerWrapper';

var _excluded$O = ["visible", "keyboard", "disableBackdropClick", "onClose", "onContentClick", "wrapClassName", "children"];
var defaultProps$T = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  placement: 'right'
};

var DrawerComponent = function DrawerComponent(_ref) {
  var customVisible = _ref.visible,
      keyboard = _ref.keyboard,
      disableBackdropClick = _ref.disableBackdropClick,
      onClose = _ref.onClose,
      onContentClick = _ref.onContentClick,
      wrapClassName = _ref.wrapClassName,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$O);

  var portal = usePortal('drawer');

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useBodyScroll = useBodyScroll(null, {
    delayReset: 300
  }),
      _useBodyScroll2 = _slicedToArray(_useBodyScroll, 2),
      setBodyHidden = _useBodyScroll2[1];

  var closeDrawer = function closeDrawer() {
    onClose && onClose();
    setVisible(false);
    setBodyHidden(false);
  };

  React$1.useEffect(function () {
    if (typeof customVisible === 'undefined') return;
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible]);

  var _useKeyboard = useKeyboard(function () {
    keyboard && closeDrawer();
  }, KeyCode.Escape, {
    disableGlobalEvent: true
  }),
      bindings = _useKeyboard.bindings;

  var closeFromBackdrop = function closeFromBackdrop() {
    if (disableBackdropClick) return;
    closeDrawer();
  };

  if (!portal) return null;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(Backdrop, _extends({
    onClick: closeFromBackdrop,
    onContentClick: onContentClick,
    visible: visible,
    width: "100%"
  }, bindings), /*#__PURE__*/React__default["default"].createElement(DrawerWrapper, _extends({
    visible: visible,
    className: wrapClassName
  }, props), children)), portal);
};

DrawerComponent.defaultProps = defaultProps$T;
DrawerComponent.displayName = 'GeistDrawer';
var Drawer = withScale(DrawerComponent);

var _excluded$N = ["className", "children"];
var defaultProps$S = {
  className: ''
};

var ModalTitleComponent = function ModalTitleComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$N);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("h2", _extends({}, props, {
    className: style.dynamic([["2865939188", [SCALES.font(1.5), theme.palette.foreground, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2865939188",
    dynamic: [SCALES.font(1.5), theme.palette.foreground, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "h2.__jsx-style-dynamic-selector{line-height:1.6;font-weight:normal;text-align:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;word-break:break-word;text-transform:capitalize;font-size:".concat(SCALES.font(1.5), ";color:").concat(theme.palette.foreground, ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

ModalTitleComponent.defaultProps = defaultProps$S;
ModalTitleComponent.displayName = 'GeistModalTitle';
var ModalTitle = withScale(ModalTitleComponent);

var _excluded$M = ["className", "children"];
var defaultProps$R = {
  className: ''
};

var ModalSubtitleComponent = function ModalSubtitleComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$M);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("p", _extends({}, props, {
    className: style.dynamic([["2550488204", [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, '1.5em'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2550488204",
    dynamic: [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, '1.5em'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "p.__jsx-style-dynamic-selector{font-weight:normal;display:inline-block;text-align:center;word-break:break-word;text-transform:uppercase;color:".concat(theme.palette.accents_5, ";font-size:").concat(SCALES.font(0.875), ";line-height:1.5em;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, '1.5em'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

ModalSubtitleComponent.defaultProps = defaultProps$R;
ModalSubtitleComponent.displayName = 'GeistModalSubtitle';
var ModalSubtitle = withScale(ModalSubtitleComponent);

var _excluded$L = ["className", "children"];
var defaultProps$Q = {
  className: ''
};

var ModalContentComponent = function ModalContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$L);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["498745028", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.3125), SCALES.pr(1.3125), SCALES.pb(0.6625), SCALES.pl(1.3125), SCALES.mt(0), SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), SCALES.mb(0), SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)')]]]) + " " + (props && props.className != null && props.className || useClasses('content', className) || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "498745028",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.3125), SCALES.pr(1.3125), SCALES.pb(0.6625), SCALES.pl(1.3125), SCALES.mt(0), SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), SCALES.mb(0), SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)')]
  }, ".content.__jsx-style-dynamic-selector{position:relative;text-align:left;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1.3125), " ").concat(SCALES.pr(1.3125), " ").concat(SCALES.pb(0.6625), " ").concat(SCALES.pl(1.3125), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)'), ";}.content.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

ModalContentComponent.defaultProps = defaultProps$Q;
ModalContentComponent.displayName = 'GeistModalContent';
var ModalContent = withScale(ModalContentComponent);

Drawer.Title = ModalTitle;
Drawer.Subtitle = ModalSubtitle;
Drawer.Content = ModalContent;

var _excluded$K = ["className", "children"];
var defaultProps$P = {
  className: ''
};

var FieldsetTitle = function FieldsetTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$K);

  var classes = useClasses('title', className);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: "jsx-4105044205" + " " + (props && props.className != null && props.className || classes || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4105044205"
  }, ".title.jsx-4105044205{line-height:1.5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;word-break:break-word;font-weight:600;-webkit-letter-spacing:-0.020625em;-moz-letter-spacing:-0.020625em;-ms-letter-spacing:-0.020625em;letter-spacing:-0.020625em;font-size:1.25em;width:auto;}"));
};

FieldsetTitle.defaultProps = defaultProps$P;
FieldsetTitle.displayName = 'GeistFieldsetTitle';

var _excluded$J = ["className", "children"];
var defaultProps$O = {
  className: ''
};

var FieldsetSubtitle = function FieldsetSubtitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$J);

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: "jsx-2265168013" + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2265168013"
  }, "div.jsx-2265168013{font-size:0.875em;line-height:1.6;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;margin:0.75em 0;}"));
};

FieldsetSubtitle.defaultProps = defaultProps$O;
FieldsetSubtitle.displayName = 'GeistFieldsetSubtitle';

var _excluded$I = ["className", "children"];
var defaultProps$N = {
  className: ''
};

var FieldsetFooterComponent = function FieldsetFooterComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$I);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("footer", _extends({}, props, {
    className: style.dynamic([["903731644", [theme.palette.accents_1, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.accents_6, theme.layout.gapHalf, theme.layout.gap, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(2.875), SCALES.pt(0.625), SCALES.pr(1.31), SCALES.pb(0.625), SCALES.pl(1.31), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "903731644",
    dynamic: [theme.palette.accents_1, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.accents_6, theme.layout.gapHalf, theme.layout.gap, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(2.875), SCALES.pt(0.625), SCALES.pr(1.31), SCALES.pb(0.625), SCALES.pl(1.31), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "footer.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.accents_1, ";border-top:1px solid ").concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:").concat(theme.palette.accents_6, ";padding:").concat(theme.layout.gapHalf, " ").concat(theme.layout.gap, ";box-sizing:border-box;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(2.875), ";padding:").concat(SCALES.pt(0.625), " ").concat(SCALES.pr(1.31), " ").concat(SCALES.pb(0.625), " ").concat(SCALES.pl(1.31), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

FieldsetFooterComponent.defaultProps = defaultProps$N;
FieldsetFooterComponent.displayName = 'GeistFieldsetFooter';
var FieldsetFooter = withScale(FieldsetFooterComponent);

var _excluded$H = ["className", "children"];
var defaultProps$M = {
  className: ''
};

var FieldsetContentComponent = function FieldsetContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$H);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('content', className);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2403982542", [SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(1.3), SCALES.pr(1.3), SCALES.pb(1.3), SCALES.pl(1.3), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2403982542",
    dynamic: [SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(1.3), SCALES.pr(1.3), SCALES.pb(1.3), SCALES.pl(1.3), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".content.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1.3), " ").concat(SCALES.pr(1.3), " ").concat(SCALES.pb(1.3), " ").concat(SCALES.pl(1.3), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.content.__jsx-style-dynamic-selector > *:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector > *:last-child{margin-bottom:0;}")));
};

FieldsetContentComponent.defaultProps = defaultProps$M;
FieldsetContentComponent.displayName = 'GeistFieldsetContent';
var FieldsetContent = withScale(FieldsetContentComponent);

var defaultContext$8 = {
  inGroup: false,
  currentValue: ''
};
var FieldsetContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$8);
var useFieldset = function useFieldset() {
  return React__default["default"].useContext(FieldsetContext);
};

var _excluded$G = ["className", "title", "subtitle", "children", "value", "label"];
var defaultProps$L = {
  value: '',
  label: '',
  disabled: false,
  title: '',
  subtitle: '',
  className: ''
};

var FieldsetComponent = function FieldsetComponent(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      value = _ref.value,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded$G);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useFieldset = useFieldset(),
      inGroup = _useFieldset.inGroup,
      currentValue = _useFieldset.currentValue,
      register = _useFieldset.register;

  var _useState = React$1.useState(inGroup),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var classes = useClasses('fieldset', className);

  var _pickChild = pickChild(children, FieldsetFooter),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutFooterChildren = _pickChild2[0],
      FooterChildren = _pickChild2[1];

  var hasTitle = hasChild(withoutFooterChildren, FieldsetTitle);
  var hasSubtitle = hasChild(withoutFooterChildren, FieldsetSubtitle);
  var hasContent = hasChild(withoutFooterChildren, FieldsetContent);

  if (inGroup) {
    if (!label) {
      useWarning('Props "label" is required when in a group.', 'Fieldset Group');
    }

    if (!value || value === '') {
      value = label;
    }

    React$1.useEffect(function () {
      register && register({
        value: value,
        label: label
      });
    }, []);
    React$1.useEffect(function () {
      // In a few cases, the user will set Fieldset state manually.
      // If the user incorrectly set the state, Group component should ignore it.

      /* istanbul ignore if */
      if (!currentValue || currentValue === '') return;
      setHidden(currentValue !== value);
    }, [currentValue]);
  }

  var content = React$1.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, withoutFooterChildren, !hasTitle && title && /*#__PURE__*/React__default["default"].createElement(FieldsetTitle, null, title), !hasSubtitle && subtitle && /*#__PURE__*/React__default["default"].createElement(FieldsetSubtitle, null, subtitle));
  }, [withoutFooterChildren, hasTitle, hasSubtitle, title, subtitle]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["3253250630", [theme.palette.background, theme.palette.border, theme.layout.radius, hidden ? 'none' : 'block', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), hasContent ? content : /*#__PURE__*/React__default["default"].createElement(FieldsetContent, null, content), FooterChildren && FooterChildren, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3253250630",
    dynamic: [theme.palette.background, theme.palette.border, theme.layout.radius, hidden ? 'none' : 'block', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".fieldset.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.background, ";border:1px solid ").concat(theme.palette.border, ";border-radius:").concat(theme.layout.radius, ";overflow:hidden;display:").concat(hidden ? 'none' : 'block', ";font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

FieldsetComponent.defaultProps = defaultProps$L;
FieldsetComponent.displayName = 'GeistFieldset';
var Fieldset = withScale(FieldsetComponent);

var _excluded$F = ["className", "children", "value", "onChange"];
var defaultProps$K = {
  className: ''
};

var FieldsetGroupComponent = function FieldsetGroupComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded$F);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var _useCurrentState = useCurrentState([]),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      items = _useCurrentState2[0],
      setItems = _useCurrentState2[1],
      ref = _useCurrentState2[2];

  var classes = useClasses('group', className);

  var register = function register(newItem) {
    var hasItem = ref.current.find(function (item) {
      return item.value === newItem.value;
    });

    if (hasItem) {
      useWarning('The "value" of each "Fieldset" must be unique.', 'Fieldset');
    }

    setItems([].concat(_toConsumableArray(ref.current), [newItem]));
  };

  var providerValue = React$1.useMemo(function () {
    return {
      currentValue: selfVal,
      inGroup: true,
      register: register
    };
  }, [selfVal]);
  var clickHandle = React$1.useCallback(function (nextValue) {
    setSelfVal(nextValue);
    onChange && onChange(nextValue);
  }, [onChange]);
  return /*#__PURE__*/React__default["default"].createElement(FieldsetContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + "group-tabs"
  }, items.map(function (item) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      onClick: function onClick() {
        return clickHandle(item.value);
      },
      key: item.value,
      className: style.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + ((selfVal === item.value ? 'active' : '') || "")
    }, item.label);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + "group-content"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3411776855",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]
  }, ".group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0, 0), " ").concat(SCALES.ml(0), ";}.group-tabs.__jsx-style-dynamic-selector{white-space:nowrap;overflow-y:hidden;overflow-x:auto;font-size:").concat(SCALES.font(1), ";margin-bottom:-1px;}.group-content.__jsx-style-dynamic-selector{border-top-left-radius:0;overflow:hidden;}.group-content.__jsx-style-dynamic-selector .fieldset{border-top-left-radius:0;}button.__jsx-style-dynamic-selector{height:2.7em;line-height:2.7em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:").concat(theme.palette.accents_3, ";background-color:").concat(theme.palette.accents_1, ";font-size:0.875em;white-space:nowrap;text-transform:capitalize;-webkit-appearance:none;cursor:pointer;margin:0;padding:0 1.45em;overflow:hidden;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;border-radius:0;border:1px solid ").concat(theme.palette.border, ";-webkit-text-decoration:none;text-decoration:none;outline:none;}button.active.__jsx-style-dynamic-selector{border-bottom-color:transparent;background-color:").concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";cursor:default;}button.__jsx-style-dynamic-selector:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";}button.__jsx-style-dynamic-selector:last-of-type{border-top-right-radius:").concat(theme.layout.radius, ";}button.__jsx-style-dynamic-selector+button.__jsx-style-dynamic-selector{border-left:0;}"))));
};

FieldsetGroupComponent.defaultProps = defaultProps$K;
FieldsetGroupComponent.displayName = 'GeistFieldsetGroup';
var FieldsetGroup = withScale(FieldsetGroupComponent);

Fieldset.Title = FieldsetTitle;
Fieldset.Subtitle = FieldsetSubtitle;
Fieldset.Footer = FieldsetFooter;
Fieldset.Group = FieldsetGroup;
Fieldset.Content = FieldsetContent;
Fieldset.Body = FieldsetContent;

var defaultToastLayout = {
  padding: '12px 16px',
  margin: '8px 0',
  width: '420px',
  maxWidth: '90vw',
  maxHeight: '75px',
  placement: 'bottomRight'
};
var defaultParams = {
  toasts: [],
  toastLayout: defaultToastLayout,
  updateToastLayout: function updateToastLayout(t) {
    return t;
  },
  updateToasts: function updateToasts(t) {
    return t;
  },
  lastUpdateToastId: null,
  updateLastToastId: function updateLastToastId() {
    return null;
  }
};
var GeistUIContent = /*#__PURE__*/React__default["default"].createContext(defaultParams);
var useGeistUIContext = function useGeistUIContext() {
  return React__default["default"].useContext(GeistUIContent);
};

tuple('topLeft', 'topRight', 'bottomLeft', 'bottomRight');

var _excluded$E = ["xs", "sm", "md", "lg", "xl", "justify", "direction", "alignItems", "alignContent", "children", "className"];
var defaultProps$J = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  className: ''
};

var getItemLayout = function getItemLayout(val) {
  var display = val === 0 ? 'display: none;' : 'display: inherit;';

  if (typeof val === 'number') {
    var width = 100 / 24 * val;
    var ratio = width > 100 ? '100%' : width < 0 ? '0' : "".concat(width, "%");
    return {
      grow: 0,
      display: display,
      width: ratio,
      basis: ratio
    };
  }

  return {
    grow: 1,
    display: display,
    width: '100%',
    basis: '0'
  };
};

var GridBasicItem = function GridBasicItem(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      justify = _ref.justify,
      direction = _ref.direction,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$E);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = React$1.useMemo(function () {
    var aligns = {
      justify: justify,
      direction: direction,
      alignItems: alignItems,
      alignContent: alignContent,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl
    };
    var classString = Object.keys(aligns).reduce(function (pre, name) {
      if (aligns[name] !== undefined && aligns[name] !== false) return "".concat(pre, " ").concat(name);
      return pre;
    }, '');
    return classString.trim();
  }, [justify, direction, alignItems, alignContent, xs, sm, md, lg, xl]);
  var layout = React$1.useMemo(function () {
    return {
      xs: getItemLayout(xs),
      sm: getItemLayout(sm),
      md: getItemLayout(md),
      lg: getItemLayout(lg),
      xl: getItemLayout(xl)
    };
  }, [xs, sm, md, lg, xl]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["568430467", [SCALES.font(1, 'inherit'), SCALES.height(1, 'auto'), justify, direction, alignContent, alignItems, layout.xs.grow, layout.xs.width, layout.xs.basis, layout.xs.display, theme.breakpoints.sm.min, layout.sm.grow, layout.sm.width, layout.sm.basis, layout.sm.display, theme.breakpoints.md.min, layout.md.grow, layout.md.width, layout.md.basis, layout.md.display, theme.breakpoints.lg.min, layout.lg.grow, layout.lg.width, layout.lg.basis, layout.lg.display, theme.breakpoints.xl.min, layout.xl.grow, layout.xl.width, layout.xl.basis, layout.xl.display]]]) + " " + (props && props.className != null && props.className || useClasses('item', classes, className) || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "568430467",
    dynamic: [SCALES.font(1, 'inherit'), SCALES.height(1, 'auto'), justify, direction, alignContent, alignItems, layout.xs.grow, layout.xs.width, layout.xs.basis, layout.xs.display, theme.breakpoints.sm.min, layout.sm.grow, layout.sm.width, layout.sm.basis, layout.sm.display, theme.breakpoints.md.min, layout.md.grow, layout.md.width, layout.md.basis, layout.md.display, theme.breakpoints.lg.min, layout.lg.grow, layout.lg.width, layout.lg.basis, layout.lg.display, theme.breakpoints.xl.min, layout.xl.grow, layout.xl.width, layout.xl.basis, layout.xl.display]
  }, ".item.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1, 'inherit'), ";height:").concat(SCALES.height(1, 'auto'), ";}.justify.__jsx-style-dynamic-selector{-webkit-box-pack:").concat(justify, ";-webkit-justify-content:").concat(justify, ";-ms-flex-pack:").concat(justify, ";justify-content:").concat(justify, ";}.direction.__jsx-style-dynamic-selector{-webkit-flex-direction:").concat(direction, ";-ms-flex-direction:").concat(direction, ";flex-direction:").concat(direction, ";}.alignContent.__jsx-style-dynamic-selector{-webkit-align-content:").concat(alignContent, ";-ms-flex-line-pack:").concat(alignContent, ";align-content:").concat(alignContent, ";}.alignItems.__jsx-style-dynamic-selector{-webkit-align-items:").concat(alignItems, ";-webkit-box-align:").concat(alignItems, ";-ms-flex-align:").concat(alignItems, ";align-items:").concat(alignItems, ";}.xs.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.xs.grow, ";-webkit-flex-grow:").concat(layout.xs.grow, ";-ms-flex-positive:").concat(layout.xs.grow, ";flex-grow:").concat(layout.xs.grow, ";max-width:").concat(layout.xs.width, ";-webkit-flex-basis:").concat(layout.xs.basis, ";-ms-flex-preferred-size:").concat(layout.xs.basis, ";flex-basis:").concat(layout.xs.basis, ";").concat(layout.xs.display, ";}@media only screen and (min-width:").concat(theme.breakpoints.sm.min, "){.sm.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.sm.grow, ";-webkit-flex-grow:").concat(layout.sm.grow, ";-ms-flex-positive:").concat(layout.sm.grow, ";flex-grow:").concat(layout.sm.grow, ";max-width:").concat(layout.sm.width, ";-webkit-flex-basis:").concat(layout.sm.basis, ";-ms-flex-preferred-size:").concat(layout.sm.basis, ";flex-basis:").concat(layout.sm.basis, ";").concat(layout.sm.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.md.min, "){.md.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.md.grow, ";-webkit-flex-grow:").concat(layout.md.grow, ";-ms-flex-positive:").concat(layout.md.grow, ";flex-grow:").concat(layout.md.grow, ";max-width:").concat(layout.md.width, ";-webkit-flex-basis:").concat(layout.md.basis, ";-ms-flex-preferred-size:").concat(layout.md.basis, ";flex-basis:").concat(layout.md.basis, ";").concat(layout.md.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.lg.min, "){.lg.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.lg.grow, ";-webkit-flex-grow:").concat(layout.lg.grow, ";-ms-flex-positive:").concat(layout.lg.grow, ";flex-grow:").concat(layout.lg.grow, ";max-width:").concat(layout.lg.width, ";-webkit-flex-basis:").concat(layout.lg.basis, ";-ms-flex-preferred-size:").concat(layout.lg.basis, ";flex-basis:").concat(layout.lg.basis, ";").concat(layout.lg.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.xl.min, "){.xl.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.xl.grow, ";-webkit-flex-grow:").concat(layout.xl.grow, ";-ms-flex-positive:").concat(layout.xl.grow, ";flex-grow:").concat(layout.xl.grow, ";max-width:").concat(layout.xl.width, ";-webkit-flex-basis:").concat(layout.xl.basis, ";-ms-flex-preferred-size:").concat(layout.xl.basis, ";flex-basis:").concat(layout.xl.basis, ";").concat(layout.xl.display, ";}}")));
};

GridBasicItem.defaultProps = defaultProps$J;
GridBasicItem.displayName = 'GeistGridBasicItem';

var _excluded$D = ["children", "className"];
var defaultProps$I = {
  className: ''
};

var GridComponent = function GridComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$D);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _styles$className = {
    styles: /*#__PURE__*/React__default["default"].createElement(style, {
      id: "1271839607",
      dynamic: [SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0, 'var(--grid-gap-unit)'), SCALES.pr(0, 'var(--grid-gap-unit)'), SCALES.pb(0, 'var(--grid-gap-unit)'), SCALES.pl(0, 'var(--grid-gap-unit)')]
    }, "div.__jsx-style-dynamic-selector{margin:".concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";box-sizing:border-box;padding:").concat(SCALES.pt(0, 'var(--grid-gap-unit)'), " ").concat(SCALES.pr(0, 'var(--grid-gap-unit)'), " ").concat(SCALES.pb(0, 'var(--grid-gap-unit)'), " ").concat(SCALES.pl(0, 'var(--grid-gap-unit)'), ";}")),
    className: style.dynamic([["1271839607", [SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0, 'var(--grid-gap-unit)'), SCALES.pr(0, 'var(--grid-gap-unit)'), SCALES.pb(0, 'var(--grid-gap-unit)'), SCALES.pl(0, 'var(--grid-gap-unit)')]]])
  },
      resolveClassName = _styles$className.className,
      styles = _styles$className.styles;
  var classes = useClasses(resolveClassName, className);
  return /*#__PURE__*/React__default["default"].createElement(GridBasicItem, _extends({
    className: classes
  }, props), children, styles);
};

GridComponent.defaultProps = defaultProps$I;
GridComponent.displayName = 'GeistGrid';
var Grid = withScale(GridComponent);

var _excluded$C = ["gap", "wrap", "children", "className"];
var defaultProps$H = {
  gap: 0,
  wrap: 'wrap',
  className: ''
};

var GridContainerComponent = function GridContainerComponent(_ref) {
  var gap = _ref.gap,
      wrap = _ref.wrap,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$C);

  var _useScale = useScale(),
      unit = _useScale.unit,
      SCALES = _useScale.SCALES;

  var gapUnit = React$1.useMemo(function () {
    return "calc(".concat(gap, " * ").concat(unit, " * 1/3)");
  }, [gap, unit]);
  var _styles$className = {
    styles: /*#__PURE__*/React__default["default"].createElement(style, {
      id: "3631618093",
      dynamic: [gapUnit, wrap, SCALES.width(1, 'var(--grid-container-width)'), SCALES.mt(0, 'var(--grid-container-margin)'), SCALES.mr(0, 'var(--grid-container-margin)'), SCALES.mb(0, 'var(--grid-container-margin)'), SCALES.ml(0, 'var(--grid-container-margin)')]
    }, "div.__jsx-style-dynamic-selector{--grid-gap-unit:".concat(gapUnit, ";--grid-container-margin:calc(-1 * var(--grid-gap-unit));--grid-container-width:calc(100% + var(--grid-gap-unit) * 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:").concat(wrap, ";-ms-flex-wrap:").concat(wrap, ";flex-wrap:").concat(wrap, ";box-sizing:border-box;width:").concat(SCALES.width(1, 'var(--grid-container-width)'), ";margin:").concat(SCALES.mt(0, 'var(--grid-container-margin)'), " ").concat(SCALES.mr(0, 'var(--grid-container-margin)'), " ").concat(SCALES.mb(0, 'var(--grid-container-margin)'), " ").concat(SCALES.ml(0, 'var(--grid-container-margin)'), ";}")),
    className: style.dynamic([["3631618093", [gapUnit, wrap, SCALES.width(1, 'var(--grid-container-width)'), SCALES.mt(0, 'var(--grid-container-margin)'), SCALES.mr(0, 'var(--grid-container-margin)'), SCALES.mb(0, 'var(--grid-container-margin)'), SCALES.ml(0, 'var(--grid-container-margin)')]]])
  },
      resolveClassName = _styles$className.className,
      styles = _styles$className.styles;
  var classes = useClasses(resolveClassName, className);
  return /*#__PURE__*/React__default["default"].createElement(GridBasicItem, _extends({
    className: classes
  }, props), children, styles);
};

GridContainerComponent.defaultProps = defaultProps$H;
GridContainerComponent.displayName = 'GeistGridContainer';
var GridContainer = withScale(GridContainerComponent);

Grid.Container = GridContainer;

var _excluded$B = ["command", "shift", "option", "ctrl", "children", "className"];
var defaultProps$G = {
  command: false,
  shift: false,
  option: false,
  ctrl: false,
  className: ''
};

var KeyboardComponent = function KeyboardComponent(_ref) {
  var command = _ref.command,
      shift = _ref.shift,
      option = _ref.option,
      ctrl = _ref.ctrl,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$B);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("kbd", _extends({}, props, {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), command && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2318"), shift && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u21E7"), option && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2325"), ctrl && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2303"), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "921453049",
    dynamic: [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "kbd.__jsx-style-dynamic-selector{line-height:2em;text-align:center;display:inline-block;color:".concat(theme.palette.accents_5, ";background-color:").concat(theme.palette.accents_1, ";font-family:").concat(theme.font.sans, ";border-radius:").concat(theme.layout.radius, ";border:1px solid ").concat(theme.palette.accents_2, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'fit-content'), ";height:").concat(SCALES.height(1, 'auto'), ";min-width:2em;min-height:2em;padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.34), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.34), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}span.__jsx-style-dynamic-selector{line-height:2em;font-size:1em;text-align:center;}span.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{margin-left:0.3em;}")));
};

KeyboardComponent.defaultProps = defaultProps$G;
KeyboardComponent.displayName = 'GeistKeyboard';
withScale(KeyboardComponent);

var _excluded$A = ["className", "children", "visible"];
var defaultProps$F = {
  className: '',
  visible: false
};

var ModalWrapper = function ModalWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      visible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded$A);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var modalContent = React$1.useRef(null);
  var tabStart = React$1.useRef(null);
  var tabEnd = React$1.useRef(null);
  React$1.useEffect(function () {
    if (!visible) return;
    var activeElement = document.activeElement;
    var isChild = isChildElement(modalContent.current, activeElement);
    if (isChild) return;
    tabStart.current && tabStart.current.focus();
  }, [visible]);

  var onKeyDown = function onKeyDown(event) {
    var isTabDown = event.keyCode === 9;
    if (!visible || !isTabDown) return;
    var activeElement = document.activeElement;

    if (event.shiftKey) {
      if (activeElement === tabStart.current) {
        tabEnd.current && tabEnd.current.focus();
      }
    } else {
      if (activeElement === tabEnd.current) {
        tabStart.current && tabStart.current.focus();
      }
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(CssTransition, {
    name: "wrapper",
    visible: visible,
    clearTime: 300
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    role: "dialog",
    tabIndex: -1,
    onKeyDown: onKeyDown,
    ref: modalContent
  }, props, {
    className: style.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('wrapper', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabStart,
    className: style.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "hide-tab"
  }), children, /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabEnd,
    className: style.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "hide-tab"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4268738715",
    dynamic: [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".wrapper.__jsx-style-dynamic-selector{max-width:100%;vertical-align:middle;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";opacity:0;outline:none;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, -webkit-transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;width:100%;font-size:").concat(SCALES.font(1), ";height:").concat(SCALES.height(1, 'auto'), ";--modal-wrapper-padding-left:").concat(SCALES.pl(1.3125), ";--modal-wrapper-padding-right:").concat(SCALES.pr(1.3125), ";padding:").concat(SCALES.pt(1.3125), " var(--modal-wrapper-padding-right) ").concat(SCALES.pb(1.3125), " var(--modal-wrapper-padding-left);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.wrapper-enter.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);}.wrapper-enter-active.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate3d(0px,0px,0px);-ms-transform:translate3d(0px,0px,0px);transform:translate3d(0px,0px,0px);}.wrapper-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate3d(0px,0px,0px);-ms-transform:translate3d(0px,0px,0px);transform:translate3d(0px,0px,0px);}.wrapper-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);}.hide-tab.__jsx-style-dynamic-selector{outline:none;overflow:hidden;width:0;height:0;opacity:0;}"))));
};

ModalWrapper.defaultProps = defaultProps$F;
ModalWrapper.displayName = 'GeistModalWrapper';

var defaultContext$7 = {};
var ModalContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$7);
var useModalContext = function useModalContext() {
  return React__default["default"].useContext(ModalContext);
};

var _excluded$z = ["className", "children", "onClick", "passive", "disabled"];
var defaultProps$E = {
  className: '',
  passive: false,
  disabled: false
};
var ModalActionComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      passive = _ref.passive,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$z);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var btnRef = React$1.useRef(null);

  var _useModalContext = useModalContext(),
      _close = _useModalContext.close;

  React$1.useImperativeHandle(ref, function () {
    return btnRef.current;
  });

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    var actionEvent = Object.assign({}, event, {
      close: function close() {
        return _close && _close();
      }
    });
    onClick && onClick(actionEvent);
  };

  var color = React$1.useMemo(function () {
    return passive ? theme.palette.accents_5 : theme.palette.foreground;
  }, [theme.palette, passive, disabled]);
  var bgColor = React$1.useMemo(function () {
    return disabled ? theme.palette.accents_1 : theme.palette.background;
  }, [theme.palette, disabled]);
  var _styles$className = {
    styles: /*#__PURE__*/React__default["default"].createElement(style, {
      id: "930885138",
      dynamic: [SCALES.font(0.75), color, theme.palette.background, SCALES.height(3.5625), disabled ? color : theme.palette.foreground, disabled ? bgColor : theme.palette.accents_1]
    }, "button.btn.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(0.75), ";border:none;color:").concat(color, ";background-color:").concat(theme.palette.background, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1;-ms-flex:1;flex:1;height:").concat(SCALES.height(3.5625), ";border-radius:0;min-width:0;}button.btn.__jsx-style-dynamic-selector:hover,button.btn.__jsx-style-dynamic-selector:focus{color:").concat(disabled ? color : theme.palette.foreground, ";background-color:").concat(disabled ? bgColor : theme.palette.accents_1, ";}")),
    className: style.dynamic([["930885138", [SCALES.font(0.75), color, theme.palette.background, SCALES.height(3.5625), disabled ? color : theme.palette.foreground, disabled ? bgColor : theme.palette.accents_1]]])
  },
      resolveClassName = _styles$className.className,
      styles = _styles$className.styles;
  var classes = useClasses(resolveClassName, className);

  var overrideProps = _extends({}, props, {
    effect: false,
    ref: btnRef
  });

  return /*#__PURE__*/React__default["default"].createElement(Button, _extends({
    className: classes,
    onClick: clickHandler,
    disabled: disabled
  }, overrideProps), children, styles);
});
ModalActionComponent.defaultProps = defaultProps$E;
ModalActionComponent.displayName = 'GeistModalAction';
var ModalAction = withScale(ModalActionComponent);

var _excluded$y = ["children"];

var ModalActionsComponent = function ModalActionsComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$y);

  var theme = useTheme();
  var ref = React$1.useRef(null);

  var _useState = React$1.useState('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  React$1.useEffect(function () {
    if (!ref.current) return;
    setHeight("".concat(ref.current.clientHeight, "px"));
  }, [ref]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2914444644", [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]]])
  }), /*#__PURE__*/React__default["default"].createElement("footer", _extends({
    ref: ref
  }, props, {
    className: style.dynamic([["2914444644", [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]]]) + " " + (props && props.className != null && props.className || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2914444644",
    dynamic: [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]
  }, "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:100%;height:auto;position:absolute;bottom:0;left:0;right:0;border-top:1px solid ".concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}footer.__jsx-style-dynamic-selector>button.btn + button.btn{border-left:1px solid ").concat(theme.palette.border, ";}div.__jsx-style-dynamic-selector{height:").concat(height, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}")));
};

ModalActionsComponent.displayName = 'GeistModalActions';
var ModalActions = /*#__PURE__*/React__default["default"].memo(ModalActionsComponent);

var defaultProps$D = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  positionClassName: '',
  backdropClassName: '',
  layerClassName: ''
};

var ModalComponent = function ModalComponent(_ref) {
  var customVisible = _ref.visible,
      onClose = _ref.onClose,
      children = _ref.children,
      keyboard = _ref.keyboard,
      wrapClassName = _ref.wrapClassName,
      onContentClick = _ref.onContentClick,
      disableBackdropClick = _ref.disableBackdropClick,
      positionClassName = _ref.positionClassName,
      backdropClassName = _ref.backdropClassName,
      layerClassName = _ref.layerClassName;
  var portal = usePortal('modal');

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useBodyScroll = useBodyScroll(null, {
    delayReset: 300
  }),
      _useBodyScroll2 = _slicedToArray(_useBodyScroll, 2),
      setBodyHidden = _useBodyScroll2[1];

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _pickChild = pickChild(children, ModalAction),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutActionsChildren = _pickChild2[0],
      ActionsChildren = _pickChild2[1];

  var hasActions = ActionsChildren && React__default["default"].Children.count(ActionsChildren) > 0;

  var closeModal = function closeModal() {
    onClose && onClose();
    setVisible(false);
    setBodyHidden(false);
  };

  React$1.useEffect(function () {
    if (typeof customVisible === 'undefined') return;
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible]);

  var _useKeyboard = useKeyboard(function () {
    keyboard && closeModal();
  }, KeyCode.Escape, {
    disableGlobalEvent: true
  }),
      bindings = _useKeyboard.bindings;

  var closeFromBackdrop = function closeFromBackdrop() {
    if (disableBackdropClick) return;
    closeModal();
  };

  var modalConfig = React$1.useMemo(function () {
    return {
      close: closeModal
    };
  }, []);
  if (!portal) return null;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(ModalContext.Provider, {
    value: modalConfig
  }, /*#__PURE__*/React__default["default"].createElement(Backdrop, _extends({
    onClick: closeFromBackdrop,
    onContentClick: onContentClick,
    visible: visible,
    width: SCALES.width(26),
    positionClassName: positionClassName,
    backdropClassName: backdropClassName,
    layerClassName: layerClassName
  }, bindings), /*#__PURE__*/React__default["default"].createElement(ModalWrapper, {
    visible: visible,
    className: wrapClassName
  }, withoutActionsChildren, hasActions && /*#__PURE__*/React__default["default"].createElement(ModalActions, null, ActionsChildren)))), portal);
};

ModalComponent.defaultProps = defaultProps$D;
ModalComponent.displayName = 'GeistModal';
var Modal = withScale(ModalComponent);

Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
Modal.Content = ModalContent;
Modal.Action = ModalAction;

var _excluded$x = ["children", "type", "label", "filled", "className"];
var defaultProps$C = {
  type: 'default',
  label: 'note',
  filled: false,
  className: ''
};

var getStatusColor = function getStatusColor(type, filled, theme) {
  var colors = {
    secondary: theme.palette.secondary,
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error
  };
  var statusColor = colors[type];
  if (!filled) return {
    color: statusColor || theme.palette.foreground,
    borderColor: statusColor || theme.palette.border,
    bgColor: theme.palette.background
  };
  var filledColor = statusColor ? 'white' : theme.palette.background;
  return {
    color: filledColor,
    borderColor: statusColor || theme.palette.foreground,
    bgColor: statusColor || theme.palette.foreground
  };
};

var NoteComponent = function NoteComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      label = _ref.label,
      filled = _ref.filled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$x);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useMemo = React$1.useMemo(function () {
    return getStatusColor(type, filled, theme);
  }, [type, filled, theme]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      bgColor = _useMemo.bgColor;

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('note', className) || "")
  }), label && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "label"
  }, /*#__PURE__*/React__default["default"].createElement("b", {
    className: style.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, label, ":")), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1082065680",
    dynamic: [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".note.__jsx-style-dynamic-selector{line-height:1.8;border:1px solid ".concat(borderColor, ";color:").concat(color, ";background-color:").concat(bgColor, ";border-radius:").concat(theme.layout.radius, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.667), " ").concat(SCALES.pr(1.32), " ").concat(SCALES.pb(0.667), " ").concat(SCALES.pl(1.32), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.note.__jsx-style-dynamic-selector p{margin:0;}.label.__jsx-style-dynamic-selector{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1.5;padding-right:0.38em;}")));
};
NoteComponent.defaultProps = defaultProps$C;
NoteComponent.displayName = 'GeistNote';
withScale(NoteComponent);

var _excluded$w = ["className", "children"];
var defaultProps$B = {
  className: ''
};

var PageContentComponent = function PageContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$w);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("main", _extends({}, props, {
    className: style.dynamic([["3887979816", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(3.125), SCALES.pr(0), SCALES.pb(3.125), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3887979816",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(3.125), SCALES.pr(0), SCALES.pb(3.125), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "main.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, '100%'), ";padding:").concat(SCALES.pt(3.125), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(3.125), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

PageContentComponent.defaultProps = defaultProps$B;
PageContentComponent.displayName = 'GeistPageContent';
var PageContent = withScale(PageContentComponent);

var _excluded$v = ["children", "render", "dotBackdrop", "className", "dotSize", "dotSpace"];
tuple('default', 'effect', 'effect-seo');
var defaultProps$A = {
  render: 'default',
  dotBackdrop: false,
  dotSize: '1px',
  dotSpace: 1
};

var DotStyles = function DotStyles(_ref) {
  var dotSpace = _ref.dotSpace,
      dotSize = _ref.dotSize;
  var background = React$1.useMemo(function () {
    return {
      position: "calc(".concat(dotSpace, " * 25px)"),
      size: "calc(".concat(dotSpace, " * 50px)")
    };
  }, [dotSpace]);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["934717826", [dotSize, dotSize, background.position, background.position, background.size, background.size]]])
  }, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "934717826",
    dynamic: [dotSize, dotSize, background.position, background.position, background.size, background.size]
  }, "body{background-image:radial-gradient(#e3e3e3 ".concat(dotSize, ",transparent 0), radial-gradient(#e3e3e3 ").concat(dotSize, ",transparent 0);background-position:0 0,").concat(background.position, " ").concat(background.position, ";background-attachment:fixed;background-size:").concat(background.size, " ").concat(background.size, ";}")));
};

var PageComponent = function PageComponent(_ref2) {
  var children = _ref2.children,
      render = _ref2.render,
      dotBackdrop = _ref2.dotBackdrop,
      className = _ref2.className,
      dotSize = _ref2.dotSize,
      dotSpace = _ref2.dotSpace,
      props = _objectWithoutProperties(_ref2, _excluded$v);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var showDot = React$1.useMemo(function () {
    if (theme.type === 'dark') return false;
    return dotBackdrop;
  }, [dotBackdrop, theme.type]);

  var _useState = React$1.useState(render !== 'default'),
      _useState2 = _slicedToArray(_useState, 2),
      preventRender = _useState2[0],
      setPreventRender = _useState2[1];

  React$1.useEffect(function () {
    setPreventRender(false);
  }, []);

  if (preventRender) {
    var renderSEO = render === 'effect-seo';
    if (!renderSEO) return null;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      "aria-hidden": "true",
      className: "jsx-3942095687" + " " + "hidden"
    }, children, /*#__PURE__*/React__default["default"].createElement(style, {
      id: "3942095687"
    }, ".hidden.jsx-3942095687{opacity:0;display:none;}"));
  }

  var hasContent = hasChild(children, PageContent);
  return /*#__PURE__*/React__default["default"].createElement("section", _extends({}, props, {
    className: style.dynamic([["1515698274", [SCALES.font(1), SCALES.width(1, 'calc(100% - 100pt)'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(1.34), SCALES.pb(0), SCALES.pl(1.34), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto')]]]) + " " + (props && props.className != null && props.className || className || "")
  }), hasContent ? children : /*#__PURE__*/React__default["default"].createElement(PageContent, null, children), showDot && /*#__PURE__*/React__default["default"].createElement(DotStyles, {
    dotSize: dotSize,
    dotSpace: dotSpace
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1515698274",
    dynamic: [SCALES.font(1), SCALES.width(1, 'calc(100% - 100pt)'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(1.34), SCALES.pb(0), SCALES.pl(1.34), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto')]
  }, "section.__jsx-style-dynamic-selector{max-width:100vw;min-height:100vh;box-sizing:border-box;position:relative;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'calc(100% - 100pt)'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(1.34), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(1.34), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'auto'), ";}")));
};

PageComponent.defaultProps = defaultProps$A;
PageComponent.displayName = 'GeistPage';
var Page = withScale(PageComponent);

var _excluded$u = ["children", "center", "className"];
var defaultProps$z = {
  center: false,
  className: ''
};

var PageHeaderComponent = function PageHeaderComponent(_ref) {
  var children = _ref.children,
      center = _ref.center,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$u);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses({
    center: center
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("header", _extends({}, props, {
    className: style.dynamic([["3053482948", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3053482948",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "header.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

PageHeaderComponent.defaultProps = defaultProps$z;
PageHeaderComponent.displayName = 'GeistPageHeader';
var PageHeader = withScale(PageHeaderComponent);

var _excluded$t = ["children"];
var defaultProps$y = {
  className: ''
};

var PageFooterComponent = function PageFooterComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$t);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("footer", _extends({}, props, {
    className: style.dynamic([["3447440073", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3447440073",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "footer.__jsx-style-dynamic-selector{position:absolute;bottom:0;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

PageFooterComponent.defaultProps = defaultProps$y;
PageFooterComponent.displayName = 'GeistPageFooter';
var PageFooter = withScale(PageFooterComponent);

Page.Header = PageHeader;
Page.Content = PageContent;
Page.Body = PageContent;
Page.Footer = PageFooter;

var _excluded$s = ["active", "children", "disabled", "onClick"];

var PaginationItem = function PaginationItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded$s);

  var theme = useTheme();

  var _useMemo = React$1.useMemo(function () {
    return [addColorAlpha(theme.palette.success, 0.1), addColorAlpha(theme.palette.success, 0.8)];
  }, [theme.palette.success]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      hover = _useMemo2[0],
      activeHover = _useMemo2[1];

  var classes = useClasses({
    active: active,
    disabled: disabled
  });

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    onClick && onClick(event);
  };

  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: style.dynamic([["1657796974", [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]]])
  }, /*#__PURE__*/React__default["default"].createElement("button", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["1657796974", [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1657796974",
    dynamic: [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]
  }, "li.__jsx-style-dynamic-selector{margin-right:0.428em;display:inline-block;}button.__jsx-style-dynamic-selector{border:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;text-transform:capitalize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-align:center;vertical-align:middle;box-shadow:none;outline:none;height:var(--pagination-size);min-width:var(--pagination-size);font-size:inherit;cursor:pointer;color:".concat(theme.palette.success, ";border-radius:").concat(theme.layout.radius, ";background-color:").concat(theme.palette.background, ";-webkit-transition:all linear 200ms 0ms;transition:all linear 200ms 0ms;}button.__jsx-style-dynamic-selector:hover{background-color:").concat(hover, ";}.active.__jsx-style-dynamic-selector{font-weight:bold;background-color:").concat(theme.palette.success, ";color:").concat(theme.palette.background, ";box-shadow:").concat(theme.expressiveness.shadowSmall, ";}.active.__jsx-style-dynamic-selector:hover{background-color:").concat(activeHover, ";box-shadow:").concat(theme.expressiveness.shadowMedium, ";}.disabled.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_4, ";cursor:not-allowed;}.disabled.__jsx-style-dynamic-selector:hover{background-color:").concat(theme.palette.accents_2, ";}button.__jsx-style-dynamic-selector svg{width:1.3em;height:1.3em;}")));
};

PaginationItem.displayName = 'GeistPaginationItem';

tuple('prev', 'next', 'click');
var defaultContext$6 = {};
var PaginationContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$6);
var usePaginationContext = function usePaginationContext() {
  return React__default["default"].useContext(PaginationContext);
};

var _excluded$r = ["children"];

var PaginationPrevious = function PaginationPrevious(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$r);

  var _usePaginationContext = usePaginationContext(),
      update = _usePaginationContext.update,
      isFirst = _usePaginationContext.isFirst;

  return /*#__PURE__*/React__default["default"].createElement(PaginationItem, _extends({
    onClick: function onClick() {
      return update && update('prev');
    },
    disabled: isFirst
  }, props), children);
};

PaginationPrevious.displayName = 'GeistPaginationPrevious';

var _excluded$q = ["children"];

var PaginationNext = function PaginationNext(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$q);

  var _usePaginationContext = usePaginationContext(),
      update = _usePaginationContext.update,
      isLast = _usePaginationContext.isLast;

  return /*#__PURE__*/React__default["default"].createElement(PaginationItem, _extends({
    onClick: function onClick() {
      return update && update('next');
    },
    disabled: isLast
  }, props), children);
};

PaginationNext.displayName = 'GeistPaginationNext';

var PaginationEllipsis = function PaginationEllipsis(_ref) {
  var isBefore = _ref.isBefore,
      _onClick = _ref.onClick;

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement(PaginationItem, {
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter() {
      return setShowMore(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowMore(false);
    }
  }, showMore ? /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]]) + " " + "more"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 17l5-5-5-5",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 17l5-5-5-5",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  })) : /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: style.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2928474255",
    dynamic: [isBefore ? '180deg' : '0deg']
  }, "svg.__jsx-style-dynamic-selector{color:currentColor;stroke:currentColor;width:1em;height:1em;}.more.__jsx-style-dynamic-selector{-webkit-transform:rotate(".concat(isBefore ? '180deg' : '0deg', ");-ms-transform:rotate(").concat(isBefore ? '180deg' : '0deg', ");transform:rotate(").concat(isBefore ? '180deg' : '0deg', ");}")));
};

PaginationEllipsis.displayName = 'GeistPaginationEllipsis';

var PaginationPages = function PaginationPages(_ref) {
  var limit = _ref.limit,
      count = _ref.count,
      current = _ref.current,
      setPage = _ref.setPage;
  var showPages = React$1.useMemo(function () {
    var oddLimit = limit % 2 === 0 ? limit - 1 : limit;
    return oddLimit - 2;
  }, [limit]);
  var middleNumber = (showPages + 1) / 2;

  var _useMemo = React$1.useMemo(function () {
    var showEllipsis = count > limit;
    return [showEllipsis && current > middleNumber + 1, showEllipsis && current < count - middleNumber];
  }, [current, showPages, middleNumber, count, limit]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      showBeforeEllipsis = _useMemo2[0],
      showAfterEllipsis = _useMemo2[1];

  var pagesArray = React$1.useMemo(function () {
    return _toConsumableArray(new Array(showPages));
  }, [showPages]);
  var renderItem = React$1.useCallback(function (value, active) {
    return /*#__PURE__*/React__default["default"].createElement(PaginationItem, {
      key: "pagination-item-".concat(value),
      active: value === active,
      onClick: function onClick() {
        return setPage(value);
      }
    }, value);
  }, []);
  var startPages = pagesArray.map(function (_, index) {
    var value = index + 2;
    return renderItem(value, current);
  });
  var middlePages = pagesArray.map(function (_, index) {
    var middleIndexNumber = middleNumber - (index + 1);
    var value = current - middleIndexNumber;
    return /*#__PURE__*/React__default["default"].createElement(PaginationItem, {
      key: "pagination-middle-".concat(index),
      active: index + 1 === middleNumber,
      onClick: function onClick() {
        return setPage(value);
      }
    }, value);
  });
  var endPages = pagesArray.map(function (_, index) {
    var value = count - (showPages - index);
    return renderItem(value, current);
  });

  if (count <= limit) {
    /* eslint-disable react/jsx-no-useless-fragment */
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, _toConsumableArray(new Array(count)).map(function (_, index) {
      var value = index + 1;
      return /*#__PURE__*/React__default["default"].createElement(PaginationItem, {
        key: "pagination-item-".concat(value),
        active: value === current,
        onClick: function onClick() {
          return setPage(value);
        }
      }, value);
    }));
    /* eslint-enable */
  }

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, renderItem(1, current), showBeforeEllipsis && /*#__PURE__*/React__default["default"].createElement(PaginationEllipsis, {
    key: "pagination-ellipsis-before",
    isBefore: true,
    onClick: function onClick() {
      return setPage(function (last) {
        return last - 5 >= 1 ? last - 5 : 1;
      });
    }
  }), showBeforeEllipsis && showAfterEllipsis ? middlePages : showBeforeEllipsis ? endPages : startPages, showAfterEllipsis && /*#__PURE__*/React__default["default"].createElement(PaginationEllipsis, {
    key: "pagination-ellipsis-after",
    onClick: function onClick() {
      return setPage(function (last) {
        return last + 5 <= count ? last + 5 : count;
      });
    }
  }), renderItem(count, current));
};

PaginationPages.displayName = 'GeistPaginationPages';

var _excluded$p = ["page", "initialPage", "count", "limit", "children", "onChange", "className"];
var defaultProps$x = {
  initialPage: 1,
  count: 1,
  limit: 7,
  className: ''
};

var PaginationComponent = function PaginationComponent(_ref) {
  var customPage = _ref.page,
      initialPage = _ref.initialPage,
      count = _ref.count,
      limit = _ref.limit,
      children = _ref.children,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$p);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCurrentState = useCurrentState(initialPage),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      page = _useCurrentState2[0],
      setPage = _useCurrentState2[1],
      pageRef = _useCurrentState2[2];

  var _pickChild = pickChild(children, PaginationPrevious),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      prevChildren = _pickChild2[1];

  var _pickChild3 = pickChild(children, PaginationNext),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      nextChildren = _pickChild4[1];

  var _useMemo = React$1.useMemo(function () {
    var hasChildren = function hasChildren(c) {
      return React__default["default"].Children.count(c) > 0;
    };

    var prevDefault = /*#__PURE__*/React__default["default"].createElement(PaginationPrevious, null, "prev");
    var nextDefault = /*#__PURE__*/React__default["default"].createElement(PaginationNext, null, "next");
    return [hasChildren(prevChildren) ? prevChildren : prevDefault, hasChildren(nextChildren) ? nextChildren : nextDefault];
  }, [prevChildren, nextChildren]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      prevItem = _useMemo2[0],
      nextItem = _useMemo2[1];

  var update = function update(type) {
    if (type === 'prev' && pageRef.current > 1) {
      setPage(function (last) {
        return last - 1;
      });
    }

    if (type === 'next' && pageRef.current < count) {
      setPage(function (last) {
        return last + 1;
      });
    }
  };

  var values = React$1.useMemo(function () {
    return {
      isFirst: page <= 1,
      isLast: page >= count,
      update: update
    };
  }, [page, count]);
  React$1.useEffect(function () {
    onChange && onChange(page);
  }, [page]);
  React$1.useEffect(function () {
    if (customPage !== undefined) {
      setPage(customPage);
    }
  }, [customPage]);
  return /*#__PURE__*/React__default["default"].createElement(PaginationContext.Provider, {
    value: values
  }, /*#__PURE__*/React__default["default"].createElement("nav", _extends({}, props, {
    className: style.dynamic([["3826701357", [SCALES.font(2), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), prevItem, /*#__PURE__*/React__default["default"].createElement(PaginationPages, {
    count: count,
    current: page,
    limit: limit,
    setPage: setPage
  }), nextItem), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3826701357",
    dynamic: [SCALES.font(2), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "nav.__jsx-style-dynamic-selector{font-variant:tabular-nums;font-feature-settings:'tnum';--pagination-size:".concat(SCALES.font(2), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}nav.__jsx-style-dynamic-selector button:last-of-type{margin-right:0;}")));
};

PaginationComponent.defaultProps = defaultProps$x;
PaginationComponent.displayName = 'GeistPagination';
var Pagination = withScale(PaginationComponent);

Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;

var getColors$5 = function getColors(type, palette) {
  var colors = {
    "default": palette.background,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    secondary: palette.secondary,
    dark: palette.foreground,
    lite: palette.background
  };
  var color = type === 'lite' || type === 'default' ? palette.foreground : palette.background;
  return {
    color: color,
    bgColor: colors[type]
  };
};

var defaultTooltipPosition = {
  top: '-1000px',
  left: '-1000px',
  transform: 'none'
};
var getPosition = function getPosition(placement, rect, offset) {
  var positions = {
    top: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left + rect.width / 2, "px"),
      transform: 'translate(-50%, -100%)'
    },
    topStart: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left, "px"),
      transform: 'translate(0, -100%)'
    },
    topEnd: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left + rect.width, "px"),
      transform: 'translate(-100%, -100%)'
    },
    bottom: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left + rect.width / 2, "px"),
      transform: 'translate(-50%, 0)'
    },
    bottomStart: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left, "px"),
      transform: 'translate(0, 0)'
    },
    bottomEnd: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left + rect.width, "px"),
      transform: 'translate(-100%, 0)'
    },
    left: {
      top: "".concat(rect.top + rect.height / 2, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, -50%)'
    },
    leftStart: {
      top: "".concat(rect.top, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, 0)'
    },
    leftEnd: {
      top: "".concat(rect.top + rect.height, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, -100%)'
    },
    right: {
      top: "".concat(rect.top + rect.height / 2, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, -50%)'
    },
    rightStart: {
      top: "".concat(rect.top, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, 0)'
    },
    rightEnd: {
      top: "".concat(rect.top + rect.height, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, -100%)'
    }
  };
  return positions[placement] || positions.top;
};
var getIconPosition = function getIconPosition(placement, offsetX, offsetY) {
  var offsetAbsolute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '3px';
  var positions = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: "".concat(offsetX),
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topEnd: {
      top: 'auto',
      right: "".concat(offsetX),
      left: 'auto',
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: "".concat(offsetAbsolute),
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomStart: {
      top: "".concat(offsetAbsolute),
      right: 'auto',
      left: "".concat(offsetX),
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: "".concat(offsetAbsolute),
      right: "".concat(offsetX),
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftStart: {
      top: "".concat(offsetY),
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: "".concat(offsetY),
      transform: 'translate(100%, 50%) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightStart: {
      top: "".concat(offsetY),
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: "".concat(offsetY),
      transform: 'translate(-100%, 50%) rotate(0deg)'
    }
  };
  return positions[placement] || positions.top;
};

var TooltipIcon = function TooltipIcon(_ref) {
  var placement = _ref.placement,
      shadow = _ref.shadow;
  var theme = useTheme();

  var _useMemo = React$1.useMemo(function () {
    return getIconPosition(placement, 'var(--tooltip-icon-offset-x)', 'var(--tooltip-icon-offset-y)');
  }, [placement]),
      transform = _useMemo.transform,
      top = _useMemo.top,
      left = _useMemo.left,
      right = _useMemo.right,
      bottom = _useMemo.bottom;

  var bgColorWithDark = React$1.useMemo(function () {
    if (!shadow || theme.type !== 'dark') return 'var(--tooltip-content-bg)';
    return theme.palette.accents_2;
  }, [theme.type, shadow]);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2440507693", [bgColorWithDark, left, top, right, bottom, transform]]])
  }, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2440507693",
    dynamic: [bgColorWithDark, left, top, right, bottom, transform]
  }, "span.__jsx-style-dynamic-selector{width:0;height:0;border-style:solid;border-width:6px 7px 6px 0;border-color:transparent ".concat(bgColorWithDark, " transparent transparent;position:absolute;left:").concat(left, ";top:").concat(top, ";right:").concat(right, ";bottom:").concat(bottom, ";-webkit-transform:").concat(transform, ";-ms-transform:").concat(transform, ";transform:").concat(transform, ";}")));
};

var defaultRect = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0
};
var getRect = function getRect(ref) {
  if (!ref || !ref.current) return defaultRect;
  var rect = ref.current.getBoundingClientRect();
  return _extends({}, rect, {
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    bottom: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft
  });
};

var TooltipContent = function TooltipContent(_ref) {
  var children = _ref.children,
      parent = _ref.parent,
      visible = _ref.visible,
      offset = _ref.offset,
      iconOffset = _ref.iconOffset,
      placement = _ref.placement,
      type = _ref.type,
      className = _ref.className,
      hideArrow = _ref.hideArrow;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var el = usePortal('tooltip');
  var selfRef = React$1.useRef(null);

  var _useState = React$1.useState(defaultTooltipPosition),
      _useState2 = _slicedToArray(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  var colors = React$1.useMemo(function () {
    return getColors$5(type, theme.palette);
  }, [type, theme.palette]);
  var hasShadow = type === 'default';
  var classes = useClasses('tooltip-content', className);
  if (!parent) return null;

  var updateRect = function updateRect() {
    var position = getPosition(placement, getRect(parent), offset);
    setRect(position);
  };

  useResize(updateRect);
  useClickAnyWhere(function () {
    return updateRect();
  });
  React$1.useEffect(function () {
    updateRect();
  }, [visible]);

  var preventHandler = function preventHandler(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  if (!el) return null;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(CssTransition, {
    visible: visible
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: selfRef,
    onClick: preventHandler,
    className: style.dynamic([["2387841858", [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2387841858", [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]]]) + " " + "inner"
  }, !hideArrow && /*#__PURE__*/React__default["default"].createElement(TooltipIcon, {
    placement: placement,
    shadow: hasShadow
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2387841858",
    dynamic: [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]
  }, ".tooltip-content.__jsx-style-dynamic-selector{--tooltip-icon-offset-x:".concat(iconOffset.x, ";--tooltip-icon-offset-y:").concat(iconOffset.y, ";--tooltip-content-bg:").concat(colors.bgColor, ";box-sizing:border-box;position:absolute;top:").concat(rect.top, ";left:").concat(rect.left, ";-webkit-transform:").concat(rect.transform, ";-ms-transform:").concat(rect.transform, ";transform:").concat(rect.transform, ";background-color:var(--tooltip-content-bg);color:").concat(colors.color, ";border-radius:").concat(theme.layout.radius, ";padding:0;z-index:1000;box-shadow:").concat(hasShadow ? theme.expressiveness.shadowMedium : 'none', ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";}.inner.__jsx-style-dynamic-selector{box-sizing:border-box;position:relative;font-size:").concat(SCALES.font(1), ";padding:").concat(SCALES.pt(0.65), " ").concat(SCALES.pr(0.9), " ").concat(SCALES.pb(0.65), " ").concat(SCALES.pl(0.9), ";height:100%;}")))), el);
};

var _excluded$o = ["children", "initialVisible", "text", "offset", "placement", "portalClassName", "enterDelay", "leaveDelay", "trigger", "type", "className", "onVisibleChange", "hideArrow", "visible"];
var defaultProps$w = {
  initialVisible: false,
  hideArrow: false,
  type: 'default',
  trigger: 'hover',
  placement: 'top',
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  portalClassName: '',
  onVisibleChange: function () {}
};

var TooltipComponent = function TooltipComponent(_ref) {
  var children = _ref.children,
      initialVisible = _ref.initialVisible,
      text = _ref.text,
      offset = _ref.offset,
      placement = _ref.placement,
      portalClassName = _ref.portalClassName,
      enterDelay = _ref.enterDelay,
      leaveDelay = _ref.leaveDelay,
      trigger = _ref.trigger,
      type = _ref.type,
      className = _ref.className,
      onVisibleChange = _ref.onVisibleChange,
      hideArrow = _ref.hideArrow,
      customVisible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded$o);

  var timer = React$1.useRef();
  var ref = React$1.useRef(null);

  var _useState = React$1.useState(initialVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var iconOffset = React$1.useMemo(function () {
    if (!(ref !== null && ref !== void 0 && ref.current)) return {
      x: '0.75em',
      y: '0.75em'
    };
    var rect = getRect(ref);
    return {
      x: "".concat(rect.width ? rect.width / 2 : 0, "px"),
      y: "".concat(rect.height ? rect.height / 2 : 0, "px")
    };
  }, [ref === null || ref === void 0 ? void 0 : ref.current]);
  var contentProps = {
    type: type,
    visible: visible,
    offset: offset,
    placement: placement,
    hideArrow: hideArrow,
    iconOffset: iconOffset,
    parent: ref,
    className: portalClassName
  };

  var changeVisible = function changeVisible(nextState) {
    var clear = function clear() {
      clearTimeout(timer.current);
      timer.current = undefined;
    };

    var handler = function handler(nextState) {
      setVisible(nextState);
      onVisibleChange(nextState);
      clear();
    };

    clear();

    if (nextState) {
      timer.current = window.setTimeout(function () {
        return handler(true);
      }, enterDelay);
      return;
    }

    var leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay;
    timer.current = window.setTimeout(function () {
      return handler(false);
    }, leaveDelayWithoutClick);
  };

  var mouseEventHandler = function mouseEventHandler(next) {
    return trigger === 'hover' && changeVisible(next);
  };

  var clickEventHandler = function clickEventHandler() {
    return trigger === 'click' && changeVisible(!visible);
  };

  useClickAway(ref, function () {
    return trigger === 'click' && changeVisible(false);
  });
  React$1.useEffect(function () {
    if (customVisible === undefined) return;
    changeVisible(customVisible);
  }, [customVisible]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: ref,
    onClick: clickEventHandler,
    onMouseEnter: function onMouseEnter() {
      return mouseEventHandler(true);
    },
    onMouseLeave: function onMouseLeave() {
      return mouseEventHandler(false);
    }
  }, props, {
    className: "jsx-418573366" + " " + (props && props.className != null && props.className || useClasses('tooltip', className) || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(TooltipContent, contentProps, text), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "418573366"
  }, ".tooltip.jsx-418573366{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block;}"));
};

TooltipComponent.defaultProps = defaultProps$w;
TooltipComponent.displayName = 'GeistTooltip';
var Tooltip = withScale(TooltipComponent);

var defaultContext$5 = {
  disableItemsAutoClose: false,
  onItemClick: function onItemClick() {}
};
var PopoverContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$5);
var usePopoverContext = function usePopoverContext() {
  return React$1.useContext(PopoverContext);
};

var _excluded$n = ["content", "children", "trigger", "placement", "initialVisible", "portalClassName", "disableItemsAutoClose", "onVisibleChange", "visible"];
var defaultProps$v = {
  disableItemsAutoClose: false,
  trigger: 'click',
  placement: 'bottom',
  portalClassName: '',
  initialVisible: false,
  hideArrow: false,
  type: 'default',
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  onVisibleChange: function () {}
};

var PopoverComponent = function PopoverComponent(_ref) {
  var content = _ref.content,
      children = _ref.children,
      trigger = _ref.trigger,
      placement = _ref.placement,
      initialVisible = _ref.initialVisible,
      portalClassName = _ref.portalClassName,
      disableItemsAutoClose = _ref.disableItemsAutoClose,
      onVisibleChange = _ref.onVisibleChange,
      customVisible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded$n);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(initialVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var textNode = React$1.useMemo(function () {
    return getReactNode(content);
  }, [content]);

  var onChildClick = function onChildClick() {
    onPopoverVisibleChange(false);
  };

  var value = React$1.useMemo(function () {
    return {
      onItemClick: onChildClick,
      disableItemsAutoClose: disableItemsAutoClose
    };
  }, [disableItemsAutoClose]);
  var classes = useClasses('popover', portalClassName);

  var onPopoverVisibleChange = function onPopoverVisibleChange(next) {
    setVisible(next);
    onVisibleChange(next);
  };

  React$1.useEffect(function () {
    if (customVisible === undefined) return;
    onPopoverVisibleChange(customVisible);
  }, [customVisible]);
  return /*#__PURE__*/React__default["default"].createElement(PopoverContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default["default"].createElement(Tooltip, _extends({
    text: textNode,
    trigger: trigger,
    placement: placement,
    portalClassName: classes,
    visible: visible,
    onVisibleChange: onPopoverVisibleChange
  }, props), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "622655983",
    dynamic: [SCALES.pt(0.9), SCALES.pr(0), SCALES.pb(0.9), SCALES.pl(0)]
  }, ".tooltip-content.popover > .inner{padding:".concat(SCALES.pt(0.9), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0.9), " ").concat(SCALES.pl(0), ";}"))));
};

PopoverComponent.defaultProps = defaultProps$v;
PopoverComponent.displayName = 'GeistPopover';
var Popover = withScale(PopoverComponent);

var _excluded$m = ["children", "line", "title", "className", "onClick", "disableAutoClose"];
var defaultProps$u = {
  line: false,
  title: false,
  disableAutoClose: false,
  className: ''
};

var PopoverItemComponent = function PopoverItemComponent(_ref) {
  var children = _ref.children,
      line = _ref.line,
      title = _ref.title,
      className = _ref.className,
      onClick = _ref.onClick,
      disableAutoClose = _ref.disableAutoClose,
      props = _objectWithoutProperties(_ref, _excluded$m);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _usePopoverContext = usePopoverContext(),
      disableItemsAutoClose = _usePopoverContext.disableItemsAutoClose,
      onItemClick = _usePopoverContext.onItemClick;

  var hasHandler = Boolean(onClick);
  var dontCloseByClick = disableAutoClose || disableItemsAutoClose || title || line;
  var classes = useClasses('item', {
    line: line,
    title: title
  }, className);

  var clickHandler = function clickHandler(event) {
    onClick && onClick(event);

    if (dontCloseByClick) {
      return event.stopPropagation();
    }

    onItemClick(event);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["190621384", [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.5), SCALES.pr(0.75), SCALES.pb(0.5), SCALES.pl(0.75), hasHandler ? 'pointer' : 'default', theme.palette.foreground, theme.palette.border, SCALES.height(0.0625), SCALES.mt(0.35), SCALES.mr(0), SCALES.mb(0.35), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.font(0.925), theme.palette.foreground]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "190621384",
    dynamic: [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.5), SCALES.pr(0.75), SCALES.pb(0.5), SCALES.pl(0.75), hasHandler ? 'pointer' : 'default', theme.palette.foreground, theme.palette.border, SCALES.height(0.0625), SCALES.mt(0.35), SCALES.mr(0), SCALES.mb(0.35), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.font(0.925), theme.palette.foreground]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:".concat(theme.palette.accents_5, ";-webkit-transition:color,background-color 150ms linear;transition:color,background-color 150ms linear;line-height:1.25em;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";padding:").concat(SCALES.pt(0.5), " ").concat(SCALES.pr(0.75), " ").concat(SCALES.pb(0.5), " ").concat(SCALES.pl(0.75), ";cursor:").concat(hasHandler ? 'pointer' : 'default', ";}.item.__jsx-style-dynamic-selector:hover{color:").concat(theme.palette.foreground, ";}.item.line.__jsx-style-dynamic-selector{line-height:0;padding:0;background-color:").concat(theme.palette.border, ";height:").concat(SCALES.height(0.0625), ";margin:").concat(SCALES.mt(0.35), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.35), " ").concat(SCALES.ml(0), ";width:").concat(SCALES.width(1, '100%'), ";}.item.title.__jsx-style-dynamic-selector{font-weight:500;font-size:").concat(SCALES.font(0.925), ";color:").concat(theme.palette.foreground, ";}"))), title && /*#__PURE__*/React__default["default"].createElement(PopoverItem, {
    line: true,
    title: false
  }));
};

PopoverItemComponent.defaultProps = defaultProps$u;
PopoverItemComponent.displayName = 'GeistPopoverItem';
var PopoverItem = withScale(PopoverItemComponent);

Popover.Item = PopoverItem;
Popover.Option = PopoverItem;

var _excluded$l = ["value", "max", "className", "type", "colors", "fixedTop", "fixedBottom"];
var defaultProps$t = {
  value: 0,
  max: 100,
  type: 'default',
  fixedTop: false,
  fixedBottom: false,
  className: ''
};

var getCurrentColor = function getCurrentColor(ratio, palette, type) {
  var colors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var defaultColors = {
    "default": palette.foreground,
    success: palette.success,
    secondary: palette.secondary,
    warning: palette.warning,
    error: palette.error
  };
  var colorKeys = Object.keys(colors);
  if (colorKeys.length === 0) return defaultColors[type];
  var customColorKey = colorKeys.find(function (key) {
    return ratio <= +key;
  });
  if (!customColorKey || Number.isNaN(+customColorKey)) return defaultColors[type];
  return colors[+customColorKey];
};

var ProgressComponent = function ProgressComponent(_ref) {
  var value = _ref.value,
      max = _ref.max,
      className = _ref.className,
      type = _ref.type,
      colors = _ref.colors,
      fixedTop = _ref.fixedTop,
      fixedBottom = _ref.fixedBottom,
      props = _objectWithoutProperties(_ref, _excluded$l);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var percentValue = useProportions(value, max);
  var currentColor = getCurrentColor(percentValue, theme.palette, type, colors);
  var fixed = fixedTop || fixedBottom;
  var classes = useClasses('progress', {
    fixed: fixed
  }, className);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    title: "".concat(percentValue, "%"),
    className: style.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + "inner"
  }), /*#__PURE__*/React__default["default"].createElement("progress", _extends({
    value: value,
    max: max
  }, props, {
    className: style.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + (props && props.className != null && props.className || className || "")
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1239801602",
    dynamic: [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]
  }, "progress.__jsx-style-dynamic-selector{position:fixed;top:-1000px;opacity:0;visibility:hidden;pointer-events:none;}.progress.__jsx-style-dynamic-selector{position:relative;background-color:".concat(theme.palette.accents_2, ";border-radius:").concat(theme.layout.radius, ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(0.625), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.fixed.__jsx-style-dynamic-selector{position:fixed;top:").concat(fixedTop ? 0 : 'unset', ";bottom:").concat(fixedBottom ? 0 : 'unset', ";left:0;border-radius:0;}.fixed.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{border-radius:0;}.inner.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;height:100%;bottom:0;-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in;border-radius:").concat(theme.layout.radius, ";background-color:").concat(currentColor, ";width:").concat(percentValue, "%;}")));
};

ProgressComponent.defaultProps = defaultProps$t;
ProgressComponent.displayName = 'GeistProgress';
withScale(ProgressComponent);

var defaultContext$4 = {
  disabledAll: false,
  inGroup: false
};
var RadioContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$4);
var useRadioContext = function useRadioContext() {
  return React__default["default"].useContext(RadioContext);
};

var _excluded$k = ["className", "children"];
var defaultProps$s = {
  className: ''
};

var RadioDescriptionComponent = function RadioDescriptionComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$k);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["2489497926", [theme.palette.accents_3, SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)')]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2489497926",
    dynamic: [theme.palette.accents_3, SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)')]
  }, "span.__jsx-style-dynamic-selector{color:".concat(theme.palette.accents_3, ";font-size:").concat(SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)'), ";}")));
};

RadioDescriptionComponent.defaultProps = defaultProps$s;
RadioDescriptionComponent.displayName = 'GeistRadioDescription';
var RadioDescription = withScale(RadioDescriptionComponent);

var getColors$4 = function getColors(palette, status) {
  var colors = {
    "default": {
      label: palette.foreground,
      border: palette.border,
      bg: palette.foreground
    },
    secondary: {
      label: palette.foreground,
      border: palette.border,
      bg: palette.foreground
    },
    success: {
      label: palette.success,
      border: palette.success,
      bg: palette.success
    },
    warning: {
      label: palette.warning,
      border: palette.warning,
      bg: palette.warning
    },
    error: {
      label: palette.error,
      border: palette.error,
      bg: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var _excluded$j = ["className", "checked", "onChange", "disabled", "type", "value", "children"];
var defaultProps$r = {
  type: 'default',
  disabled: false,
  className: ''
};

var RadioComponent = function RadioComponent(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      type = _ref.type,
      radioValue = _ref.value,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$j);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(!!checked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var _useRadioContext = useRadioContext(),
      groupValue = _useRadioContext.value,
      disabledAll = _useRadioContext.disabledAll,
      inGroup = _useRadioContext.inGroup,
      updateState = _useRadioContext.updateState;

  var _pickChild = pickChild(children, RadioDescription),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutDescChildren = _pickChild2[0],
      DescChildren = _pickChild2[1];

  if (inGroup) {
    if (checked !== undefined) {
      useWarning('Remove props "checked" if in the Radio.Group.', 'Radio');
    }

    if (radioValue === undefined) {
      useWarning('Props "value" must be deinfed if in the Radio.Group.', 'Radio');
    }

    React$1.useEffect(function () {
      setSelfChecked(groupValue === radioValue);
    }, [groupValue, radioValue]);
  }

  var _useMemo = React$1.useMemo(function () {
    return getColors$4(theme.palette, type);
  }, [theme.palette, type]),
      label = _useMemo.label,
      border = _useMemo.border,
      bg = _useMemo.bg;

  var isDisabled = React$1.useMemo(function () {
    return disabled || disabledAll;
  }, [disabled, disabledAll]);

  var changeHandler = function changeHandler(event) {
    if (isDisabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: event.stopPropagation,
      preventDefault: event.preventDefault,
      nativeEvent: event
    };
    setSelfChecked(!selfChecked);

    if (inGroup) {
      updateState && updateState(radioValue);
    }

    onChange && onChange(selfEvent);
  };

  React$1.useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(Boolean(checked));
  }, [checked]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (useClasses('radio', className) || "")
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: style.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]])
  }, /*#__PURE__*/React__default["default"].createElement("input", _extends({
    type: "radio",
    value: radioValue,
    checked: selfChecked,
    onChange: changeHandler
  }, props, {
    className: style.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (props && props.className != null && props.className || "")
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + "name"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (useClasses('point', {
      active: selfChecked
    }) || "")
  }), withoutDescChildren), DescChildren && DescChildren), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2664604043",
    dynamic: [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]
  }, "input.__jsx-style-dynamic-selector{opacity:0;visibility:hidden;overflow:hidden;width:1px;height:1px;top:-1000px;right:-1000px;position:fixed;font-size:0;}.radio.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;--radio-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'initial'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:").concat(isDisabled ? theme.palette.accents_4 : label, ";cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";}.name.__jsx-style-dynamic-selector{font-size:var(--radio-size);font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.point.__jsx-style-dynamic-selector{height:var(--radio-size);width:var(--radio-size);border-radius:50%;border:1px solid ").concat(border, ";-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;position:relative;display:inline-block;-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);margin-right:calc(var(--radio-size) * 0.375);}.point.__jsx-style-dynamic-selector:before{content:'';position:absolute;left:-1px;top:-1px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);height:var(--radio-size);width:var(--radio-size);border-radius:50%;background-color:").concat(isDisabled ? theme.palette.accents_4 : bg, ";}.active.__jsx-style-dynamic-selector:before{-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}")));
};

RadioComponent.defaultProps = defaultProps$r;
RadioComponent.displayName = 'GeistRadio';
var Radio = withScale(RadioComponent);

var _excluded$i = ["disabled", "onChange", "value", "children", "className", "initialValue", "useRow"];
var defaultProps$q = {
  disabled: false,
  className: '',
  useRow: false
};

var RadioGroupComponent = function RadioGroupComponent(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      className = _ref.className,
      initialValue = _ref.initialValue,
      useRow = _ref.useRow,
      props = _objectWithoutProperties(_ref, _excluded$i);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var updateState = function updateState(nextValue) {
    setSelfVal(nextValue);
    onChange && onChange(nextValue);
  };

  var providerValue = React$1.useMemo(function () {
    return {
      updateState: updateState,
      disabledAll: disabled,
      inGroup: true,
      value: selfVal
    };
  }, [disabled, selfVal]);
  React$1.useEffect(function () {
    if (value === undefined) return;
    setSelfVal(value);
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(RadioContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["1223822443", [useRow ? 'col' : 'column', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : 'var(--radio-group-gap)', useRow ? 'var(--radio-group-gap)' : 0, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || useClasses('radio-group', className) || "")
  }), children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1223822443",
    dynamic: [useRow ? 'col' : 'column', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : 'var(--radio-group-gap)', useRow ? 'var(--radio-group-gap)' : 0, SCALES.font(1)]
  }, ".radio-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:".concat(useRow ? 'col' : 'column', ";-ms-flex-direction:").concat(useRow ? 'col' : 'column', ";flex-direction:").concat(useRow ? 'col' : 'column', ";--radio-group-gap:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.radio-group.__jsx-style-dynamic-selector .radio{margin-top:").concat(useRow ? 0 : 'var(--radio-group-gap)', ";margin-left:").concat(useRow ? 'var(--radio-group-gap)' : 0, ";--radio-size:").concat(SCALES.font(1), ";}.radio-group.__jsx-style-dynamic-selector .radio:first-of-type{margin:0;}")));
};

RadioGroupComponent.defaultProps = defaultProps$q;
RadioGroupComponent.displayName = 'GeistRadioGroup';
var RadioGroup = withScale(RadioGroupComponent);

Radio.Group = RadioGroup;
Radio.Description = RadioDescription;
Radio.Desc = RadioDescription;

var RatingIcon = function RatingIcon() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  }));
};

RatingIcon.displayName = 'GeistRatingIcon';

var _excluded$h = ["type", "className", "icon", "count", "value", "initialValue", "onValueChange", "locked", "onLockedChange"];
tupleNumber(2, 3, 4, 5, 6, 7, 8, 9, 10);
tupleNumber(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var defaultProps$p = {
  type: 'default',
  className: '',
  icon: /*#__PURE__*/React__default["default"].createElement(RatingIcon, null),
  count: 5,
  initialValue: 1,
  locked: false
};

var getColor = function getColor(type, palette) {
  var colors = {
    "default": palette.foreground,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return colors[type] || colors["default"];
};

var RatingComponent = function RatingComponent(_ref) {
  var type = _ref.type,
      className = _ref.className,
      icon = _ref.icon,
      count = _ref.count,
      customValue = _ref.value,
      initialValue = _ref.initialValue,
      onValueChange = _ref.onValueChange,
      locked = _ref.locked,
      onLockedChange = _ref.onLockedChange,
      props = _objectWithoutProperties(_ref, _excluded$h);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var color = React$1.useMemo(function () {
    return getColor(type, theme.palette);
  }, [type, theme.palette]);

  var _useState = React$1.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React$1.useState(locked),
      _useState4 = _slicedToArray(_useState3, 2),
      isLocked = _useState4[0],
      setIsLocked = _useState4[1];

  var lockedChangeHandler = function lockedChangeHandler(next) {
    setIsLocked(next);
    onLockedChange && onLockedChange(next);
  };

  var valueChangeHandler = function valueChangeHandler(next) {
    setValue(next);
    var emitValue = next > count ? count : next;
    onValueChange && onValueChange(emitValue);
  };

  var clickHandler = function clickHandler(index) {
    if (isLocked) return lockedChangeHandler(false);
    valueChangeHandler(index);
    lockedChangeHandler(true);
  };

  var mouseEnterHandler = function mouseEnterHandler(index) {
    if (isLocked) return;
    valueChangeHandler(index);
  };

  React$1.useEffect(function () {
    if (typeof customValue === 'undefined') return;
    setValue(customValue < 0 ? 0 : customValue);
  }, [customValue]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["884600549", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]]]) + " " + (props && props.className != null && props.className || useClasses('rating', className) || "")
  }), _toConsumableArray(Array(count)).map(function (_, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: index,
      onMouseEnter: function onMouseEnter() {
        return mouseEnterHandler(index + 1);
      },
      onClick: function onClick() {
        return clickHandler(index + 1);
      },
      className: style.dynamic([["884600549", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]]]) + " " + (useClasses('icon-box', {
        hovered: index + 1 <= value
      }) || "")
    }, icon);
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "884600549",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]
  }, ".rating.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;--rating-font-size:".concat(SCALES.font(1), ";font-size:var(--rating-font-size);width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.icon-box.__jsx-style-dynamic-selector{box-sizing:border-box;color:").concat(color, ";width:calc(var(--rating-font-size) * 1.5);height:calc(var(--rating-font-size) * 1.5);margin-right:calc(var(--rating-font-size) * 1 / 5);cursor:").concat(isLocked ? 'default' : 'pointer', ";}.icon-box.__jsx-style-dynamic-selector svg{width:100%;height:100%;fill:transparent;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform,color,fill 30ms linear;-webkit-transition:transform,color,fill 30ms linear;transition:transform,color,fill 30ms linear;}.hovered.__jsx-style-dynamic-selector svg{fill:").concat(color, ";-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}")));
};

RatingComponent.defaultProps = defaultProps$p;
RatingComponent.displayName = 'GeistRating';
withScale(RatingComponent);

var SelectIconComponent = function SelectIconComponent() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: "jsx-2742933678"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 9l6 6 6-6",
    className: "jsx-2742933678"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2742933678"
  }, "svg.jsx-2742933678{color:inherit;stroke:currentColor;-webkit-transition:all 200ms ease;transition:all 200ms ease;width:1.214em;height:1.214em;}"));
};

SelectIconComponent.displayName = 'GeistSelectIcon';
var SelectIcon = /*#__PURE__*/React__default["default"].memo(SelectIconComponent);

var defaultContext$3 = {
  visible: false,
  disableAll: false
};
var SelectContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$3);
var useSelectContext = function useSelectContext() {
  return React__default["default"].useContext(SelectContext);
};

var defaultProps$o = {
  className: '',
  dropdownStyle: {}
};
var SelectDropdown = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, dropdownRef) {
  var visible = _ref.visible,
      children = _ref.children,
      className = _ref.className,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer;
  var theme = useTheme();
  var internalDropdownRef = React$1.useRef(null);

  var _useSelectContext = useSelectContext(),
      ref = _useSelectContext.ref;

  var classes = useClasses('select-dropdown', className);
  React$1.useImperativeHandle(dropdownRef, function () {
    return internalDropdownRef.current;
  });
  return /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    parent: ref,
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: internalDropdownRef,
    style: dropdownStyle,
    className: style.dynamic([["2782510679", [theme.layout.radius, theme.expressiveness.shadowLarge, theme.palette.background]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2782510679",
    dynamic: [theme.layout.radius, theme.expressiveness.shadowLarge, theme.palette.background]
  }, ".select-dropdown.__jsx-style-dynamic-selector{border-radius:".concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";background-color:").concat(theme.palette.background, ";max-height:17em;overflow-y:auto;overflow-anchor:none;padding:0.38em 0;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}"))));
});
SelectDropdown.defaultProps = defaultProps$o;
SelectDropdown.displayName = 'GeistSelectDropdown';

var SelectIconClear = function SelectIconClear(_ref) {
  var onClick = _ref.onClick;
  var theme = useTheme();

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    onClick && onClick(event);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: clickHandler,
    className: style.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]]) + " " + "clear-icon"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 6L6 18",
    className: style.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 6l12 12",
    className: style.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1984024521",
    dynamic: [theme.palette.accents_3, theme.palette.foreground]
  }, ".clear-icon.__jsx-style-dynamic-selector{padding:0 0 0 0.5em;margin:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;box-sizing:border-box;-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;color:".concat(theme.palette.accents_3, ";visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(theme.palette.foreground, ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:1em;height:1em;}")));
};

var MemoSelectIconClear = /*#__PURE__*/React__default["default"].memo(SelectIconClear);

var SelectMultipleValue = function SelectMultipleValue(_ref) {
  var disabled = _ref.disabled,
      onClear = _ref.onClear,
      children = _ref.children;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Grid, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3357578496", [theme.layout.radius, theme.palette.accents_2, disabled ? theme.palette.accents_4 : theme.palette.accents_6]]]) + " " + "item"
  }, children, !!onClear && /*#__PURE__*/React__default["default"].createElement(MemoSelectIconClear, {
    onClick: onClear
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3357578496",
    dynamic: [theme.layout.radius, theme.palette.accents_2, disabled ? theme.palette.accents_4 : theme.palette.accents_6]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0 0.5em;font-size:var(--select-font-size);height:calc(var(--select-font-size) * 2);border-radius:".concat(theme.layout.radius, ";background-color:").concat(theme.palette.accents_2, ";color:").concat(disabled ? theme.palette.accents_4 : theme.palette.accents_6, ";}.item.__jsx-style-dynamic-selector>div:not(.clear-icon),.item.__jsx-style-dynamic-selector>div:not(.clear-icon):hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}")));
};

SelectMultipleValue.displayName = 'GeistSelectMultipleValue';

var getColors$3 = function getColors(palette, status) {
  var colors = {
    "default": {
      border: palette.border,
      borderActive: palette.foreground,
      iconBorder: palette.accents_5,
      placeholderColor: palette.accents_3
    },
    secondary: {
      border: palette.border,
      borderActive: palette.foreground,
      iconBorder: palette.accents_5,
      placeholderColor: palette.accents_3
    },
    success: {
      border: palette.successLight,
      borderActive: palette.successDark,
      iconBorder: palette.success,
      placeholderColor: palette.accents_3
    },
    warning: {
      border: palette.warningLight,
      borderActive: palette.warningDark,
      iconBorder: palette.warning,
      placeholderColor: palette.accents_3
    },
    error: {
      border: palette.errorLight,
      borderActive: palette.errorDark,
      iconBorder: palette.error,
      placeholderColor: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var SelectInput = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, inputRef) {
  var visible = _ref.visible,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var ref = React$1.useRef(null);
  React$1.useImperativeHandle(inputRef, function () {
    return ref.current;
  });
  React$1.useEffect(function () {
    if (visible) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
    }
  }, [visible]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("input", {
    ref: ref,
    type: "search",
    role: "combobox",
    "aria-haspopup": "listbox",
    readOnly: true,
    unselectable: "on",
    "aria-expanded": visible,
    onBlur: onBlur,
    onFocus: onFocus,
    className: "jsx-2813108835"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2813108835"
  }, "input.jsx-2813108835{position:fixed;top:-10000px;left:-10000px;opacity:0;z-index:-1;width:0;height:0;padding:0;font-size:0;border:none;}"));
});
SelectInput.displayName = 'GeistSelectInput';

var _excluded$g = ["children", "type", "disabled", "initialValue", "value", "icon", "onChange", "pure", "multiple", "clearable", "placeholder", "className", "dropdownClassName", "dropdownStyle", "disableMatchWidth", "getPopupContainer", "onDropdownVisibleChange"];
var defaultProps$n = {
  disabled: false,
  type: 'default',
  icon: SelectIcon,
  pure: false,
  multiple: false,
  clearable: true,
  className: '',
  disableMatchWidth: false,
  onDropdownVisibleChange: function onDropdownVisibleChange() {}
};
var SelectComponent = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, selectRef) {
  var children = _ref.children,
      type = _ref.type,
      disabled = _ref.disabled,
      init = _ref.initialValue,
      customValue = _ref.value,
      Icon = _ref.icon,
      onChange = _ref.onChange,
      pure = _ref.pure,
      multiple = _ref.multiple,
      clearable = _ref.clearable,
      placeholder = _ref.placeholder,
      className = _ref.className,
      dropdownClassName = _ref.dropdownClassName,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer,
      onDropdownVisibleChange = _ref.onDropdownVisibleChange,
      props = _objectWithoutProperties(_ref, _excluded$g);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = React$1.useRef(null);
  var inputRef = React$1.useRef(null);
  var dropdownRef = React$1.useRef(null);

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      selectFocus = _useState4[0],
      setSelectFocus = _useState4[1];

  var _useCurrentState = useCurrentState(function () {
    if (!multiple) return init;
    if (Array.isArray(init)) return init;
    return typeof init === 'undefined' ? [] : [init];
  }),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      value = _useCurrentState2[0],
      setValue = _useCurrentState2[1],
      valueRef = _useCurrentState2[2];

  var isEmpty = React$1.useMemo(function () {
    if (!Array.isArray(value)) return !value;
    return value.length === 0;
  }, [value]);

  var _useMemo = React$1.useMemo(function () {
    return getColors$3(theme.palette, type);
  }, [theme.palette, type]),
      border = _useMemo.border,
      borderActive = _useMemo.borderActive,
      iconBorder = _useMemo.iconBorder,
      placeholderColor = _useMemo.placeholderColor;

  var updateVisible = function updateVisible(next) {
    onDropdownVisibleChange(next);
    setVisible(next);
  };

  var updateValue = function updateValue(next) {
    setValue(function (last) {
      if (!Array.isArray(last)) return next;
      if (!last.includes(next)) return [].concat(_toConsumableArray(last), [next]);
      return last.filter(function (item) {
        return item !== next;
      });
    });
    onChange && onChange(valueRef.current);

    if (!multiple) {
      updateVisible(false);
    }
  };

  var initialValue = React$1.useMemo(function () {
    return {
      value: value,
      visible: visible,
      updateValue: updateValue,
      updateVisible: updateVisible,
      ref: ref,
      disableAll: disabled
    };
  }, [visible, disabled, ref, value, multiple]);

  var clickHandler = function clickHandler(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (disabled) return;
    updateVisible(!visible);
    event.preventDefault();
  };

  var mouseDownHandler = function mouseDownHandler(event) {
    /* istanbul ignore next */
    if (visible) {
      event.preventDefault();
    }
  };

  React$1.useEffect(function () {
    if (customValue === undefined) return;
    setValue(customValue);
  }, [customValue]);
  React$1.useImperativeHandle(selectRef, function () {
    return {
      focus: function focus() {
        var _inputRef$current;

        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      },
      blur: function blur() {
        var _inputRef$current2;

        return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
      },
      scrollTo: function scrollTo(options) {
        var _dropdownRef$current;

        return (_dropdownRef$current = dropdownRef.current) === null || _dropdownRef$current === void 0 ? void 0 : _dropdownRef$current.scrollTo(options);
      }
    };
  }, [inputRef, dropdownRef]);
  var selectedChild = React$1.useMemo(function () {
    var _pickChildByProps = pickChildByProps(children, 'value', value),
        _pickChildByProps2 = _slicedToArray(_pickChildByProps, 2),
        optionChildren = _pickChildByProps2[1];

    return React__default["default"].Children.map(optionChildren, function (child) {
      if (! /*#__PURE__*/React__default["default"].isValidElement(child)) return null;
      var el = /*#__PURE__*/React__default["default"].cloneElement(child, {
        preventAllEvents: true
      });
      if (!multiple) return el;
      return /*#__PURE__*/React__default["default"].createElement(SelectMultipleValue, {
        disabled: disabled,
        onClear: clearable ? function () {
          return updateValue(child.props.value);
        } : null
      }, el);
    });
  }, [value, children, multiple]);

  var onInputBlur = function onInputBlur() {
    updateVisible(false);
    setSelectFocus(false);
  };

  var classes = useClasses('select', {
    active: selectFocus || visible,
    multiple: multiple
  }, className);
  return /*#__PURE__*/React__default["default"].createElement(SelectContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: ref,
    onClick: clickHandler,
    onMouseDown: mouseDownHandler
  }, props, {
    className: style.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement(SelectInput, {
    ref: inputRef,
    visible: visible,
    onBlur: onInputBlur,
    onFocus: function onFocus() {
      return setSelectFocus(true);
    }
  }), isEmpty && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "value placeholder"
  }, /*#__PURE__*/React__default["default"].createElement(Ellipsis$1, {
    height: "var(--select-height)"
  }, placeholder)), value && !multiple && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "value"
  }, selectedChild), value && multiple && /*#__PURE__*/React__default["default"].createElement(Grid.Container, {
    gap: 0.5
  }, selectedChild), /*#__PURE__*/React__default["default"].createElement(SelectDropdown, {
    ref: dropdownRef,
    visible: visible,
    className: dropdownClassName,
    dropdownStyle: dropdownStyle,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, children), !pure && /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "icon"
  }, /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: style.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]])
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3282295248",
    dynamic: [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]
  }, ".select.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;position:relative;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";max-width:90vw;overflow:hidden;-webkit-transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;border:1px solid ").concat(border, ";border-radius:").concat(theme.layout.radius, ";background-color:").concat(disabled ? theme.palette.accents_1 : theme.palette.background, ";--select-font-size:").concat(SCALES.font(0.875), ";--select-height:").concat(SCALES.height(2.25), ";min-width:11.5em;width:").concat(SCALES.width(1, 'initial'), ";height:var(--select-height);padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.334), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.667), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.multiple.__jsx-style-dynamic-selector{height:auto;min-height:var(--select-height);padding:").concat(SCALES.pt(0.334), " ").concat(SCALES.pr(0.334), " ").concat(SCALES.pb(0.334), " ").concat(SCALES.pl(0.667), ";}.select.active.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover{border-color:").concat(disabled ? theme.palette.border : borderActive, ";}.select.active.icon.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover .icon.__jsx-style-dynamic-selector{color:").concat(disabled ? theme.palette.accents_5 : borderActive, ";}.value.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0;margin-right:1.25em;font-size:var(--select-font-size);color:").concat(disabled ? theme.palette.accents_4 : theme.palette.foreground, ";width:calc(100% - 1.25em);}.value.__jsx-style-dynamic-selector>div,.value.__jsx-style-dynamic-selector>div:hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}.placeholder.__jsx-style-dynamic-selector{color:").concat(placeholderColor, ";}.icon.__jsx-style-dynamic-selector{position:absolute;right:").concat(theme.layout.gapQuarter, ";font-size:var(--select-font-size);top:50%;bottom:0;-webkit-transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);-ms-transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);pointer-events:none;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(iconBorder, ";}"))));
});
SelectComponent.defaultProps = defaultProps$n;
SelectComponent.displayName = 'GeistSelect';
var Select = withScale(SelectComponent);

var _excluded$f = ["value", "className", "children", "disabled", "divider", "label", "preventAllEvents"];
var defaultProps$m = {
  disabled: false,
  divider: false,
  label: false,
  className: '',
  preventAllEvents: false
};

var SelectOptionComponent = function SelectOptionComponent(_ref) {
  var identValue = _ref.value,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      divider = _ref.divider,
      label = _ref.label,
      preventAllEvents = _ref.preventAllEvents,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useSelectContext = useSelectContext(),
      updateValue = _useSelectContext.updateValue,
      value = _useSelectContext.value,
      disableAll = _useSelectContext.disableAll;

  var isDisabled = React$1.useMemo(function () {
    return disabled || disableAll;
  }, [disabled, disableAll]);
  var isLabel = React$1.useMemo(function () {
    return label || divider;
  }, [label, divider]);
  var classes = useClasses('option', {
    divider: divider,
    label: label
  }, className);

  if (!isLabel && identValue === undefined) {
    useWarning('The props "value" is required.', 'Select Option');
  }

  var selected = React$1.useMemo(function () {
    if (!value) return false;

    if (typeof value === 'string') {
      return identValue === value;
    }

    return value.includes("".concat(identValue));
  }, [identValue, value]);
  var bgColor = React$1.useMemo(function () {
    if (isDisabled) return theme.palette.accents_1;
    return selected ? theme.palette.accents_2 : theme.palette.background;
  }, [selected, isDisabled, theme.palette]);
  var hoverBgColor = React$1.useMemo(function () {
    if (isDisabled || isLabel || selected) return bgColor;
    return theme.palette.accents_1;
  }, [selected, isDisabled, theme.palette, isLabel, bgColor]);
  var color = React$1.useMemo(function () {
    if (isDisabled) return theme.palette.accents_4;
    return selected ? theme.palette.foreground : theme.palette.accents_5;
  }, [selected, isDisabled, theme.palette]);

  var clickHandler = function clickHandler(event) {
    if (preventAllEvents) return;
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (isDisabled || isLabel) return;
    updateValue && updateValue(identValue);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["199367556", [bgColor, color, isDisabled ? 'not-allowed' : 'pointer', SCALES.font(0.75), SCALES.width(1, '100%'), SCALES.height(2.25), SCALES.pt(0), SCALES.pr(0.667), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBgColor, theme.palette.accents_7, theme.palette.border, SCALES.width(1, '100%'), SCALES.height(1, 0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.accents_7, theme.palette.border, SCALES.font(0.875), SCALES.width(1, '100%')]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement(Ellipsis$1, {
    height: SCALES.height(2.25)
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "199367556",
    dynamic: [bgColor, color, isDisabled ? 'not-allowed' : 'pointer', SCALES.font(0.75), SCALES.width(1, '100%'), SCALES.height(2.25), SCALES.pt(0), SCALES.pr(0.667), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBgColor, theme.palette.accents_7, theme.palette.border, SCALES.width(1, '100%'), SCALES.height(1, 0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.accents_7, theme.palette.border, SCALES.font(0.875), SCALES.width(1, '100%')]
  }, ".option.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;background-color:".concat(bgColor, ";color:").concat(color, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;--select-font-size:").concat(SCALES.font(0.75), ";font-size:var(--select-font-size);width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(2.25), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.667), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.667), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.option.__jsx-style-dynamic-selector:hover{background-color:").concat(hoverBgColor, ";color:").concat(theme.palette.accents_7, ";}.divider.__jsx-style-dynamic-selector{line-height:0;overflow:hidden;border-top:1px solid ").concat(theme.palette.border, ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 0), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0.5), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.5), " ").concat(SCALES.ml(0), ";}.label.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_7, ";border-bottom:1px solid ").concat(theme.palette.border, ";text-transform:capitalize;cursor:default;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, '100%'), ";font-weight:500;}")));
};

SelectOptionComponent.defaultProps = defaultProps$m;
SelectOptionComponent.displayName = 'GeistSelectOption';
var SelectOption = withScale(SelectOptionComponent);

Select.Option = SelectOption;

var useDrag = function useDrag(elementRef) {
  var draggingHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var dragStartHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var dragEndHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var onDragging = React$1.useRef(false);

  var _useCurrentState = useCurrentState(0),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setStartX = _useCurrentState2[1],
      startXRef = _useCurrentState2[2];

  var _useCurrentState3 = useCurrentState(0),
      _useCurrentState4 = _slicedToArray(_useCurrentState3, 3),
      setCurrentX = _useCurrentState4[1],
      currentXRef = _useCurrentState4[2];

  var getCustomEvent = function getCustomEvent() {
    return {
      startX: startXRef.current,
      currentX: currentXRef.current
    };
  };

  var elementMouseDownHandler = function elementMouseDownHandler(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    onDragging.current = true;
    if (!elementRef || !elementRef.current) return;
    setStartX(elementRef.current.getBoundingClientRect().x);
    dragStartHandler(getCustomEvent());
  };

  var globalDraggingHandler = function globalDraggingHandler(event) {
    if (!onDragging.current) return;

    if (event.type === 'touchmove') {
      setCurrentX(event.changedTouches[0].clientX);
    } else {
      setCurrentX(event.clientX);
    }

    draggingHandler(getCustomEvent());
  };

  var globalDragEndHandler = function globalDragEndHandler() {
    if (!onDragging.current) return;
    onDragging.current = false;
    dragEndHandler(getCustomEvent());
  };

  React$1.useEffect(function () {
    if (!elementRef || !elementRef.current) return;
    elementRef.current.addEventListener('mousedown', elementMouseDownHandler);
    elementRef.current.addEventListener('touchstart', elementMouseDownHandler);
    window.addEventListener('mousemove', globalDraggingHandler);
    window.addEventListener('touchmove', globalDraggingHandler);
    window.addEventListener('mouseup', globalDragEndHandler);
    window.addEventListener('touchend', globalDragEndHandler);
    return function () {
      window.removeEventListener('mousemove', globalDraggingHandler);
      window.removeEventListener('touchmove', globalDraggingHandler);
      window.removeEventListener('mouseup', globalDragEndHandler);
      window.removeEventListener('touchend', globalDragEndHandler);
      if (!elementRef || !elementRef.current) return;
      elementRef.current.removeEventListener('mousedown', elementMouseDownHandler);
      elementRef.current.removeEventListener('touchstart', elementMouseDownHandler);
    };
  }, [elementRef]);
};

var defaultProps$l = {
  left: 0,
  disabled: false,
  isClick: false
};
var SliderDot = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      left = _ref.left,
      isClick = _ref.isClick;
  var theme = useTheme();
  var classes = useClasses('dot', {
    disabled: disabled,
    click: isClick
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    className: style.dynamic([["3479628597", [left, theme.palette.success, theme.palette.background, theme.palette.accents_2, theme.palette.accents_4]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3479628597",
    dynamic: [left, theme.palette.success, theme.palette.background, theme.palette.accents_2, theme.palette.accents_4]
  }, ".dot.__jsx-style-dynamic-selector{position:absolute;left:".concat(left, "%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:calc(var(--slider-font-size) * 1.25);min-width:calc(var(--slider-font-size) * 1.25);line-height:calc(var(--slider-font-size) * 1.25);border-radius:calc(var(--slider-font-size) * 0.625);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;font-size:calc(var(--slider-font-size) * 0.75);z-index:100;background-color:").concat(theme.palette.success, ";color:").concat(theme.palette.background, ";text-align:center;padding:0 calc(0.57 * var(--slider-font-size));}.dot.disabled.__jsx-style-dynamic-selector{cursor:not-allowed !important;background-color:").concat(theme.palette.accents_2, ";color:").concat(theme.palette.accents_4, ";}.dot.click.__jsx-style-dynamic-selector{-webkit-transition:all 200ms ease;transition:all 200ms ease;}.dot.__jsx-style-dynamic-selector:hover{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.dot.__jsx-style-dynamic-selector:active{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing;}")));
});
SliderDot.defaultProps = defaultProps$l;
SliderDot.displayName = 'GeistSliderDot';

var getMarks = function getMarks(min, max, step) {
  var value = max - min;
  var roundFunc = !(value % step) ? Math.floor : Math.ceil;
  var count = roundFunc(value / step) - 1;
  if (count >= 99) return [];
  return _toConsumableArray(new Array(count)).map(function (_, index) {
    return step * (index + 1) * 100 / value;
  });
};

var SliderMark = function SliderMark(_ref) {
  var step = _ref.step,
      max = _ref.max,
      min = _ref.min;
  var theme = useTheme();
  var marks = React$1.useMemo(function () {
    return getMarks(min, max, step);
  }, [min, max, step]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, marks.map(function (val, index) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      key: "".concat(val, "-").concat(index),
      style: {
        left: "".concat(val, "%")
      },
      className: style.dynamic([["324900419", [theme.palette.background]]])
    });
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "324900419",
    dynamic: [theme.palette.background]
  }, "span.__jsx-style-dynamic-selector{position:absolute;width:2px;height:100%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:".concat(theme.palette.background, ";}")));
};

var getColors$2 = function getColors(palette, status) {
  var colors = {
    "default": {
      bg: palette.accents_8
    },
    secondary: {
      bg: palette.accents_8
    },
    success: {
      bg: palette.success
    },
    warning: {
      bg: palette.warning
    },
    error: {
      bg: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var _excluded$e = ["hideValue", "disabled", "type", "step", "max", "min", "initialValue", "value", "onChange", "className", "showMarkers"];
var defaultProps$k = {
  hideValue: false,
  type: 'default',
  initialValue: 0,
  step: 1,
  min: 0,
  max: 100,
  disabled: false,
  showMarkers: false,
  className: ''
};

var getRefWidth = function getRefWidth(elementRef) {
  if (!elementRef || !elementRef.current) return 0;
  var rect = elementRef.current.getBoundingClientRect();
  return rect.width || rect.right - rect.left;
};

var getValue = function getValue(max, min, step, offsetX, railWidth) {
  if (offsetX < 0) return min;
  if (offsetX > railWidth) return max;
  var widthForEachStep = railWidth / (max - min) * step;
  if (widthForEachStep <= 0) return min;
  var slideDistance = Math.round(offsetX / widthForEachStep) * step + min;
  return Number.isInteger(slideDistance) ? slideDistance : Number.parseFloat(slideDistance.toFixed(1));
};

var SliderComponent = function SliderComponent(_ref) {
  var hideValue = _ref.hideValue,
      disabled = _ref.disabled,
      type = _ref.type,
      step = _ref.step,
      max = _ref.max,
      min = _ref.min,
      initialValue = _ref.initialValue,
      customValue = _ref.value,
      onChange = _ref.onChange,
      className = _ref.className,
      showMarkers = _ref.showMarkers,
      props = _objectWithoutProperties(_ref, _excluded$e);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useCurrentState = useCurrentState(0),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setSliderWidth = _useCurrentState2[1],
      sideWidthRef = _useCurrentState2[2];

  var _useCurrentState3 = useCurrentState(0),
      _useCurrentState4 = _slicedToArray(_useCurrentState3, 3),
      setLastDargOffset = _useCurrentState4[1],
      lastDargOffsetRef = _useCurrentState4[2];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isClick = _useState4[0],
      setIsClick = _useState4[1];

  var sliderRef = React$1.useRef(null);
  var dotRef = React$1.useRef(null);
  var currentRatio = React$1.useMemo(function () {
    return (value - min) / (max - min) * 100;
  }, [value, max, min]);

  var setLastOffsetManually = function setLastOffsetManually(val) {
    var width = getRefWidth(sliderRef);
    var shouldOffset = (val - min) / (max - min) * width;
    setLastDargOffset(shouldOffset);
  };

  var updateValue = React$1.useCallback(function (offset) {
    var currentValue = getValue(max, min, step, offset, sideWidthRef.current);
    setValue(currentValue);
    onChange && onChange(currentValue);
  }, [max, min, step, sideWidthRef]);

  var _useMemo = React$1.useMemo(function () {
    return getColors$2(theme.palette, type);
  }, [theme.palette, type]),
      bg = _useMemo.bg;

  var dragHandler = function dragHandler(event) {
    if (disabled) return;
    var currentOffset = event.currentX - event.startX;
    var offset = currentOffset + lastDargOffsetRef.current;
    updateValue(offset);
  };

  var dragStartHandler = function dragStartHandler() {
    setIsClick(false);
    setSliderWidth(getRefWidth(sliderRef));
  };

  var dragEndHandler = function dragEndHandler(event) {
    if (disabled) return;
    var offset = event.currentX - event.startX;
    var currentOffset = offset + lastDargOffsetRef.current;
    var boundOffset = currentOffset < 0 ? 0 : Math.min(currentOffset, sideWidthRef.current);
    setLastDargOffset(boundOffset);
  };

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    if (!sliderRef || !sliderRef.current) return;
    setIsClick(true);
    setSliderWidth(getRefWidth(sliderRef));
    var clickOffset = event.clientX - sliderRef.current.getBoundingClientRect().x;
    setLastDargOffset(clickOffset);
    updateValue(clickOffset);
  };

  useDrag(dotRef, dragHandler, dragStartHandler, dragEndHandler);
  React$1.useEffect(function () {
    if (customValue === undefined) return;
    if (customValue === value) return;
    setValue(customValue);
  }, [customValue, value]);
  React$1.useEffect(function () {
    initialValue && setLastOffsetManually(initialValue);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler,
    ref: sliderRef
  }, props, {
    className: style.dynamic([["219401708", [disabled ? theme.palette.accents_2 : bg, disabled ? 'not-allow' : 'pointer', SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(0.5), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('slider', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement(SliderDot, {
    disabled: disabled,
    ref: dotRef,
    isClick: isClick,
    left: currentRatio
  }, hideValue || value), showMarkers && /*#__PURE__*/React__default["default"].createElement(SliderMark, {
    max: max,
    min: min,
    step: step
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "219401708",
    dynamic: [disabled ? theme.palette.accents_2 : bg, disabled ? 'not-allow' : 'pointer', SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(0.5), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".slider.__jsx-style-dynamic-selector{border-radius:50px;background-color:".concat(disabled ? theme.palette.accents_2 : bg, ";position:relative;cursor:").concat(disabled ? 'not-allow' : 'pointer', ";--slider-font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(0.5), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

SliderComponent.defaultProps = defaultProps$k;
SliderComponent.displayName = 'GeistSlider';
withScale(SliderComponent);

var getStyles = function getStyles(type, palette, fill) {
  var styles = {
    "default": {
      color: palette.foreground,
      border: palette.border,
      bgColor: palette.background
    },
    success: {
      color: palette.success,
      border: palette.success,
      bgColor: palette.background
    },
    warning: {
      color: palette.warning,
      border: palette.warning,
      bgColor: palette.background
    },
    error: {
      color: palette.error,
      border: palette.error,
      bgColor: palette.background
    },
    secondary: {
      color: palette.secondary,
      border: palette.secondary,
      bgColor: palette.background
    },
    lite: {
      color: palette.foreground,
      border: palette.border,
      bgColor: palette.accents_1
    },
    dark: {
      color: palette.background,
      border: palette.foreground,
      bgColor: palette.foreground
    }
  };
  var filledTypes = ['success', 'warning', 'error', 'secondary'];
  var style = styles[type];
  var shouldFilled = filledTypes.includes(type);
  if (!fill || !shouldFilled) return style;
  return _extends({}, style, {
    color: style.bgColor,
    bgColor: style.color
  });
};

var SnippetIconComponent = function SnippetIconComponent() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    style: {
      color: 'currentcolor'
    },
    className: "jsx-418323402"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z",
    className: "jsx-418323402"
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "418323402"
  }, "svg.jsx-418323402{width:calc(var(--snippet-font-size) * 1.69);height:calc(var(--snippet-font-size) * 1.69);}"));
};

SnippetIconComponent.displayName = 'GeistSnippetIcon';
var SnippetIcon = /*#__PURE__*/React__default["default"].memo(SnippetIconComponent);

var defaultOptions = {
  onError: function onError() {
    return useWarning('Failed to copy.', 'use-clipboard');
  }
};

var useClipboard = function useClipboard() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  var el = usePortal('clipboard');

  var copyText = function copyText(el, text) {
    if (!el || !text) return;
    var selection = window.getSelection();
    if (!selection) return;
    el.style.whiteSpace = 'pre';
    el.textContent = text;
    var range = window.document.createRange();
    selection.removeAllRanges();
    range.selectNode(el);
    selection.addRange(range);

    try {
      window.document.execCommand('copy');
    } catch (e) {
      options.onError && options.onError();
    }

    selection.removeAllRanges();

    if (el) {
      el.textContent = '';
    }
  };

  var copy = React$1.useCallback(function (text) {
    copyText(el, text);
  }, [el]);
  return {
    copy: copy
  };
};

var defaultToast = {
  delay: 2000,
  type: 'default'
};

var useToasts = function useToasts(layout) {
  var _useGeistUIContext = useGeistUIContext(),
      updateToasts = _useGeistUIContext.updateToasts,
      toasts = _useGeistUIContext.toasts,
      updateToastLayout = _useGeistUIContext.updateToastLayout,
      updateLastToastId = _useGeistUIContext.updateLastToastId;

  React$1.useEffect(function () {
    if (!layout) return;
    updateToastLayout(function () {
      return layout ? _extends({}, defaultToastLayout, layout) : defaultToastLayout;
    });
  }, []);

  var cancel = function cancel(internalId) {
    updateToasts(function (currentToasts) {
      return currentToasts.map(function (item) {
        if (item._internalIdent !== internalId) return item;
        return _extends({}, item, {
          visible: false
        });
      });
    });
    updateLastToastId(function () {
      return internalId;
    });
  };

  var removeAll = function removeAll() {
    updateToasts(function (last) {
      return last.map(function (toast) {
        return _extends({}, toast, {
          visible: false
        });
      });
    });
  };

  var findToastOneByID = function findToastOneByID(id) {
    return toasts.find(function (t) {
      return t.id === id;
    });
  };

  var removeToastOneByID = function removeToastOneByID(id) {
    updateToasts(function (last) {
      return last.map(function (toast) {
        if (toast.id !== id) return toast;
        return _extends({}, toast, {
          visible: false
        });
      });
    });
  };

  var setToast = function setToast(toast) {
    var internalIdent = "toast-".concat(getId());
    var delay = toast.delay || defaultToast.delay;

    if (toast.id) {
      var hasIdent = toasts.find(function (t) {
        return t.id === toast.id;
      });

      if (hasIdent) {
        throw new Error('Toast: Already have the same key: "ident"');
      }
    }

    updateToasts(function (last) {
      var newToast = {
        delay: delay,
        text: toast.text,
        visible: true,
        type: toast.type || defaultToast.type,
        id: toast.id || internalIdent,
        actions: toast.actions || [],
        _internalIdent: internalIdent,
        _timeout: window.setTimeout(function () {
          cancel(internalIdent);

          if (newToast._timeout) {
            window.clearTimeout(newToast._timeout);
            newToast._timeout = null;
          }
        }, delay),
        cancel: function (_cancel) {
          function cancel() {
            return _cancel.apply(this, arguments);
          }

          cancel.toString = function () {
            return _cancel.toString();
          };

          return cancel;
        }(function () {
          return cancel(internalIdent);
        })
      };
      return [].concat(_toConsumableArray(last), [newToast]);
    });
  };

  return {
    toasts: toasts,
    setToast: setToast,
    removeAll: removeAll,
    findToastOneByID: findToastOneByID,
    removeToastOneByID: removeToastOneByID
  };
};

var _excluded$d = ["type", "filled", "children", "symbol", "toastText", "toastType", "text", "copy", "className"];
var defaultProps$j = {
  filled: false,
  symbol: '$',
  toastText: 'Copied to clipboard!',
  toastType: 'success',
  copy: 'default',
  type: 'default',
  className: ''
};

var textArrayToString = function textArrayToString(text) {
  return text.reduce(function (pre, current) {
    if (!current) return pre;
    return pre ? "".concat(pre, "\n").concat(current) : current;
  }, '');
};

var SnippetComponent = function SnippetComponent(_ref) {
  var type = _ref.type,
      filled = _ref.filled,
      children = _ref.children,
      symbol = _ref.symbol,
      toastText = _ref.toastText,
      toastType = _ref.toastType,
      text = _ref.text,
      copyType = _ref.copy,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$d);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useClipboard = useClipboard(),
      copy = _useClipboard.copy;

  var _useToasts = useToasts(),
      setToast = _useToasts.setToast;

  var ref = React$1.useRef(null);
  var isMultiLine = text && Array.isArray(text);
  var style$1 = React$1.useMemo(function () {
    return getStyles(type, theme.palette, filled);
  }, [type, theme.palette, filled]);
  var showCopyIcon = React$1.useMemo(function () {
    return copyType !== 'prevent';
  }, [copyType]);
  var childText = React$1.useMemo(function () {
    if (isMultiLine) return textArrayToString(text);
    if (!children) return text;
    if (!ref.current) return '';
    return ref.current.textContent;
  }, [ref.current, children, text]);
  var symbolBefore = React$1.useMemo(function () {
    var str = symbol.trim();
    return str ? "".concat(str, " ") : '';
  }, [symbol]);

  var clickHandler = function clickHandler() {
    if (!childText || !showCopyIcon) return;
    copy(childText);
    if (copyType === 'silent') return;
    setToast({
      text: toastText,
      type: toastType
    });
  };

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["2394272060", [style$1.color, style$1.bgColor, style$1.border, theme.layout.radius, SCALES.font(0.8125), SCALES.pt(0.667), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(2.667), SCALES.pb(0.667), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), style$1.color, symbolBefore, style$1.bgColor, isMultiLine ? 'flex-start' : 'center', theme.layout.radius, isMultiLine ? 'var(--snippet-padding-top)' : 0]]]) + " " + (props && props.className != null && props.className || useClasses('snippet', className) || "")
  }), isMultiLine ? text.map(function (t, index) {
    return /*#__PURE__*/React__default["default"].createElement("pre", {
      key: "snippet-".concat(index, "-").concat(t),
      className: style.dynamic([["2394272060", [style$1.color, style$1.bgColor, style$1.border, theme.layout.radius, SCALES.font(0.8125), SCALES.pt(0.667), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(2.667), SCALES.pb(0.667), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), style$1.color, symbolBefore, style$1.bgColor, isMultiLine ? 'flex-start' : 'center', theme.layout.radius, isMultiLine ? 'var(--snippet-padding-top)' : 0]]])
    }, t);
  }) : /*#__PURE__*/React__default["default"].createElement("pre", {
    ref: ref,
    className: style.dynamic([["2394272060", [style$1.color, style$1.bgColor, style$1.border, theme.layout.radius, SCALES.font(0.8125), SCALES.pt(0.667), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(2.667), SCALES.pb(0.667), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), style$1.color, symbolBefore, style$1.bgColor, isMultiLine ? 'flex-start' : 'center', theme.layout.radius, isMultiLine ? 'var(--snippet-padding-top)' : 0]]])
  }, children || text), showCopyIcon && /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: clickHandler,
    className: style.dynamic([["2394272060", [style$1.color, style$1.bgColor, style$1.border, theme.layout.radius, SCALES.font(0.8125), SCALES.pt(0.667), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(2.667), SCALES.pb(0.667), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), style$1.color, symbolBefore, style$1.bgColor, isMultiLine ? 'flex-start' : 'center', theme.layout.radius, isMultiLine ? 'var(--snippet-padding-top)' : 0]]]) + " " + "copy"
  }, /*#__PURE__*/React__default["default"].createElement(SnippetIcon, null)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2394272060",
    dynamic: [style$1.color, style$1.bgColor, style$1.border, theme.layout.radius, SCALES.font(0.8125), SCALES.pt(0.667), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(2.667), SCALES.pb(0.667), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), style$1.color, symbolBefore, style$1.bgColor, isMultiLine ? 'flex-start' : 'center', theme.layout.radius, isMultiLine ? 'var(--snippet-padding-top)' : 0]
  }, ".snippet.__jsx-style-dynamic-selector{position:relative;max-width:100%;color:".concat(style$1.color, ";background-color:").concat(style$1.bgColor, ";border:1px solid ").concat(style$1.border, ";border-radius:").concat(theme.layout.radius, ";--snippet-font-size:").concat(SCALES.font(0.8125), ";--snippet-padding-top:").concat(SCALES.pt(0.667), ";font-size:var(--snippet-font-size);width:").concat(SCALES.width(1, 'initial'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.667), " ").concat(SCALES.pr(2.667), " ").concat(SCALES.pb(0.667), " ").concat(SCALES.pl(0.667), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}pre.__jsx-style-dynamic-selector{margin:0;padding:0;border:none;background-color:transparent;color:").concat(style$1.color, ";font-size:inherit;}pre.__jsx-style-dynamic-selector::before{content:'").concat(symbolBefore, "';-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}pre.__jsx-style-dynamic-selector *{margin:0;padding:0;font-size:inherit;color:inherit;}.copy.__jsx-style-dynamic-selector{position:absolute;right:0;top:0;bottom:0;height:calc(100% - 2px);background-color:").concat(style$1.bgColor, ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:").concat(isMultiLine ? 'flex-start' : 'center', ";-webkit-box-align:").concat(isMultiLine ? 'flex-start' : 'center', ";-ms-flex-align:").concat(isMultiLine ? 'flex-start' : 'center', ";align-items:").concat(isMultiLine ? 'flex-start' : 'center', ";width:calc(3.281 * var(--snippet-font-size));color:inherit;-webkit-transition:opacity 150ms ease 0s;transition:opacity 150ms ease 0s;border-radius:").concat(theme.layout.radius, ";cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:").concat(isMultiLine ? 'var(--snippet-padding-top)' : 0, ";opacity:0.65;}.copy.__jsx-style-dynamic-selector:hover{opacity:1;}")));
};

SnippetComponent.defaultProps = defaultProps$j;
SnippetComponent.displayName = 'GeistSnippet';
withScale(SnippetComponent);

var _excluded$c = ["inline", "className"];
var defaultProps$i = {
  inline: false,
  className: ''
};

var SpacerComponent = function SpacerComponent(_ref) {
  var inline = _ref.inline,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["1994396435", [inline ? 'inline-block' : 'block', SCALES.width(1), SCALES.height(1), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1994396435",
    dynamic: [inline ? 'inline-block' : 'block', SCALES.width(1), SCALES.height(1), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "span.__jsx-style-dynamic-selector{display:".concat(inline ? 'inline-block' : 'block', ";width:").concat(SCALES.width(1), ";height:").concat(SCALES.height(1), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

SpacerComponent.defaultProps = defaultProps$i;
SpacerComponent.displayName = 'GeistSpacer';
withScale(SpacerComponent);

var _excluded$b = ["className"];
var defaultProps$h = {
  className: ''
};

var getSpans = function getSpans(theme) {
  return _toConsumableArray(new Array(12)).map(function (_, index) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      key: "spinner-".concat(index),
      className: style.dynamic([["3296107463", [theme.palette.foreground, theme.layout.radius]]])
    }, /*#__PURE__*/React__default["default"].createElement(style, {
      id: "3296107463",
      dynamic: [theme.palette.foreground, theme.layout.radius]
    }, "span.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.foreground, ";position:absolute;top:-3.9%;width:24%;height:8%;left:-10%;border-radius:").concat(theme.layout.radius, ";-webkit-animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;}span.__jsx-style-dynamic-selector:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s;-webkit-transform:rotate(0deg) translate(146%);-ms-transform:rotate(0deg) translate(146%);transform:rotate(0deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s;-webkit-transform:rotate(30deg) translate(146%);-ms-transform:rotate(30deg) translate(146%);transform:rotate(30deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(60deg) translate(146%);-ms-transform:rotate(60deg) translate(146%);transform:rotate(60deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(4){-webkit-animation-delay:-0.9s;animation-delay:-0.9s;-webkit-transform:rotate(90deg) translate(146%);-ms-transform:rotate(90deg) translate(146%);transform:rotate(90deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(5){-webkit-animation-delay:-0.8s;animation-delay:-0.8s;-webkit-transform:rotate(120deg) translate(146%);-ms-transform:rotate(120deg) translate(146%);transform:rotate(120deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(6){-webkit-animation-delay:-0.7s;animation-delay:-0.7s;-webkit-transform:rotate(150deg) translate(146%);-ms-transform:rotate(150deg) translate(146%);transform:rotate(150deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(7){-webkit-animation-delay:-0.6s;animation-delay:-0.6s;-webkit-transform:rotate(180deg) translate(146%);-ms-transform:rotate(180deg) translate(146%);transform:rotate(180deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(8){-webkit-animation-delay:-0.5s;animation-delay:-0.5s;-webkit-transform:rotate(210deg) translate(146%);-ms-transform:rotate(210deg) translate(146%);transform:rotate(210deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(9){-webkit-animation-delay:-0.4s;animation-delay:-0.4s;-webkit-transform:rotate(240deg) translate(146%);-ms-transform:rotate(240deg) translate(146%);transform:rotate(240deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(10){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;-webkit-transform:rotate(270deg) translate(146%);-ms-transform:rotate(270deg) translate(146%);transform:rotate(270deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(11){-webkit-animation-delay:-0.2s;animation-delay:-0.2s;-webkit-transform:rotate(300deg) translate(146%);-ms-transform:rotate(300deg) translate(146%);transform:rotate(300deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(12){-webkit-animation-delay:-0.1s;animation-delay:-0.1s;-webkit-transform:rotate(330deg) translate(146%);-ms-transform:rotate(330deg) translate(146%);transform:rotate(330deg) translate(146%);}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}@keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}")));
  });
};

var SpinnerComponent = function SpinnerComponent(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$b);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('spinner', className);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "container"
  }, getSpans(theme)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1153799566",
    dynamic: [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".spinner.__jsx-style-dynamic-selector{display:block;box-sizing:border-box;width:".concat(SCALES.width(1.25), ";height:").concat(SCALES.height(1.25), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.container.__jsx-style-dynamic-selector{width:100%;height:100%;position:relative;left:50%;top:50%;}")));
};

SpinnerComponent.defaultProps = defaultProps$h;
SpinnerComponent.displayName = 'GeistSpinner';
withScale(SpinnerComponent);

var defaultProps$g = {
  className: ''
};

var makeColgroup = function makeColgroup(width, columns) {
  var unsetWidthCount = columns.filter(function (c) {
    return !c.width;
  }).length;
  var customWidthTotal = columns.reduce(function (pre, current) {
    return current.width ? pre + current.width : pre;
  }, 0);
  var averageWidth = (width - customWidthTotal) / unsetWidthCount;
  if (averageWidth <= 0) return /*#__PURE__*/React__default["default"].createElement("colgroup", null);
  return /*#__PURE__*/React__default["default"].createElement("colgroup", null, columns.map(function (column, index) {
    return /*#__PURE__*/React__default["default"].createElement("col", {
      key: "colgroup-".concat(index),
      width: column.width || averageWidth
    });
  }));
};

var TableHead = function TableHead(props) {
  var theme = useTheme();
  var _ref = props,
      columns = _ref.columns,
      width = _ref.width;
  var isScalableWidth = React$1.useMemo(function () {
    return columns.find(function (item) {
      return !!item.width;
    });
  }, [columns]);
  var colgroup = React$1.useMemo(function () {
    if (!isScalableWidth) return /*#__PURE__*/React__default["default"].createElement("colgroup", null);
    return makeColgroup(width, columns);
  }, [isScalableWidth, width]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, colgroup, /*#__PURE__*/React__default["default"].createElement("thead", {
    className: style.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React__default["default"].createElement("tr", {
    className: style.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]])
  }, columns.map(function (column, index) {
    return /*#__PURE__*/React__default["default"].createElement("th", {
      key: "table-th-".concat(column.prop, "-").concat(index),
      className: style.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]]) + " " + (column.className || "")
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: style.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]]) + " " + "thead-box"
    }, column.label));
  }))), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "134865897",
    dynamic: [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]
  }, "thead.__jsx-style-dynamic-selector{border-collapse:separate;border-spacing:0;font-size:inherit;}th.__jsx-style-dynamic-selector{padding:0 0.5em;font-size:calc(0.75 * var(--table-font-size));font-weight:normal;text-align:left;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;vertical-align:middle;min-height:calc(2.5 * var(--table-font-size));color:".concat(theme.palette.accents_5, ";background:").concat(theme.palette.accents_1, ";border-bottom:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-radius:0;}th.__jsx-style-dynamic-selector:nth-child(1){border-bottom:1px solid ").concat(theme.palette.border, ";border-left:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";}th.__jsx-style-dynamic-selector:last-child{border-bottom:1px solid ").concat(theme.palette.border, ";border-right:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.thead-box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-align:center;min-height:calc(2.5 * var(--table-font-size));text-transform:uppercase;}")));
};

TableHead.defaultProps = defaultProps$g;
TableHead.displayName = 'GeistTableHead';

var TableCell = function TableCell(_ref) {
  var columns = _ref.columns,
      row = _ref.row,
      rowIndex = _ref.rowIndex,
      emptyText = _ref.emptyText,
      onCellClick = _ref.onCellClick;

  /* eslint-disable react/jsx-no-useless-fragment */
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, columns.map(function (column, index) {
    var currentRowValue = row[column.prop];
    var cellValue = currentRowValue || emptyText;
    var shouldBeRenderElement = column.renderHandler(currentRowValue, row, rowIndex);
    return /*#__PURE__*/React__default["default"].createElement("td", {
      key: "row-td-".concat(index, "-").concat(column.prop),
      onClick: function onClick() {
        return onCellClick && onCellClick(currentRowValue, rowIndex, index);
      },
      className: column.className
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "cell"
    }, shouldBeRenderElement ? shouldBeRenderElement : cellValue));
  }));
  /* eslint-enable */
};

var defaultContext$2 = {
  columns: [],
  updateColumn: function updateColumn() {}
};
var TableContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$2);
var useTableContext = function useTableContext() {
  return React__default["default"].useContext(TableContext);
};

var defaultProps$f = {
  className: ''
};

var TableBody = function TableBody(_ref) {
  var data = _ref.data,
      hover = _ref.hover,
      emptyText = _ref.emptyText,
      onRow = _ref.onRow,
      onCell = _ref.onCell,
      rowClassName = _ref.rowClassName;
  var theme = useTheme();

  var _useTableContext = useTableContext(),
      columns = _useTableContext.columns;

  var rowClickHandler = function rowClickHandler(row, index) {
    onRow && onRow(row, index);
  };

  return /*#__PURE__*/React__default["default"].createElement("tbody", {
    className: style.dynamic([["3433300570", [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]]])
  }, data.map(function (row, index) {
    var className = rowClassName(row, index);
    return /*#__PURE__*/React__default["default"].createElement("tr", {
      key: "tbody-row-".concat(index),
      onClick: function onClick() {
        return rowClickHandler(row, index);
      },
      className: style.dynamic([["3433300570", [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]]]) + " " + (useClasses({
        hover: hover
      }, className) || "")
    }, /*#__PURE__*/React__default["default"].createElement(TableCell, {
      columns: columns,
      row: row,
      rowIndex: index,
      emptyText: emptyText,
      onCellClick: onCell
    }));
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3433300570",
    dynamic: [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]
  }, "tr.__jsx-style-dynamic-selector{-webkit-transition:background-color 0.25s ease;transition:background-color 0.25s ease;font-size:inherit;}tr.hover.__jsx-style-dynamic-selector:hover{background-color:".concat(theme.palette.accents_1, ";}tr.__jsx-style-dynamic-selector td{padding:0 0.5em;border-bottom:1px solid ").concat(theme.palette.border, ";color:").concat(theme.palette.accents_6, ";font-size:calc(0.875 * var(--table-font-size));text-align:left;}tr.__jsx-style-dynamic-selector .cell{min-height:calc(3.125 * var(--table-font-size));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}")));
};

TableBody.defaultProps = defaultProps$f;
TableBody.displayName = 'GeistTableBody';

var defaultProps$e = {
  className: '',
  render: function render() {}
};

var TableColumn = function TableColumn(columnProps) {
  var _ref = columnProps,
      children = _ref.children,
      prop = _ref.prop,
      label = _ref.label,
      width = _ref.width,
      className = _ref.className,
      renderHandler = _ref.render;

  var _useTableContext = useTableContext(),
      updateColumn = _useTableContext.updateColumn;

  var safeProp = "".concat(prop).trim();

  if (!safeProp) {
    useWarning('The props "prop" is required.', 'Table.Column');
  }

  React$1.useEffect(function () {
    updateColumn({
      label: children || label,
      prop: safeProp,
      width: width,
      className: className,
      renderHandler: renderHandler
    });
  }, [children, label, prop, width, className, renderHandler]);
  return null;
};

TableColumn.defaultProps = defaultProps$e;
TableColumn.displayName = 'GeistTableColumn';

var _excluded$a = ["children", "data", "initialData", "hover", "emptyText", "onRow", "onCell", "onChange", "className", "rowClassName"];
var defaultProps$d = {
  hover: true,
  initialData: [],
  emptyText: '',
  className: '',
  rowClassName: function rowClassName() {
    return '';
  }
};

function TableComponent(tableProps) {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  var _ref = tableProps,
      children = _ref.children,
      customData = _ref.data,
      initialData = _ref.initialData,
      hover = _ref.hover,
      emptyText = _ref.emptyText,
      onRow = _ref.onRow,
      onCell = _ref.onCell;
      _ref.onChange;
      var className = _ref.className,
      rowClassName = _ref.rowClassName,
      props = _objectWithoutProperties(_ref, _excluded$a);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = React$1.useRef(null);

  var _useRealShape = useRealShape(ref),
      _useRealShape2 = _slicedToArray(_useRealShape, 2),
      width = _useRealShape2[0].width,
      updateShape = _useRealShape2[1];

  var _useState = React$1.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = React$1.useState(initialData),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var updateColumn = function updateColumn(column) {
    setColumns(function (last) {
      var hasColumn = last.find(function (item) {
        return item.prop === column.prop;
      });
      if (!hasColumn) return [].concat(_toConsumableArray(last), [column]);
      return last.map(function (item) {
        if (item.prop !== column.prop) return item;
        return column;
      });
    });
  };

  var contextValue = React$1.useMemo(function () {
    return {
      columns: columns,
      updateColumn: updateColumn
    };
  }, [columns]);
  React$1.useEffect(function () {
    if (typeof customData === 'undefined') return;
    setData(customData);
  }, [customData]);
  useResize(function () {
    return updateShape();
  });
  return /*#__PURE__*/React__default["default"].createElement(TableContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React__default["default"].createElement("table", _extends({
    ref: ref
  }, props, {
    className: style.dynamic([["2132340556", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default["default"].createElement(TableHead, {
    columns: columns,
    width: width
  }), /*#__PURE__*/React__default["default"].createElement(TableBody, {
    data: data,
    hover: hover,
    emptyText: emptyText,
    onRow: onRow,
    onCell: onCell,
    rowClassName: rowClassName
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "2132340556",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "table.__jsx-style-dynamic-selector{border-collapse:separate;border-spacing:0;--table-font-size:".concat(SCALES.font(1), ";font-size:var(--table-font-size);width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}"))));
}

TableComponent.defaultProps = defaultProps$d;
TableComponent.displayName = 'GeistTable';
TableComponent.Column = TableColumn;
var Table = withScale(TableComponent);
Table.Column = TableColumn;

var defaultContext$1 = {
  inGroup: false
};
var TabsContext = /*#__PURE__*/React__default["default"].createContext(defaultContext$1);
var useTabsContext = function useTabsContext() {
  return React__default["default"].useContext(TabsContext);
};

var usePrevious = function usePrevious(state) {
  var ref = React$1.useRef(null);
  React$1.useEffect(function () {
    ref.current = state;
  });
  return ref ? ref.current : null;
};

var _excluded$9 = ["rect", "visible", "hoverHeightRatio", "hoverWidthRatio", "activeOpacity", "className"];

var Highlight = function Highlight(_ref) {
  var rect = _ref.rect,
      visible = _ref.visible,
      _ref$hoverHeightRatio = _ref.hoverHeightRatio,
      hoverHeightRatio = _ref$hoverHeightRatio === void 0 ? 1 : _ref$hoverHeightRatio,
      _ref$hoverWidthRatio = _ref.hoverWidthRatio,
      hoverWidthRatio = _ref$hoverWidthRatio === void 0 ? 1 : _ref$hoverWidthRatio,
      _ref$activeOpacity = _ref.activeOpacity,
      activeOpacity = _ref$activeOpacity === void 0 ? 0.8 : _ref$activeOpacity,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$9);

  var theme = useTheme();
  var ref = React$1.useRef(null);
  var isFirstVisible = usePrevious(isUnplacedRect(rect));
  var position = React$1.useMemo(function () {
    var width = rect.width * hoverWidthRatio;
    var height = rect.height * hoverHeightRatio;
    return {
      width: "".concat(width, "px"),
      left: "".concat(rect.left + (rect.width - width) / 2, "px"),
      height: "".concat(height, "px"),
      top: "".concat(rect.elementTop + (rect.height - height) / 2, "px"),
      transition: isFirstVisible ? 'opacity' : 'opacity, width, left, top'
    };
  }, [rect, hoverWidthRatio, hoverHeightRatio]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: ref
  }, props, {
    className: style.dynamic([["603024321", [theme.palette.accents_2, position.width, position.left, position.height, position.top, visible ? activeOpacity : 0, position.transition]]]) + " " + (props && props.className != null && props.className || useClasses('highlight', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "603024321",
    dynamic: [theme.palette.accents_2, position.width, position.left, position.height, position.top, visible ? activeOpacity : 0, position.transition]
  }, ".highlight.__jsx-style-dynamic-selector{background:".concat(theme.palette.accents_2, ";position:absolute;border-radius:5px;width:").concat(position.width, ";left:").concat(position.left, ";height:").concat(position.height, ";top:").concat(position.top, ";opacity:").concat(visible ? activeOpacity : 0, ";-webkit-transition:0.15s ease;transition:0.15s ease;-webkit-transition-property:").concat(position.transition, ";transition-property:").concat(position.transition, ";}")));
};

var _excluded$8 = ["initialValue", "value", "hideDivider", "hideBorder", "children", "onChange", "className", "leftSpace", "highlight", "hoverHeightRatio", "hoverWidthRatio", "activeClassName", "activeStyle", "align"];
var defaultProps$c = {
  className: '',
  hideDivider: false,
  highlight: true,
  leftSpace: '12px',
  hoverHeightRatio: 0.7,
  hoverWidthRatio: 1.15,
  activeClassName: '',
  activeStyle: {},
  align: 'left'
};

var TabsComponent = function TabsComponent(_ref) {
  var userCustomInitialValue = _ref.initialValue,
      value = _ref.value,
      hideDivider = _ref.hideDivider,
      hideBorder = _ref.hideBorder,
      children = _ref.children,
      onChange = _ref.onChange,
      className = _ref.className,
      leftSpace = _ref.leftSpace,
      highlight = _ref.highlight,
      hoverHeightRatio = _ref.hoverHeightRatio,
      hoverWidthRatio = _ref.hoverWidthRatio,
      activeClassName = _ref.activeClassName,
      activeStyle = _ref.activeStyle,
      align = _ref.align,
      props = _objectWithoutProperties(_ref, _excluded$8);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      tabs = _useState2[0],
      setTabs = _useState2[1];

  var _useState3 = React$1.useState(userCustomInitialValue),
      _useState4 = _slicedToArray(_useState3, 2),
      selfValue = _useState4[0],
      setSelfValue = _useState4[1];

  var ref = React$1.useRef(null);

  var _useState5 = React$1.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      displayHighlight = _useState6[0],
      setDisplayHighlight = _useState6[1];

  var _useRect = useRect(),
      rect = _useRect.rect,
      setRect = _useRect.setRect;

  var register = function register(next) {
    setTabs(function (last) {
      var hasItem = last.find(function (item) {
        return item.value === next.value;
      });
      if (!hasItem) return [].concat(_toConsumableArray(last), [next]);
      return last.map(function (item) {
        if (item.value !== next.value) return item;
        return _extends({}, item, next);
      });
    });
  };

  var initialValue = React$1.useMemo(function () {
    return {
      register: register,
      currentValue: selfValue,
      inGroup: true,
      leftSpace: leftSpace
    };
  }, [selfValue, leftSpace]);
  React$1.useEffect(function () {
    if (typeof value === 'undefined') return;
    setSelfValue(value);
  }, [value]);

  var clickHandler = function clickHandler(value) {
    setSelfValue(value);
    onChange && onChange(value);
  };

  var tabItemMouseOverHandler = function tabItemMouseOverHandler(event) {
    if (!isGeistElement(event.target)) return;
    setRect(event, function () {
      return ref.current;
    });

    if (highlight) {
      setDisplayHighlight(true);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(TabsContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["1340018565", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]]]) + " " + (props && props.className != null && props.className || useClasses('tabs', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("header", {
    ref: ref,
    onMouseLeave: function onMouseLeave() {
      return setDisplayHighlight(false);
    },
    className: style.dynamic([["1340018565", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]]])
  }, /*#__PURE__*/React__default["default"].createElement(Highlight, {
    rect: rect,
    visible: displayHighlight,
    hoverHeightRatio: hoverHeightRatio,
    hoverWidthRatio: hoverWidthRatio
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1340018565", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]]]) + " " + (useClasses('scroll-container', {
      'hide-divider': hideDivider
    }) || "")
  }, tabs.map(function (_ref2) {
    var Cell = _ref2.cell,
        value = _ref2.value;
    return /*#__PURE__*/React__default["default"].createElement(Cell, {
      key: value,
      onClick: clickHandler,
      onMouseOver: tabItemMouseOverHandler,
      activeClassName: activeClassName,
      activeStyle: activeStyle,
      hideBorder: hideBorder,
      className: style.dynamic([["1340018565", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]]])
    });
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1340018565", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]]]) + " " + "content"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1340018565",
    dynamic: [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), align, theme.palette.border, leftSpace]
  }, ".tabs.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'initial'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;overflow-x:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;position:relative;}.scroll-container.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:").concat(align, ";-webkit-justify-content:").concat(align, ";-ms-flex-pack:").concat(align, ";justify-content:").concat(align, ";border-bottom:1px solid ").concat(theme.palette.border, ";padding-left:").concat(leftSpace, ";}header.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.hide-divider.__jsx-style-dynamic-selector{border-color:transparent;}.content.__jsx-style-dynamic-selector{padding-top:0.625rem;}"))));
};

TabsComponent.defaultProps = defaultProps$c;
TabsComponent.displayName = 'GeistTabs';
var Tabs = withScale(TabsComponent);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defaultProps$b = {
  disabled: false
};

var TabsItemComponent = function TabsItemComponent(_ref) {
  var children = _ref.children,
      value = _ref.value,
      label = _ref.label,
      disabled = _ref.disabled;

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useTabsContext = useTabsContext(),
      register = _useTabsContext.register,
      currentValue = _useTabsContext.currentValue;

  var isActive = React$1.useMemo(function () {
    return currentValue === value;
  }, [currentValue, value]);

  var TabsInternalCell = function TabsInternalCell(_ref2) {
    var _useClasses;

    var onClick = _ref2.onClick,
        onMouseOver = _ref2.onMouseOver,
        activeClassName = _ref2.activeClassName,
        activeStyle = _ref2.activeStyle,
        hideBorder = _ref2.hideBorder;
    var theme = useTheme();
    var ref = React$1.useRef(null);

    var _useTabsContext2 = useTabsContext(),
        currentValue = _useTabsContext2.currentValue;

    var active = currentValue === value;
    var classes = useClasses('tab', (_useClasses = {
      active: active,
      disabled: disabled
    }, _defineProperty(_useClasses, activeClassName, active), _defineProperty(_useClasses, 'hide-border', hideBorder), _useClasses));

    var clickHandler = function clickHandler() {
      if (disabled) return;
      onClick && onClick(value);
    };

    return /*#__PURE__*/React__default["default"].createElement("div", {
      ref: ref,
      role: "button",
      key: value,
      onMouseOver: onMouseOver,
      onClick: clickHandler,
      style: active ? activeStyle : {},
      "data-geist": "tab-item",
      className: style.dynamic([["2444688710", [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.55), SCALES.pb(0.875), SCALES.pl(0.55), SCALES.mt(0), SCALES.mr(0.2), SCALES.mb(0), SCALES.ml(0.2), SCALES.pl(0.28), SCALES.pr(0.28), theme.palette.foreground, theme.palette.foreground, theme.palette.foreground, theme.palette.accents_3, label]]]) + " " + (classes || "")
    }, label, /*#__PURE__*/React__default["default"].createElement(style, {
      id: "2444688710",
      dynamic: [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.55), SCALES.pb(0.875), SCALES.pl(0.55), SCALES.mt(0), SCALES.mr(0.2), SCALES.mb(0), SCALES.ml(0.2), SCALES.pl(0.28), SCALES.pr(0.28), theme.palette.foreground, theme.palette.foreground, theme.palette.foreground, theme.palette.accents_3, label]
    }, ".tab.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;cursor:pointer;outline:0;text-transform:capitalize;white-space:nowrap;background-color:transparent;color:".concat(theme.palette.accents_5, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:").concat(SCALES.font(0.875), ";line-height:normal;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.875), " ").concat(SCALES.pr(0.55), " ").concat(SCALES.pb(0.875), " ").concat(SCALES.pl(0.55), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0.2), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0.2), ";z-index:1;--tabs-item-hover-left:calc(-1 * ").concat(SCALES.pl(0.28), ");--tabs-item-hover-right:calc(-1 * ").concat(SCALES.pr(0.28), ");}.tab.__jsx-style-dynamic-selector:hover{color:").concat(theme.palette.foreground, ";}.tab.__jsx-style-dynamic-selector:after{position:absolute;content:'';bottom:-1px;left:0;right:0;width:100%;height:2px;border-radius:4px;-webkit-transform:scaleX(0.75);-ms-transform:scaleX(0.75);transform:scaleX(0.75);background-color:").concat(theme.palette.foreground, ";-webkit-transition:opacity,-webkit-transform 200ms ease-in;-webkit-transition:opacity,transform 200ms ease-in;transition:opacity,transform 200ms ease-in;opacity:0;}.active.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.tab.__jsx-style-dynamic-selector svg{max-height:1em;margin-right:5px;}.tab.__jsx-style-dynamic-selector:first-of-type{margin-left:0;}.active.__jsx-style-dynamic-selector{color:").concat(theme.palette.foreground, ";}.disabled.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_3, ";cursor:not-allowed;}.hide-border.__jsx-style-dynamic-selector:before{display:block;content:").concat(label, ";font-weight:500;height:0;overflow:hidden;visibility:hidden;}.hide-border.__jsx-style-dynamic-selector:after{display:none;}.hide-border.active.__jsx-style-dynamic-selector{font-weight:500;}")));
  };

  TabsInternalCell.displayName = 'GeistTabsInternalCell';
  React$1.useEffect(function () {
    register && register({
      value: value,
      cell: TabsInternalCell
    });
  }, [value, label, disabled]);
  /* eslint-disable react/jsx-no-useless-fragment */

  return isActive ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children) : null;
};

TabsItemComponent.defaultProps = defaultProps$b;
TabsItemComponent.displayName = 'GeistTabsItem';
var TabsItem = withScale(TabsItemComponent);
/* eslint-enable */

Tabs.Item = TabsItem;
Tabs.Tab = TabsItem;

var _excluded$7 = ["type", "children", "className", "invert"];
var defaultProps$a = {
  type: 'default',
  invert: false,
  className: ''
};

var getColors$1 = function getColors(type, palette, invert) {
  var colors = {
    "default": {
      color: palette.foreground
    },
    success: {
      color: palette.success
    },
    warning: {
      color: palette.warning
    },
    error: {
      color: palette.error
    },
    secondary: {
      color: palette.secondary
    },
    dark: {
      color: palette.foreground,
      bgColor: palette.background
    },
    lite: {
      color: palette.foreground,
      bgColor: palette.accents_2
    }
  };
  var hideBorder = invert || type === 'lite';

  var cardStyle = _extends({}, colors[type], {
    bgColor: colors[type].bgColor || palette.background,
    borderColor: hideBorder ? 'transparent' : colors[type].color
  });

  return !invert ? cardStyle : _extends({}, cardStyle, {
    color: cardStyle.bgColor,
    bgColor: cardStyle.color
  });
};

var TagComponent = function TagComponent(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      invert = _ref.invert,
      props = _objectWithoutProperties(_ref, _excluded$7);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useMemo = React$1.useMemo(function () {
    return getColors$1(type, theme.palette, invert);
  }, [type, theme.palette, invert]),
      color = _useMemo.color,
      bgColor = _useMemo.bgColor,
      borderColor = _useMemo.borderColor;

  return /*#__PURE__*/React__default["default"].createElement("span", _extends({}, props, {
    className: style.dynamic([["3652870078", [borderColor, bgColor, color, SCALES.height(0.3125), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1.75), SCALES.pt(0.375), SCALES.pr(0.375), SCALES.pb(0.375), SCALES.pl(0.375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3652870078",
    dynamic: [borderColor, bgColor, color, SCALES.height(0.3125), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1.75), SCALES.pt(0.375), SCALES.pr(0.375), SCALES.pb(0.375), SCALES.pl(0.375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "span.__jsx-style-dynamic-selector{display:inline-block;border:1px solid ".concat(borderColor, ";background-color:").concat(bgColor, ";color:").concat(color, ";box-sizing:border-box;line-height:1em;border-radius:").concat(SCALES.height(0.3125), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1.75), ";padding:").concat(SCALES.pt(0.375), " ").concat(SCALES.pr(0.375), " ").concat(SCALES.pb(0.375), " ").concat(SCALES.pl(0.375), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

TagComponent.defaultProps = defaultProps$a;
TagComponent.displayName = 'GeistTag';
withScale(TagComponent);

var _excluded$6 = ["children", "tag", "className", "type"];
var defaultProps$9 = {
  type: 'default',
  className: ''
};

var getTypeColor = function getTypeColor(type, palette) {
  var colors = {
    "default": 'inherit',
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return colors[type] || colors["default"];
};

var TextChild = function TextChild(_ref) {
  var children = _ref.children,
      tag = _ref.tag,
      className = _ref.className,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded$6);

  var Component = tag;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var font = getScaleProps('font');
  var mx = getScaleProps(['margin', 'marginLeft', 'marginRight', 'mx', 'ml', 'mr']);
  var my = getScaleProps(['margin', 'marginTop', 'marginBottom', 'my', 'mt', 'mb']);
  var px = getScaleProps(['padding', 'paddingLeft', 'paddingRight', 'pl', 'pr', 'px']);
  var py = getScaleProps(['padding', 'paddingTop', 'paddingBottom', 'pt', 'pb', 'py']);
  var color = React$1.useMemo(function () {
    return getTypeColor(type, theme.palette);
  }, [type, theme.palette]);
  var classNames = React$1.useMemo(function () {
    var keys = [{
      value: mx,
      className: 'mx'
    }, {
      value: my,
      className: 'my'
    }, {
      value: px,
      className: 'px'
    }, {
      value: py,
      className: 'py'
    }, {
      value: font,
      className: 'font'
    }];
    var scaleClassNames = keys.reduce(function (pre, next) {
      if (typeof next.value === 'undefined') return pre;
      return "".concat(pre, " ").concat(next.className);
    }, '');
    return "".concat(scaleClassNames, " ").concat(className).trim();
  }, [mx, my, px, py, font, className]);
  return /*#__PURE__*/React__default["default"].createElement(Component, _extends({}, props, {
    className: style.dynamic([["3155699851", [tag, color, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1, 'inherit'), SCALES.ml(0, 'revert'), SCALES.mr(0, 'revert'), SCALES.mt(0, 'revert'), SCALES.mb(0, 'revert'), SCALES.pl(0, 'revert'), SCALES.pr(0, 'revert'), SCALES.pt(0, 'revert'), SCALES.pb(0, 'revert')]]]) + " " + (props && props.className != null && props.className || classNames || "")
  }), children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3155699851",
    dynamic: [tag, color, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1, 'inherit'), SCALES.ml(0, 'revert'), SCALES.mr(0, 'revert'), SCALES.mt(0, 'revert'), SCALES.mb(0, 'revert'), SCALES.pl(0, 'revert'), SCALES.pr(0, 'revert'), SCALES.pt(0, 'revert'), SCALES.pb(0, 'revert')]
  }, "".concat(tag, ".__jsx-style-dynamic-selector{color:").concat(color, ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";}.font.__jsx-style-dynamic-selector{font-size:").concat(SCALES.font(1, 'inherit'), ";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(SCALES.ml(0, 'revert'), ";margin-right:").concat(SCALES.mr(0, 'revert'), ";}.my.__jsx-style-dynamic-selector{margin-top:").concat(SCALES.mt(0, 'revert'), ";margin-bottom:").concat(SCALES.mb(0, 'revert'), ";}.px.__jsx-style-dynamic-selector{padding-left:").concat(SCALES.pl(0, 'revert'), ";padding-right:").concat(SCALES.pr(0, 'revert'), ";}.py.__jsx-style-dynamic-selector{padding-top:").concat(SCALES.pt(0, 'revert'), ";padding-bottom:").concat(SCALES.pb(0, 'revert'), ";}")));
};

TextChild.defaultProps = defaultProps$9;
TextChild.displayName = 'GeistTextChild';

var _excluded$5 = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "b", "small", "i", "span", "del", "em", "blockquote", "children", "className"];
var defaultProps$8 = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  b: false,
  small: false,
  i: false,
  span: false,
  del: false,
  em: false,
  blockquote: false,
  className: '',
  type: 'default'
};

var getModifierChild = function getModifierChild(tags, children) {
  if (!tags.length) return children;
  var nextTag = tags.slice(1, tags.length);
  return /*#__PURE__*/React__default["default"].createElement(TextChild, {
    tag: tags[0]
  }, getModifierChild(nextTag, children));
};

var TextComponent = function TextComponent(_ref) {
  var h1 = _ref.h1,
      h2 = _ref.h2,
      h3 = _ref.h3,
      h4 = _ref.h4,
      h5 = _ref.h5,
      h6 = _ref.h6,
      p = _ref.p,
      b = _ref.b,
      small = _ref.small,
      i = _ref.i,
      span = _ref.span,
      del = _ref.del,
      em = _ref.em,
      blockquote = _ref.blockquote,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var elements = {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    p: p,
    blockquote: blockquote
  };
  var inlineElements = {
    span: span,
    small: small,
    b: b,
    em: em,
    i: i,
    del: del
  };
  var names = Object.keys(elements).filter(function (name) {
    return elements[name];
  });
  var inlineNames = Object.keys(inlineElements).filter(function (name) {
    return inlineElements[name];
  });
  /**
   *  Render element "p" only if no element is found.
   *  If there is only one modifier, just rendered one modifier element
   *  e.g.
   *    <Text /> => <p />
   *    <Text em /> => <em />
   *    <Text p em /> => <p><em>children</em></p>
   *
   */

  var tag = React$1.useMemo(function () {
    if (names[0]) return names[0];
    if (inlineNames[0]) return inlineNames[0];
    return 'p';
  }, [names, inlineNames]);
  var renderableChildElements = inlineNames.filter(function (name) {
    return name !== tag;
  });
  var modifers = React$1.useMemo(function () {
    if (!renderableChildElements.length) return children;
    return getModifierChild(renderableChildElements, children);
  }, [renderableChildElements, children]);
  return /*#__PURE__*/React__default["default"].createElement(TextChild, _extends({
    className: className,
    tag: tag
  }, props), modifers);
};

TextComponent.defaultProps = defaultProps$8;
TextComponent.displayName = 'GeistText';
withScale(TextComponent);

var getColors = function getColors(palette, status) {
  var colors = {
    "default": {
      bg: palette.success
    },
    secondary: {
      bg: palette.secondary
    },
    success: {
      bg: palette.success
    },
    warning: {
      bg: palette.warning
    },
    error: {
      bg: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};

var _excluded$4 = ["initialChecked", "checked", "disabled", "onChange", "type", "className"];
var defaultProps$7 = {
  type: 'default',
  disabled: false,
  initialChecked: false,
  className: ''
};

var ToggleComponent = function ToggleComponent(_ref) {
  var initialChecked = _ref.initialChecked,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      type = _ref.type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$4);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = React$1.useState(initialChecked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var classes = useClasses('toggle', {
    checked: selfChecked,
    disabled: disabled
  });
  var changeHandle = React$1.useCallback(function (ev) {
    if (disabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: ev.stopPropagation,
      preventDefault: ev.preventDefault,
      nativeEvent: ev
    };
    setSelfChecked(!selfChecked);
    onChange && onChange(selfEvent);
  }, [disabled, selfChecked, onChange]);

  var _useMemo = React$1.useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      bg = _useMemo.bg;

  React$1.useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);
  return /*#__PURE__*/React__default["default"].createElement("label", _extends({}, props, {
    className: style.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    disabled: disabled,
    checked: selfChecked,
    onChange: changeHandle,
    className: style.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]])
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + (classes || "")
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + "inner"
  })), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4106206985",
    dynamic: [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]
  }, "label.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:transparent;display:inline-block;vertical-align:middle;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";--toggle-font-size:").concat(SCALES.font(1), ";--toggle-height:").concat(SCALES.height(0.875), ";width:").concat(SCALES.width(1.75), ";height:var(--toggle-height);padding:").concat(SCALES.pt(0.1875), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0.1875), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}input.__jsx-style-dynamic-selector{overflow:hidden;visibility:hidden;height:0;opacity:0;width:0;position:absolute;background-color:transparent;z-index:-1;}.toggle.__jsx-style-dynamic-selector{height:var(--toggle-height);width:100%;border-radius:var(--toggle-height);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-property:background,border;transition-property:background,border;-webkit-transition-timing-function:cubic-bezier(0,0,0.2,1);transition-timing-function:cubic-bezier(0,0,0.2,1);position:relative;border:1px solid transparent;background-color:").concat(theme.palette.accents_2, ";padding:0;}.inner.__jsx-style-dynamic-selector{width:calc(var(--toggle-height) - 2px);height:calc(var(--toggle-height) - 2px);position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:1px;box-shadow:rgba(0,0,0,0.2) 0 1px 2px 0,rgba(0,0,0,0.1) 0 1px 3px 0;-webkit-transition:left 280ms cubic-bezier(0,0,0.2,1);transition:left 280ms cubic-bezier(0,0,0.2,1);border-radius:50%;background-color:").concat(theme.palette.background, ";}.disabled.__jsx-style-dynamic-selector{border-color:").concat(theme.palette.accents_2, ";background-color:").concat(theme.palette.accents_1, ";}.disabled.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_2, ";}.disabled.checked.__jsx-style-dynamic-selector{border-color:").concat(theme.palette.accents_4, ";background-color:").concat(theme.palette.accents_4, ";}.checked.__jsx-style-dynamic-selector{background-color:").concat(bg, ";}.checked.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{left:calc(100% - (var(--toggle-height) - 2px));box-shadow:none;}")));
};

ToggleComponent.defaultProps = defaultProps$7;
ToggleComponent.displayName = 'GeistToggle';
withScale(ToggleComponent);

var defaultProps$6 = {
  width: 22,
  height: 22
};

var TreeFileIcon = function TreeFileIcon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    width: width,
    height: height,
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 2v7h7",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeFileIcon.defaultProps = defaultProps$6;
TreeFileIcon.displayName = 'GeistTreeFileIcon';

var defaultContext = {
  initialExpand: false,
  isImperative: false
};
var TreeContext = /*#__PURE__*/React__default["default"].createContext(defaultContext);
var useTreeContext = function useTreeContext() {
  return React__default["default"].useContext(TreeContext);
};

var TreeIndents = function TreeIndents(_ref) {
  var count = _ref.count;
  if (count === 0) return null;
  return (
    /*#__PURE__*/

    /* eslint-disable react/jsx-no-useless-fragment */
    React__default["default"].createElement(React__default["default"].Fragment, null, _toConsumableArray(new Array(count)).map(function (_, index) {
      return /*#__PURE__*/React__default["default"].createElement("span", {
        key: "indent-".concat(index),
        className: style.dynamic([["2622387629", [index + 1]]]) + " " + "indent"
      }, /*#__PURE__*/React__default["default"].createElement(style, {
        id: "2622387629",
        dynamic: [index + 1]
      }, "span.indent.__jsx-style-dynamic-selector{left:calc(-1.875rem * ".concat(index + 1, " + 0.75rem);}")));
    }))
    /* eslint-enable */

  );
};

var sortChildren = function sortChildren(children, folderComponentType) {
  return React__default["default"].Children.toArray(children).sort(function (a, b) {
    if (! /*#__PURE__*/React__default["default"].isValidElement(a) || ! /*#__PURE__*/React__default["default"].isValidElement(b)) return 0;
    if (a.type !== b.type) return a.type !== folderComponentType ? 1 : -1;
    return "".concat(a.props.name).charCodeAt(0) - "".concat(b.props.name).charCodeAt(0);
  });
};
var makeChildPath = function makeChildPath(name, parentPath) {
  if (!parentPath) return name;
  return "".concat(parentPath, "/").concat(name);
};
var stopPropagation = function stopPropagation(event) {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};

var _excluded$3 = ["name", "parentPath", "level", "extra", "className"];
var defaultProps$5 = {
  level: 0,
  className: '',
  parentPath: ''
};

var TreeFile = function TreeFile(_ref) {
  var name = _ref.name,
      parentPath = _ref.parentPath,
      level = _ref.level,
      extra = _ref.extra,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var theme = useTheme();

  var _useTreeContext = useTreeContext(),
      onFileClick = _useTreeContext.onFileClick;

  var currentPath = React$1.useMemo(function () {
    return makeChildPath(name, parentPath);
  }, []);

  var clickHandler = function clickHandler(event) {
    stopPropagation(event);
    onFileClick && onFileClick(currentPath);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + (props && props.className != null && props.className || useClasses('file', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "names"
  }, /*#__PURE__*/React__default["default"].createElement(TreeIndents, {
    count: level
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "icon"
  }, /*#__PURE__*/React__default["default"].createElement(TreeFileIcon, null)), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "name"
  }, name, extra && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "extra"
  }, extra))), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4220802947",
    dynamic: [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]
  }, ".file.__jsx-style-dynamic-selector{cursor:pointer;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:calc(1.875rem * ".concat(level, ");}.names.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.75rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.names.__jsx-style-dynamic-selector>.indent{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:100%;background-color:").concat(theme.palette.accents_2, ";margin-left:-1px;}.icon.__jsx-style-dynamic-selector{width:1.5rem;height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:0.5rem;}.name.__jsx-style-dynamic-selector{-webkit-transition:opacity 100ms ease 0ms;transition:opacity 100ms ease 0ms;color:").concat(theme.palette.accents_8, ";white-space:nowrap;font-size:0.875rem;}.extra.__jsx-style-dynamic-selector{font-size:0.75rem;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;padding-left:4px;color:").concat(theme.palette.accents_5, ";}.name.__jsx-style-dynamic-selector:hover{opacity:0.7;}")));
};

TreeFile.defaultProps = defaultProps$5;
TreeFile.displayName = 'GeistTreeFile';

var defaultProps$4 = {
  width: 22,
  height: 22
};

var TreeFolderIcon = function TreeFolderIcon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    width: width,
    height: height,
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeFolderIcon.defaultProps = defaultProps$4;
TreeFolderIcon.displayName = 'GeistTreeFolderIcon';

var defaultProps$3 = {
  width: 12,
  height: 12,
  active: false
};

var TreeStatusIcon = function TreeStatusIcon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      active = _ref.active;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    width: width,
    height: height,
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }, /*#__PURE__*/React__default["default"].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), !active && /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 8v8",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 12h8",
    className: style.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeStatusIcon.defaultProps = defaultProps$3;
TreeStatusIcon.displayName = 'GeistTreeStatusIcon';

var _excluded$2 = ["name", "children", "parentPath", "level", "extra", "className"];
var defaultProps$2 = {
  level: 0,
  className: '',
  parentPath: ''
};

var TreeFolder = function TreeFolder(_ref) {
  var name = _ref.name,
      children = _ref.children,
      parentPath = _ref.parentPath,
      parentLevel = _ref.level,
      extra = _ref.extra,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var theme = useTheme();

  var _useTreeContext = useTreeContext(),
      initialExpand = _useTreeContext.initialExpand,
      isImperative = _useTreeContext.isImperative;

  var _useState = React$1.useState(initialExpand),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  React$1.useEffect(function () {
    return setExpanded(initialExpand);
  }, []);
  var currentPath = React$1.useMemo(function () {
    return makeChildPath(name, parentPath);
  }, []);

  var clickHandler = function clickHandler() {
    return setExpanded(!expanded);
  };

  var nextChildren = setChildrenProps(children, {
    parentPath: currentPath,
    level: parentLevel + 1
  }, [TreeFolder, TreeFile]);
  var sortedChildren = isImperative ? nextChildren : sortChildren(nextChildren, TreeFolder);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + (props && props.className != null && props.className || useClasses('folder', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "names"
  }, /*#__PURE__*/React__default["default"].createElement(TreeIndents, {
    count: parentLevel
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "status"
  }, /*#__PURE__*/React__default["default"].createElement(TreeStatusIcon, {
    active: expanded
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "icon"
  }, /*#__PURE__*/React__default["default"].createElement(TreeFolderIcon, null)), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "name"
  }, name, extra && /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "extra"
  }, extra))), /*#__PURE__*/React__default["default"].createElement(Expand, {
    isExpanded: expanded
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: stopPropagation,
    className: style.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "content"
  }, sortedChildren)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1983983326",
    dynamic: [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]
  }, ".folder.__jsx-style-dynamic-selector{cursor:pointer;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.names.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.75rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:calc(1.875rem * ".concat(parentLevel, ");position:relative;}.names.__jsx-style-dynamic-selector>.indent{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:100%;background-color:").concat(theme.palette.accents_2, ";margin-left:-1px;}.status.__jsx-style-dynamic-selector{position:absolute;left:calc(-1.125rem);top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0.875rem;height:0.875rem;z-index:10;background-color:").concat(theme.palette.background, ";}.icon.__jsx-style-dynamic-selector{width:1.5rem;height:100%;margin-right:0.5rem;}.status.__jsx-style-dynamic-selector,.icon.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.name.__jsx-style-dynamic-selector{-webkit-transition:opacity 100ms ease 0ms;transition:opacity 100ms ease 0ms;color:").concat(theme.palette.accents_8, ";white-space:nowrap;font-size:0.875rem;}.extra.__jsx-style-dynamic-selector{font-size:0.75rem;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;padding-left:4px;color:").concat(theme.palette.accents_5, ";}.name.__jsx-style-dynamic-selector:hover{opacity:0.7;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;}")));
};

TreeFolder.defaultProps = defaultProps$2;
TreeFolder.displayName = 'GeistTreeFolder';

var FileTreeValueType = tuple('directory', 'file');
FileTreeValueType[0];

var _excluded$1 = ["src", "text", "name", "children", "className", "altText"];
var defaultProps$1 = {
  className: ''
};

var UserComponent = function UserComponent(_ref) {
  var src = _ref.src,
      text = _ref.text,
      name = _ref.name,
      children = _ref.children,
      className = _ref.className,
      altText = _ref.altText,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var scale = getScaleProps('scale');
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: style.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + (props && props.className != null && props.className || useClasses('user', className) || "")
  }), /*#__PURE__*/React__default["default"].createElement(Avatar, {
    src: src,
    scale: scale,
    text: text,
    alt: altText
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: style.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "names"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "name"
  }, name), /*#__PURE__*/React__default["default"].createElement("span", {
    className: style.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "social"
  }, children)), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3188576998",
    dynamic: [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]
  }, ".user.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;--user-font-size:".concat(SCALES.font(1), ";font-size:var(--user-font-size);width:").concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.5), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.5), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.names.__jsx-style-dynamic-selector{font-size:inherit;margin-left:").concat(theme.layout.gapHalf, ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;white-space:nowrap;}.name.__jsx-style-dynamic-selector{font-size:calc(0.89 * var(--user-font-size));color:").concat(theme.palette.accents_8, ";line-height:1.1em;text-transform:capitalize;font-weight:500;max-width:15rem;text-overflow:ellipsis;overflow:hidden;}.social.__jsx-style-dynamic-selector{font-size:calc(0.75 * var(--user-font-size));color:").concat(theme.palette.accents_6, ";}.social.__jsx-style-dynamic-selector *:first-child{margin-top:0;}.social.__jsx-style-dynamic-selector *:last-child{margin-bottom:0;}")));
};

UserComponent.defaultProps = defaultProps$1;
UserComponent.displayName = 'GeistUser';
var User = withScale(UserComponent);

var _excluded = ["href", "className", "children"];
var defaultProps = {
  className: ''
};
var UserLink = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    className: "jsx-3263947648" + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default["default"].createElement(Link, {
    ref: ref,
    href: href,
    color: true,
    target: "_blank",
    rel: "noopener"
  }, children), /*#__PURE__*/React__default["default"].createElement(style, {
    id: "3263947648"
  }, "div.jsx-3263947648 a:hover{opacity:0.7;}"));
});
UserLink.defaultProps = defaultProps;
UserLink.displayName = 'GeistUserLink';

User.Link = UserLink;

tuple('xs', 'sm', 'md', 'lg', 'xl', 'mobile');
tuple('up', 'down', 'default');

const { flushToHTML } = _server;

var CssBaseline = function CssBaseline(_ref) {
  var children = _ref.children;
  var theme = useTheme();
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children, /*#__PURE__*/React__default["default"].createElement(style, {
    id: "1357910706",
    dynamic: [theme.palette.background, theme.palette.foreground, theme.palette.background, theme.font.sans, theme.font.sans, theme.palette.link, theme.expressiveness.linkStyle, theme.expressiveness.linkHoverStyle, theme.layout.gapHalf, theme.layout.gapHalf, theme.layout.gapHalf, theme.layout.gap, theme.palette.foreground, theme.palette.accents_4, theme.palette.code, theme.font.mono, theme.layout.gap, theme.layout.gap, theme.layout.gap, theme.palette.accents_2, theme.layout.radius, theme.font.mono, theme.palette.foreground, theme.palette.accents_2, theme.palette.accents_1, theme.layout.gap, theme.layout.gap, theme.palette.accents_5, theme.palette.accents_1, theme.layout.radius, theme.palette.border, theme.palette.selection, theme.palette.foreground]
  }, "html,body{background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";}html{font-size:16px;--geist-icons-background:").concat(theme.palette.background, ";}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.5;margin:0;padding:0;min-height:100%;position:relative;overflow-x:hidden;font-family:").concat(theme.font.sans, ";}#__next{overflow-x:hidden;}*,*:before,*:after{box-sizing:inherit;text-rendering:geometricPrecision;-webkit-tap-highlight-color:transparent;}p,small{font-weight:400;color:inherit;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;font-family:").concat(theme.font.sans, ";}p{margin:1em 0;font-size:1em;line-height:1.625em;}small{margin:0;line-height:1.5;font-size:0.875em;}b{font-weight:600;}span{font-size:inherit;color:inherit;font-weight:inherit;}img{max-width:100%;}a{cursor:pointer;font-size:inherit;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(theme.palette.link, ";-webkit-text-decoration:").concat(theme.expressiveness.linkStyle, ";text-decoration:").concat(theme.expressiveness.linkStyle, ";}a:hover{-webkit-text-decoration:").concat(theme.expressiveness.linkHoverStyle, ";text-decoration:").concat(theme.expressiveness.linkHoverStyle, ";}ul,ol{padding:0;list-style-type:none;margin:").concat(theme.layout.gapHalf, " ").concat(theme.layout.gapHalf, " ").concat(theme.layout.gapHalf, " ").concat(theme.layout.gap, ";color:").concat(theme.palette.foreground, ";}ol{list-style-type:decimal;}li{margin-bottom:0.625em;font-size:1em;line-height:1.625em;}ul li:before{content:'\u2013';display:inline-block;color:").concat(theme.palette.accents_4, ";position:absolute;margin-left:-0.9375em;}h1,h2,h3,h4,h5,h6{color:inherit;margin:0 0 0.7rem 0;}h1{font-size:3rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;line-height:1.5;font-weight:700;}h2{font-size:2.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h3{font-size:1.5rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h4{font-size:1.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h5{font-size:1rem;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;font-weight:600;}h6{font-size:0.875rem;-webkit-letter-spacing:-0.005em;-moz-letter-spacing:-0.005em;-ms-letter-spacing:-0.005em;letter-spacing:-0.005em;font-weight:600;}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;margin:0;}button:focus,input:focus,select:focus,textarea:focus{outline:none;}code{color:").concat(theme.palette.code, ";font-family:").concat(theme.font.mono, ";font-size:0.9em;white-space:pre-wrap;}code:before,code:after{content:'\\`';}pre{padding:calc(").concat(theme.layout.gap, " * 0.9) ").concat(theme.layout.gap, ";margin:").concat(theme.layout.gap, " 0;border:1px solid ").concat(theme.palette.accents_2, ";border-radius:").concat(theme.layout.radius, ";font-family:").concat(theme.font.mono, ";white-space:pre;overflow:auto;line-height:1.5;text-align:left;font-size:14px;-webkit-overflow-scrolling:touch;}pre code{color:").concat(theme.palette.foreground, ";font-size:1em;line-height:1.25em;white-space:pre;}pre code:before,pre code:after{display:none;}pre p{margin:0;}pre::-webkit-scrollbar{display:none;width:0;height:0;background:transparent;}hr{border-color:").concat(theme.palette.accents_2, ";}details{background-color:").concat(theme.palette.accents_1, ";border:none;}details:focus,details:hover,details:active{outline:none;}summary{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;outline:none;}summary::marker,summary::before,summary::-webkit-details-marker{display:none;}summary::-moz-list-bullet{font-size:0;}summary:focus,summary:hover,summary:active{outline:none;list-style:none;}blockquote{padding:calc(0.667 * ").concat(theme.layout.gap, ") ").concat(theme.layout.gap, ";color:").concat(theme.palette.accents_5, ";background-color:").concat(theme.palette.accents_1, ";border-radius:").concat(theme.layout.radius, ";margin:1.5em 0;border:1px solid ").concat(theme.palette.border, ";}blockquote *:first-child{margin-top:0;}blockquote *:last-child{margin-bottom:0;}::selection{background-color:").concat(theme.palette.selection, ";color:").concat(theme.palette.foreground, ";}")));
};

var MemoCssBaseline = /*#__PURE__*/React__default["default"].memo(CssBaseline);
MemoCssBaseline.flush = _server;
MemoCssBaseline.flushToHTML = flushToHTML;

function burnToast (_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(setToast, content) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setToast({
              text: /*#__PURE__*/React.createElement(Description, {
                title: new Date().toUTCString(),
                content: content
              }),
              delay: 5000
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

exports.burnToast = burnToast;
exports.getGoogleURL = getGoogleURL;
exports.getLocaleAlignment = getLocaleAlignment;
exports.getLocaleDirection = getLocaleDirection;
exports.isEmail = isEmail;
exports.isLocaleRTL = isLocaleRTL;
