var nhsdviz = (function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

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

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$1E = // eslint-disable-next-line es/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$1f = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$1e = fails$1f; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$1e(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var fails$1d = fails$1f;
  var functionBindNative = !fails$1d(function () {
    var test = function () {
      /* empty */
    }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;
  var call$w = Function.prototype.call;
  var functionCall = NATIVE_BIND$4 ? call$w.bind(call$w) : function () {
    return call$w.apply(call$w, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$8 && !$propertyIsEnumerable$2.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$8(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;

  var createPropertyDescriptor$c = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$3 = functionBindNative;
  var FunctionPrototype$4 = Function.prototype;
  var bind$e = FunctionPrototype$4.bind;
  var call$v = FunctionPrototype$4.call;
  var uncurryThis$1e = NATIVE_BIND$3 && bind$e.bind(call$v, call$v);
  var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
    return fn && uncurryThis$1e(fn);
  } : function (fn) {
    return fn && function () {
      return call$v.apply(fn, arguments);
    };
  };

  var uncurryThis$1d = functionUncurryThis;
  var toString$w = uncurryThis$1d({}.toString);
  var stringSlice$g = uncurryThis$1d(''.slice);

  var classofRaw$1 = function classofRaw(it) {
    return stringSlice$g(toString$w(it), 8, -1);
  };

  var global$1D = global$1E;
  var uncurryThis$1c = functionUncurryThis;
  var fails$1c = fails$1f;
  var classof$k = classofRaw$1;
  var Object$6 = global$1D.Object;
  var split$3 = uncurryThis$1c(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$1c(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$6('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$k(it) == 'String' ? split$3(it, '') : Object$6(it);
  } : Object$6;

  var global$1C = global$1E;
  var TypeError$v = global$1C.TypeError; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$i = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError$v("Can't call method on " + it);
    return it;
  };

  var IndexedObject$4 = indexedObject;
  var requireObjectCoercible$h = requireObjectCoercible$i;

  var toIndexedObject$f = function toIndexedObject(it) {
    return IndexedObject$4(requireObjectCoercible$h(it));
  };

  // https://tc39.es/ecma262/#sec-iscallable

  var isCallable$v = function isCallable(argument) {
    return typeof argument == 'function';
  };

  var isCallable$u = isCallable$v;

  var isObject$z = function isObject(it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$u(it);
  };

  var global$1B = global$1E;
  var isCallable$t = isCallable$v;

  var aFunction = function aFunction(argument) {
    return isCallable$t(argument) ? argument : undefined;
  };

  var getBuiltIn$l = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(global$1B[namespace]) : global$1B[namespace] && global$1B[namespace][method];
  };

  var uncurryThis$1b = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$1b({}.isPrototypeOf);

  var getBuiltIn$k = getBuiltIn$l;
  var engineUserAgent = getBuiltIn$k('navigator', 'userAgent') || '';

  var global$1A = global$1E;
  var userAgent$7 = engineUserAgent;
  var process$4 = global$1A.process;
  var Deno = global$1A.Deno;
  var versions = process$4 && process$4.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us

    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0


  if (!version && userAgent$7) {
    match = userAgent$7.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$7.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$3 = engineV8Version;
  var fails$1b = fails$1f; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$1b(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  var NATIVE_SYMBOL$3 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$3 && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

  var global$1z = global$1E;
  var getBuiltIn$j = getBuiltIn$l;
  var isCallable$s = isCallable$v;
  var isPrototypeOf$c = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var Object$5 = global$1z.Object;
  var isSymbol$6 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$j('Symbol');
    return isCallable$s($Symbol) && isPrototypeOf$c($Symbol.prototype, Object$5(it));
  };

  var global$1y = global$1E;
  var String$7 = global$1y.String;

  var tryToString$5 = function tryToString(argument) {
    try {
      return String$7(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var global$1x = global$1E;
  var isCallable$r = isCallable$v;
  var tryToString$4 = tryToString$5;
  var TypeError$u = global$1x.TypeError; // `Assert: IsCallable(argument) is true`

  var aCallable$g = function aCallable(argument) {
    if (isCallable$r(argument)) return argument;
    throw TypeError$u(tryToString$4(argument) + ' is not a function');
  };

  var aCallable$f = aCallable$g; // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod

  var getMethod$9 = function getMethod(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$f(func);
  };

  var global$1w = global$1E;
  var call$u = functionCall;
  var isCallable$q = isCallable$v;
  var isObject$y = isObject$z;
  var TypeError$t = global$1w.TypeError; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$2 = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$q(fn = input.toString) && !isObject$y(val = call$u(fn, input))) return val;
    if (isCallable$q(fn = input.valueOf) && !isObject$y(val = call$u(fn, input))) return val;
    if (pref !== 'string' && isCallable$q(fn = input.toString) && !isObject$y(val = call$u(fn, input))) return val;
    throw TypeError$t("Can't convert object to primitive value");
  };

  var shared$5 = {exports: {}};

  var isPure = false;

  var global$1v = global$1E; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var defineProperty$h = Object.defineProperty;

  var setGlobal$3 = function setGlobal(key, value) {
    try {
      defineProperty$h(global$1v, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$1v[key] = value;
    }

    return value;
  };

  var global$1u = global$1E;
  var setGlobal$2 = setGlobal$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$1u[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$3;

  var store$2 = sharedStore;
  (shared$5.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.21.1',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var global$1t = global$1E;
  var requireObjectCoercible$g = requireObjectCoercible$i;
  var Object$4 = global$1t.Object; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$p = function toObject(argument) {
    return Object$4(requireObjectCoercible$g(argument));
  };

  var uncurryThis$1a = functionUncurryThis;
  var toObject$o = toObject$p;
  var hasOwnProperty = uncurryThis$1a({}.hasOwnProperty); // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty

  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$o(it), key);
  };

  var uncurryThis$19 = functionUncurryThis;
  var id$3 = 0;
  var postfix = Math.random();
  var toString$v = uncurryThis$19(1.0.toString);

  var uid$6 = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$v(++id$3 + postfix, 36);
  };

  var global$1s = global$1E;
  var shared$4 = shared$5.exports;
  var hasOwn$t = hasOwnProperty_1;
  var uid$5 = uid$6;
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore$1 = shared$4('wks');
  var _Symbol$2 = global$1s.Symbol;
  var symbolFor = _Symbol$2 && _Symbol$2['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol$2 : _Symbol$2 && _Symbol$2.withoutSetter || uid$5;

  var wellKnownSymbol$y = function wellKnownSymbol(name) {
    if (!hasOwn$t(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      var description = 'Symbol.' + name;

      if (NATIVE_SYMBOL$2 && hasOwn$t(_Symbol$2, name)) {
        WellKnownSymbolsStore$1[name] = _Symbol$2[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore$1[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var global$1r = global$1E;
  var call$t = functionCall;
  var isObject$x = isObject$z;
  var isSymbol$5 = isSymbol$6;
  var getMethod$8 = getMethod$9;
  var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
  var wellKnownSymbol$x = wellKnownSymbol$y;
  var TypeError$s = global$1r.TypeError;
  var TO_PRIMITIVE$2 = wellKnownSymbol$x('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$3 = function toPrimitive(input, pref) {
    if (!isObject$x(input) || isSymbol$5(input)) return input;
    var exoticToPrim = getMethod$8(input, TO_PRIMITIVE$2);
    var result;

    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$t(exoticToPrim, input, pref);
      if (!isObject$x(result) || isSymbol$5(result)) return result;
      throw TypeError$s("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive$1(input, pref);
  };

  var toPrimitive$2 = toPrimitive$3;
  var isSymbol$4 = isSymbol$6; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$8 = function toPropertyKey(argument) {
    var key = toPrimitive$2(argument, 'string');
    return isSymbol$4(key) ? key : key + '';
  };

  var global$1q = global$1E;
  var isObject$w = isObject$z;
  var document$3 = global$1q.document; // typeof document.createElement is 'object' in old IE

  var EXISTS$1 = isObject$w(document$3) && isObject$w(document$3.createElement);

  var documentCreateElement$2 = function documentCreateElement(it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$A = descriptors;
  var fails$1a = fails$1f;
  var createElement$1 = documentCreateElement$2; // Thanks to IE8 for its funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$A && !fails$1a(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var DESCRIPTORS$z = descriptors;
  var call$s = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$b = createPropertyDescriptor$c;
  var toIndexedObject$e = toIndexedObject$f;
  var toPropertyKey$7 = toPropertyKey$8;
  var hasOwn$s = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$z ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$e(O);
    P = toPropertyKey$7(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {
      /* empty */
    }
    if (hasOwn$s(O, P)) return createPropertyDescriptor$b(!call$s(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$y = descriptors;
  var fails$19 = fails$1f; // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334

  var v8PrototypeDefineBug = DESCRIPTORS$y && fails$19(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {
      /* empty */
    }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var global$1p = global$1E;
  var isObject$v = isObject$z;
  var String$6 = global$1p.String;
  var TypeError$r = global$1p.TypeError; // `Assert: Type(argument) is Object`

  var anObject$C = function anObject(argument) {
    if (isObject$v(argument)) return argument;
    throw TypeError$r(String$6(argument) + ' is not an object');
  };

  var global$1o = global$1E;
  var DESCRIPTORS$x = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$B = anObject$C;
  var toPropertyKey$6 = toPropertyKey$8;
  var TypeError$q = global$1o.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable'; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$x ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$B(O);
    P = toPropertyKey$6(P);
    anObject$B(Attributes);

    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);

      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }

    return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$B(O);
    P = toPropertyKey$6(P);
    anObject$B(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$q('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$w = descriptors;
  var definePropertyModule$c = objectDefineProperty;
  var createPropertyDescriptor$a = createPropertyDescriptor$c;
  var createNonEnumerableProperty$f = DESCRIPTORS$w ? function (object, key, value) {
    return definePropertyModule$c.f(object, key, createPropertyDescriptor$a(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var redefine$l = {exports: {}};

  var uncurryThis$18 = functionUncurryThis;
  var isCallable$p = isCallable$v;
  var store$1 = sharedStore;
  var functionToString$1 = uncurryThis$18(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (!isCallable$p(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }

  var inspectSource$4 = store$1.inspectSource;

  var global$1n = global$1E;
  var isCallable$o = isCallable$v;
  var inspectSource$3 = inspectSource$4;
  var WeakMap$2 = global$1n.WeakMap;
  var nativeWeakMap = isCallable$o(WeakMap$2) && /native code/.test(inspectSource$3(WeakMap$2));

  var shared$3 = shared$5.exports;
  var uid$4 = uid$6;
  var keys$3 = shared$3('keys');

  var sharedKey$4 = function sharedKey(key) {
    return keys$3[key] || (keys$3[key] = uid$4(key));
  };

  var hiddenKeys$6 = {};

  var NATIVE_WEAK_MAP$1 = nativeWeakMap;
  var global$1m = global$1E;
  var uncurryThis$17 = functionUncurryThis;
  var isObject$u = isObject$z;
  var createNonEnumerableProperty$e = createNonEnumerableProperty$f;
  var hasOwn$r = hasOwnProperty_1;
  var shared$2 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$p = global$1m.TypeError;
  var WeakMap$1 = global$1m.WeakMap;
  var set$5, get$4, has;

  var enforce = function enforce(it) {
    return has(it) ? get$4(it) : set$5(it, {});
  };

  var getterFor$1 = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject$u(it) || (state = get$4(it)).type !== TYPE) {
        throw TypeError$p('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP$1 || shared$2.state) {
    var store = shared$2.state || (shared$2.state = new WeakMap$1());
    var wmget = uncurryThis$17(store.get);
    var wmhas = uncurryThis$17(store.has);
    var wmset = uncurryThis$17(store.set);

    set$5 = function set(it, metadata) {
      if (wmhas(store, it)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };

    get$4 = function get(it) {
      return wmget(store, it) || {};
    };

    has = function has(it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;

    set$5 = function set(it, metadata) {
      if (hasOwn$r(it, STATE)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$e(it, STATE, metadata);
      return metadata;
    };

    get$4 = function get(it) {
      return hasOwn$r(it, STATE) ? it[STATE] : {};
    };

    has = function has(it) {
      return hasOwn$r(it, STATE);
    };
  }

  var internalState = {
    set: set$5,
    get: get$4,
    has: has,
    enforce: enforce,
    getterFor: getterFor$1
  };

  var DESCRIPTORS$v = descriptors;
  var hasOwn$q = hasOwnProperty_1;
  var FunctionPrototype$3 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getDescriptor = DESCRIPTORS$v && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$q(FunctionPrototype$3, 'name'); // additional protection from minified / mangled / dropped function names

  var PROPER = EXISTS && function something() {
    /* empty */
  }.name === 'something';

  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$v || DESCRIPTORS$v && getDescriptor(FunctionPrototype$3, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var global$1l = global$1E;
  var isCallable$n = isCallable$v;
  var hasOwn$p = hasOwnProperty_1;
  var createNonEnumerableProperty$d = createNonEnumerableProperty$f;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$2 = inspectSource$4;
  var InternalStateModule$c = internalState;
  var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
  var getInternalState$b = InternalStateModule$c.get;
  var enforceInternalState$2 = InternalStateModule$c.enforce;
  var TEMPLATE = String(String).split('String');
  (redefine$l.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;

    if (isCallable$n(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }

      if (!hasOwn$p(value, 'name') || CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name) {
        createNonEnumerableProperty$d(value, 'name', name);
      }

      state = enforceInternalState$2(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }

    if (O === global$1l) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty$d(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable$n(this) && getInternalState$b(this).source || inspectSource$2(this);
  });

  var objectGetOwnPropertyNames = {};

  var ceil$2 = Math.ceil;
  var floor$b = Math.floor; // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity

  var toIntegerOrInfinity$i = function toIntegerOrInfinity(argument) {
    var number = +argument; // eslint-disable-next-line no-self-compare -- safe

    return number !== number || number === 0 ? 0 : (number > 0 ? floor$b : ceil$2)(number);
  };

  var toIntegerOrInfinity$h = toIntegerOrInfinity$i;
  var max$7 = Math.max;
  var min$a = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$9 = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity$h(index);
    return integer < 0 ? max$7(integer + length, 0) : min$a(integer, length);
  };

  var toIntegerOrInfinity$g = toIntegerOrInfinity$i;
  var min$9 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$d = function toLength(argument) {
    return argument > 0 ? min$9(toIntegerOrInfinity$g(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$c = toLength$d; // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike

  var lengthOfArrayLike$n = function lengthOfArrayLike(obj) {
    return toLength$c(obj.length);
  };

  var toIndexedObject$d = toIndexedObject$f;
  var toAbsoluteIndex$8 = toAbsoluteIndex$9;
  var lengthOfArrayLike$m = lengthOfArrayLike$n; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$6 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$d($this);
      var length = lengthOfArrayLike$m(O);
      var index = toAbsoluteIndex$8(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$6(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$6(false)
  };

  var uncurryThis$16 = functionUncurryThis;
  var hasOwn$o = hasOwnProperty_1;
  var toIndexedObject$c = toIndexedObject$f;
  var indexOf$2 = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;
  var push$d = uncurryThis$16([].push);

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject$c(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !hasOwn$o(hiddenKeys$4, key) && hasOwn$o(O, key) && push$d(result, key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (hasOwn$o(O, key = names[i++])) {
        ~indexOf$2(result, key) || push$d(result, key);
      }
    }

    return result;
  };

  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$3);
  };

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$i = getBuiltIn$l;
  var uncurryThis$15 = functionUncurryThis;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var anObject$A = anObject$C;
  var concat$3 = uncurryThis$15([].concat); // all object keys, includes non-enumerable and symbols

  var ownKeys$3 = getBuiltIn$i('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$A(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$n = hasOwnProperty_1;
  var ownKeys$2 = ownKeys$3;
  var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$b = objectDefineProperty;

  var copyConstructorProperties$4 = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys$2(source);
    var defineProperty = definePropertyModule$b.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (!hasOwn$n(target, key) && !(exceptions && hasOwn$n(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$18 = fails$1f;
  var isCallable$m = isCallable$v;
  var replacement = /#|\.prototype\./;

  var isForced$5 = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$m(detection) ? fails$18(detection) : !!detection;
  };

  var normalize = isForced$5.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$5.data = {};
  var NATIVE = isForced$5.NATIVE = 'N';
  var POLYFILL = isForced$5.POLYFILL = 'P';
  var isForced_1 = isForced$5;

  var global$1k = global$1E;
  var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$c = createNonEnumerableProperty$f;
  var redefine$k = redefine$l.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties$3 = copyConstructorProperties$4;
  var isForced$4 = isForced_1;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$1k;
    } else if (STATIC) {
      target = global$1k[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1k[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$7(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties$3(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$c(sourceProperty, 'sham', true);
      } // extend global


      redefine$k(target, key, sourceProperty, options);
    }
  };

  var NATIVE_BIND$2 = functionBindNative;
  var FunctionPrototype$2 = Function.prototype;
  var apply$c = FunctionPrototype$2.apply;
  var call$r = FunctionPrototype$2.call; // eslint-disable-next-line es/no-reflect -- safe

  var functionApply$1 = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND$2 ? call$r.bind(apply$c) : function () {
    return call$r.apply(apply$c, arguments);
  });

  var classof$j = classofRaw$1; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe

  var isArray$7 = Array.isArray || function isArray(argument) {
    return classof$j(argument) == 'Array';
  };

  var wellKnownSymbol$w = wellKnownSymbol$y;
  var TO_STRING_TAG$5 = wellKnownSymbol$w('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$5] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';

  var global$1j = global$1E;
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$l = isCallable$v;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$v = wellKnownSymbol$y;
  var TO_STRING_TAG$4 = wellKnownSymbol$v('toStringTag');
  var Object$3 = global$1j.Object; // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$i = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$l(O.callee) ? 'Arguments' : result;
  };

  var global$1i = global$1E;
  var classof$h = classof$i;
  var String$5 = global$1i.String;

  var toString$u = function toString(argument) {
    if (classof$h(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$5(argument);
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$5 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$u = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$a = objectDefineProperty;
  var anObject$z = anObject$C;
  var toIndexedObject$b = toIndexedObject$f;
  var objectKeys$4 = objectKeys$5; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  objectDefineProperties.f = DESCRIPTORS$u && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$z(O);
    var props = toIndexedObject$b(Properties);
    var keys = objectKeys$4(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      definePropertyModule$a.f(O, key = keys[index++], props[key]);
    }

    return O;
  };

  var getBuiltIn$h = getBuiltIn$l;
  var html$2 = getBuiltIn$h('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$y = anObject$C;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };

  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

    var length = enumBugKeys.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject$y(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

  var objectGetOwnPropertyNamesExternal = {};

  var toPropertyKey$5 = toPropertyKey$8;
  var definePropertyModule$9 = objectDefineProperty;
  var createPropertyDescriptor$9 = createPropertyDescriptor$c;

  var createProperty$9 = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey$5(key);
    if (propertyKey in object) definePropertyModule$9.f(object, propertyKey, createPropertyDescriptor$9(0, value));else object[propertyKey] = value;
  };

  var global$1h = global$1E;
  var toAbsoluteIndex$7 = toAbsoluteIndex$9;
  var lengthOfArrayLike$l = lengthOfArrayLike$n;
  var createProperty$8 = createProperty$9;
  var Array$9 = global$1h.Array;
  var max$6 = Math.max;

  var arraySliceSimple = function arraySliceSimple(O, start, end) {
    var length = lengthOfArrayLike$l(O);
    var k = toAbsoluteIndex$7(start, length);
    var fin = toAbsoluteIndex$7(end === undefined ? length : end, length);
    var result = Array$9(max$6(fin - k, 0));

    for (var n = 0; k < fin; k++, n++) {
      createProperty$8(result, n, O[k]);
    }

    result.length = n;
    return result;
  };

  var classof$g = classofRaw$1;
  var toIndexedObject$a = toIndexedObject$f;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$c = arraySliceSimple;
  var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$c(windowNames);
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$g(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$a(it));
  };

  var uncurryThis$14 = functionUncurryThis;
  var arraySlice$b = uncurryThis$14([].slice);

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$u = wellKnownSymbol$y;
  wellKnownSymbolWrapped.f = wellKnownSymbol$u;

  var global$1g = global$1E;
  var path$2 = global$1g;

  var path$1 = path$2;
  var hasOwn$m = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$g = objectDefineProperty.f;

  var defineWellKnownSymbol$e = function defineWellKnownSymbol(NAME) {
    var _Symbol = path$1.Symbol || (path$1.Symbol = {});

    if (!hasOwn$m(_Symbol, NAME)) defineProperty$g(_Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var defineProperty$f = objectDefineProperty.f;
  var hasOwn$l = hasOwnProperty_1;
  var wellKnownSymbol$t = wellKnownSymbol$y;
  var TO_STRING_TAG$3 = wellKnownSymbol$t('toStringTag');

  var setToStringTag$c = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;

    if (target && !hasOwn$l(target, TO_STRING_TAG$3)) {
      defineProperty$f(target, TO_STRING_TAG$3, {
        configurable: true,
        value: TAG
      });
    }
  };

  var uncurryThis$13 = functionUncurryThis;
  var aCallable$e = aCallable$g;
  var NATIVE_BIND$1 = functionBindNative;
  var bind$d = uncurryThis$13(uncurryThis$13.bind); // optional / simple context binding

  var functionBindContext = function functionBindContext(fn, that) {
    aCallable$e(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$d(fn, that) : function
      /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };

  var uncurryThis$12 = functionUncurryThis;
  var fails$17 = fails$1f;
  var isCallable$k = isCallable$v;
  var classof$f = classof$i;
  var getBuiltIn$g = getBuiltIn$l;
  var inspectSource$1 = inspectSource$4;

  var noop$1 = function noop() {
    /* empty */
  };

  var empty$1 = [];
  var construct$1 = getBuiltIn$g('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$a = uncurryThis$12(constructorRegExp.exec);
  var INCORRECT_TO_STRING$2 = !constructorRegExp.exec(noop$1);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$k(argument)) return false;

    try {
      construct$1(noop$1, empty$1, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$k(argument)) return false;

    switch (classof$f(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }

    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING$2 || !!exec$a(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor

  var isConstructor$6 = !construct$1 || fails$17(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var global$1f = global$1E;
  var isArray$6 = isArray$7;
  var isConstructor$5 = isConstructor$6;
  var isObject$t = isObject$z;
  var wellKnownSymbol$s = wellKnownSymbol$y;
  var SPECIES$6 = wellKnownSymbol$s('species');
  var Array$8 = global$1f.Array; // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor$1 = function arraySpeciesConstructor(originalArray) {
    var C;

    if (isArray$6(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (isConstructor$5(C) && (C === Array$8 || isArray$6(C.prototype))) C = undefined;else if (isObject$t(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array$8 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$5 = function arraySpeciesCreate(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$c = functionBindContext;
  var uncurryThis$11 = functionUncurryThis;
  var IndexedObject$3 = indexedObject;
  var toObject$n = toObject$p;
  var lengthOfArrayLike$k = lengthOfArrayLike$n;
  var arraySpeciesCreate$4 = arraySpeciesCreate$5;
  var push$c = uncurryThis$11([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$5 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$n($this);
      var self = IndexedObject$3(O);
      var boundFunction = bind$c(callbackfn, that);
      var length = lengthOfArrayLike$k(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$4;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push$c(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$c(target, value);
              // filterReject
            }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$5(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$5(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$5(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$5(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$5(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$5(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$5(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$5(7)
  };

  var $$2B = _export;
  var global$1e = global$1E;
  var getBuiltIn$f = getBuiltIn$l;
  var apply$b = functionApply$1;
  var call$q = functionCall;
  var uncurryThis$10 = functionUncurryThis;
  var DESCRIPTORS$t = descriptors;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var fails$16 = fails$1f;
  var hasOwn$k = hasOwnProperty_1;
  var isArray$5 = isArray$7;
  var isCallable$j = isCallable$v;
  var isObject$s = isObject$z;
  var isPrototypeOf$b = objectIsPrototypeOf;
  var isSymbol$3 = isSymbol$6;
  var anObject$x = anObject$C;
  var toObject$m = toObject$p;
  var toIndexedObject$9 = toIndexedObject$f;
  var toPropertyKey$4 = toPropertyKey$8;
  var $toString$3 = toString$u;
  var createPropertyDescriptor$8 = createPropertyDescriptor$c;
  var nativeObjectCreate = objectCreate;
  var objectKeys$3 = objectKeys$5;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$8 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var arraySlice$a = arraySlice$b;
  var redefine$j = redefine$l.exports;
  var shared$1 = shared$5.exports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$3 = uid$6;
  var wellKnownSymbol$r = wellKnownSymbol$y;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$d = defineWellKnownSymbol$e;
  var setToStringTag$b = setToStringTag$c;
  var InternalStateModule$b = internalState;
  var $forEach$2 = arrayIteration.forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE$1 = wellKnownSymbol$r('toPrimitive');
  var setInternalState$b = InternalStateModule$b.set;
  var getInternalState$a = InternalStateModule$b.getterFor(SYMBOL);
  var ObjectPrototype$4 = Object[PROTOTYPE$1];
  var $Symbol = global$1e.Symbol;
  var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE$1];
  var TypeError$o = global$1e.TypeError;
  var QObject = global$1e.QObject;
  var $stringify$1 = getBuiltIn$f('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$5.f;
  var nativeDefineProperty$1 = definePropertyModule$8.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$b = uncurryThis$10([].push);
  var AllSymbols = shared$1('symbols');
  var ObjectPrototypeSymbols = shared$1('op-symbols');
  var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared$1('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS$t && fails$16(function () {
    return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
      get: function get() {
        return nativeDefineProperty$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$4, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
    nativeDefineProperty$1(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
      nativeDefineProperty$1(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap$1 = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
    setInternalState$b(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$t) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$4) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$x(O);
    var key = toPropertyKey$4(P);
    anObject$x(Attributes);

    if (hasOwn$k(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$k(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$8(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$k(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$8(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$x(O);
    var properties = toIndexedObject$9(Properties);
    var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
    $forEach$2(keys, function (key) {
      if (!DESCRIPTORS$t || call$q($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPropertyKey$4(V);
    var enumerable = call$q(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$4 && hasOwn$k(AllSymbols, P) && !hasOwn$k(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$k(this, P) || !hasOwn$k(AllSymbols, P) || hasOwn$k(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$9(O);
    var key = toPropertyKey$4(P);
    if (it === ObjectPrototype$4 && hasOwn$k(AllSymbols, key) && !hasOwn$k(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);

    if (descriptor && hasOwn$k(AllSymbols, key) && !(hasOwn$k(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$9(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (!hasOwn$k(AllSymbols, key) && !hasOwn$k(hiddenKeys$1, key)) push$b(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$9(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (hasOwn$k(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$k(ObjectPrototype$4, key))) {
        push$b(result, AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL$1) {
    $Symbol = function _Symbol() {
      if (isPrototypeOf$b(SymbolPrototype$1, this)) throw TypeError$o('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
      var tag = uid$3(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype$4) call$q(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$k(this, HIDDEN) && hasOwn$k(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$8(1, value));
      };

      if (DESCRIPTORS$t && USE_SETTER) setSymbolDescriptor(ObjectPrototype$4, tag, {
        configurable: true,
        set: setter
      });
      return wrap$1(tag, description);
    };

    SymbolPrototype$1 = $Symbol[PROTOTYPE$1];
    redefine$j(SymbolPrototype$1, 'toString', function toString() {
      return getInternalState$a(this).tag;
    });
    redefine$j($Symbol, 'withoutSetter', function (description) {
      return wrap$1(uid$3(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
    definePropertyModule$8.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$5.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap$1(wellKnownSymbol$r(name), name);
    };

    if (DESCRIPTORS$t) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$a(this).description;
        }
      });

      {
        redefine$j(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$1, {
          unsafe: true
        });
      }
    }
  }

  $$2B({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !NATIVE_SYMBOL$1
  }, {
    Symbol: $Symbol
  });
  $forEach$2(objectKeys$3(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol$d(name);
  });
  $$2B({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = $toString$3(key);
      if (hasOwn$k(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol$3(sym)) throw TypeError$o(sym + ' is not a symbol');
      if (hasOwn$k(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $$2B({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !DESCRIPTORS$t
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  $$2B({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  $$2B({
    target: 'Object',
    stat: true,
    forced: fails$16(function () {
      getOwnPropertySymbolsModule$1.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule$1.f(toObject$m(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify$1) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL$1 || fails$16(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify$1({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify$1(Object(symbol)) != '{}';
    });
    $$2B({
      target: 'JSON',
      stat: true,
      forced: FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$a(arguments);
        var $replacer = replacer;
        if (!isObject$s(replacer) && it === undefined || isSymbol$3(it)) return; // IE8 returns string on undefined

        if (!isArray$5(replacer)) replacer = function replacer(key, value) {
          if (isCallable$j($replacer)) value = call$q($replacer, this, key, value);
          if (!isSymbol$3(value)) return value;
        };
        args[1] = replacer;
        return apply$b($stringify$1, null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!SymbolPrototype$1[TO_PRIMITIVE$1]) {
    var valueOf = SymbolPrototype$1.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length

    redefine$j(SymbolPrototype$1, TO_PRIMITIVE$1, function (hint) {
      // TODO: improve hint logic
      return call$q(valueOf, this);
    });
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag$b($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var $$2A = _export;
  var DESCRIPTORS$s = descriptors;
  var global$1d = global$1E;
  var uncurryThis$$ = functionUncurryThis;
  var hasOwn$j = hasOwnProperty_1;
  var isCallable$i = isCallable$v;
  var isPrototypeOf$a = objectIsPrototypeOf;
  var toString$t = toString$u;
  var defineProperty$e = objectDefineProperty.f;
  var copyConstructorProperties$2 = copyConstructorProperties$4;
  var NativeSymbol = global$1d.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

  if (DESCRIPTORS$s && isCallable$i(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function _Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$t(arguments[0]);
      var result = isPrototypeOf$a(SymbolPrototype, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties$2(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var symbolToString = uncurryThis$$(SymbolPrototype.toString);
    var symbolValueOf = uncurryThis$$(SymbolPrototype.valueOf);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$b = uncurryThis$$(''.replace);
    var stringSlice$f = uncurryThis$$(''.slice);
    defineProperty$e(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf(this);
        var string = symbolToString(symbol);
        if (hasOwn$j(EmptyStringDescriptionStore, symbol)) return '';
        var desc = NATIVE_SYMBOL ? stringSlice$f(string, 7, -1) : replace$b(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$2A({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var defineWellKnownSymbol$c = defineWellKnownSymbol$e; // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator

  defineWellKnownSymbol$c('asyncIterator');

  var defineWellKnownSymbol$b = defineWellKnownSymbol$e; // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance

  defineWellKnownSymbol$b('hasInstance');

  var defineWellKnownSymbol$a = defineWellKnownSymbol$e; // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

  defineWellKnownSymbol$a('isConcatSpreadable');

  var defineWellKnownSymbol$9 = defineWellKnownSymbol$e; // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator

  defineWellKnownSymbol$9('iterator');

  var defineWellKnownSymbol$8 = defineWellKnownSymbol$e; // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match

  defineWellKnownSymbol$8('match');

  var defineWellKnownSymbol$7 = defineWellKnownSymbol$e; // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall

  defineWellKnownSymbol$7('matchAll');

  var defineWellKnownSymbol$6 = defineWellKnownSymbol$e; // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace

  defineWellKnownSymbol$6('replace');

  var defineWellKnownSymbol$5 = defineWellKnownSymbol$e; // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search

  defineWellKnownSymbol$5('search');

  var defineWellKnownSymbol$4 = defineWellKnownSymbol$e; // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species

  defineWellKnownSymbol$4('species');

  var defineWellKnownSymbol$3 = defineWellKnownSymbol$e; // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split

  defineWellKnownSymbol$3('split');

  var defineWellKnownSymbol$2 = defineWellKnownSymbol$e; // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive

  defineWellKnownSymbol$2('toPrimitive');

  var defineWellKnownSymbol$1 = defineWellKnownSymbol$e; // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag

  defineWellKnownSymbol$1('toStringTag');

  var defineWellKnownSymbol = defineWellKnownSymbol$e; // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables

  defineWellKnownSymbol('unscopables');

  var global$1c = global$1E;
  var isCallable$h = isCallable$v;
  var String$4 = global$1c.String;
  var TypeError$n = global$1c.TypeError;

  var aPossiblePrototype$2 = function aPossiblePrototype(argument) {
    if (_typeof(argument) == 'object' || isCallable$h(argument)) return argument;
    throw TypeError$n("Can't set " + String$4(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThis$_ = functionUncurryThis;
  var anObject$w = anObject$C;
  var aPossiblePrototype$1 = aPossiblePrototype$2; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe

  var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$_(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject$w(O);
      aPossiblePrototype$1(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var isCallable$g = isCallable$v;
  var isObject$r = isObject$z;
  var setPrototypeOf$8 = objectSetPrototypeOf$1; // makes subclassing work correct for wrapped built-ins

  var inheritIfRequired$6 = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    setPrototypeOf$8 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$g(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$r(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$8($this, NewTargetPrototype);
    return $this;
  };

  var toString$s = toString$u;

  var normalizeStringArgument$5 = function normalizeStringArgument(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString$s(argument);
  };

  var isObject$q = isObject$z;
  var createNonEnumerableProperty$b = createNonEnumerableProperty$f; // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause

  var installErrorCause$2 = function installErrorCause(O, options) {
    if (isObject$q(options) && 'cause' in options) {
      createNonEnumerableProperty$b(O, 'cause', options.cause);
    }
  };

  var uncurryThis$Z = functionUncurryThis;
  var replace$a = uncurryThis$Z(''.replace);

  var TEST = function (arg) {
    return String(Error(arg).stack);
  }('zxcasd');

  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  var clearErrorStack$4 = function clearErrorStack(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
      while (dropEntries--) {
        stack = replace$a(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
      }
    }

    return stack;
  };

  var fails$15 = fails$1f;
  var createPropertyDescriptor$7 = createPropertyDescriptor$c;
  var errorStackInstallable = !fails$15(function () {
    var error = Error('a');
    if (!('stack' in error)) return true; // eslint-disable-next-line es/no-object-defineproperty -- safe

    Object.defineProperty(error, 'stack', createPropertyDescriptor$7(1, 7));
    return error.stack !== 7;
  });

  var getBuiltIn$e = getBuiltIn$l;
  var hasOwn$i = hasOwnProperty_1;
  var createNonEnumerableProperty$a = createNonEnumerableProperty$f;
  var isPrototypeOf$9 = objectIsPrototypeOf;
  var setPrototypeOf$7 = objectSetPrototypeOf$1;
  var copyConstructorProperties$1 = copyConstructorProperties$4;
  var inheritIfRequired$5 = inheritIfRequired$6;
  var normalizeStringArgument$4 = normalizeStringArgument$5;
  var installErrorCause$1 = installErrorCause$2;
  var clearErrorStack$3 = clearErrorStack$4;
  var ERROR_STACK_INSTALLABLE$2 = errorStackInstallable;

  var wrapErrorConstructorWithCause$2 = function wrapErrorConstructorWithCause(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
    var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
    var path = FULL_NAME.split('.');
    var ERROR_NAME = path[path.length - 1];
    var OriginalError = getBuiltIn$e.apply(null, path);
    if (!OriginalError) return;
    var OriginalErrorPrototype = OriginalError.prototype; // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006

    if (hasOwn$i(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
    if (!FORCED) return OriginalError;
    var BaseError = getBuiltIn$e('Error');
    var WrappedError = wrapper(function (a, b) {
      var message = normalizeStringArgument$4(IS_AGGREGATE_ERROR ? b : a, undefined);
      var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
      if (message !== undefined) createNonEnumerableProperty$a(result, 'message', message);
      if (ERROR_STACK_INSTALLABLE$2) createNonEnumerableProperty$a(result, 'stack', clearErrorStack$3(result.stack, 2));
      if (this && isPrototypeOf$9(OriginalErrorPrototype, this)) inheritIfRequired$5(result, this, WrappedError);
      if (arguments.length > OPTIONS_POSITION) installErrorCause$1(result, arguments[OPTIONS_POSITION]);
      return result;
    });
    WrappedError.prototype = OriginalErrorPrototype;

    if (ERROR_NAME !== 'Error') {
      if (setPrototypeOf$7) setPrototypeOf$7(WrappedError, BaseError);else copyConstructorProperties$1(WrappedError, BaseError, {
        name: true
      });
    }

    copyConstructorProperties$1(WrappedError, OriginalError);
    try {
      // Safari 13- bug: WebAssembly errors does not have a proper `.name`
      if (OriginalErrorPrototype.name !== ERROR_NAME) {
        createNonEnumerableProperty$a(OriginalErrorPrototype, 'name', ERROR_NAME);
      }

      OriginalErrorPrototype.constructor = WrappedError;
    } catch (error) {
      /* empty */
    }
    return WrappedError;
  };

  /* eslint-disable no-unused-vars -- required for functions `.length` */
  var $$2z = _export;
  var global$1b = global$1E;
  var apply$a = functionApply$1;
  var wrapErrorConstructorWithCause$1 = wrapErrorConstructorWithCause$2;
  var WEB_ASSEMBLY = 'WebAssembly';
  var WebAssembly$1 = global$1b[WEB_ASSEMBLY];
  var FORCED$u = Error('e', {
    cause: 7
  }).cause !== 7;

  var exportGlobalErrorCauseWrapper = function exportGlobalErrorCauseWrapper(ERROR_NAME, wrapper) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause$1(ERROR_NAME, wrapper, FORCED$u);
    $$2z({
      global: true,
      forced: FORCED$u
    }, O);
  };

  var exportWebAssemblyErrorCauseWrapper = function exportWebAssemblyErrorCauseWrapper(ERROR_NAME, wrapper) {
    if (WebAssembly$1 && WebAssembly$1[ERROR_NAME]) {
      var O = {};
      O[ERROR_NAME] = wrapErrorConstructorWithCause$1(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$u);
      $$2z({
        target: WEB_ASSEMBLY,
        stat: true,
        forced: FORCED$u
      }, O);
    }
  }; // https://github.com/tc39/proposal-error-cause


  exportGlobalErrorCauseWrapper('Error', function (init) {
    return function Error(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('EvalError', function (init) {
    return function EvalError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('RangeError', function (init) {
    return function RangeError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
    return function ReferenceError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
    return function SyntaxError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('TypeError', function (init) {
    return function TypeError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('URIError', function (init) {
    return function URIError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
    return function CompileError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
    return function LinkError(message) {
      return apply$a(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
    return function RuntimeError(message) {
      return apply$a(init, this, arguments);
    };
  });

  var DESCRIPTORS$r = descriptors;
  var fails$14 = fails$1f;
  var anObject$v = anObject$C;
  var create$b = objectCreate;
  var normalizeStringArgument$3 = normalizeStringArgument$5;
  var nativeErrorToString = Error.prototype.toString;
  var INCORRECT_TO_STRING$1 = fails$14(function () {
    if (DESCRIPTORS$r) {
      // Chrome 32- incorrectly call accessor
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      var object = create$b(Object.defineProperty({}, 'name', {
        get: function get() {
          return this === object;
        }
      }));
      if (nativeErrorToString.call(object) !== 'true') return true;
    } // FF10- does not properly handle non-strings


    return nativeErrorToString.call({
      message: 1,
      name: 2
    }) !== '2: 1' // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
  });
  var errorToString$2 = INCORRECT_TO_STRING$1 ? function toString() {
    var O = anObject$v(this);
    var name = normalizeStringArgument$3(O.name, 'Error');
    var message = normalizeStringArgument$3(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
  } : nativeErrorToString;

  var redefine$i = redefine$l.exports;
  var errorToString$1 = errorToString$2;
  var ErrorPrototype$1 = Error.prototype; // `Error.prototype.toString` method fix
  // https://tc39.es/ecma262/#sec-error.prototype.tostring

  if (ErrorPrototype$1.toString !== errorToString$1) {
    redefine$i(ErrorPrototype$1, 'toString', errorToString$1);
  }

  var fails$13 = fails$1f;
  var correctPrototypeGetter = !fails$13(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var global$1a = global$1E;
  var hasOwn$h = hasOwnProperty_1;
  var isCallable$f = isCallable$v;
  var toObject$l = toObject$p;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter;
  var IE_PROTO = sharedKey('IE_PROTO');
  var Object$2 = global$1a.Object;
  var ObjectPrototype$3 = Object$2.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$2 ? Object$2.getPrototypeOf : function (O) {
    var object = toObject$l(O);
    if (hasOwn$h(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;

    if (isCallable$f(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }

    return object instanceof Object$2 ? ObjectPrototype$3 : null;
  };

  var iterators = {};

  var wellKnownSymbol$q = wellKnownSymbol$y;
  var Iterators$4 = iterators;
  var ITERATOR$a = wellKnownSymbol$q('iterator');
  var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$3 = function isArrayIteratorMethod(it) {
    return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$a] === it);
  };

  var classof$e = classof$i;
  var getMethod$7 = getMethod$9;
  var Iterators$3 = iterators;
  var wellKnownSymbol$p = wellKnownSymbol$y;
  var ITERATOR$9 = wellKnownSymbol$p('iterator');

  var getIteratorMethod$5 = function getIteratorMethod(it) {
    if (it != undefined) return getMethod$7(it, ITERATOR$9) || getMethod$7(it, '@@iterator') || Iterators$3[classof$e(it)];
  };

  var global$19 = global$1E;
  var call$p = functionCall;
  var aCallable$d = aCallable$g;
  var anObject$u = anObject$C;
  var tryToString$3 = tryToString$5;
  var getIteratorMethod$4 = getIteratorMethod$5;
  var TypeError$m = global$19.TypeError;

  var getIterator$4 = function getIterator(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
    if (aCallable$d(iteratorMethod)) return anObject$u(call$p(iteratorMethod, argument));
    throw TypeError$m(tryToString$3(argument) + ' is not iterable');
  };

  var call$o = functionCall;
  var anObject$t = anObject$C;
  var getMethod$6 = getMethod$9;

  var iteratorClose$2 = function iteratorClose(iterator, kind, value) {
    var innerResult, innerError;
    anObject$t(iterator);

    try {
      innerResult = getMethod$6(iterator, 'return');

      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }

      innerResult = call$o(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }

    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$t(innerResult);
    return value;
  };

  var global$18 = global$1E;
  var bind$b = functionBindContext;
  var call$n = functionCall;
  var anObject$s = anObject$C;
  var tryToString$2 = tryToString$5;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var lengthOfArrayLike$j = lengthOfArrayLike$n;
  var isPrototypeOf$8 = objectIsPrototypeOf;
  var getIterator$3 = getIterator$4;
  var getIteratorMethod$3 = getIteratorMethod$5;
  var iteratorClose$1 = iteratorClose$2;
  var TypeError$l = global$18.TypeError;

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$9 = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$b(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose$1(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$s(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$3(iterable);
      if (!iterFn) throw TypeError$l(tryToString$2(iterable) + ' is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$j(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$8(ResultPrototype, result)) return result;
        }

        return new Result(false);
      }

      iterator = getIterator$3(iterable, iterFn);
    }

    next = iterator.next;

    while (!(step = call$n(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator, 'throw', error);
      }

      if (_typeof(result) == 'object' && result && isPrototypeOf$8(ResultPrototype, result)) return result;
    }

    return new Result(false);
  };

  var $$2y = _export;
  var global$17 = global$1E;
  var isPrototypeOf$7 = objectIsPrototypeOf;
  var getPrototypeOf$9 = objectGetPrototypeOf$1;
  var setPrototypeOf$6 = objectSetPrototypeOf$1;
  var copyConstructorProperties = copyConstructorProperties$4;
  var create$a = objectCreate;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$f;
  var createPropertyDescriptor$6 = createPropertyDescriptor$c;
  var clearErrorStack$2 = clearErrorStack$4;
  var installErrorCause = installErrorCause$2;
  var iterate$8 = iterate$9;
  var normalizeStringArgument$2 = normalizeStringArgument$5;
  var wellKnownSymbol$o = wellKnownSymbol$y;
  var ERROR_STACK_INSTALLABLE$1 = errorStackInstallable;
  var TO_STRING_TAG$2 = wellKnownSymbol$o('toStringTag');
  var Error$5 = global$17.Error;
  var push$a = [].push;

  var $AggregateError$1 = function AggregateError(errors, message
  /* , options */
  ) {
    var options = arguments.length > 2 ? arguments[2] : undefined;
    var isInstance = isPrototypeOf$7(AggregateErrorPrototype, this);
    var that;

    if (setPrototypeOf$6) {
      that = setPrototypeOf$6(new Error$5(), isInstance ? getPrototypeOf$9(this) : AggregateErrorPrototype);
    } else {
      that = isInstance ? this : create$a(AggregateErrorPrototype);
      createNonEnumerableProperty$9(that, TO_STRING_TAG$2, 'Error');
    }

    if (message !== undefined) createNonEnumerableProperty$9(that, 'message', normalizeStringArgument$2(message));
    if (ERROR_STACK_INSTALLABLE$1) createNonEnumerableProperty$9(that, 'stack', clearErrorStack$2(that.stack, 1));
    installErrorCause(that, options);
    var errorsArray = [];
    iterate$8(errors, push$a, {
      that: errorsArray
    });
    createNonEnumerableProperty$9(that, 'errors', errorsArray);
    return that;
  };

  if (setPrototypeOf$6) setPrototypeOf$6($AggregateError$1, Error$5);else copyConstructorProperties($AggregateError$1, Error$5, {
    name: true
  });
  var AggregateErrorPrototype = $AggregateError$1.prototype = create$a(Error$5.prototype, {
    constructor: createPropertyDescriptor$6(1, $AggregateError$1),
    message: createPropertyDescriptor$6(1, ''),
    name: createPropertyDescriptor$6(1, 'AggregateError')
  }); // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor

  $$2y({
    global: true
  }, {
    AggregateError: $AggregateError$1
  });

  var $$2x = _export;
  var getBuiltIn$d = getBuiltIn$l;
  var apply$9 = functionApply$1;
  var fails$12 = fails$1f;
  var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$2;
  var AGGREGATE_ERROR = 'AggregateError';
  var $AggregateError = getBuiltIn$d(AGGREGATE_ERROR);
  var FORCED$t = !fails$12(function () {
    return $AggregateError([1]).errors[0] !== 1;
  }) && fails$12(function () {
    return $AggregateError([1], AGGREGATE_ERROR, {
      cause: 7
    }).cause !== 7;
  }); // https://github.com/tc39/proposal-error-cause

  $$2x({
    global: true,
    forced: FORCED$t
  }, {
    AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
      // eslint-disable-next-line no-unused-vars -- required for functions `.length`
      return function AggregateError(errors, message) {
        return apply$9(init, this, arguments);
      };
    }, FORCED$t, true)
  });

  var wellKnownSymbol$n = wellKnownSymbol$y;
  var create$9 = objectCreate;
  var definePropertyModule$7 = objectDefineProperty;
  var UNSCOPABLES = wellKnownSymbol$n('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    definePropertyModule$7.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$9(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables$9 = function addToUnscopables(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$2w = _export;
  var toObject$k = toObject$p;
  var lengthOfArrayLike$i = lengthOfArrayLike$n;
  var toIntegerOrInfinity$f = toIntegerOrInfinity$i;
  var addToUnscopables$8 = addToUnscopables$9; // `Array.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  $$2w({
    target: 'Array',
    proto: true
  }, {
    at: function at(index) {
      var O = toObject$k(this);
      var len = lengthOfArrayLike$i(O);
      var relativeIndex = toIntegerOrInfinity$f(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return k < 0 || k >= len ? undefined : O[k];
    }
  });
  addToUnscopables$8('at');

  var fails$11 = fails$1f;
  var wellKnownSymbol$m = wellKnownSymbol$y;
  var V8_VERSION$2 = engineV8Version;
  var SPECIES$5 = wellKnownSymbol$m('species');

  var arrayMethodHasSpeciesSupport$5 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$11(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$5] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$2v = _export;
  var global$16 = global$1E;
  var fails$10 = fails$1f;
  var isArray$4 = isArray$7;
  var isObject$p = isObject$z;
  var toObject$j = toObject$p;
  var lengthOfArrayLike$h = lengthOfArrayLike$n;
  var createProperty$7 = createProperty$9;
  var arraySpeciesCreate$3 = arraySpeciesCreate$5;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$l = wellKnownSymbol$y;
  var V8_VERSION$1 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$l('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var TypeError$k = global$16.TypeError; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$10(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$4('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$p(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$4(O);
  };

  var FORCED$s = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$2v({
    target: 'Array',
    proto: true,
    forced: FORCED$s
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$j(this);
      var A = arraySpeciesCreate$3(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$h(E);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$7(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$7(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var toObject$i = toObject$p;
  var toAbsoluteIndex$6 = toAbsoluteIndex$9;
  var lengthOfArrayLike$g = lengthOfArrayLike$n;
  var min$8 = Math.min; // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe

  var arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = toObject$i(this);
    var len = lengthOfArrayLike$g(O);
    var to = toAbsoluteIndex$6(target, len);
    var from = toAbsoluteIndex$6(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$8((end === undefined ? len : toAbsoluteIndex$6(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var $$2u = _export;
  var copyWithin = arrayCopyWithin;
  var addToUnscopables$7 = addToUnscopables$9; // `Array.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin

  $$2u({
    target: 'Array',
    proto: true
  }, {
    copyWithin: copyWithin
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$7('copyWithin');

  var fails$$ = fails$1f;

  var arrayMethodIsStrict$9 = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$$(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };

  var $$2t = _export;
  var $every$1 = arrayIteration.every;
  var arrayMethodIsStrict$8 = arrayMethodIsStrict$9;
  var STRICT_METHOD$8 = arrayMethodIsStrict$8('every'); // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every

  $$2t({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$8
  }, {
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return $every$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var toObject$h = toObject$p;
  var toAbsoluteIndex$5 = toAbsoluteIndex$9;
  var lengthOfArrayLike$f = lengthOfArrayLike$n; // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  var arrayFill$1 = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = toObject$h(this);
    var length = lengthOfArrayLike$f(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex$5(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex$5(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  var $$2s = _export;
  var fill$1 = arrayFill$1;
  var addToUnscopables$6 = addToUnscopables$9; // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  $$2s({
    target: 'Array',
    proto: true
  }, {
    fill: fill$1
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$6('fill');

  var $$2r = _export;
  var $filter$1 = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$2r({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2q = _export;
  var $find$1 = arrayIteration.find;
  var addToUnscopables$5 = addToUnscopables$9;
  var FIND = 'find';
  var SKIPS_HOLES$1 = true; // Shouldn't skip holes

  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES$1 = false;
  }); // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find

  $$2q({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES$1
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$5(FIND);

  var $$2p = _export;
  var $findIndex$1 = arrayIteration.findIndex;
  var addToUnscopables$4 = addToUnscopables$9;
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true; // Shouldn't skip holes

  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex

  $$2p({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$4(FIND_INDEX);

  var global$15 = global$1E;
  var isArray$3 = isArray$7;
  var lengthOfArrayLike$e = lengthOfArrayLike$n;
  var bind$a = functionBindContext;
  var TypeError$j = global$15.TypeError; // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

  var flattenIntoArray$2 = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind$a(mapper, thisArg) : false;
    var element, elementLen;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray$3(element)) {
          elementLen = lengthOfArrayLike$e(element);
          targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$j('Exceed the acceptable array length');
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray$2;

  var $$2o = _export;
  var flattenIntoArray$1 = flattenIntoArray_1;
  var toObject$g = toObject$p;
  var lengthOfArrayLike$d = lengthOfArrayLike$n;
  var toIntegerOrInfinity$e = toIntegerOrInfinity$i;
  var arraySpeciesCreate$2 = arraySpeciesCreate$5; // `Array.prototype.flat` method
  // https://tc39.es/ecma262/#sec-array.prototype.flat

  $$2o({
    target: 'Array',
    proto: true
  }, {
    flat: function
      /* depthArg = 1 */
    flat() {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = toObject$g(this);
      var sourceLen = lengthOfArrayLike$d(O);
      var A = arraySpeciesCreate$2(O, 0);
      A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity$e(depthArg));
      return A;
    }
  });

  var $$2n = _export;
  var flattenIntoArray = flattenIntoArray_1;
  var aCallable$c = aCallable$g;
  var toObject$f = toObject$p;
  var lengthOfArrayLike$c = lengthOfArrayLike$n;
  var arraySpeciesCreate$1 = arraySpeciesCreate$5; // `Array.prototype.flatMap` method
  // https://tc39.es/ecma262/#sec-array.prototype.flatmap

  $$2n({
    target: 'Array',
    proto: true
  }, {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = toObject$f(this);
      var sourceLen = lengthOfArrayLike$c(O);
      var A;
      aCallable$c(callbackfn);
      A = arraySpeciesCreate$1(O, 0);
      A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  });

  var $forEach$1 = arrayIteration.forEach;
  var arrayMethodIsStrict$7 = arrayMethodIsStrict$9;
  var STRICT_METHOD$7 = arrayMethodIsStrict$7('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$7 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var $$2m = _export;
  var forEach$2 = arrayForEach; // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe

  $$2m({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach$2
  }, {
    forEach: forEach$2
  });

  var anObject$r = anObject$C;
  var iteratorClose = iteratorClose$2; // call something on iterator step with safe closing on error

  var callWithSafeIterationClosing$1 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$r(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var global$14 = global$1E;
  var bind$9 = functionBindContext;
  var call$m = functionCall;
  var toObject$e = toObject$p;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var isConstructor$4 = isConstructor$6;
  var lengthOfArrayLike$b = lengthOfArrayLike$n;
  var createProperty$6 = createProperty$9;
  var getIterator$2 = getIterator$4;
  var getIteratorMethod$2 = getIteratorMethod$5;
  var Array$7 = global$14.Array; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom$1 = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$e(arrayLike);
    var IS_CONSTRUCTOR = isConstructor$4(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$2(O);
    var index = 0;
    var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod && !(this == Array$7 && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$2(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];

      for (; !(step = call$m(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$6(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$b(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$7(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$6(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var wellKnownSymbol$k = wellKnownSymbol$y;
  var ITERATOR$8 = wellKnownSymbol$k('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$8] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$4 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$8] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var $$2l = _export;
  var from = arrayFrom$1;
  var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$3(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$2l({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: from
  });

  var $$2k = _export;
  var $includes$1 = arrayIncludes.includes;
  var addToUnscopables$3 = addToUnscopables$9; // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes

  $$2k({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$3('includes');

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $$2j = _export;
  var uncurryThis$Y = functionUncurryThis;
  var $IndexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$6 = arrayMethodIsStrict$9;
  var un$IndexOf = uncurryThis$Y([].indexOf);
  var NEGATIVE_ZERO$1 = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
  var STRICT_METHOD$6 = arrayMethodIsStrict$6('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  $$2j({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$6
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO$1 // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
    }
  });

  var $$2i = _export;
  var isArray$2 = isArray$7; // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray

  $$2i({
    target: 'Array',
    stat: true
  }, {
    isArray: isArray$2
  });

  var fails$_ = fails$1f;
  var isCallable$e = isCallable$v;
  var getPrototypeOf$8 = objectGetPrototypeOf$1;
  var redefine$h = redefine$l.exports;
  var wellKnownSymbol$j = wellKnownSymbol$y;
  var ITERATOR$7 = wellKnownSymbol$j('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object

  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$_(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$7].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!isCallable$e(IteratorPrototype$2[ITERATOR$7])) {
    redefine$h(IteratorPrototype$2, ITERATOR$7, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$8 = objectCreate;
  var createPropertyDescriptor$5 = createPropertyDescriptor$c;
  var setToStringTag$a = setToStringTag$c;
  var Iterators$2 = iterators;

  var returnThis$1 = function returnThis() {
    return this;
  };

  var createIteratorConstructor$3 = function createIteratorConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$8(IteratorPrototype$1, {
      next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag$a(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var $$2h = _export;
  var call$l = functionCall;
  var FunctionName$1 = functionName;
  var isCallable$d = isCallable$v;
  var createIteratorConstructor$2 = createIteratorConstructor$3;
  var getPrototypeOf$7 = objectGetPrototypeOf$1;
  var setPrototypeOf$5 = objectSetPrototypeOf$1;
  var setToStringTag$9 = setToStringTag$c;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$f;
  var redefine$g = redefine$l.exports;
  var wellKnownSymbol$i = wellKnownSymbol$y;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$6 = wellKnownSymbol$i('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator$3 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$2(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$6] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));

      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$7(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$5) {
            setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$d(CurrentIteratorPrototype[ITERATOR$6])) {
            redefine$g(CurrentIteratorPrototype, ITERATOR$6, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag$9(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty$8(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return call$l(nativeIterator, this);
        };
      }
    } // export additional methods


    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$g(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$2h({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    } // define iterator


    if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
      redefine$g(IterablePrototype, ITERATOR$6, defaultIterator, {
        name: DEFAULT
      });
    }

    Iterators$1[NAME] = defaultIterator;
    return methods;
  };

  var toIndexedObject$8 = toIndexedObject$f;
  var addToUnscopables$2 = addToUnscopables$9;
  var Iterators = iterators;
  var InternalStateModule$a = internalState;
  var defineProperty$d = objectDefineProperty.f;
  var defineIterator$2 = defineIterator$3;
  var DESCRIPTORS$q = descriptors;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$a = InternalStateModule$a.set;
  var getInternalState$9 = InternalStateModule$a.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$a(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$8(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$9(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  var values = Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$2('keys');
  addToUnscopables$2('values');
  addToUnscopables$2('entries'); // V8 ~ Chrome 45- bug

  if (DESCRIPTORS$q && values.name !== 'values') try {
    defineProperty$d(values, 'name', {
      value: 'values'
    });
  } catch (error) {
    /* empty */
  }

  var $$2g = _export;
  var uncurryThis$X = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toIndexedObject$7 = toIndexedObject$f;
  var arrayMethodIsStrict$5 = arrayMethodIsStrict$9;
  var un$Join = uncurryThis$X([].join);
  var ES3_STRINGS = IndexedObject$2 != Object;
  var STRICT_METHOD$5 = arrayMethodIsStrict$5('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  $$2g({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD$5
  }, {
    join: function join(separator) {
      return un$Join(toIndexedObject$7(this), separator === undefined ? ',' : separator);
    }
  });

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */


  var apply$8 = functionApply$1;
  var toIndexedObject$6 = toIndexedObject$f;
  var toIntegerOrInfinity$d = toIntegerOrInfinity$i;
  var lengthOfArrayLike$a = lengthOfArrayLike$n;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$9;
  var min$7 = Math.min;
  var $lastIndexOf$1 = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$4 = arrayMethodIsStrict$4('lastIndexOf');
  var FORCED$r = NEGATIVE_ZERO || !STRICT_METHOD$4; // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

  var arrayLastIndexOf = FORCED$r ? function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return apply$8($lastIndexOf$1, this, arguments) || 0;
    var O = toIndexedObject$6(this);
    var length = lengthOfArrayLike$a(O);
    var index = length - 1;
    if (arguments.length > 1) index = min$7(index, toIntegerOrInfinity$d(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O && O[index] === searchElement) return index || 0;
    }

    return -1;
  } : $lastIndexOf$1;

  var $$2f = _export;
  var lastIndexOf = arrayLastIndexOf; // `Array.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing

  $$2f({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
  }, {
    lastIndexOf: lastIndexOf
  });

  var $$2e = _export;
  var $map$1 = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$2e({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2d = _export;
  var global$13 = global$1E;
  var fails$Z = fails$1f;
  var isConstructor$3 = isConstructor$6;
  var createProperty$5 = createProperty$9;
  var Array$6 = global$13.Array;
  var ISNT_GENERIC = fails$Z(function () {
    function F() {
      /* empty */
    }

    return !(Array$6.of.call(F) instanceof F);
  }); // `Array.of` method
  // https://tc39.es/ecma262/#sec-array.of
  // WebKit Array.of isn't generic

  $$2d({
    target: 'Array',
    stat: true,
    forced: ISNT_GENERIC
  }, {
    of: function
      /* ...args */
    of() {
      var index = 0;
      var argumentsLength = arguments.length;
      var result = new (isConstructor$3(this) ? this : Array$6)(argumentsLength);

      while (argumentsLength > index) {
        createProperty$5(result, index, arguments[index++]);
      }

      result.length = argumentsLength;
      return result;
    }
  });

  var global$12 = global$1E;
  var aCallable$b = aCallable$g;
  var toObject$d = toObject$p;
  var IndexedObject$1 = indexedObject;
  var lengthOfArrayLike$9 = lengthOfArrayLike$n;
  var TypeError$i = global$12.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod$4 = function createMethod(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable$b(callbackfn);
      var O = toObject$d(that);
      var self = IndexedObject$1(O);
      var length = lengthOfArrayLike$9(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError$i('Reduce of empty array with no initial value');
        }
      }

      for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }

      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$4(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$4(true)
  };

  var classof$d = classofRaw$1;
  var global$11 = global$1E;
  var engineIsNode = classof$d(global$11.process) == 'process';

  var $$2c = _export;
  var $reduce$1 = arrayReduce.left;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$9;
  var CHROME_VERSION$1 = engineV8Version;
  var IS_NODE$6 = engineIsNode;
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG$1 = !IS_NODE$6 && CHROME_VERSION$1 > 79 && CHROME_VERSION$1 < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  $$2c({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$3 || CHROME_BUG$1
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var length = arguments.length;
      return $reduce$1(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2b = _export;
  var $reduceRight$1 = arrayReduce.right;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$9;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE$5 = engineIsNode;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('reduceRight'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !IS_NODE$5 && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright

  $$2b({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$2 || CHROME_BUG
  }, {
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$2a = _export;
  var uncurryThis$W = functionUncurryThis;
  var isArray$1 = isArray$7;
  var un$Reverse = uncurryThis$W([].reverse);
  var test$1 = [1, 2]; // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794

  $$2a({
    target: 'Array',
    proto: true,
    forced: String(test$1) === String(test$1.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray$1(this)) this.length = this.length;
      return un$Reverse(this);
    }
  });

  var $$29 = _export;
  var global$10 = global$1E;
  var isArray = isArray$7;
  var isConstructor$2 = isConstructor$6;
  var isObject$o = isObject$z;
  var toAbsoluteIndex$4 = toAbsoluteIndex$9;
  var lengthOfArrayLike$8 = lengthOfArrayLike$n;
  var toIndexedObject$5 = toIndexedObject$f;
  var createProperty$4 = createProperty$9;
  var wellKnownSymbol$h = wellKnownSymbol$y;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var un$Slice = arraySlice$b;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
  var SPECIES$4 = wellKnownSymbol$h('species');
  var Array$5 = global$10.Array;
  var max$5 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$29({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$5(this);
      var length = lengthOfArrayLike$8(O);
      var k = toAbsoluteIndex$4(start, length);
      var fin = toAbsoluteIndex$4(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (isConstructor$2(Constructor) && (Constructor === Array$5 || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$o(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array$5 || Constructor === undefined) {
          return un$Slice(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array$5 : Constructor)(max$5(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty$4(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var $$28 = _export;
  var $some$1 = arrayIteration.some;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$9;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('some'); // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some

  $$28({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1
  }, {
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var arraySlice$9 = arraySliceSimple;
  var floor$a = Math.floor;

  var mergeSort = function mergeSort(array, comparefn) {
    var length = array.length;
    var middle = floor$a(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice$9(array, 0, middle), comparefn), mergeSort(arraySlice$9(array, middle), comparefn), comparefn);
  };

  var insertionSort = function insertionSort(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];

      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }

      if (j !== i++) array[j] = element;
    }

    return array;
  };

  var merge = function merge(array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }

    return array;
  };

  var arraySort$1 = mergeSort;

  var userAgent$6 = engineUserAgent;
  var firefox = userAgent$6.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent$5 = engineUserAgent;
  var webkit = userAgent$5.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$27 = _export;
  var uncurryThis$V = functionUncurryThis;
  var aCallable$a = aCallable$g;
  var toObject$c = toObject$p;
  var lengthOfArrayLike$7 = lengthOfArrayLike$n;
  var toString$r = toString$u;
  var fails$Y = fails$1f;
  var internalSort$1 = arraySort$1;
  var arrayMethodIsStrict = arrayMethodIsStrict$9;
  var FF$1 = engineFfVersion;
  var IE_OR_EDGE$1 = engineIsIeOrEdge;
  var V8$1 = engineV8Version;
  var WEBKIT$2 = engineWebkitVersion;
  var test = [];
  var un$Sort$1 = uncurryThis$V(test.sort);
  var push$9 = uncurryThis$V(test.push); // IE8-

  var FAILS_ON_UNDEFINED = fails$Y(function () {
    test.sort(undefined);
  }); // V8 bug

  var FAILS_ON_NULL = fails$Y(function () {
    test.sort(null);
  }); // Old WebKit

  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT$1 = !fails$Y(function () {
    // feature detection can be too slow, so check engines versions
    if (V8$1) return V8$1 < 70;
    if (FF$1 && FF$1 > 3) return;
    if (IE_OR_EDGE$1) return true;
    if (WEBKIT$2) return WEBKIT$2 < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;

        case 68:
        case 71:
          value = 4;
          break;

        default:
          value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }

    test.sort(function (a, b) {
      return b.v - a.v;
    });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });
  var FORCED$q = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

  var getSortCompare$1 = function getSortCompare(comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$r(x) > toString$r(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort


  $$27({
    target: 'Array',
    proto: true,
    forced: FORCED$q
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$a(comparefn);
      var array = toObject$c(this);
      if (STABLE_SORT$1) return comparefn === undefined ? un$Sort$1(array) : un$Sort$1(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$7(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$9(items, array[index]);
      }

      internalSort$1(items, getSortCompare$1(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) {
        array[index] = items[index++];
      }

      while (index < arrayLength) {
        delete array[index++];
      }

      return array;
    }
  });

  var getBuiltIn$c = getBuiltIn$l;
  var definePropertyModule$6 = objectDefineProperty;
  var wellKnownSymbol$g = wellKnownSymbol$y;
  var DESCRIPTORS$p = descriptors;
  var SPECIES$3 = wellKnownSymbol$g('species');

  var setSpecies$6 = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$c(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$6.f;

    if (DESCRIPTORS$p && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var setSpecies$5 = setSpecies$6; // `Array[@@species]` getter
  // https://tc39.es/ecma262/#sec-get-array-@@species

  setSpecies$5('Array');

  var $$26 = _export;
  var global$$ = global$1E;
  var toAbsoluteIndex$3 = toAbsoluteIndex$9;
  var toIntegerOrInfinity$c = toIntegerOrInfinity$i;
  var lengthOfArrayLike$6 = lengthOfArrayLike$n;
  var toObject$b = toObject$p;
  var arraySpeciesCreate = arraySpeciesCreate$5;
  var createProperty$3 = createProperty$9;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var TypeError$h = global$$.TypeError;
  var max$4 = Math.max;
  var min$6 = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$26({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$b(this);
      var len = lengthOfArrayLike$6(O);
      var actualStart = toAbsoluteIndex$3(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$6(max$4(toIntegerOrInfinity$c(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError$h(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$3(A, k, O[from]);
      }

      A.length = actualDeleteCount;

      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }

        for (k = len; k > len - actualDeleteCount + insertCount; k--) {
          delete O[k - 1];
        }
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }

      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }

      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  // in popular engines, so it's moved to a separate module

  var addToUnscopables$1 = addToUnscopables$9; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$1('flat');

  // in popular engines, so it's moved to a separate module

  var addToUnscopables = addToUnscopables$9; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('flatMap');

  var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

  var redefine$f = redefine$l.exports;

  var redefineAll$6 = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine$f(target, key, src[key], options);
    }

    return target;
  };

  var global$_ = global$1E;
  var isPrototypeOf$6 = objectIsPrototypeOf;
  var TypeError$g = global$_.TypeError;

  var anInstance$a = function anInstance(it, Prototype) {
    if (isPrototypeOf$6(Prototype, it)) return it;
    throw TypeError$g('Incorrect invocation');
  };

  var global$Z = global$1E;
  var toIntegerOrInfinity$b = toIntegerOrInfinity$i;
  var toLength$b = toLength$d;
  var RangeError$c = global$Z.RangeError; // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex

  var toIndex$2 = function toIndex(it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity$b(it);
    var length = toLength$b(number);
    if (number !== length) throw RangeError$c('Wrong length or index');
    return length;
  };

  var global$Y = global$1E;
  var Array$4 = global$Y.Array;
  var abs$9 = Math.abs;
  var pow$5 = Math.pow;
  var floor$9 = Math.floor;
  var log$8 = Math.log;
  var LN2$2 = Math.LN2;

  var pack = function pack(number, mantissaLength, bytes) {
    var buffer = Array$4(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow$5(2, -24) - pow$5(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs$9(number); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$9(log$8(number) / LN2$2);
      c = pow$5(2, -exponent);

      if (number * c < 1) {
        exponent--;
        c *= 2;
      }

      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow$5(2, 1 - eBias);
      }

      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }

      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow$5(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow$5(2, eBias - 1) * pow$5(2, mantissaLength);
        exponent = 0;
      }
    }

    while (mantissaLength >= 8) {
      buffer[index++] = mantissa & 255;
      mantissa /= 256;
      mantissaLength -= 8;
    }

    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;

    while (exponentLength > 0) {
      buffer[index++] = exponent & 255;
      exponent /= 256;
      exponentLength -= 8;
    }

    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function unpack(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;

    while (nBits > 0) {
      exponent = exponent * 256 + buffer[index--];
      nBits -= 8;
    }

    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;

    while (nBits > 0) {
      mantissa = mantissa * 256 + buffer[index--];
      nBits -= 8;
    }

    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow$5(2, mantissaLength);
      exponent = exponent - eBias;
    }

    return (sign ? -1 : 1) * mantissa * pow$5(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var global$X = global$1E;
  var uncurryThis$U = functionUncurryThis;
  var DESCRIPTORS$o = descriptors;
  var NATIVE_ARRAY_BUFFER$2 = arrayBufferNative;
  var FunctionName = functionName;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$f;
  var redefineAll$5 = redefineAll$6;
  var fails$X = fails$1f;
  var anInstance$9 = anInstance$a;
  var toIntegerOrInfinity$a = toIntegerOrInfinity$i;
  var toLength$a = toLength$d;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf$6 = objectGetPrototypeOf$1;
  var setPrototypeOf$4 = objectSetPrototypeOf$1;
  var getOwnPropertyNames$4 = objectGetOwnPropertyNames.f;
  var defineProperty$c = objectDefineProperty.f;
  var arrayFill = arrayFill$1;
  var arraySlice$8 = arraySliceSimple;
  var setToStringTag$8 = setToStringTag$c;
  var InternalStateModule$9 = internalState;
  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var getInternalState$8 = InternalStateModule$9.get;
  var setInternalState$9 = InternalStateModule$9.set;
  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH$1 = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer$1 = global$X[ARRAY_BUFFER$1];
  var $ArrayBuffer = NativeArrayBuffer$1;
  var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
  var $DataView = global$X[DATA_VIEW];
  var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype$2 = Object.prototype;
  var Array$3 = global$X.Array;
  var RangeError$b = global$X.RangeError;
  var fill = uncurryThis$U(arrayFill);
  var reverse = uncurryThis$U([].reverse);
  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;

  var packInt8 = function packInt8(number) {
    return [number & 0xFF];
  };

  var packInt16 = function packInt16(number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function packInt32(number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function unpackInt32(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function packFloat32(number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function packFloat64(number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter$1 = function addGetter(Constructor, key) {
    defineProperty$c(Constructor[PROTOTYPE], key, {
      get: function get() {
        return getInternalState$8(this)[key];
      }
    });
  };

  var get$3 = function get(view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$8(view);
    if (intIndex + count > store.byteLength) throw RangeError$b(WRONG_INDEX);
    var bytes = getInternalState$8(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = arraySlice$8(bytes, start, start + count);
    return isLittleEndian ? pack : reverse(pack);
  };

  var set$4 = function set(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$8(view);
    if (intIndex + count > store.byteLength) throw RangeError$b(WRONG_INDEX);
    var bytes = getInternalState$8(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);

    for (var i = 0; i < count; i++) {
      bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
    }
  };

  if (!NATIVE_ARRAY_BUFFER$2) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$9(this, ArrayBufferPrototype$1);
      var byteLength = toIndex$1(length);
      setInternalState$9(this, {
        bytes: fill(Array$3(byteLength), 0),
        byteLength: byteLength
      });
      if (!DESCRIPTORS$o) this.byteLength = byteLength;
    };

    ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$9(this, DataViewPrototype$1);
      anInstance$9(buffer, ArrayBufferPrototype$1);
      var bufferLength = getInternalState$8(buffer).byteLength;
      var offset = toIntegerOrInfinity$a(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$b('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength$a(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$b(WRONG_LENGTH$1);
      setInternalState$9(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });

      if (!DESCRIPTORS$o) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    DataViewPrototype$1 = $DataView[PROTOTYPE];

    if (DESCRIPTORS$o) {
      addGetter$1($ArrayBuffer, 'byteLength');
      addGetter$1($DataView, 'buffer');
      addGetter$1($DataView, 'byteLength');
      addGetter$1($DataView, 'byteOffset');
    }

    redefineAll$5(DataViewPrototype$1, {
      getInt8: function getInt8(byteOffset) {
        return get$3(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$3(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$3(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$3(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$3(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$3(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$3(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$3(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$4(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$4(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set$4(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$2 && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
    /* eslint-disable no-new -- required for testing */

    if (!fails$X(function () {
      NativeArrayBuffer$1(1);
    }) || !fails$X(function () {
      new NativeArrayBuffer$1(-1);
    }) || fails$X(function () {
      new NativeArrayBuffer$1();
      new NativeArrayBuffer$1(1.5);
      new NativeArrayBuffer$1(NaN);
      return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$9(this, ArrayBufferPrototype$1);
        return new NativeArrayBuffer$1(toIndex$1(length));
      };

      $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

      for (var keys$2 = getOwnPropertyNames$4(NativeArrayBuffer$1), j$1 = 0, key$3; keys$2.length > j$1;) {
        if (!((key$3 = keys$2[j$1++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$7($ArrayBuffer, key$3, NativeArrayBuffer$1[key$3]);
        }
      }

      ArrayBufferPrototype$1.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$7(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
    } // WebKit bug - the same parent prototype for typed arrays and data view


    if (setPrototypeOf$4 && getPrototypeOf$6(DataViewPrototype$1) !== ObjectPrototype$2) {
      setPrototypeOf$4(DataViewPrototype$1, ObjectPrototype$2);
    } // iOS Safari 7.x bug


    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = uncurryThis$U(DataViewPrototype$1.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll$5(DataViewPrototype$1, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      }
    }, {
      unsafe: true
    });
  }

  setToStringTag$8($ArrayBuffer, ARRAY_BUFFER$1);
  setToStringTag$8($DataView, DATA_VIEW);
  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var $$25 = _export;
  var global$W = global$1E;
  var arrayBufferModule = arrayBuffer;
  var setSpecies$4 = setSpecies$6;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var ArrayBuffer$4 = arrayBufferModule[ARRAY_BUFFER];
  var NativeArrayBuffer = global$W[ARRAY_BUFFER]; // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor

  $$25({
    global: true,
    forced: NativeArrayBuffer !== ArrayBuffer$4
  }, {
    ArrayBuffer: ArrayBuffer$4
  });
  setSpecies$4(ARRAY_BUFFER);

  var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
  var DESCRIPTORS$n = descriptors;
  var global$V = global$1E;
  var isCallable$c = isCallable$v;
  var isObject$n = isObject$z;
  var hasOwn$g = hasOwnProperty_1;
  var classof$c = classof$i;
  var tryToString$1 = tryToString$5;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$f;
  var redefine$e = redefine$l.exports;
  var defineProperty$b = objectDefineProperty.f;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var getPrototypeOf$5 = objectGetPrototypeOf$1;
  var setPrototypeOf$3 = objectSetPrototypeOf$1;
  var wellKnownSymbol$f = wellKnownSymbol$y;
  var uid$2 = uid$6;
  var Int8Array$4 = global$V.Int8Array;
  var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
  var Uint8ClampedArray$1 = global$V.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
  var TypedArray$1 = Int8Array$4 && getPrototypeOf$5(Int8Array$4);
  var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf$5(Int8ArrayPrototype$1);
  var ObjectPrototype$1 = Object.prototype;
  var TypeError$f = global$V.TypeError;
  var TO_STRING_TAG$1 = wellKnownSymbol$f('toStringTag');
  var TYPED_ARRAY_TAG$1 = uid$2('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR$2 = uid$2('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

  var NATIVE_ARRAY_BUFFER_VIEWS$3 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$c(global$V.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQUIRED = false;
  var NAME$1, Constructor, Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$n(it)) return false;
    var klass = classof$c(it);
    return klass === 'DataView' || hasOwn$g(TypedArrayConstructorsList, klass) || hasOwn$g(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray$1 = function isTypedArray(it) {
    if (!isObject$n(it)) return false;
    var klass = classof$c(it);
    return hasOwn$g(TypedArrayConstructorsList, klass) || hasOwn$g(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$n = function aTypedArray(it) {
    if (isTypedArray$1(it)) return it;
    throw TypeError$f('Target is not a typed array');
  };

  var aTypedArrayConstructor$4 = function aTypedArrayConstructor(C) {
    if (isCallable$c(C) && (!setPrototypeOf$3 || isPrototypeOf$5(TypedArray$1, C))) return C;
    throw TypeError$f(tryToString$1(C) + ' is not a typed array constructor');
  };

  var exportTypedArrayMethod$o = function exportTypedArrayMethod(KEY, property, forced, options) {
    if (!DESCRIPTORS$n) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global$V[ARRAY];
      if (TypedArrayConstructor && hasOwn$g(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        // old WebKit bug - some methods are non-configurable
        try {
          TypedArrayConstructor.prototype[KEY] = property;
        } catch (error2) {
          /* empty */
        }
      }
    }

    if (!TypedArrayPrototype$2[KEY] || forced) {
      redefine$e(TypedArrayPrototype$2, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$3 && Int8ArrayPrototype$1[KEY] || property, options);
    }
  };

  var exportTypedArrayStaticMethod$2 = function exportTypedArrayStaticMethod(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$n) return;

    if (setPrototypeOf$3) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global$V[ARRAY];
        if (TypedArrayConstructor && hasOwn$g(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) {
          /* empty */
        }
      }

      if (!TypedArray$1[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine$e(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$3 && TypedArray$1[KEY] || property);
        } catch (error) {
          /* empty */
        }
      } else return;
    }

    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$V[ARRAY];

      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine$e(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME$1 in TypedArrayConstructorsList) {
    Constructor = global$V[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$6(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS$3 = false;
  }

  for (NAME$1 in BigIntArrayConstructorsList) {
    Constructor = global$V[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$6(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);
  } // WebKit bug - typed arrays constructors prototype is Object.prototype


  if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || !isCallable$c(TypedArray$1) || TypedArray$1 === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray$1 = function TypedArray() {
      throw TypeError$f('Incorrect invocation');
    };

    if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME$1 in TypedArrayConstructorsList) {
      if (global$V[NAME$1]) setPrototypeOf$3(global$V[NAME$1], TypedArray$1);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype$1) {
    TypedArrayPrototype$2 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME$1 in TypedArrayConstructorsList) {
      if (global$V[NAME$1]) setPrototypeOf$3(global$V[NAME$1].prototype, TypedArrayPrototype$2);
    }
  } // WebKit bug - one more object in Uint8ClampedArray prototype chain


  if (NATIVE_ARRAY_BUFFER_VIEWS$3 && getPrototypeOf$5(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
    setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
  }

  if (DESCRIPTORS$n && !hasOwn$g(TypedArrayPrototype$2, TO_STRING_TAG$1)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty$b(TypedArrayPrototype$2, TO_STRING_TAG$1, {
      get: function get() {
        return isObject$n(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
      }
    });

    for (NAME$1 in TypedArrayConstructorsList) {
      if (global$V[NAME$1]) {
        createNonEnumerableProperty$6(global$V[NAME$1], TYPED_ARRAY_TAG$1, NAME$1);
      }
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$3,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$2,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$n,
    aTypedArrayConstructor: aTypedArrayConstructor$4,
    exportTypedArrayMethod: exportTypedArrayMethod$o,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
    isView: isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$2
  };

  var $$24 = _export;
  var ArrayBufferViewCore$q = arrayBufferViewCore;
  var NATIVE_ARRAY_BUFFER_VIEWS$2 = ArrayBufferViewCore$q.NATIVE_ARRAY_BUFFER_VIEWS; // `ArrayBuffer.isView` method
  // https://tc39.es/ecma262/#sec-arraybuffer.isview

  $$24({
    target: 'ArrayBuffer',
    stat: true,
    forced: !NATIVE_ARRAY_BUFFER_VIEWS$2
  }, {
    isView: ArrayBufferViewCore$q.isView
  });

  var global$U = global$1E;
  var isConstructor$1 = isConstructor$6;
  var tryToString = tryToString$5;
  var TypeError$e = global$U.TypeError; // `Assert: IsConstructor(argument) is true`

  var aConstructor$3 = function aConstructor(argument) {
    if (isConstructor$1(argument)) return argument;
    throw TypeError$e(tryToString(argument) + ' is not a constructor');
  };

  var anObject$q = anObject$C;
  var aConstructor$2 = aConstructor$3;
  var wellKnownSymbol$e = wellKnownSymbol$y;
  var SPECIES$2 = wellKnownSymbol$e('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor$6 = function speciesConstructor(O, defaultConstructor) {
    var C = anObject$q(O).constructor;
    var S;
    return C === undefined || (S = anObject$q(C)[SPECIES$2]) == undefined ? defaultConstructor : aConstructor$2(S);
  };

  var $$23 = _export;
  var uncurryThis$T = functionUncurryThis;
  var fails$W = fails$1f;
  var ArrayBufferModule$2 = arrayBuffer;
  var anObject$p = anObject$C;
  var toAbsoluteIndex$2 = toAbsoluteIndex$9;
  var toLength$9 = toLength$d;
  var speciesConstructor$5 = speciesConstructor$6;
  var ArrayBuffer$3 = ArrayBufferModule$2.ArrayBuffer;
  var DataView$2 = ArrayBufferModule$2.DataView;
  var DataViewPrototype = DataView$2.prototype;
  var un$ArrayBufferSlice = uncurryThis$T(ArrayBuffer$3.prototype.slice);
  var getUint8 = uncurryThis$T(DataViewPrototype.getUint8);
  var setUint8 = uncurryThis$T(DataViewPrototype.setUint8);
  var INCORRECT_SLICE = fails$W(function () {
    return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
  }); // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice

  $$23({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
  }, {
    slice: function slice(start, end) {
      if (un$ArrayBufferSlice && end === undefined) {
        return un$ArrayBufferSlice(anObject$p(this), start); // FF fix
      }

      var length = anObject$p(this).byteLength;
      var first = toAbsoluteIndex$2(start, length);
      var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
      var result = new (speciesConstructor$5(this, ArrayBuffer$3))(toLength$9(fin - first));
      var viewSource = new DataView$2(this);
      var viewTarget = new DataView$2(result);
      var index = 0;

      while (first < fin) {
        setUint8(viewTarget, index++, getUint8(viewSource, first++));
      }

      return result;
    }
  });

  var $$22 = _export;
  var ArrayBufferModule$1 = arrayBuffer;
  var NATIVE_ARRAY_BUFFER = arrayBufferNative; // `DataView` constructor
  // https://tc39.es/ecma262/#sec-dataview-constructor

  $$22({
    global: true,
    forced: !NATIVE_ARRAY_BUFFER
  }, {
    DataView: ArrayBufferModule$1.DataView
  });

  var $$21 = _export;
  var uncurryThis$S = functionUncurryThis;
  var fails$V = fails$1f;
  var FORCED$p = fails$V(function () {
    return new Date(16e11).getYear() !== 120;
  });
  var getFullYear = uncurryThis$S(Date.prototype.getFullYear); // `Date.prototype.getYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.getyear

  $$21({
    target: 'Date',
    proto: true,
    forced: FORCED$p
  }, {
    getYear: function getYear() {
      return getFullYear(this) - 1900;
    }
  });

  var $$20 = _export;
  var global$T = global$1E;
  var uncurryThis$R = functionUncurryThis;
  var Date$2 = global$T.Date;
  var getTime$4 = uncurryThis$R(Date$2.prototype.getTime); // `Date.now` method
  // https://tc39.es/ecma262/#sec-date.now

  $$20({
    target: 'Date',
    stat: true
  }, {
    now: function now() {
      return getTime$4(new Date$2());
    }
  });

  var $$1$ = _export;
  var uncurryThis$Q = functionUncurryThis;
  var toIntegerOrInfinity$9 = toIntegerOrInfinity$i;
  var DatePrototype$3 = Date.prototype;
  var getTime$3 = uncurryThis$Q(DatePrototype$3.getTime);
  var setFullYear = uncurryThis$Q(DatePrototype$3.setFullYear); // `Date.prototype.setYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.setyear

  $$1$({
    target: 'Date',
    proto: true
  }, {
    setYear: function setYear(year) {
      // validate
      getTime$3(this);
      var yi = toIntegerOrInfinity$9(year);
      var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
      return setFullYear(this, yyyy);
    }
  });

  var $$1_ = _export; // `Date.prototype.toGMTString` method
  // https://tc39.es/ecma262/#sec-date.prototype.togmtstring

  $$1_({
    target: 'Date',
    proto: true
  }, {
    toGMTString: Date.prototype.toUTCString
  });

  var global$S = global$1E;
  var toIntegerOrInfinity$8 = toIntegerOrInfinity$i;
  var toString$q = toString$u;
  var requireObjectCoercible$f = requireObjectCoercible$i;
  var RangeError$a = global$S.RangeError; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  var stringRepeat = function repeat(count) {
    var str = toString$q(requireObjectCoercible$f(this));
    var result = '';
    var n = toIntegerOrInfinity$8(count);
    if (n < 0 || n == Infinity) throw RangeError$a('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) result += str;
    }

    return result;
  };

  var uncurryThis$P = functionUncurryThis;
  var toLength$8 = toLength$d;
  var toString$p = toString$u;
  var $repeat$2 = stringRepeat;
  var requireObjectCoercible$e = requireObjectCoercible$i;
  var repeat$3 = uncurryThis$P($repeat$2);
  var stringSlice$e = uncurryThis$P(''.slice);
  var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

  var createMethod$3 = function createMethod(IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString$p(requireObjectCoercible$e($this));
      var intMaxLength = toLength$8(maxLength);
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString$p(fillString);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = repeat$3(fillStr, ceil$1(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringSlice$e(stringFiller, 0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod$3(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod$3(true)
  };

  var global$R = global$1E;
  var uncurryThis$O = functionUncurryThis;
  var fails$U = fails$1f;
  var padStart = stringPad.start;
  var RangeError$9 = global$R.RangeError;
  var abs$8 = Math.abs;
  var DatePrototype$2 = Date.prototype;
  var n$DateToISOString = DatePrototype$2.toISOString;
  var getTime$2 = uncurryThis$O(DatePrototype$2.getTime);
  var getUTCDate = uncurryThis$O(DatePrototype$2.getUTCDate);
  var getUTCFullYear = uncurryThis$O(DatePrototype$2.getUTCFullYear);
  var getUTCHours = uncurryThis$O(DatePrototype$2.getUTCHours);
  var getUTCMilliseconds = uncurryThis$O(DatePrototype$2.getUTCMilliseconds);
  var getUTCMinutes = uncurryThis$O(DatePrototype$2.getUTCMinutes);
  var getUTCMonth = uncurryThis$O(DatePrototype$2.getUTCMonth);
  var getUTCSeconds = uncurryThis$O(DatePrototype$2.getUTCSeconds); // `Date.prototype.toISOString` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit fails here:

  var dateToIsoString = fails$U(function () {
    return n$DateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !fails$U(function () {
    n$DateToISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime$2(this))) throw RangeError$9('Invalid time value');
    var date = this;
    var year = getUTCFullYear(date);
    var milliseconds = getUTCMilliseconds(date);
    var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
    return sign + padStart(abs$8(year), sign ? 6 : 4, 0) + '-' + padStart(getUTCMonth(date) + 1, 2, 0) + '-' + padStart(getUTCDate(date), 2, 0) + 'T' + padStart(getUTCHours(date), 2, 0) + ':' + padStart(getUTCMinutes(date), 2, 0) + ':' + padStart(getUTCSeconds(date), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
  } : n$DateToISOString;

  var $$1Z = _export;
  var toISOString = dateToIsoString; // `Date.prototype.toISOString` method
  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit has a broken implementations

  $$1Z({
    target: 'Date',
    proto: true,
    forced: Date.prototype.toISOString !== toISOString
  }, {
    toISOString: toISOString
  });

  var $$1Y = _export;
  var fails$T = fails$1f;
  var toObject$a = toObject$p;
  var toPrimitive$1 = toPrimitive$3;
  var FORCED$o = fails$T(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }); // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson

  $$1Y({
    target: 'Date',
    proto: true,
    forced: FORCED$o
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject$a(this);
      var pv = toPrimitive$1(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var global$Q = global$1E;
  var anObject$o = anObject$C;
  var ordinaryToPrimitive = ordinaryToPrimitive$2;
  var TypeError$d = global$Q.TypeError; // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  var dateToPrimitive$1 = function dateToPrimitive(hint) {
    anObject$o(this);
    if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw TypeError$d('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };

  var hasOwn$f = hasOwnProperty_1;
  var redefine$d = redefine$l.exports;
  var dateToPrimitive = dateToPrimitive$1;
  var wellKnownSymbol$d = wellKnownSymbol$y;
  var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');
  var DatePrototype$1 = Date.prototype; // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  if (!hasOwn$f(DatePrototype$1, TO_PRIMITIVE)) {
    redefine$d(DatePrototype$1, TO_PRIMITIVE, dateToPrimitive);
  }

  var uncurryThis$N = functionUncurryThis;
  var redefine$c = redefine$l.exports;
  var DatePrototype = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING$1 = 'toString';
  var un$DateToString = uncurryThis$N(DatePrototype[TO_STRING$1]);
  var getTime$1 = uncurryThis$N(DatePrototype.getTime); // `Date.prototype.toString` method
  // https://tc39.es/ecma262/#sec-date.prototype.tostring

  if (String(new Date(NaN)) != INVALID_DATE) {
    redefine$c(DatePrototype, TO_STRING$1, function toString() {
      var value = getTime$1(this); // eslint-disable-next-line no-self-compare -- NaN check

      return value === value ? un$DateToString(this) : INVALID_DATE;
    });
  }

  var $$1X = _export;
  var uncurryThis$M = functionUncurryThis;
  var toString$o = toString$u;
  var charAt$e = uncurryThis$M(''.charAt);
  var charCodeAt$5 = uncurryThis$M(''.charCodeAt);
  var exec$9 = uncurryThis$M(/./.exec);
  var numberToString$2 = uncurryThis$M(1.0.toString);
  var toUpperCase = uncurryThis$M(''.toUpperCase);
  var raw = /[\w*+\-./@]/;

  var hex$2 = function hex(code, length) {
    var result = numberToString$2(code, 16);

    while (result.length < length) {
      result = '0' + result;
    }

    return result;
  }; // `escape` method
  // https://tc39.es/ecma262/#sec-escape-string


  $$1X({
    global: true
  }, {
    escape: function escape(string) {
      var str = toString$o(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, code;

      while (index < length) {
        chr = charAt$e(str, index++);

        if (exec$9(raw, chr)) {
          result += chr;
        } else {
          code = charCodeAt$5(chr, 0);

          if (code < 256) {
            result += '%' + hex$2(code, 2);
          } else {
            result += '%u' + toUpperCase(hex$2(code, 4));
          }
        }
      }

      return result;
    }
  });

  var global$P = global$1E;
  var uncurryThis$L = functionUncurryThis;
  var aCallable$9 = aCallable$g;
  var isObject$m = isObject$z;
  var hasOwn$e = hasOwnProperty_1;
  var arraySlice$7 = arraySlice$b;
  var NATIVE_BIND = functionBindNative;
  var Function$3 = global$P.Function;
  var concat$2 = uncurryThis$L([].concat);
  var join$6 = uncurryThis$L([].join);
  var factories = {};

  var construct = function construct(C, argsLength, args) {
    if (!hasOwn$e(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) {
        list[i] = 'a[' + i + ']';
      }

      factories[argsLength] = Function$3('C,a', 'return new C(' + join$6(list, ',') + ')');
    }

    return factories[argsLength](C, args);
  }; // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind


  var functionBind = NATIVE_BIND ? Function$3.bind : function bind(that
  /* , ...args */
  ) {
    var F = aCallable$9(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$7(arguments, 1);

    var boundFunction = function
      /* args... */
    bound() {
      var args = concat$2(partArgs, arraySlice$7(arguments));
      return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
    };

    if (isObject$m(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  var $$1W = _export;
  var bind$8 = functionBind; // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind

  $$1W({
    target: 'Function',
    proto: true,
    forced: Function.bind !== bind$8
  }, {
    bind: bind$8
  });

  var isCallable$b = isCallable$v;
  var isObject$l = isObject$z;
  var definePropertyModule$5 = objectDefineProperty;
  var getPrototypeOf$4 = objectGetPrototypeOf$1;
  var wellKnownSymbol$c = wellKnownSymbol$y;
  var HAS_INSTANCE = wellKnownSymbol$c('hasInstance');
  var FunctionPrototype$1 = Function.prototype; // `Function.prototype[@@hasInstance]` method
  // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance

  if (!(HAS_INSTANCE in FunctionPrototype$1)) {
    definePropertyModule$5.f(FunctionPrototype$1, HAS_INSTANCE, {
      value: function value(O) {
        if (!isCallable$b(this) || !isObject$l(O)) return false;
        var P = this.prototype;
        if (!isObject$l(P)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

        while (O = getPrototypeOf$4(O)) {
          if (P === O) return true;
        }

        return false;
      }
    });
  }

  var DESCRIPTORS$m = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$K = functionUncurryThis;
  var defineProperty$a = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var functionToString = uncurryThis$K(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec$4 = uncurryThis$K(nameRE.exec);
  var NAME = 'name'; // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name

  if (DESCRIPTORS$m && !FUNCTION_NAME_EXISTS) {
    defineProperty$a(FunctionPrototype, NAME, {
      configurable: true,
      get: function get() {
        try {
          return regExpExec$4(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var $$1V = _export;
  var global$O = global$1E; // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis

  $$1V({
    global: true
  }, {
    globalThis: global$O
  });

  var $$1U = _export;
  var global$N = global$1E;
  var getBuiltIn$b = getBuiltIn$l;
  var apply$7 = functionApply$1;
  var uncurryThis$J = functionUncurryThis;
  var fails$S = fails$1f;
  var Array$2 = global$N.Array;
  var $stringify = getBuiltIn$b('JSON', 'stringify');
  var exec$8 = uncurryThis$J(/./.exec);
  var charAt$d = uncurryThis$J(''.charAt);
  var charCodeAt$4 = uncurryThis$J(''.charCodeAt);
  var replace$9 = uncurryThis$J(''.replace);
  var numberToString$1 = uncurryThis$J(1.0.toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function fix(match, offset, string) {
    var prev = charAt$d(string, offset - 1);
    var next = charAt$d(string, offset + 1);

    if (exec$8(low, match) && !exec$8(hi, next) || exec$8(hi, match) && !exec$8(low, prev)) {
      return "\\u" + numberToString$1(charCodeAt$4(match, 0), 16);
    }

    return match;
  };

  var FORCED$n = fails$S(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    $$1U({
      target: 'JSON',
      stat: true,
      forced: FORCED$n
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        for (var i = 0, l = arguments.length, args = Array$2(l); i < l; i++) {
          args[i] = arguments[i];
        }

        var result = apply$7($stringify, null, args);
        return typeof result == 'string' ? replace$9(result, tester, fix) : result;
      }
    });
  }

  var global$M = global$1E;
  var setToStringTag$7 = setToStringTag$c; // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag

  setToStringTag$7(global$M.JSON, 'JSON', true);

  var internalMetadata = {exports: {}};

  var fails$R = fails$1f;
  var arrayBufferNonExtensible = fails$R(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe

      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
        value: 8
      });
    }
  });

  var fails$Q = fails$1f;
  var isObject$k = isObject$z;
  var classof$b = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE$2 = arrayBufferNonExtensible; // eslint-disable-next-line es/no-object-isextensible -- safe

  var $isExtensible$2 = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$9 = fails$Q(function () {
    $isExtensible$2(1);
  }); // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible

  var objectIsExtensible = FAILS_ON_PRIMITIVES$9 || ARRAY_BUFFER_NON_EXTENSIBLE$2 ? function isExtensible(it) {
    if (!isObject$k(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE$2 && classof$b(it) == 'ArrayBuffer') return false;
    return $isExtensible$2 ? $isExtensible$2(it) : true;
  } : $isExtensible$2;

  var fails$P = fails$1f;
  var freezing = !fails$P(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$1T = _export;
  var uncurryThis$I = functionUncurryThis;
  var hiddenKeys = hiddenKeys$6;
  var isObject$j = isObject$z;
  var hasOwn$d = hasOwnProperty_1;
  var defineProperty$9 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible$1 = objectIsExtensible;
  var uid$1 = uid$6;
  var FREEZING$4 = freezing;
  var REQUIRED = false;
  var METADATA = uid$1('meta');
  var id$2 = 0;

  var setMetadata = function setMetadata(it) {
    defineProperty$9(it, METADATA, {
      value: {
        objectID: 'O' + id$2++,
        // object ID
        weakData: {} // weak collections IDs

      }
    });
  };

  var fastKey$1 = function fastKey(it, create) {
    // return a primitive with prefix
    if (!isObject$j(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!hasOwn$d(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMetadata(it); // return object ID
    }

    return it[METADATA].objectID;
  };

  var getWeakData$1 = function getWeakData(it, create) {
    if (!hasOwn$d(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMetadata(it); // return the store of weak collections IDs
    }

    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling


  var onFreeze$3 = function onFreeze(it) {
    if (FREEZING$4 && REQUIRED && isExtensible$1(it) && !hasOwn$d(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function enable() {
    meta.enable = function () {
      /* empty */
    };

    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$I([].splice);
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key

    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);

        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }

        return result;
      };

      $$1T({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze$3
  };
  hiddenKeys[METADATA] = true;

  var $$1S = _export;
  var global$L = global$1E;
  var uncurryThis$H = functionUncurryThis;
  var isForced$3 = isForced_1;
  var redefine$b = redefine$l.exports;
  var InternalMetadataModule$1 = internalMetadata.exports;
  var iterate$7 = iterate$9;
  var anInstance$8 = anInstance$a;
  var isCallable$a = isCallable$v;
  var isObject$i = isObject$z;
  var fails$O = fails$1f;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
  var setToStringTag$6 = setToStringTag$c;
  var inheritIfRequired$4 = inheritIfRequired$6;

  var collection$4 = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$L[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$H(NativePrototype[KEY]);
      redefine$b(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$i(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$i(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$i(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced$3(CONSTRUCTOR_NAME, !isCallable$a(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$O(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule$1.enable();
    } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails$O(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails$O(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$8(dummy, NativePrototype);
          var that = inheritIfRequired$4(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$7(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$1S({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag$6(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var defineProperty$8 = objectDefineProperty.f;
  var create$7 = objectCreate;
  var redefineAll$4 = redefineAll$6;
  var bind$7 = functionBindContext;
  var anInstance$7 = anInstance$a;
  var iterate$6 = iterate$9;
  var defineIterator$1 = defineIterator$3;
  var setSpecies$3 = setSpecies$6;
  var DESCRIPTORS$l = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$8 = internalState;
  var setInternalState$8 = InternalStateModule$8.set;
  var internalStateGetterFor$1 = InternalStateModule$8.getterFor;
  var collectionStrong$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$7(that, Prototype);
        setInternalState$8(that, {
          type: CONSTRUCTOR_NAME,
          index: create$7(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$l) that.size = 0;
        if (iterable != undefined) iterate$6(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$l) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll$4(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (DESCRIPTORS$l) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$l) state.size--;else that.size--;
          }

          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            }
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll$4(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$l) defineProperty$8(Prototype, 'size', {
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

      defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$8(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) {
          entry = entry.previous;
        } // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species

      setSpecies$3(CONSTRUCTOR_NAME);
    }
  };

  var collection$3 = collection$4;
  var collectionStrong$1 = collectionStrong$2; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects

  collection$3('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);

  var log$7 = Math.log; // `Math.log1p` method implementation
  // https://tc39.es/ecma262/#sec-math.log1p
  // eslint-disable-next-line es/no-math-log1p -- safe

  var mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$7(1 + x);
  };

  var $$1R = _export;
  var log1p$1 = mathLog1p; // eslint-disable-next-line es/no-math-acosh -- required for testing

  var $acosh = Math.acosh;
  var log$6 = Math.log;
  var sqrt$3 = Math.sqrt;
  var LN2$1 = Math.LN2;
  var FORCED$m = !$acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($acosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $acosh(Infinity) != Infinity; // `Math.acosh` method
  // https://tc39.es/ecma262/#sec-math.acosh

  $$1R({
    target: 'Math',
    stat: true,
    forced: FORCED$m
  }, {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log$6(x) + LN2$1 : log1p$1(x - 1 + sqrt$3(x - 1) * sqrt$3(x + 1));
    }
  });

  var $$1Q = _export; // eslint-disable-next-line es/no-math-asinh -- required for testing

  var $asinh = Math.asinh;
  var log$5 = Math.log;
  var sqrt$2 = Math.sqrt;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$5(x + sqrt$2(x * x + 1));
  } // `Math.asinh` method
  // https://tc39.es/ecma262/#sec-math.asinh
  // Tor Browser bug: Math.asinh(0) -> -0


  $$1Q({
    target: 'Math',
    stat: true,
    forced: !($asinh && 1 / $asinh(0) > 0)
  }, {
    asinh: asinh
  });

  var $$1P = _export; // eslint-disable-next-line es/no-math-atanh -- required for testing

  var $atanh = Math.atanh;
  var log$4 = Math.log; // `Math.atanh` method
  // https://tc39.es/ecma262/#sec-math.atanh
  // Tor Browser bug: Math.atanh(-0) -> 0

  $$1P({
    target: 'Math',
    stat: true,
    forced: !($atanh && 1 / $atanh(-0) < 0)
  }, {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
    }
  });

  // https://tc39.es/ecma262/#sec-math.sign
  // eslint-disable-next-line es/no-math-sign -- safe

  var mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  var $$1O = _export;
  var sign$2 = mathSign;
  var abs$7 = Math.abs;
  var pow$4 = Math.pow; // `Math.cbrt` method
  // https://tc39.es/ecma262/#sec-math.cbrt

  $$1O({
    target: 'Math',
    stat: true
  }, {
    cbrt: function cbrt(x) {
      return sign$2(x = +x) * pow$4(abs$7(x), 1 / 3);
    }
  });

  var $$1N = _export;
  var floor$8 = Math.floor;
  var log$3 = Math.log;
  var LOG2E = Math.LOG2E; // `Math.clz32` method
  // https://tc39.es/ecma262/#sec-math.clz32

  $$1N({
    target: 'Math',
    stat: true
  }, {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - floor$8(log$3(x + 0.5) * LOG2E) : 32;
    }
  });

  var $expm1 = Math.expm1;
  var exp$2 = Math.exp; // `Math.expm1` method implementation
  // https://tc39.es/ecma262/#sec-math.expm1

  var mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp$2(x) - 1;
  } : $expm1;

  var $$1M = _export;
  var expm1$3 = mathExpm1; // eslint-disable-next-line es/no-math-cosh -- required for testing

  var $cosh = Math.cosh;
  var abs$6 = Math.abs;
  var E$1 = Math.E; // `Math.cosh` method
  // https://tc39.es/ecma262/#sec-math.cosh

  $$1M({
    target: 'Math',
    stat: true,
    forced: !$cosh || $cosh(710) === Infinity
  }, {
    cosh: function cosh(x) {
      var t = expm1$3(abs$6(x) - 1) + 1;
      return (t + 1 / (t * E$1 * E$1)) * (E$1 / 2);
    }
  });

  var $$1L = _export;
  var expm1$2 = mathExpm1; // `Math.expm1` method
  // https://tc39.es/ecma262/#sec-math.expm1
  // eslint-disable-next-line es/no-math-expm1 -- required for testing

  $$1L({
    target: 'Math',
    stat: true,
    forced: expm1$2 != Math.expm1
  }, {
    expm1: expm1$2
  });

  var sign$1 = mathSign;
  var abs$5 = Math.abs;
  var pow$3 = Math.pow;
  var EPSILON = pow$3(2, -52);
  var EPSILON32 = pow$3(2, -23);
  var MAX32 = pow$3(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$3(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  }; // `Math.fround` method implementation
  // https://tc39.es/ecma262/#sec-math.fround
  // eslint-disable-next-line es/no-math-fround -- safe


  var mathFround = Math.fround || function fround(x) {
    var $abs = abs$5(x);
    var $sign = sign$1(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare -- NaN check

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  var $$1K = _export;
  var fround = mathFround; // `Math.fround` method
  // https://tc39.es/ecma262/#sec-math.fround

  $$1K({
    target: 'Math',
    stat: true
  }, {
    fround: fround
  });

  var $$1J = _export; // eslint-disable-next-line es/no-math-hypot -- required for testing

  var $hypot = Math.hypot;
  var abs$4 = Math.abs;
  var sqrt$1 = Math.sqrt; // Chrome 77 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=9546

  var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
  // https://tc39.es/ecma262/#sec-math.hypot

  $$1J({
    target: 'Math',
    stat: true,
    forced: BUGGY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$4(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * sqrt$1(sum);
    }
  });

  var $$1I = _export;
  var fails$N = fails$1f; // eslint-disable-next-line es/no-math-imul -- required for testing

  var $imul = Math.imul;
  var FORCED$l = fails$N(function () {
    return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
  }); // `Math.imul` method
  // https://tc39.es/ecma262/#sec-math.imul
  // some WebKit versions fails with big numbers, some has wrong arity

  $$1I({
    target: 'Math',
    stat: true,
    forced: FORCED$l
  }, {
    imul: function imul(x, y) {
      var UINT16 = 0xFFFF;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  var log$2 = Math.log;
  var LOG10E = Math.LOG10E; // eslint-disable-next-line es/no-math-log10 -- safe

  var mathLog10 = Math.log10 || function log10(x) {
    return log$2(x) * LOG10E;
  };

  var $$1H = _export;
  var log10$1 = mathLog10; // `Math.log10` method
  // https://tc39.es/ecma262/#sec-math.log10

  $$1H({
    target: 'Math',
    stat: true
  }, {
    log10: log10$1
  });

  var $$1G = _export;
  var log1p = mathLog1p; // `Math.log1p` method
  // https://tc39.es/ecma262/#sec-math.log1p

  $$1G({
    target: 'Math',
    stat: true
  }, {
    log1p: log1p
  });

  var $$1F = _export;
  var log$1 = Math.log;
  var LN2 = Math.LN2; // `Math.log2` method
  // https://tc39.es/ecma262/#sec-math.log2

  $$1F({
    target: 'Math',
    stat: true
  }, {
    log2: function log2(x) {
      return log$1(x) / LN2;
    }
  });

  var $$1E = _export;
  var sign = mathSign; // `Math.sign` method
  // https://tc39.es/ecma262/#sec-math.sign

  $$1E({
    target: 'Math',
    stat: true
  }, {
    sign: sign
  });

  var $$1D = _export;
  var fails$M = fails$1f;
  var expm1$1 = mathExpm1;
  var abs$3 = Math.abs;
  var exp$1 = Math.exp;
  var E = Math.E;
  var FORCED$k = fails$M(function () {
    // eslint-disable-next-line es/no-math-sinh -- required for testing
    return Math.sinh(-2e-17) != -2e-17;
  }); // `Math.sinh` method
  // https://tc39.es/ecma262/#sec-math.sinh
  // V8 near Chromium 38 has a problem with very small numbers

  $$1D({
    target: 'Math',
    stat: true,
    forced: FORCED$k
  }, {
    sinh: function sinh(x) {
      return abs$3(x = +x) < 1 ? (expm1$1(x) - expm1$1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E / 2);
    }
  });

  var $$1C = _export;
  var expm1 = mathExpm1;
  var exp = Math.exp; // `Math.tanh` method
  // https://tc39.es/ecma262/#sec-math.tanh

  $$1C({
    target: 'Math',
    stat: true
  }, {
    tanh: function tanh(x) {
      var a = expm1(x = +x);
      var b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });

  var setToStringTag$5 = setToStringTag$c; // Math[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-math-@@tostringtag

  setToStringTag$5(Math, 'Math', true);

  var $$1B = _export;
  var ceil = Math.ceil;
  var floor$7 = Math.floor; // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc

  $$1B({
    target: 'Math',
    stat: true
  }, {
    trunc: function trunc(it) {
      return (it > 0 ? floor$7 : ceil)(it);
    }
  });

  var uncurryThis$G = functionUncurryThis; // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue

  var thisNumberValue$4 = uncurryThis$G(1.0.valueOf);

  var whitespaces$5 = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

  var uncurryThis$F = functionUncurryThis;
  var requireObjectCoercible$d = requireObjectCoercible$i;
  var toString$n = toString$u;
  var whitespaces$4 = whitespaces$5;
  var replace$8 = uncurryThis$F(''.replace);
  var whitespace = '[' + whitespaces$4 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$2 = function createMethod(TYPE) {
    return function ($this) {
      var string = toString$n(requireObjectCoercible$d($this));
      if (TYPE & 1) string = replace$8(string, ltrim, '');
      if (TYPE & 2) string = replace$8(string, rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };

  var DESCRIPTORS$k = descriptors;
  var global$K = global$1E;
  var uncurryThis$E = functionUncurryThis;
  var isForced$2 = isForced_1;
  var redefine$a = redefine$l.exports;
  var hasOwn$c = hasOwnProperty_1;
  var inheritIfRequired$3 = inheritIfRequired$6;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var isSymbol$2 = isSymbol$6;
  var toPrimitive = toPrimitive$3;
  var fails$L = fails$1f;
  var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$7 = objectDefineProperty.f;
  var thisNumberValue$3 = thisNumberValue$4;
  var trim$2 = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global$K[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$c = global$K.TypeError;
  var arraySlice$6 = uncurryThis$E(''.slice);
  var charCodeAt$3 = uncurryThis$E(''.charCodeAt); // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric

  var toNumeric = function toNumeric(value) {
    var primValue = toPrimitive(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  }; // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber


  var toNumber = function toNumber(argument) {
    var it = toPrimitive(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol$2(it)) throw TypeError$c('Cannot convert a Symbol value to a number');

    if (typeof it == 'string' && it.length > 2) {
      it = trim$2(it);
      first = charCodeAt$3(it, 0);

      if (first === 43 || first === 45) {
        third = charCodeAt$3(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt$3(it, 1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i

          default:
            return +it;
        }

        digits = arraySlice$6(it, 2);
        length = digits.length;

        for (index = 0; index < length; index++) {
          code = charCodeAt$3(digits, index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  }; // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor


  if (isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
      var dummy = this; // check on 1..constructor(foo) case

      return isPrototypeOf$4(NumberPrototype, dummy) && fails$L(function () {
        thisNumberValue$3(dummy);
      }) ? inheritIfRequired$3(Object(n), dummy, NumberWrapper) : n;
    };

    for (var keys$1 = DESCRIPTORS$k ? getOwnPropertyNames$3(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext
    'fromString,range').split(','), j = 0, key$2; keys$1.length > j; j++) {
      if (hasOwn$c(NativeNumber, key$2 = keys$1[j]) && !hasOwn$c(NumberWrapper, key$2)) {
        defineProperty$7(NumberWrapper, key$2, getOwnPropertyDescriptor$6(NativeNumber, key$2));
      }
    }

    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine$a(global$K, NUMBER, NumberWrapper);
  }

  var $$1A = _export; // `Number.EPSILON` constant
  // https://tc39.es/ecma262/#sec-number.epsilon

  $$1A({
    target: 'Number',
    stat: true
  }, {
    EPSILON: Math.pow(2, -52)
  });

  var global$J = global$1E;
  var globalIsFinite = global$J.isFinite; // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite
  // eslint-disable-next-line es/no-number-isfinite -- safe

  var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
  };

  var $$1z = _export;
  var numberIsFinite = numberIsFinite$1; // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite

  $$1z({
    target: 'Number',
    stat: true
  }, {
    isFinite: numberIsFinite
  });

  var isObject$h = isObject$z;
  var floor$6 = Math.floor; // `IsIntegralNumber` abstract operation
  // https://tc39.es/ecma262/#sec-isintegralnumber
  // eslint-disable-next-line es/no-number-isinteger -- safe

  var isIntegralNumber$3 = Number.isInteger || function isInteger(it) {
    return !isObject$h(it) && isFinite(it) && floor$6(it) === it;
  };

  var $$1y = _export;
  var isIntegralNumber$2 = isIntegralNumber$3; // `Number.isInteger` method
  // https://tc39.es/ecma262/#sec-number.isinteger

  $$1y({
    target: 'Number',
    stat: true
  }, {
    isInteger: isIntegralNumber$2
  });

  var $$1x = _export; // `Number.isNaN` method
  // https://tc39.es/ecma262/#sec-number.isnan

  $$1x({
    target: 'Number',
    stat: true
  }, {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return number != number;
    }
  });

  var $$1w = _export;
  var isIntegralNumber$1 = isIntegralNumber$3;
  var abs$2 = Math.abs; // `Number.isSafeInteger` method
  // https://tc39.es/ecma262/#sec-number.issafeinteger

  $$1w({
    target: 'Number',
    stat: true
  }, {
    isSafeInteger: function isSafeInteger(number) {
      return isIntegralNumber$1(number) && abs$2(number) <= 0x1FFFFFFFFFFFFF;
    }
  });

  var $$1v = _export; // `Number.MAX_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.max_safe_integer

  $$1v({
    target: 'Number',
    stat: true
  }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  });

  var $$1u = _export; // `Number.MIN_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.min_safe_integer

  $$1u({
    target: 'Number',
    stat: true
  }, {
    MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
  });

  var global$I = global$1E;
  var fails$K = fails$1f;
  var uncurryThis$D = functionUncurryThis;
  var toString$m = toString$u;
  var trim$1 = stringTrim.trim;
  var whitespaces$3 = whitespaces$5;
  var charAt$c = uncurryThis$D(''.charAt);
  var n$ParseFloat = global$I.parseFloat;
  var _Symbol$1 = global$I.Symbol;
  var ITERATOR$5 = _Symbol$1 && _Symbol$1.iterator;
  var FORCED$j = 1 / n$ParseFloat(whitespaces$3 + '-0') !== -Infinity // MS Edge 18- broken with boxed symbols
  || ITERATOR$5 && !fails$K(function () {
    n$ParseFloat(Object(ITERATOR$5));
  }); // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string

  var numberParseFloat = FORCED$j ? function parseFloat(string) {
    var trimmedString = trim$1(toString$m(string));
    var result = n$ParseFloat(trimmedString);
    return result === 0 && charAt$c(trimmedString, 0) == '-' ? -0 : result;
  } : n$ParseFloat;

  var $$1t = _export;
  var parseFloat$1 = numberParseFloat; // `Number.parseFloat` method
  // https://tc39.es/ecma262/#sec-number.parseFloat
  // eslint-disable-next-line es/no-number-parsefloat -- required for testing

  $$1t({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != parseFloat$1
  }, {
    parseFloat: parseFloat$1
  });

  var global$H = global$1E;
  var fails$J = fails$1f;
  var uncurryThis$C = functionUncurryThis;
  var toString$l = toString$u;
  var trim = stringTrim.trim;
  var whitespaces$2 = whitespaces$5;
  var $parseInt$1 = global$H.parseInt;
  var _Symbol = global$H.Symbol;
  var ITERATOR$4 = _Symbol && _Symbol.iterator;
  var hex$1 = /^[+-]?0x/i;
  var exec$7 = uncurryThis$C(hex$1.exec);
  var FORCED$i = $parseInt$1(whitespaces$2 + '08') !== 8 || $parseInt$1(whitespaces$2 + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
  || ITERATOR$4 && !fails$J(function () {
    $parseInt$1(Object(ITERATOR$4));
  }); // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  var numberParseInt = FORCED$i ? function parseInt(string, radix) {
    var S = trim(toString$l(string));
    return $parseInt$1(S, radix >>> 0 || (exec$7(hex$1, S) ? 16 : 10));
  } : $parseInt$1;

  var $$1s = _export;
  var parseInt$2 = numberParseInt; // `Number.parseInt` method
  // https://tc39.es/ecma262/#sec-number.parseint
  // eslint-disable-next-line es/no-number-parseint -- required for testing

  $$1s({
    target: 'Number',
    stat: true,
    forced: Number.parseInt != parseInt$2
  }, {
    parseInt: parseInt$2
  });

  var $$1r = _export;
  var global$G = global$1E;
  var uncurryThis$B = functionUncurryThis;
  var toIntegerOrInfinity$7 = toIntegerOrInfinity$i;
  var thisNumberValue$2 = thisNumberValue$4;
  var $repeat$1 = stringRepeat;
  var log10 = mathLog10;
  var fails$I = fails$1f;
  var RangeError$8 = global$G.RangeError;
  var String$3 = global$G.String;
  var isFinite$1 = global$G.isFinite;
  var abs$1 = Math.abs;
  var floor$5 = Math.floor;
  var pow$2 = Math.pow;
  var round$1 = Math.round;
  var un$ToExponential = uncurryThis$B(1.0.toExponential);
  var repeat$2 = uncurryThis$B($repeat$1);
  var stringSlice$d = uncurryThis$B(''.slice); // Edge 17-

  var ROUNDS_PROPERLY = un$ToExponential(-6.9e-11, 4) === '-6.9000e-11' // IE11- && Edge 14-
  && un$ToExponential(1.255, 2) === '1.25e+0' // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(12345, 3) === '1.235e+4' // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(25, 0) === '3e+1'; // IE8-

  var THROWS_ON_INFINITY_FRACTION = fails$I(function () {
    un$ToExponential(1, Infinity);
  }) && fails$I(function () {
    un$ToExponential(1, -Infinity);
  }); // Safari <11 && FF <50

  var PROPER_NON_FINITE_THIS_CHECK = !fails$I(function () {
    un$ToExponential(Infinity, Infinity);
  }) && !fails$I(function () {
    un$ToExponential(NaN, Infinity);
  });
  var FORCED$h = !ROUNDS_PROPERLY || !THROWS_ON_INFINITY_FRACTION || !PROPER_NON_FINITE_THIS_CHECK; // `Number.prototype.toExponential` method
  // https://tc39.es/ecma262/#sec-number.prototype.toexponential

  $$1r({
    target: 'Number',
    proto: true,
    forced: FORCED$h
  }, {
    toExponential: function toExponential(fractionDigits) {
      var x = thisNumberValue$2(this);
      if (fractionDigits === undefined) return un$ToExponential(x);
      var f = toIntegerOrInfinity$7(fractionDigits);
      if (!isFinite$1(x)) return String$3(x); // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

      if (f < 0 || f > 20) throw RangeError$8('Incorrect fraction digits');
      if (ROUNDS_PROPERLY) return un$ToExponential(x, f);
      var s = '';
      var m = '';
      var e = 0;
      var c = '';
      var d = '';

      if (x < 0) {
        s = '-';
        x = -x;
      }

      if (x === 0) {
        e = 0;
        m = repeat$2('0', f + 1);
      } else {
        // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
        // TODO: improve accuracy with big fraction digits
        var l = log10(x);
        e = floor$5(l);
        var n = 0;
        var w = pow$2(10, e - f);
        n = round$1(x / w);

        if (2 * x >= (2 * n + 1) * w) {
          n += 1;
        }

        if (n >= pow$2(10, f + 1)) {
          n /= 10;
          e += 1;
        }

        m = String$3(n);
      }

      if (f !== 0) {
        m = stringSlice$d(m, 0, 1) + '.' + stringSlice$d(m, 1);
      }

      if (e === 0) {
        c = '+';
        d = '0';
      } else {
        c = e > 0 ? '+' : '-';
        d = String$3(abs$1(e));
      }

      m += 'e' + c + d;
      return s + m;
    }
  });

  var $$1q = _export;
  var global$F = global$1E;
  var uncurryThis$A = functionUncurryThis;
  var toIntegerOrInfinity$6 = toIntegerOrInfinity$i;
  var thisNumberValue$1 = thisNumberValue$4;
  var $repeat = stringRepeat;
  var fails$H = fails$1f;
  var RangeError$7 = global$F.RangeError;
  var String$2 = global$F.String;
  var floor$4 = Math.floor;
  var repeat$1 = uncurryThis$A($repeat);
  var stringSlice$c = uncurryThis$A(''.slice);
  var un$ToFixed = uncurryThis$A(1.0.toFixed);

  var pow$1 = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  var multiply = function multiply(data, n, c) {
    var index = -1;
    var c2 = c;

    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$4(c2 / 1e7);
    }
  };

  var divide = function divide(data, n) {
    var index = 6;
    var c = 0;

    while (--index >= 0) {
      c += data[index];
      data[index] = floor$4(c / n);
      c = c % n * 1e7;
    }
  };

  var dataToString = function dataToString(data) {
    var index = 6;
    var s = '';

    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String$2(data[index]);
        s = s === '' ? t : s + repeat$1('0', 7 - t.length) + t;
      }
    }

    return s;
  };

  var FORCED$g = fails$H(function () {
    return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$H(function () {
    // V8 ~ Android 4.3-
    un$ToFixed({});
  }); // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed

  $$1q({
    target: 'Number',
    proto: true,
    forced: FORCED$g
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue$1(this);
      var fractDigits = toIntegerOrInfinity$6(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k; // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

      if (fractDigits < 0 || fractDigits > 20) throw RangeError$7('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String$2(number);

      if (number < 0) {
        sign = '-';
        number = -number;
      }

      if (number > 1e-21) {
        e = log(number * pow$1(2, 69, 1)) - 69;
        z = e < 0 ? number * pow$1(2, -e, 1) : number / pow$1(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;

          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }

          multiply(data, pow$1(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }

          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat$1('0', fractDigits);
        }
      }

      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat$1('0', fractDigits - k) + result : stringSlice$c(result, 0, k - fractDigits) + '.' + stringSlice$c(result, k - fractDigits));
      } else {
        result = sign + result;
      }

      return result;
    }
  });

  var $$1p = _export;
  var uncurryThis$z = functionUncurryThis;
  var fails$G = fails$1f;
  var thisNumberValue = thisNumberValue$4;
  var un$ToPrecision = uncurryThis$z(1.0.toPrecision);
  var FORCED$f = fails$G(function () {
    // IE7-
    return un$ToPrecision(1, undefined) !== '1';
  }) || !fails$G(function () {
    // V8 ~ Android 4.3-
    un$ToPrecision({});
  }); // `Number.prototype.toPrecision` method
  // https://tc39.es/ecma262/#sec-number.prototype.toprecision

  $$1p({
    target: 'Number',
    proto: true,
    forced: FORCED$f
  }, {
    toPrecision: function toPrecision(precision) {
      return precision === undefined ? un$ToPrecision(thisNumberValue(this)) : un$ToPrecision(thisNumberValue(this), precision);
    }
  });

  var DESCRIPTORS$j = descriptors;
  var uncurryThis$y = functionUncurryThis;
  var call$k = functionCall;
  var fails$F = fails$1f;
  var objectKeys$2 = objectKeys$5;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$9 = toObject$p;
  var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty$6 = Object.defineProperty;
  var concat$1 = uncurryThis$y([].concat); // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails$F(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$j && $assign({
      b: 1
    }, $assign(defineProperty$6({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$6(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$9(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;

    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$j || call$k(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  var $$1o = _export;
  var assign$1 = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  $$1o({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign$1
  }, {
    assign: assign$1
  });

  var $$1n = _export;
  var DESCRIPTORS$i = descriptors;
  var create$6 = objectCreate; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  $$1n({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$i
  }, {
    create: create$6
  });

  var global$E = global$1E;
  var fails$E = fails$1f;
  var WEBKIT$1 = engineWebkitVersion; // Forced replacement object prototype accessors methods

  var objectPrototypeAccessorsForced = !fails$E(function () {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (WEBKIT$1 && WEBKIT$1 < 535) return;
    var key = Math.random(); // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call -- required for testing

    __defineSetter__.call(null, key, function () {
      /* empty */
    });

    delete global$E[key];
  });

  var $$1m = _export;
  var DESCRIPTORS$h = descriptors;
  var FORCED$e = objectPrototypeAccessorsForced;
  var aCallable$8 = aCallable$g;
  var toObject$8 = toObject$p;
  var definePropertyModule$4 = objectDefineProperty; // `Object.prototype.__defineGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__

  if (DESCRIPTORS$h) {
    $$1m({
      target: 'Object',
      proto: true,
      forced: FORCED$e
    }, {
      __defineGetter__: function __defineGetter__(P, getter) {
        definePropertyModule$4.f(toObject$8(this), P, {
          get: aCallable$8(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var $$1l = _export;
  var DESCRIPTORS$g = descriptors;
  var defineProperties$2 = objectDefineProperties.f; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  $$1l({
    target: 'Object',
    stat: true,
    forced: Object.defineProperties !== defineProperties$2,
    sham: !DESCRIPTORS$g
  }, {
    defineProperties: defineProperties$2
  });

  var $$1k = _export;
  var DESCRIPTORS$f = descriptors;
  var defineProperty$5 = objectDefineProperty.f; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe

  $$1k({
    target: 'Object',
    stat: true,
    forced: Object.defineProperty !== defineProperty$5,
    sham: !DESCRIPTORS$f
  }, {
    defineProperty: defineProperty$5
  });

  var $$1j = _export;
  var DESCRIPTORS$e = descriptors;
  var FORCED$d = objectPrototypeAccessorsForced;
  var aCallable$7 = aCallable$g;
  var toObject$7 = toObject$p;
  var definePropertyModule$3 = objectDefineProperty; // `Object.prototype.__defineSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__

  if (DESCRIPTORS$e) {
    $$1j({
      target: 'Object',
      proto: true,
      forced: FORCED$d
    }, {
      __defineSetter__: function __defineSetter__(P, setter) {
        definePropertyModule$3.f(toObject$7(this), P, {
          set: aCallable$7(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var DESCRIPTORS$d = descriptors;
  var uncurryThis$x = functionUncurryThis;
  var objectKeys$1 = objectKeys$5;
  var toIndexedObject$4 = toIndexedObject$f;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
  var propertyIsEnumerable = uncurryThis$x($propertyIsEnumerable);
  var push$8 = uncurryThis$x([].push); // `Object.{ entries, values }` methods implementation

  var createMethod$1 = function createMethod(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$4(it);
      var keys = objectKeys$1(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!DESCRIPTORS$d || propertyIsEnumerable(O, key)) {
          push$8(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $$1i = _export;
  var $entries = objectToArray.entries; // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries

  $$1i({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var $$1h = _export;
  var FREEZING$3 = freezing;
  var fails$D = fails$1f;
  var isObject$g = isObject$z;
  var onFreeze$2 = internalMetadata.exports.onFreeze; // eslint-disable-next-line es/no-object-freeze -- safe

  var $freeze = Object.freeze;
  var FAILS_ON_PRIMITIVES$8 = fails$D(function () {
    $freeze(1);
  }); // `Object.freeze` method
  // https://tc39.es/ecma262/#sec-object.freeze

  $$1h({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$8,
    sham: !FREEZING$3
  }, {
    freeze: function freeze(it) {
      return $freeze && isObject$g(it) ? $freeze(onFreeze$2(it)) : it;
    }
  });

  var $$1g = _export;
  var iterate$5 = iterate$9;
  var createProperty$2 = createProperty$9; // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries

  $$1g({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate$5(iterable, function (k, v) {
        createProperty$2(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });

  var $$1f = _export;
  var fails$C = fails$1f;
  var toIndexedObject$3 = toIndexedObject$f;
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$c = descriptors;
  var FAILS_ON_PRIMITIVES$7 = fails$C(function () {
    nativeGetOwnPropertyDescriptor$1(1);
  });
  var FORCED$c = !DESCRIPTORS$c || FAILS_ON_PRIMITIVES$7; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  $$1f({
    target: 'Object',
    stat: true,
    forced: FORCED$c,
    sham: !DESCRIPTORS$c
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor$1(toIndexedObject$3(it), key);
    }
  });

  var $$1e = _export;
  var DESCRIPTORS$b = descriptors;
  var ownKeys$1 = ownKeys$3;
  var toIndexedObject$2 = toIndexedObject$f;
  var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
  var createProperty$1 = createProperty$9; // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

  $$1e({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$b
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject$2(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;

      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty$1(result, key, descriptor);
      }

      return result;
    }
  });

  var $$1d = _export;
  var fails$B = fails$1f;
  var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing

  var FAILS_ON_PRIMITIVES$6 = fails$B(function () {
    return !Object.getOwnPropertyNames(1);
  }); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames

  $$1d({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$6
  }, {
    getOwnPropertyNames: getOwnPropertyNames$2
  });

  var $$1c = _export;
  var fails$A = fails$1f;
  var toObject$6 = toObject$p;
  var nativeGetPrototypeOf = objectGetPrototypeOf$1;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
  var FAILS_ON_PRIMITIVES$5 = fails$A(function () {
    nativeGetPrototypeOf(1);
  }); // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  $$1c({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$5,
    sham: !CORRECT_PROTOTYPE_GETTER$1
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$6(it));
    }
  });

  var $$1b = _export;
  var hasOwn$b = hasOwnProperty_1; // `Object.hasOwn` method
  // https://github.com/tc39/proposal-accessible-object-hasownproperty

  $$1b({
    target: 'Object',
    stat: true
  }, {
    hasOwn: hasOwn$b
  });

  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe

  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var $$1a = _export;
  var is = sameValue$1; // `Object.is` method
  // https://tc39.es/ecma262/#sec-object.is

  $$1a({
    target: 'Object',
    stat: true
  }, {
    is: is
  });

  var $$19 = _export;
  var $isExtensible$1 = objectIsExtensible; // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  // eslint-disable-next-line es/no-object-isextensible -- safe

  $$19({
    target: 'Object',
    stat: true,
    forced: Object.isExtensible !== $isExtensible$1
  }, {
    isExtensible: $isExtensible$1
  });

  var $$18 = _export;
  var fails$z = fails$1f;
  var isObject$f = isObject$z;
  var classof$a = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE$1 = arrayBufferNonExtensible; // eslint-disable-next-line es/no-object-isfrozen -- safe

  var $isFrozen = Object.isFrozen;
  var FAILS_ON_PRIMITIVES$4 = fails$z(function () {
    $isFrozen(1);
  }); // `Object.isFrozen` method
  // https://tc39.es/ecma262/#sec-object.isfrozen

  $$18({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$4 || ARRAY_BUFFER_NON_EXTENSIBLE$1
  }, {
    isFrozen: function isFrozen(it) {
      if (!isObject$f(it)) return true;
      if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$a(it) == 'ArrayBuffer') return true;
      return $isFrozen ? $isFrozen(it) : false;
    }
  });

  var $$17 = _export;
  var fails$y = fails$1f;
  var isObject$e = isObject$z;
  var classof$9 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible; // eslint-disable-next-line es/no-object-issealed -- safe

  var $isSealed = Object.isSealed;
  var FAILS_ON_PRIMITIVES$3 = fails$y(function () {
    $isSealed(1);
  }); // `Object.isSealed` method
  // https://tc39.es/ecma262/#sec-object.issealed

  $$17({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$3 || ARRAY_BUFFER_NON_EXTENSIBLE
  }, {
    isSealed: function isSealed(it) {
      if (!isObject$e(it)) return true;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$9(it) == 'ArrayBuffer') return true;
      return $isSealed ? $isSealed(it) : false;
    }
  });

  var $$16 = _export;
  var toObject$5 = toObject$p;
  var nativeKeys = objectKeys$5;
  var fails$x = fails$1f;
  var FAILS_ON_PRIMITIVES$2 = fails$x(function () {
    nativeKeys(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  $$16({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$2
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject$5(it));
    }
  });

  var $$15 = _export;
  var DESCRIPTORS$a = descriptors;
  var FORCED$b = objectPrototypeAccessorsForced;
  var toObject$4 = toObject$p;
  var toPropertyKey$3 = toPropertyKey$8;
  var getPrototypeOf$3 = objectGetPrototypeOf$1;
  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__

  if (DESCRIPTORS$a) {
    $$15({
      target: 'Object',
      proto: true,
      forced: FORCED$b
    }, {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject$4(this);
        var key = toPropertyKey$3(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$5(O, key)) return desc.get;
        } while (O = getPrototypeOf$3(O));
      }
    });
  }

  var $$14 = _export;
  var DESCRIPTORS$9 = descriptors;
  var FORCED$a = objectPrototypeAccessorsForced;
  var toObject$3 = toObject$p;
  var toPropertyKey$2 = toPropertyKey$8;
  var getPrototypeOf$2 = objectGetPrototypeOf$1;
  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__

  if (DESCRIPTORS$9) {
    $$14({
      target: 'Object',
      proto: true,
      forced: FORCED$a
    }, {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject$3(this);
        var key = toPropertyKey$2(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$4(O, key)) return desc.set;
        } while (O = getPrototypeOf$2(O));
      }
    });
  }

  var $$13 = _export;
  var isObject$d = isObject$z;
  var onFreeze$1 = internalMetadata.exports.onFreeze;
  var FREEZING$2 = freezing;
  var fails$w = fails$1f; // eslint-disable-next-line es/no-object-preventextensions -- safe

  var $preventExtensions = Object.preventExtensions;
  var FAILS_ON_PRIMITIVES$1 = fails$w(function () {
    $preventExtensions(1);
  }); // `Object.preventExtensions` method
  // https://tc39.es/ecma262/#sec-object.preventextensions

  $$13({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1,
    sham: !FREEZING$2
  }, {
    preventExtensions: function preventExtensions(it) {
      return $preventExtensions && isObject$d(it) ? $preventExtensions(onFreeze$1(it)) : it;
    }
  });

  var $$12 = _export;
  var isObject$c = isObject$z;
  var onFreeze = internalMetadata.exports.onFreeze;
  var FREEZING$1 = freezing;
  var fails$v = fails$1f; // eslint-disable-next-line es/no-object-seal -- safe

  var $seal = Object.seal;
  var FAILS_ON_PRIMITIVES = fails$v(function () {
    $seal(1);
  }); // `Object.seal` method
  // https://tc39.es/ecma262/#sec-object.seal

  $$12({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING$1
  }, {
    seal: function seal(it) {
      return $seal && isObject$c(it) ? $seal(onFreeze(it)) : it;
    }
  });

  var $$11 = _export;
  var setPrototypeOf$2 = objectSetPrototypeOf$1; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof

  $$11({
    target: 'Object',
    stat: true
  }, {
    setPrototypeOf: setPrototypeOf$2
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$8 = classof$i; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$8(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$9 = redefine$l.exports;
  var toString$k = objectToString; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!TO_STRING_TAG_SUPPORT) {
    redefine$9(Object.prototype, 'toString', toString$k, {
      unsafe: true
    });
  }

  var $$10 = _export;
  var $values = objectToArray.values; // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values

  $$10({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

  var $$$ = _export;
  var $parseFloat = numberParseFloat; // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string

  $$$({
    global: true,
    forced: parseFloat != $parseFloat
  }, {
    parseFloat: $parseFloat
  });

  var $$_ = _export;
  var $parseInt = numberParseInt; // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  $$_({
    global: true,
    forced: parseInt != $parseInt
  }, {
    parseInt: $parseInt
  });

  var global$D = global$1E;
  var nativePromiseConstructor = global$D.Promise;

  var global$C = global$1E;
  var TypeError$b = global$C.TypeError;

  var validateArgumentsLength$8 = function validateArgumentsLength(passed, required) {
    if (passed < required) throw TypeError$b('Not enough arguments');
    return passed;
  };

  var userAgent$4 = engineUserAgent;
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

  var global$B = global$1E;
  var apply$6 = functionApply$1;
  var bind$6 = functionBindContext;
  var isCallable$9 = isCallable$v;
  var hasOwn$a = hasOwnProperty_1;
  var fails$u = fails$1f;
  var html = html$2;
  var arraySlice$5 = arraySlice$b;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength$7 = validateArgumentsLength$8;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$4 = engineIsNode;
  var set$3 = global$B.setImmediate;
  var clear = global$B.clearImmediate;
  var process$3 = global$B.process;
  var Dispatch$1 = global$B.Dispatch;
  var Function$2 = global$B.Function;
  var MessageChannel = global$B.MessageChannel;
  var String$1 = global$B.String;
  var counter = 0;
  var queue$1 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$B.location;
  } catch (error) {
    /* empty */
  }

  var run = function run(id) {
    if (hasOwn$a(queue$1, id)) {
      var fn = queue$1[id];
      delete queue$1[id];
      fn();
    }
  };

  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };

  var listener = function listener(event) {
    run(event.data);
  };

  var post = function post(id) {
    // old engines have not location.origin
    global$B.postMessage(String$1(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$3 || !clear) {
    set$3 = function setImmediate(handler) {
      validateArgumentsLength$7(arguments.length, 1);
      var fn = isCallable$9(handler) ? handler : Function$2(handler);
      var args = arraySlice$5(arguments, 1);

      queue$1[++counter] = function () {
        apply$6(fn, undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue$1[id];
    }; // Node.js 0.8-


    if (IS_NODE$4) {
      defer = function defer(id) {
        process$3.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch$1 && Dispatch$1.now) {
      defer = function defer(id) {
        Dispatch$1.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$6(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$B.addEventListener && isCallable$9(global$B.postMessage) && !global$B.importScripts && location && location.protocol !== 'file:' && !fails$u(post)) {
      defer = post;
      global$B.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function defer(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$2 = {
    set: set$3,
    clear: clear
  };

  var userAgent$3 = engineUserAgent;
  var global$A = global$1E;
  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$A.Pebble !== undefined;

  var userAgent$2 = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

  var global$z = global$1E;
  var bind$5 = functionBindContext;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$2.set;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$3 = engineIsNode;
  var MutationObserver = global$z.MutationObserver || global$z.WebKitMutationObserver;
  var document$2 = global$z.document;
  var process$2 = global$z.process;
  var Promise$1 = global$z.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global$z, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (IS_NODE$3 && (parent = process$2.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });

      notify$1 = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = bind$5(promise.then, promise);

      notify$1 = function notify() {
        then(flush);
      }; // Node.js without promises

    } else if (IS_NODE$3) {
      notify$1 = function notify() {
        process$2.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      // strange IE + webpack dev server bug - use .bind(global)
      macrotask = bind$5(macrotask, global$z);

      notify$1 = function notify() {
        macrotask(flush);
      };
    }
  }

  var microtask$2 = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify$1();
    }

    last = task;
  };

  var newPromiseCapability$2 = {};

  var aCallable$6 = aCallable$g;

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$6(resolve);
    this.reject = aCallable$6(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var anObject$n = anObject$C;
  var isObject$b = isObject$z;
  var newPromiseCapability$1 = newPromiseCapability$2;

  var promiseResolve$2 = function promiseResolve(C, x) {
    anObject$n(C);
    if (isObject$b(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var global$y = global$1E;

  var hostReportErrors$1 = function hostReportErrors(a, b) {
    var console = global$y.console;

    if (console && console.error) {
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$3 = function perform(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var Queue$1 = function Queue() {
    this.head = null;
    this.tail = null;
  };

  Queue$1.prototype = {
    add: function add(item) {
      var entry = {
        item: item,
        next: null
      };
      if (this.head) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
    },
    get: function get() {
      var entry = this.head;

      if (entry) {
        this.head = entry.next;
        if (this.tail === entry) this.tail = null;
        return entry.item;
      }
    }
  };
  var queue = Queue$1;

  var engineIsBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object';

  var $$Z = _export;
  var global$x = global$1E;
  var getBuiltIn$a = getBuiltIn$l;
  var call$j = functionCall;
  var NativePromise$1 = nativePromiseConstructor;
  var redefine$8 = redefine$l.exports;
  var redefineAll$3 = redefineAll$6;
  var setPrototypeOf$1 = objectSetPrototypeOf$1;
  var setToStringTag$4 = setToStringTag$c;
  var setSpecies$2 = setSpecies$6;
  var aCallable$5 = aCallable$g;
  var isCallable$8 = isCallable$v;
  var isObject$a = isObject$z;
  var anInstance$6 = anInstance$a;
  var inspectSource = inspectSource$4;
  var iterate$4 = iterate$9;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
  var speciesConstructor$4 = speciesConstructor$6;
  var task$1 = task$2.set;
  var microtask$1 = microtask$2;
  var promiseResolve$1 = promiseResolve$2;
  var hostReportErrors = hostReportErrors$1;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$2 = perform$3;
  var Queue = queue;
  var InternalStateModule$7 = internalState;
  var isForced$1 = isForced_1;
  var wellKnownSymbol$b = wellKnownSymbol$y;
  var IS_BROWSER = engineIsBrowser;
  var IS_NODE$2 = engineIsNode;
  var V8_VERSION = engineV8Version;
  var SPECIES$1 = wellKnownSymbol$b('species');
  var PROMISE = 'Promise';
  var getInternalState$7 = InternalStateModule$7.getterFor(PROMISE);
  var setInternalState$7 = InternalStateModule$7.set;
  var getInternalPromiseState = InternalStateModule$7.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
  var PromiseConstructor = NativePromise$1;
  var PromisePrototype = NativePromisePrototype;
  var TypeError$a = global$x.TypeError;
  var document$1 = global$x.document;
  var process$1 = global$x.process;
  var newPromiseCapability = newPromiseCapabilityModule$2.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$x.dispatchEvent);
  var NATIVE_REJECTION_EVENT = isCallable$8(global$x.PromiseRejectionEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$9 = isForced$1(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });

    var FakePromise = function FakePromise(exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$9 || !checkCorrectnessOfIteration$1(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject$a(it) && isCallable$8(then = it.then) ? then : false;
  };

  var callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;

    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }

        if (handler === true) result = value;else {
          if (domain) domain.enter();
          result = handler(value); // can throw

          if (domain) {
            domain.exit();
            exited = true;
          }
        }

        if (result === reaction.promise) {
          reject(TypeError$a('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$j(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask$1(function () {
      var reactions = state.reactions;
      var reaction;

      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }

      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent$1 = function dispatchEvent(name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$x.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global$x['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    call$j(task$1, global$x, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE$2) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent$1(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = IS_NODE$2 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    call$j(task$1, global$x, function () {
      var promise = state.facade;

      if (IS_NODE$2) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent$1(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$4 = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$a("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask$1(function () {
          var wrapper = {
            done: false
          };

          try {
            call$j(then, value, bind$4(internalResolve, wrapper, state), bind$4(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED$9) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$6(this, PromisePrototype);
      aCallable$5(executor);
      call$j(Internal, this);
      var state = getInternalState$7(this);

      try {
        executor(bind$4(internalResolve, state), bind$4(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$7(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll$3(PromisePrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      // eslint-disable-next-line unicorn/no-thenable -- safe
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor$4(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable$8(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable$8(onRejected) && onRejected;
        reaction.domain = IS_NODE$2 ? process$1.domain : undefined;
        if (state.state == PENDING) state.reactions.add(reaction);else microtask$1(function () {
          callReaction(reaction, state);
        });
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalState$7(promise);
      this.promise = promise;
      this.resolve = bind$4(internalResolve, state);
      this.reject = bind$4(internalReject, state);
    };

    newPromiseCapabilityModule$2.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (isCallable$8(NativePromise$1) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$8(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$j(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine$8(NativePromisePrototype, 'catch', PromisePrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (setPrototypeOf$1) {
        setPrototypeOf$1(NativePromisePrototype, PromisePrototype);
      }
    }
  }

  $$Z({
    global: true,
    wrap: true,
    forced: FORCED$9
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$4(PromiseConstructor, PROMISE, false);
  setSpecies$2(PROMISE);
  PromiseWrapper = getBuiltIn$a(PROMISE); // statics

  $$Z({
    target: PROMISE,
    stat: true,
    forced: FORCED$9
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      call$j(capability.reject, undefined, r);
      return capability.promise;
    }
  });
  $$Z({
    target: PROMISE,
    stat: true,
    forced: FORCED$9
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve$1(this, x);
    }
  });
  $$Z({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$2(function () {
        var $promiseResolve = aCallable$5(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$4(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$j($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform$2(function () {
        var $promiseResolve = aCallable$5(C.resolve);
        iterate$4(iterable, function (promise) {
          call$j($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$Y = _export;
  var call$i = functionCall;
  var aCallable$4 = aCallable$g;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$3 = iterate$9; // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled

  $$Y({
    target: 'Promise',
    stat: true
  }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var promiseResolve = aCallable$4(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$3(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$i(promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'fulfilled',
              value: value
            };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'rejected',
              reason: error
            };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$X = _export;
  var aCallable$3 = aCallable$g;
  var getBuiltIn$9 = getBuiltIn$l;
  var call$h = functionCall;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$3;
  var iterate$2 = iterate$9;
  var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any

  $$X({
    target: 'Promise',
    stat: true
  }, {
    any: function any(iterable) {
      var C = this;
      var AggregateError = getBuiltIn$9('AggregateError');
      var capability = newPromiseCapabilityModule.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable$3(C.resolve);
        var errors = [];
        var counter = 0;
        var remaining = 1;
        var alreadyResolved = false;
        iterate$2(iterable, function (promise) {
          var index = counter++;
          var alreadyRejected = false;
          remaining++;
          call$h(promiseResolve, C, promise).then(function (value) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyResolved = true;
            resolve(value);
          }, function (error) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyRejected = true;
            errors[index] = error;
            --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
          });
        });
        --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$W = _export;
  var NativePromise = nativePromiseConstructor;
  var fails$t = fails$1f;
  var getBuiltIn$8 = getBuiltIn$l;
  var isCallable$7 = isCallable$v;
  var speciesConstructor$3 = speciesConstructor$6;
  var promiseResolve = promiseResolve$2;
  var redefine$7 = redefine$l.exports; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

  var NON_GENERIC = !!NativePromise && fails$t(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromise.prototype['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  $$W({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor$3(this, getBuiltIn$8('Promise'));
      var isFunction = isCallable$7(onFinally);
      return this.then(isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

  if (isCallable$7(NativePromise)) {
    var method = getBuiltIn$8('Promise').prototype['finally'];

    if (NativePromise.prototype['finally'] !== method) {
      redefine$7(NativePromise.prototype, 'finally', method, {
        unsafe: true
      });
    }
  }

  var $$V = _export;
  var functionApply = functionApply$1;
  var aCallable$2 = aCallable$g;
  var anObject$m = anObject$C;
  var fails$s = fails$1f; // MS Edge argumentsList argument is optional

  var OPTIONAL_ARGUMENTS_LIST = !fails$s(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function () {
      /* empty */
    });
  }); // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply

  $$V({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      return functionApply(aCallable$2(target), thisArgument, anObject$m(argumentsList));
    }
  });

  var $$U = _export;
  var getBuiltIn$7 = getBuiltIn$l;
  var apply$5 = functionApply$1;
  var bind$3 = functionBind;
  var aConstructor$1 = aConstructor$3;
  var anObject$l = anObject$C;
  var isObject$9 = isObject$z;
  var create$5 = objectCreate;
  var fails$r = fails$1f;
  var nativeConstruct = getBuiltIn$7('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$7 = [].push; // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = fails$r(function () {
    function F() {
      /* empty */
    }

    return !(nativeConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$r(function () {
    nativeConstruct(function () {
      /* empty */
    });
  });
  var FORCED$8 = NEW_TARGET_BUG || ARGS_BUG;
  $$U({
    target: 'Reflect',
    stat: true,
    forced: FORCED$8,
    sham: FORCED$8
  }, {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      aConstructor$1(Target);
      anObject$l(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        apply$5(push$7, $args, args);
        return new (apply$5(bind$3, Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = create$5(isObject$9(proto) ? proto : ObjectPrototype);
      var result = apply$5(Target, instance, args);
      return isObject$9(result) ? result : instance;
    }
  });

  var $$T = _export;
  var DESCRIPTORS$8 = descriptors;
  var anObject$k = anObject$C;
  var toPropertyKey$1 = toPropertyKey$8;
  var definePropertyModule$2 = objectDefineProperty;
  var fails$q = fails$1f; // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

  var ERROR_INSTEAD_OF_FALSE = fails$q(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(definePropertyModule$2.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }); // `Reflect.defineProperty` method
  // https://tc39.es/ecma262/#sec-reflect.defineproperty

  $$T({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !DESCRIPTORS$8
  }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject$k(target);
      var key = toPropertyKey$1(propertyKey);
      anObject$k(attributes);

      try {
        definePropertyModule$2.f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$S = _export;
  var anObject$j = anObject$C;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f; // `Reflect.deleteProperty` method
  // https://tc39.es/ecma262/#sec-reflect.deleteproperty

  $$S({
    target: 'Reflect',
    stat: true
  }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = getOwnPropertyDescriptor$2(anObject$j(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  });

  var hasOwn$9 = hasOwnProperty_1;

  var isDataDescriptor$2 = function isDataDescriptor(descriptor) {
    return descriptor !== undefined && (hasOwn$9(descriptor, 'value') || hasOwn$9(descriptor, 'writable'));
  };

  var $$R = _export;
  var call$g = functionCall;
  var isObject$8 = isObject$z;
  var anObject$i = anObject$C;
  var isDataDescriptor$1 = isDataDescriptor$2;
  var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$1 = objectGetPrototypeOf$1; // `Reflect.get` method
  // https://tc39.es/ecma262/#sec-reflect.get

  function get$2(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject$i(target) === receiver) return target[propertyKey];
    descriptor = getOwnPropertyDescriptorModule$3.f(target, propertyKey);
    if (descriptor) return isDataDescriptor$1(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call$g(descriptor.get, receiver);
    if (isObject$8(prototype = getPrototypeOf$1(target))) return get$2(prototype, propertyKey, receiver);
  }

  $$R({
    target: 'Reflect',
    stat: true
  }, {
    get: get$2
  });

  var $$Q = _export;
  var DESCRIPTORS$7 = descriptors;
  var anObject$h = anObject$C;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor; // `Reflect.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor

  $$Q({
    target: 'Reflect',
    stat: true,
    sham: !DESCRIPTORS$7
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return getOwnPropertyDescriptorModule$2.f(anObject$h(target), propertyKey);
    }
  });

  var $$P = _export;
  var anObject$g = anObject$C;
  var objectGetPrototypeOf = objectGetPrototypeOf$1;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter; // `Reflect.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.getprototypeof

  $$P({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
  }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return objectGetPrototypeOf(anObject$g(target));
    }
  });

  var $$O = _export; // `Reflect.has` method
  // https://tc39.es/ecma262/#sec-reflect.has

  $$O({
    target: 'Reflect',
    stat: true
  }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  var $$N = _export;
  var anObject$f = anObject$C;
  var $isExtensible = objectIsExtensible; // `Reflect.isExtensible` method
  // https://tc39.es/ecma262/#sec-reflect.isextensible

  $$N({
    target: 'Reflect',
    stat: true
  }, {
    isExtensible: function isExtensible(target) {
      anObject$f(target);
      return $isExtensible(target);
    }
  });

  var $$M = _export;
  var ownKeys = ownKeys$3; // `Reflect.ownKeys` method
  // https://tc39.es/ecma262/#sec-reflect.ownkeys

  $$M({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: ownKeys
  });

  var $$L = _export;
  var getBuiltIn$6 = getBuiltIn$l;
  var anObject$e = anObject$C;
  var FREEZING = freezing; // `Reflect.preventExtensions` method
  // https://tc39.es/ecma262/#sec-reflect.preventextensions

  $$L({
    target: 'Reflect',
    stat: true,
    sham: !FREEZING
  }, {
    preventExtensions: function preventExtensions(target) {
      anObject$e(target);

      try {
        var objectPreventExtensions = getBuiltIn$6('Object', 'preventExtensions');
        if (objectPreventExtensions) objectPreventExtensions(target);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$K = _export;
  var call$f = functionCall;
  var anObject$d = anObject$C;
  var isObject$7 = isObject$z;
  var isDataDescriptor = isDataDescriptor$2;
  var fails$p = fails$1f;
  var definePropertyModule$1 = objectDefineProperty;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf = objectGetPrototypeOf$1;
  var createPropertyDescriptor$4 = createPropertyDescriptor$c; // `Reflect.set` method
  // https://tc39.es/ecma262/#sec-reflect.set

  function set$2(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule$1.f(anObject$d(target), propertyKey);
    var existingDescriptor, prototype, setter;

    if (!ownDescriptor) {
      if (isObject$7(prototype = getPrototypeOf(target))) {
        return set$2(prototype, propertyKey, V, receiver);
      }

      ownDescriptor = createPropertyDescriptor$4(0);
    }

    if (isDataDescriptor(ownDescriptor)) {
      if (ownDescriptor.writable === false || !isObject$7(receiver)) return false;

      if (existingDescriptor = getOwnPropertyDescriptorModule$1.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        definePropertyModule$1.f(receiver, propertyKey, existingDescriptor);
      } else definePropertyModule$1.f(receiver, propertyKey, createPropertyDescriptor$4(0, V));
    } else {
      setter = ownDescriptor.set;
      if (setter === undefined) return false;
      call$f(setter, receiver, V);
    }

    return true;
  } // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype


  var MS_EDGE_BUG = fails$p(function () {
    var Constructor = function Constructor() {
      /* empty */
    };

    var object = definePropertyModule$1.f(new Constructor(), 'a', {
      configurable: true
    }); // eslint-disable-next-line es/no-reflect -- required for testing

    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });
  $$K({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
  }, {
    set: set$2
  });

  var $$J = _export;
  var anObject$c = anObject$C;
  var aPossiblePrototype = aPossiblePrototype$2;
  var objectSetPrototypeOf = objectSetPrototypeOf$1; // `Reflect.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.setprototypeof

  if (objectSetPrototypeOf) $$J({
    target: 'Reflect',
    stat: true
  }, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      anObject$c(target);
      aPossiblePrototype(proto);

      try {
        objectSetPrototypeOf(target, proto);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var $$I = _export;
  var global$w = global$1E;
  var setToStringTag$3 = setToStringTag$c;
  $$I({
    global: true
  }, {
    Reflect: {}
  }); // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag

  setToStringTag$3(global$w.Reflect, 'Reflect', true);

  var isObject$6 = isObject$z;
  var classof$7 = classofRaw$1;
  var wellKnownSymbol$a = wellKnownSymbol$y;
  var MATCH$2 = wellKnownSymbol$a('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject$6(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$7(it) == 'RegExp');
  };

  var anObject$b = anObject$C; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  var regexpFlags$1 = function regexpFlags() {
    var that = anObject$b(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$o = fails$1f;
  var global$v = global$1E; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

  var $RegExp$2 = global$v.RegExp;
  var UNSUPPORTED_Y$3 = fails$o(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  }); // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008

  var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails$o(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$o(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$2,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };

  var fails$n = fails$1f;
  var global$u = global$1E; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

  var $RegExp$1 = global$u.RegExp;
  var regexpUnsupportedDotAll = fails$n(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$m = fails$1f;
  var global$t = global$1E; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

  var $RegExp = global$t.RegExp;
  var regexpUnsupportedNcg = fails$m(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  var DESCRIPTORS$6 = descriptors;
  var global$s = global$1E;
  var uncurryThis$w = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired$2 = inheritIfRequired$6;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$f;
  var defineProperty$4 = objectDefineProperty.f;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var isRegExp$4 = isRegexp;
  var toString$j = toString$u;
  var regExpFlags$5 = regexpFlags$1;
  var stickyHelpers$2 = regexpStickyHelpers;
  var redefine$6 = redefine$l.exports;
  var fails$l = fails$1f;
  var hasOwn$8 = hasOwnProperty_1;
  var enforceInternalState$1 = internalState.enforce;
  var setSpecies$1 = setSpecies$6;
  var wellKnownSymbol$9 = wellKnownSymbol$y;
  var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var MATCH$1 = wellKnownSymbol$9('match');
  var NativeRegExp = global$s.RegExp;
  var RegExpPrototype$7 = NativeRegExp.prototype;
  var SyntaxError$1 = global$s.SyntaxError;
  var getFlags$4 = uncurryThis$w(regExpFlags$5);
  var exec$6 = uncurryThis$w(RegExpPrototype$7.exec);
  var charAt$b = uncurryThis$w(''.charAt);
  var replace$7 = uncurryThis$w(''.replace);
  var stringIndexOf$4 = uncurryThis$w(''.indexOf);
  var stringSlice$b = uncurryThis$w(''.slice); // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY$1 = stickyHelpers$2.MISSED_STICKY;
  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$6 && (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$l(function () {
    re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

  var handleDotAll = function handleDotAll(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;

    for (; index <= length; index++) {
      chr = charAt$b(string, index);

      if (chr === '\\') {
        result += chr + charAt$b(string, ++index);
        continue;
      }

      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }

        result += chr;
      }
    }

    return result;
  };

  var handleNCG = function handleNCG(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;

    for (; index <= length; index++) {
      chr = charAt$b(string, index);

      if (chr === '\\') {
        chr = chr + charAt$b(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;

        case chr === '(':
          if (exec$6(IS_NCG, stringSlice$b(string, index + 1))) {
            index += 2;
            ncg = true;
          }

          result += chr;
          groupid++;
          continue;

        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$8(names, groupname)) {
            throw new SyntaxError$1('Invalid capture group name');
          }

          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }

      if (ncg) groupname += chr;else result += chr;
    }

    return [result, named];
  }; // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor


  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf$3(RegExpPrototype$7, this);
      var patternIsRegExp = isRegExp$4(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || isPrototypeOf$3(RegExpPrototype$7, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags$4(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$j(pattern);
      flags = flags === undefined ? '' : toString$j(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$4(flags, 's') > -1;
        if (dotAll) flags = replace$7(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY$1 && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$4(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$2) flags = replace$7(flags, /y/g, '');
      }

      if (UNSUPPORTED_NCG$1) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$7, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState$1(result);

        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }

        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$5(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$4(RegExpWrapper, key, {
        configurable: true,
        get: function get() {
          return NativeRegExp[key];
        },
        set: function set(it) {
          NativeRegExp[key] = it;
        }
      });
    };

    for (var keys = getOwnPropertyNames$1(NativeRegExp), index$1 = 0; keys.length > index$1;) {
      proxy(keys[index$1++]);
    }

    RegExpPrototype$7.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$7;
    redefine$6(global$s, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies$1('RegExp');

  var global$r = global$1E;
  var DESCRIPTORS$5 = descriptors;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var classof$6 = classofRaw$1;
  var defineProperty$3 = objectDefineProperty.f;
  var getInternalState$6 = internalState.get;
  var RegExpPrototype$6 = RegExp.prototype;
  var TypeError$9 = global$r.TypeError; // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall

  if (DESCRIPTORS$5 && UNSUPPORTED_DOT_ALL$1) {
    defineProperty$3(RegExpPrototype$6, 'dotAll', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$6) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (classof$6(this) === 'RegExp') {
          return !!getInternalState$6(this).dotAll;
        }

        throw TypeError$9('Incompatible receiver, RegExp required');
      }
    });
  }

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */


  var call$e = functionCall;
  var uncurryThis$v = functionUncurryThis;
  var toString$i = toString$u;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = shared$5.exports;
  var create$4 = objectCreate;
  var getInternalState$5 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$a = uncurryThis$v(''.charAt);
  var indexOf$1 = uncurryThis$v(''.indexOf);
  var replace$6 = uncurryThis$v(''.replace);
  var stringSlice$a = uncurryThis$v(''.slice);

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$e(nativeExec, re1, 'a');
    call$e(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$5(re);
      var str = toString$i(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$e(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$e(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$6(flags, 'y', '');

        if (indexOf$1(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$a(str, re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$a(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = call$e(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$a(match.input, charsAdded);
          match[0] = stringSlice$a(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        call$e(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$4(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$H = _export;
  var exec$5 = regexpExec$3; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  $$H({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$5
  }, {
    exec: exec$5
  });

  var DESCRIPTORS$4 = descriptors;
  var objectDefinePropertyModule = objectDefineProperty;
  var regExpFlags$4 = regexpFlags$1;
  var fails$k = fails$1f;
  var RegExpPrototype$5 = RegExp.prototype;
  var FORCED$7 = DESCRIPTORS$4 && fails$k(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExpPrototype$5, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED$7) objectDefinePropertyModule.f(RegExpPrototype$5, 'flags', {
    configurable: true,
    get: regExpFlags$4
  });

  var global$q = global$1E;
  var DESCRIPTORS$3 = descriptors;
  var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
  var classof$5 = classofRaw$1;
  var defineProperty$2 = objectDefineProperty.f;
  var getInternalState$4 = internalState.get;
  var RegExpPrototype$4 = RegExp.prototype;
  var TypeError$8 = global$q.TypeError; // `RegExp.prototype.sticky` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky

  if (DESCRIPTORS$3 && MISSED_STICKY) {
    defineProperty$2(RegExpPrototype$4, 'sticky', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$4) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (classof$5(this) === 'RegExp') {
          return !!getInternalState$4(this).sticky;
        }

        throw TypeError$8('Incompatible receiver, RegExp required');
      }
    });
  }

  var $$G = _export;
  var global$p = global$1E;
  var call$d = functionCall;
  var uncurryThis$u = functionUncurryThis;
  var isCallable$6 = isCallable$v;
  var isObject$5 = isObject$z;

  var DELEGATES_TO_EXEC = function () {
    var execCalled = false;
    var re = /[ac]/;

    re.exec = function () {
      execCalled = true;
      return /./.exec.apply(this, arguments);
    };

    return re.test('abc') === true && execCalled;
  }();

  var Error$4 = global$p.Error;
  var un$Test = uncurryThis$u(/./.test); // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test

  $$G({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
  }, {
    test: function test(str) {
      var exec = this.exec;
      if (!isCallable$6(exec)) return un$Test(this, str);
      var result = call$d(exec, this, str);

      if (result !== null && !isObject$5(result)) {
        throw new Error$4('RegExp exec method returned something other than an Object or null');
      }

      return !!result;
    }
  });

  var uncurryThis$t = functionUncurryThis;
  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var redefine$5 = redefine$l.exports;
  var anObject$a = anObject$C;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var $toString$2 = toString$u;
  var fails$j = fails$1f;
  var regExpFlags$3 = regexpFlags$1;
  var TO_STRING = 'toString';
  var RegExpPrototype$3 = RegExp.prototype;
  var n$ToString = RegExpPrototype$3[TO_STRING];
  var getFlags$3 = uncurryThis$t(regExpFlags$3);
  var NOT_GENERIC = fails$j(function () {
    return n$ToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$5(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$a(this);
      var p = $toString$2(R.source);
      var rf = R.flags;
      var f = $toString$2(rf === undefined && isPrototypeOf$2(RegExpPrototype$3, R) && !('flags' in RegExpPrototype$3) ? getFlags$3(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  var collection$2 = collection$4;
  var collectionStrong = collectionStrong$2; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects

  collection$2('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var $$F = _export;
  var uncurryThis$s = functionUncurryThis;
  var requireObjectCoercible$c = requireObjectCoercible$i;
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$i;
  var toString$h = toString$u;
  var fails$i = fails$1f;
  var charAt$9 = uncurryThis$s(''.charAt);
  var FORCED$6 = fails$i(function () {
    return '𠮷'.at(-2) !== "\uD842";
  }); // `String.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  $$F({
    target: 'String',
    proto: true,
    forced: FORCED$6
  }, {
    at: function at(index) {
      var S = toString$h(requireObjectCoercible$c(this));
      var len = S.length;
      var relativeIndex = toIntegerOrInfinity$5(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return k < 0 || k >= len ? undefined : charAt$9(S, k);
    }
  });

  var uncurryThis$r = functionUncurryThis;
  var toIntegerOrInfinity$4 = toIntegerOrInfinity$i;
  var toString$g = toString$u;
  var requireObjectCoercible$b = requireObjectCoercible$i;
  var charAt$8 = uncurryThis$r(''.charAt);
  var charCodeAt$2 = uncurryThis$r(''.charCodeAt);
  var stringSlice$9 = uncurryThis$r(''.slice);

  var createMethod = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$g(requireObjectCoercible$b($this));
      var position = toIntegerOrInfinity$4(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$2(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$2(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$8(S, position) : first : CONVERT_TO_STRING ? stringSlice$9(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var $$E = _export;
  var codeAt$1 = stringMultibyte.codeAt; // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat

  $$E({
    target: 'String',
    proto: true
  }, {
    codePointAt: function codePointAt(pos) {
      return codeAt$1(this, pos);
    }
  });

  var global$o = global$1E;
  var isRegExp$3 = isRegexp;
  var TypeError$7 = global$o.TypeError;

  var notARegexp = function notARegexp(it) {
    if (isRegExp$3(it)) {
      throw TypeError$7("The method doesn't accept regular expressions");
    }

    return it;
  };

  var wellKnownSymbol$8 = wellKnownSymbol$y;
  var MATCH = wellKnownSymbol$8('match');

  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }

    return false;
  };

  var $$D = _export;
  var uncurryThis$q = functionUncurryThis;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength$7 = toLength$d;
  var toString$f = toString$u;
  var notARegExp$2 = notARegexp;
  var requireObjectCoercible$a = requireObjectCoercible$i;
  var correctIsRegExpLogic$2 = correctIsRegexpLogic;

  var un$EndsWith = uncurryThis$q(''.endsWith);
  var slice = uncurryThis$q(''.slice);
  var min$5 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith

  $$D({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
  }, {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = toString$f(requireObjectCoercible$a(this));
      notARegExp$2(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$5(toLength$7(endPosition), len);
      var search = toString$f(searchString);
      return un$EndsWith ? un$EndsWith(that, search, end) : slice(that, end - search.length, end) === search;
    }
  });

  var $$C = _export;
  var global$n = global$1E;
  var uncurryThis$p = functionUncurryThis;
  var toAbsoluteIndex$1 = toAbsoluteIndex$9;
  var RangeError$6 = global$n.RangeError;
  var fromCharCode$3 = String.fromCharCode; // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing

  var $fromCodePoint = String.fromCodePoint;
  var join$5 = uncurryThis$p([].join); // length should be 1, old FF problem

  var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1; // `String.fromCodePoint` method
  // https://tc39.es/ecma262/#sec-string.fromcodepoint

  $$C({
    target: 'String',
    stat: true,
    forced: INCORRECT_LENGTH
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    fromCodePoint: function fromCodePoint(x) {
      var elements = [];
      var length = arguments.length;
      var i = 0;
      var code;

      while (length > i) {
        code = +arguments[i++];
        if (toAbsoluteIndex$1(code, 0x10FFFF) !== code) throw RangeError$6(code + ' is not a valid code point');
        elements[i] = code < 0x10000 ? fromCharCode$3(code) : fromCharCode$3(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
      }

      return join$5(elements, '');
    }
  });

  var $$B = _export;
  var uncurryThis$o = functionUncurryThis;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$9 = requireObjectCoercible$i;
  var toString$e = toString$u;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;
  var stringIndexOf$3 = uncurryThis$o(''.indexOf); // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes

  $$B({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic$1('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~stringIndexOf$3(toString$e(requireObjectCoercible$9(this)), toString$e(notARegExp$1(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var charAt$7 = stringMultibyte.charAt;
  var toString$d = toString$u;
  var InternalStateModule$6 = internalState;
  var defineIterator = defineIterator$3;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$6 = InternalStateModule$6.set;
  var getInternalState$3 = InternalStateModule$6.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState$6(this, {
      type: STRING_ITERATOR,
      string: toString$d(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$3(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$7(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var uncurryThis$n = functionUncurryThis;
  var redefine$4 = redefine$l.exports;
  var regexpExec$2 = regexpExec$3;
  var fails$h = fails$1f;
  var wellKnownSymbol$7 = wellKnownSymbol$y;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$f;
  var SPECIES = wellKnownSymbol$7('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$7(KEY);
    var DELEGATES_TO_SYMBOL = !fails$h(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$h(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = uncurryThis$n(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$n(nativeMethod);
        var $exec = regexp.exec;

        if ($exec === regexpExec$2 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      redefine$4(String.prototype, KEY, methods[0]);
      redefine$4(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$4(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var charAt$6 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex$4 = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt$6(S, index).length : 1);
  };

  var global$m = global$1E;
  var call$c = functionCall;
  var anObject$9 = anObject$C;
  var isCallable$5 = isCallable$v;
  var classof$4 = classofRaw$1;
  var regexpExec$1 = regexpExec$3;
  var TypeError$6 = global$m.TypeError; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec

  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (isCallable$5(exec)) {
      var result = call$c(exec, R, S);
      if (result !== null) anObject$9(result);
      return result;
    }

    if (classof$4(R) === 'RegExp') return call$c(regexpExec$1, R, S);
    throw TypeError$6('RegExp#exec called on incompatible receiver');
  };

  var call$b = functionCall;
  var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
  var anObject$8 = anObject$C;
  var toLength$6 = toLength$d;
  var toString$c = toString$u;
  var requireObjectCoercible$8 = requireObjectCoercible$i;
  var getMethod$5 = getMethod$9;
  var advanceStringIndex$3 = advanceStringIndex$4;
  var regExpExec$3 = regexpExecAbstract; // @@match logic

  fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$8(this);
      var matcher = regexp == undefined ? undefined : getMethod$5(regexp, MATCH);
      return matcher ? call$b(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$c(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$8(this);
      var S = toString$c(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$3(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = toString$c(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$6(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  /* eslint-disable es/no-string-prototype-matchall -- safe */


  var $$A = _export;
  var global$l = global$1E;
  var call$a = functionCall;
  var uncurryThis$m = functionUncurryThis;
  var createIteratorConstructor$1 = createIteratorConstructor$3;
  var requireObjectCoercible$7 = requireObjectCoercible$i;
  var toLength$5 = toLength$d;
  var toString$b = toString$u;
  var anObject$7 = anObject$C;
  var classof$3 = classofRaw$1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var isRegExp$2 = isRegexp;
  var regExpFlags$2 = regexpFlags$1;
  var getMethod$4 = getMethod$9;
  var redefine$3 = redefine$l.exports;
  var fails$g = fails$1f;
  var wellKnownSymbol$6 = wellKnownSymbol$y;
  var speciesConstructor$2 = speciesConstructor$6;
  var advanceStringIndex$2 = advanceStringIndex$4;
  var regExpExec$2 = regexpExecAbstract;
  var InternalStateModule$5 = internalState;
  var IS_PURE$1 = isPure;
  var MATCH_ALL = wellKnownSymbol$6('matchAll');
  var REGEXP_STRING = 'RegExp String';
  var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState$2 = InternalStateModule$5.getterFor(REGEXP_STRING_ITERATOR);
  var RegExpPrototype$1 = RegExp.prototype;
  var TypeError$5 = global$l.TypeError;
  var getFlags$2 = uncurryThis$m(regExpFlags$2);
  var stringIndexOf$2 = uncurryThis$m(''.indexOf);
  var un$MatchAll = uncurryThis$m(''.matchAll);
  var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails$g(function () {
    un$MatchAll('a', /./);
  });
  var $RegExpStringIterator = createIteratorConstructor$1(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
    setInternalState$5(this, {
      type: REGEXP_STRING_ITERATOR,
      regexp: regexp,
      string: string,
      global: $global,
      unicode: fullUnicode,
      done: false
    });
  }, REGEXP_STRING, function next() {
    var state = getInternalState$2(this);
    if (state.done) return {
      value: undefined,
      done: true
    };
    var R = state.regexp;
    var S = state.string;
    var match = regExpExec$2(R, S);
    if (match === null) return {
      value: undefined,
      done: state.done = true
    };

    if (state.global) {
      if (toString$b(match[0]) === '') R.lastIndex = advanceStringIndex$2(S, toLength$5(R.lastIndex), state.unicode);
      return {
        value: match,
        done: false
      };
    }

    state.done = true;
    return {
      value: match,
      done: false
    };
  });

  var $matchAll = function $matchAll(string) {
    var R = anObject$7(this);
    var S = toString$b(string);
    var C, flagsValue, flags, matcher, $global, fullUnicode;
    C = speciesConstructor$2(R, RegExp);
    flagsValue = R.flags;

    if (flagsValue === undefined && isPrototypeOf$1(RegExpPrototype$1, R) && !('flags' in RegExpPrototype$1)) {
      flagsValue = getFlags$2(R);
    }

    flags = flagsValue === undefined ? '' : toString$b(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    $global = !!~stringIndexOf$2(flags, 'g');
    fullUnicode = !!~stringIndexOf$2(flags, 'u');
    matcher.lastIndex = toLength$5(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
  }; // `String.prototype.matchAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.matchall


  $$A({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
  }, {
    matchAll: function matchAll(regexp) {
      var O = requireObjectCoercible$7(this);
      var flags, S, matcher, rx;

      if (regexp != null) {
        if (isRegExp$2(regexp)) {
          flags = toString$b(requireObjectCoercible$7('flags' in RegExpPrototype$1 ? regexp.flags : getFlags$2(regexp)));
          if (!~stringIndexOf$2(flags, 'g')) throw TypeError$5('`.matchAll` does not allow non-global regexes');
        }

        if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
        matcher = getMethod$4(regexp, MATCH_ALL);
        if (matcher === undefined && IS_PURE$1 && classof$3(regexp) == 'RegExp') matcher = $matchAll;
        if (matcher) return call$a(matcher, regexp, O);
      } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);

      S = toString$b(O);
      rx = new RegExp(regexp, 'g');
      return rx[MATCH_ALL](S);
    }
  });
  MATCH_ALL in RegExpPrototype$1 || redefine$3(RegExpPrototype$1, MATCH_ALL, $matchAll);

  var userAgent$1 = engineUserAgent;
  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent$1);

  var $$z = _export;
  var $padEnd = stringPad.end;
  var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend

  $$z({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG$1
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$y = _export;
  var $padStart = stringPad.start;
  var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart

  $$y({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$x = _export;
  var uncurryThis$l = functionUncurryThis;
  var toIndexedObject$1 = toIndexedObject$f;
  var toObject$2 = toObject$p;
  var toString$a = toString$u;
  var lengthOfArrayLike$5 = lengthOfArrayLike$n;
  var push$6 = uncurryThis$l([].push);
  var join$4 = uncurryThis$l([].join); // `String.raw` method
  // https://tc39.es/ecma262/#sec-string.raw

  $$x({
    target: 'String',
    stat: true
  }, {
    raw: function raw(template) {
      var rawTemplate = toIndexedObject$1(toObject$2(template).raw);
      var literalSegments = lengthOfArrayLike$5(rawTemplate);
      var argumentsLength = arguments.length;
      var elements = [];
      var i = 0;

      while (literalSegments > i) {
        push$6(elements, toString$a(rawTemplate[i++]));
        if (i === literalSegments) return join$4(elements, '');
        if (i < argumentsLength) push$6(elements, toString$a(arguments[i]));
      }
    }
  });

  var $$w = _export;
  var repeat = stringRepeat; // `String.prototype.repeat` method
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  $$w({
    target: 'String',
    proto: true
  }, {
    repeat: repeat
  });

  var uncurryThis$k = functionUncurryThis;
  var toObject$1 = toObject$p;
  var floor$3 = Math.floor;
  var charAt$5 = uncurryThis$k(''.charAt);
  var replace$5 = uncurryThis$k(''.replace);
  var stringSlice$8 = uncurryThis$k(''.slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution$2 = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$1(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace$5(replacement, symbols, function (match, ch) {
      var capture;

      switch (charAt$5(ch, 0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return stringSlice$8(str, 0, position);

        case "'":
          return stringSlice$8(str, tailPos);

        case '<':
          capture = namedCaptures[stringSlice$8(ch, 1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor$3(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$5(ch, 1) : captures[f - 1] + charAt$5(ch, 1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var apply$4 = functionApply$1;
  var call$9 = functionCall;
  var uncurryThis$j = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var fails$f = fails$1f;
  var anObject$6 = anObject$C;
  var isCallable$4 = isCallable$v;
  var toIntegerOrInfinity$3 = toIntegerOrInfinity$i;
  var toLength$4 = toLength$d;
  var toString$9 = toString$u;
  var requireObjectCoercible$6 = requireObjectCoercible$i;
  var advanceStringIndex$1 = advanceStringIndex$4;
  var getMethod$3 = getMethod$9;
  var getSubstitution$1 = getSubstitution$2;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol$5 = wellKnownSymbol$y;
  var REPLACE$1 = wellKnownSymbol$5('replace');
  var max$3 = Math.max;
  var min$4 = Math.min;
  var concat = uncurryThis$j([].concat);
  var push$5 = uncurryThis$j([].push);
  var stringIndexOf$1 = uncurryThis$j(''.indexOf);
  var stringSlice$7 = uncurryThis$j(''.slice);

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE$1]) {
      return /./[REPLACE$1]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$f(function () {
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


    return ''.replace(re, '$<a>') !== '7';
  }); // @@replace logic

  fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$6(this);
      var replacer = searchValue == undefined ? undefined : getMethod$3(searchValue, REPLACE$1);
      return replacer ? call$9(replacer, searchValue, O, replaceValue) : call$9(nativeReplace, toString$9(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$6(this);
      var S = toString$9(string);

      if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$4(replaceValue);
      if (!functionalReplace) replaceValue = toString$9(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;
        push$5(results, result);
        if (!global) break;
        var matchStr = toString$9(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$4(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$9(result[0]);
        var position = max$3(min$4(toIntegerOrInfinity$3(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          push$5(captures, maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$5(replacerArgs, namedCaptures);
          var replacement = toString$9(apply$4(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$7(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$7(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var $$v = _export;
  var global$k = global$1E;
  var call$8 = functionCall;
  var uncurryThis$i = functionUncurryThis;
  var requireObjectCoercible$5 = requireObjectCoercible$i;
  var isCallable$3 = isCallable$v;
  var isRegExp$1 = isRegexp;
  var toString$8 = toString$u;
  var getMethod$2 = getMethod$9;
  var regExpFlags$1 = regexpFlags$1;
  var getSubstitution = getSubstitution$2;
  var wellKnownSymbol$4 = wellKnownSymbol$y;
  var REPLACE = wellKnownSymbol$4('replace');
  var RegExpPrototype = RegExp.prototype;
  var TypeError$4 = global$k.TypeError;
  var getFlags$1 = uncurryThis$i(regExpFlags$1);
  var indexOf = uncurryThis$i(''.indexOf);
  uncurryThis$i(''.replace);
  var stringSlice$6 = uncurryThis$i(''.slice);
  var max$2 = Math.max;

  var stringIndexOf = function stringIndexOf(string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return indexOf(string, searchValue, fromIndex);
  }; // `String.prototype.replaceAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.replaceall


  $$v({
    target: 'String',
    proto: true
  }, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
      var O = requireObjectCoercible$5(this);
      var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
      var position = 0;
      var endOfLastMatch = 0;
      var result = '';

      if (searchValue != null) {
        IS_REG_EXP = isRegExp$1(searchValue);

        if (IS_REG_EXP) {
          flags = toString$8(requireObjectCoercible$5('flags' in RegExpPrototype ? searchValue.flags : getFlags$1(searchValue)));
          if (!~indexOf(flags, 'g')) throw TypeError$4('`.replaceAll` does not allow non-global regexes');
        }

        replacer = getMethod$2(searchValue, REPLACE);

        if (replacer) {
          return call$8(replacer, searchValue, O, replaceValue);
        }
      }

      string = toString$8(O);
      searchString = toString$8(searchValue);
      functionalReplace = isCallable$3(replaceValue);
      if (!functionalReplace) replaceValue = toString$8(replaceValue);
      searchLength = searchString.length;
      advanceBy = max$2(1, searchLength);
      position = stringIndexOf(string, searchString, 0);

      while (position !== -1) {
        replacement = functionalReplace ? toString$8(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], undefined, replaceValue);
        result += stringSlice$6(string, endOfLastMatch, position) + replacement;
        endOfLastMatch = position + searchLength;
        position = stringIndexOf(string, searchString, position + advanceBy);
      }

      if (endOfLastMatch < string.length) {
        result += stringSlice$6(string, endOfLastMatch);
      }

      return result;
    }
  });

  var call$7 = functionCall;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$5 = anObject$C;
  var requireObjectCoercible$4 = requireObjectCoercible$i;
  var sameValue = sameValue$1;
  var toString$7 = toString$u;
  var getMethod$1 = getMethod$9;
  var regExpExec = regexpExecAbstract; // @@search logic

  fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$4(this);
      var searcher = regexp == undefined ? undefined : getMethod$1(regexp, SEARCH);
      return searcher ? call$7(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$7(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$5(this);
      var S = toString$7(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done) return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var apply$3 = functionApply$1;
  var call$6 = functionCall;
  var uncurryThis$h = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var isRegExp = isRegexp;
  var anObject$4 = anObject$C;
  var requireObjectCoercible$3 = requireObjectCoercible$i;
  var speciesConstructor$1 = speciesConstructor$6;
  var advanceStringIndex = advanceStringIndex$4;
  var toLength$3 = toLength$d;
  var toString$6 = toString$u;
  var getMethod = getMethod$9;
  var arraySlice$4 = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers = regexpStickyHelpers;
  var fails$e = fails$1f;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$3 = Math.min;
  var $push = [].push;
  var exec$4 = uncurryThis$h(/./.exec);
  var push$4 = uncurryThis$h($push);
  var stringSlice$5 = uncurryThis$h(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$e(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = toString$6(requireObjectCoercible$3(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegExp(separator)) {
          return call$6(nativeSplit, string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = call$6(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            push$4(output, stringSlice$5(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$3($push, output, arraySlice$4(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !exec$4(separatorCopy, '')) push$4(output, '');
        } else push$4(output, stringSlice$5(string, lastLastIndex));

        return output.length > lim ? arraySlice$4(output, 0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$6(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$3(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter ? call$6(splitter, separator, O, limit) : call$6(internalSplit, toString$6(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$4(this);
      var S = toString$6(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor$1(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$5(S, q) : S);
        var e;

        if (z === null || (e = min$3(toLength$3(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$4(A, stringSlice$5(S, p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            push$4(A, z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      push$4(A, stringSlice$5(S, p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var $$u = _export;
  var uncurryThis$g = functionUncurryThis;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength$2 = toLength$d;
  var toString$5 = toString$u;
  var notARegExp = notARegexp;
  var requireObjectCoercible$2 = requireObjectCoercible$i;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var un$StartsWith = uncurryThis$g(''.startsWith);
  var stringSlice$4 = uncurryThis$g(''.slice);
  var min$2 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith

  $$u({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  }, {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = toString$5(requireObjectCoercible$2(this));
      notARegExp(searchString);
      var index = toLength$2(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$5(searchString);
      return un$StartsWith ? un$StartsWith(that, search, index) : stringSlice$4(that, index, index + search.length) === search;
    }
  });

  var $$t = _export;
  var uncurryThis$f = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$i;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$i;
  var toString$4 = toString$u;
  var stringSlice$3 = uncurryThis$f(''.slice);
  var max$1 = Math.max;
  var min$1 = Math.min; // eslint-disable-next-line unicorn/prefer-string-slice -- required for testing

  var FORCED$5 = !''.substr || 'ab'.substr(-1) !== 'b'; // `String.prototype.substr` method
  // https://tc39.es/ecma262/#sec-string.prototype.substr

  $$t({
    target: 'String',
    proto: true,
    forced: FORCED$5
  }, {
    substr: function substr(start, length) {
      var that = toString$4(requireObjectCoercible$1(this));
      var size = that.length;
      var intStart = toIntegerOrInfinity$2(start);
      var intLength, intEnd;
      if (intStart === Infinity) intStart = 0;
      if (intStart < 0) intStart = max$1(size + intStart, 0);
      intLength = length === undefined ? size : toIntegerOrInfinity$2(length);
      if (intLength <= 0 || intLength === Infinity) return '';
      intEnd = min$1(intStart + intLength, size);
      return intStart >= intEnd ? '' : stringSlice$3(that, intStart, intEnd);
    }
  });

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$d = fails$1f;
  var whitespaces$1 = whitespaces$5;
  var non = "\u200B\x85\u180E"; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails$d(function () {
      return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$s = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod$2 = stringTrimForced; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  $$s({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod$2('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $$r = _export;
  var $trimEnd = stringTrim.end;
  var forcedStringTrimMethod$1 = stringTrimForced;
  var FORCED$4 = forcedStringTrimMethod$1('trimEnd');
  var trimEnd = FORCED$4 ? function trimEnd() {
    return $trimEnd(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimEnd; // `String.prototype.{ trimEnd, trimRight }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  // https://tc39.es/ecma262/#String.prototype.trimright

  $$r({
    target: 'String',
    proto: true,
    name: 'trimEnd',
    forced: FORCED$4
  }, {
    trimEnd: trimEnd,
    trimRight: trimEnd
  });

  var $$q = _export;
  var $trimStart = stringTrim.start;
  var forcedStringTrimMethod = stringTrimForced;
  var FORCED$3 = forcedStringTrimMethod('trimStart');
  var trimStart = FORCED$3 ? function trimStart() {
    return $trimStart(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimStart; // `String.prototype.{ trimStart, trimLeft }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  // https://tc39.es/ecma262/#String.prototype.trimleft

  $$q({
    target: 'String',
    proto: true,
    name: 'trimStart',
    forced: FORCED$3
  }, {
    trimStart: trimStart,
    trimLeft: trimStart
  });

  var uncurryThis$e = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$i;
  var toString$3 = toString$u;
  var quot = /"/g;
  var replace$4 = uncurryThis$e(''.replace); // `CreateHTML` abstract operation
  // https://tc39.es/ecma262/#sec-createhtml

  var createHtml = function createHtml(string, tag, attribute, value) {
    var S = toString$3(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + replace$4(toString$3(value), quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var fails$c = fails$1f; // check the existence of a method, lowercase
  // of a tag and escaping quotes in arguments

  var stringHtmlForced = function stringHtmlForced(METHOD_NAME) {
    return fails$c(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };

  var $$p = _export;
  var createHTML$c = createHtml;
  var forcedStringHTMLMethod$c = stringHtmlForced; // `String.prototype.anchor` method
  // https://tc39.es/ecma262/#sec-string.prototype.anchor

  $$p({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$c('anchor')
  }, {
    anchor: function anchor(name) {
      return createHTML$c(this, 'a', 'name', name);
    }
  });

  var $$o = _export;
  var createHTML$b = createHtml;
  var forcedStringHTMLMethod$b = stringHtmlForced; // `String.prototype.big` method
  // https://tc39.es/ecma262/#sec-string.prototype.big

  $$o({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$b('big')
  }, {
    big: function big() {
      return createHTML$b(this, 'big', '', '');
    }
  });

  var $$n = _export;
  var createHTML$a = createHtml;
  var forcedStringHTMLMethod$a = stringHtmlForced; // `String.prototype.blink` method
  // https://tc39.es/ecma262/#sec-string.prototype.blink

  $$n({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$a('blink')
  }, {
    blink: function blink() {
      return createHTML$a(this, 'blink', '', '');
    }
  });

  var $$m = _export;
  var createHTML$9 = createHtml;
  var forcedStringHTMLMethod$9 = stringHtmlForced; // `String.prototype.bold` method
  // https://tc39.es/ecma262/#sec-string.prototype.bold

  $$m({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$9('bold')
  }, {
    bold: function bold() {
      return createHTML$9(this, 'b', '', '');
    }
  });

  var $$l = _export;
  var createHTML$8 = createHtml;
  var forcedStringHTMLMethod$8 = stringHtmlForced; // `String.prototype.fixed` method
  // https://tc39.es/ecma262/#sec-string.prototype.fixed

  $$l({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$8('fixed')
  }, {
    fixed: function fixed() {
      return createHTML$8(this, 'tt', '', '');
    }
  });

  var $$k = _export;
  var createHTML$7 = createHtml;
  var forcedStringHTMLMethod$7 = stringHtmlForced; // `String.prototype.fontcolor` method
  // https://tc39.es/ecma262/#sec-string.prototype.fontcolor

  $$k({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$7('fontcolor')
  }, {
    fontcolor: function fontcolor(color) {
      return createHTML$7(this, 'font', 'color', color);
    }
  });

  var $$j = _export;
  var createHTML$6 = createHtml;
  var forcedStringHTMLMethod$6 = stringHtmlForced; // `String.prototype.fontsize` method
  // https://tc39.es/ecma262/#sec-string.prototype.fontsize

  $$j({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$6('fontsize')
  }, {
    fontsize: function fontsize(size) {
      return createHTML$6(this, 'font', 'size', size);
    }
  });

  var $$i = _export;
  var createHTML$5 = createHtml;
  var forcedStringHTMLMethod$5 = stringHtmlForced; // `String.prototype.italics` method
  // https://tc39.es/ecma262/#sec-string.prototype.italics

  $$i({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$5('italics')
  }, {
    italics: function italics() {
      return createHTML$5(this, 'i', '', '');
    }
  });

  var $$h = _export;
  var createHTML$4 = createHtml;
  var forcedStringHTMLMethod$4 = stringHtmlForced; // `String.prototype.link` method
  // https://tc39.es/ecma262/#sec-string.prototype.link

  $$h({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$4('link')
  }, {
    link: function link(url) {
      return createHTML$4(this, 'a', 'href', url);
    }
  });

  var $$g = _export;
  var createHTML$3 = createHtml;
  var forcedStringHTMLMethod$3 = stringHtmlForced; // `String.prototype.small` method
  // https://tc39.es/ecma262/#sec-string.prototype.small

  $$g({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$3('small')
  }, {
    small: function small() {
      return createHTML$3(this, 'small', '', '');
    }
  });

  var $$f = _export;
  var createHTML$2 = createHtml;
  var forcedStringHTMLMethod$2 = stringHtmlForced; // `String.prototype.strike` method
  // https://tc39.es/ecma262/#sec-string.prototype.strike

  $$f({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$2('strike')
  }, {
    strike: function strike() {
      return createHTML$2(this, 'strike', '', '');
    }
  });

  var $$e = _export;
  var createHTML$1 = createHtml;
  var forcedStringHTMLMethod$1 = stringHtmlForced; // `String.prototype.sub` method
  // https://tc39.es/ecma262/#sec-string.prototype.sub

  $$e({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod$1('sub')
  }, {
    sub: function sub() {
      return createHTML$1(this, 'sub', '', '');
    }
  });

  var $$d = _export;
  var createHTML = createHtml;
  var forcedStringHTMLMethod = stringHtmlForced; // `String.prototype.sup` method
  // https://tc39.es/ecma262/#sec-string.prototype.sup

  $$d({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('sup')
  }, {
    sup: function sup() {
      return createHTML(this, 'sup', '', '');
    }
  });

  var typedArrayConstructor = {exports: {}};

  /* eslint-disable no-new -- required for testing */
  var global$j = global$1E;
  var fails$b = fails$1f;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$2 = global$j.ArrayBuffer;
  var Int8Array$3 = global$j.Int8Array;
  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$b(function () {
    Int8Array$3(1);
  }) || !fails$b(function () {
    new Int8Array$3(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$3();
    new Int8Array$3(null);
    new Int8Array$3(1.5);
    new Int8Array$3(iterable);
  }, true) || fails$b(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
  });

  var global$i = global$1E;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$i;
  var RangeError$5 = global$i.RangeError;

  var toPositiveInteger$1 = function toPositiveInteger(it) {
    var result = toIntegerOrInfinity$1(it);
    if (result < 0) throw RangeError$5("The argument can't be less than 0");
    return result;
  };

  var global$h = global$1E;
  var toPositiveInteger = toPositiveInteger$1;
  var RangeError$4 = global$h.RangeError;

  var toOffset$2 = function toOffset(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError$4('Wrong offset');
    return offset;
  };

  var bind$2 = functionBindContext;
  var call$5 = functionCall;
  var aConstructor = aConstructor$3;
  var toObject = toObject$p;
  var lengthOfArrayLike$4 = lengthOfArrayLike$n;
  var getIterator$1 = getIterator$4;
  var getIteratorMethod$1 = getIteratorMethod$5;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom$2 = function from(source
  /* , mapfn, thisArg */
  ) {
    var C = aConstructor(this);
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$1(O);
    var i, length, result, step, iterator, next;

    if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      O = [];

      while (!(step = call$5(next, iterator)).done) {
        O.push(step.value);
      }
    }

    if (mapping && argumentsLength > 2) {
      mapfn = bind$2(mapfn, arguments[2]);
    }

    length = lengthOfArrayLike$4(O);
    result = new (aTypedArrayConstructor$3(C))(length);

    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $$c = _export;
  var global$g = global$1E;
  var call$4 = functionCall;
  var DESCRIPTORS$2 = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2 = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$p = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance$5 = anInstance$a;
  var createPropertyDescriptor$3 = createPropertyDescriptor$c;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$f;
  var isIntegralNumber = isIntegralNumber$3;
  var toLength$1 = toLength$d;
  var toIndex = toIndex$2;
  var toOffset$1 = toOffset$2;
  var toPropertyKey = toPropertyKey$8;
  var hasOwn$7 = hasOwnProperty_1;
  var classof$2 = classof$i;
  var isObject$4 = isObject$z;
  var isSymbol$1 = isSymbol$6;
  var create$3 = objectCreate;
  var isPrototypeOf = objectIsPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf$1;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var typedArrayFrom$1 = typedArrayFrom$2;
  var forEach$1 = arrayIteration.forEach;
  var setSpecies = setSpecies$6;
  var definePropertyModule = objectDefineProperty;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var InternalStateModule$4 = internalState;
  var inheritIfRequired$1 = inheritIfRequired$6;
  var getInternalState$1 = InternalStateModule$4.get;
  var setInternalState$4 = InternalStateModule$4.set;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var round = Math.round;
  var RangeError$3 = global$g.RangeError;
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
  var ArrayBufferPrototype = ArrayBuffer$1.prototype;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$p.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR$1 = ArrayBufferViewCore$p.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$p.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$p.TypedArray;
  var TypedArrayPrototype$1 = ArrayBufferViewCore$p.TypedArrayPrototype;
  var aTypedArrayConstructor$2 = ArrayBufferViewCore$p.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$p.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function fromList(C, list) {
    aTypedArrayConstructor$2(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key) {
    nativeDefineProperty(it, key, {
      get: function get() {
        return getInternalState$1(this)[key];
      }
    });
  };

  var isArrayBuffer = function isArrayBuffer(it) {
    var klass;
    return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$2(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
    return isTypedArray(target) && !isSymbol$1(key) && key in target && isIntegralNumber(+key) && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor$3(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey(key);

    if (isTypedArrayIndex(target, key) && isObject$4(descriptor) && hasOwn$7(descriptor, 'value') && !hasOwn$7(descriptor, 'get') && !hasOwn$7(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!hasOwn$7(descriptor, 'writable') || descriptor.writable) && (!hasOwn$7(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }

    return nativeDefineProperty(target, key, descriptor);
  };

  if (DESCRIPTORS$2) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype$1, 'buffer');
      addGetter(TypedArrayPrototype$1, 'byteOffset');
      addGetter(TypedArrayPrototype$1, 'byteLength');
      addGetter(TypedArrayPrototype$1, 'length');
    }

    $$c({
      target: 'Object',
      stat: true,
      forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$g[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function getter(that, index) {
        var data = getInternalState$1(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function setter(that, index, value) {
        var data = getInternalState$1(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function addElement(that, index) {
        nativeDefineProperty(that, index, {
          get: function get() {
            return getter(this, index);
          },
          set: function set(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance$5(that, TypedArrayConstructorPrototype);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;

          if (!isObject$4(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$1(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset$1(offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError$3(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError$3(WRONG_LENGTH);
            } else {
              byteLength = toLength$1($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError$3(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return call$4(typedArrayFrom$1, TypedArrayConstructor, data);
          }

          setInternalState$4(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView$1(buffer)
          });

          while (index < length) {
            addElement(that, index++);
          }
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$3(TypedArrayPrototype$1);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance$5(dummy, TypedArrayConstructorPrototype);
          return inheritIfRequired$1(function () {
            if (!isObject$4(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return call$4(typedArrayFrom$1, TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach$1(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty$3(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty$3(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      createNonEnumerableProperty$3(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR$1, TypedArrayConstructor);

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty$3(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      $$c({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty$3(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty$3(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else typedArrayConstructor.exports = function () {
    /* empty */
  };

  var createTypedArrayConstructor$8 = typedArrayConstructor.exports; // `Float32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$8('Float32', function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$7 = typedArrayConstructor.exports; // `Float64Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$7('Float64', function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$6 = typedArrayConstructor.exports; // `Int8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$6('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$5 = typedArrayConstructor.exports; // `Int16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$5('Int16', function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$4 = typedArrayConstructor.exports; // `Int32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$4('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$3 = typedArrayConstructor.exports; // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$3('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor$2 = typedArrayConstructor.exports; // `Uint8ClampedArray` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$2('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  var createTypedArrayConstructor$1 = typedArrayConstructor.exports; // `Uint16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$1('Uint16', function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var createTypedArrayConstructor = typedArrayConstructor.exports; // `Uint32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor('Uint32', function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var ArrayBufferViewCore$o = arrayBufferViewCore;
  var lengthOfArrayLike$3 = lengthOfArrayLike$n;
  var toIntegerOrInfinity = toIntegerOrInfinity$i;
  var aTypedArray$m = ArrayBufferViewCore$o.aTypedArray;
  var exportTypedArrayMethod$n = ArrayBufferViewCore$o.exportTypedArrayMethod; // `%TypedArray%.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  exportTypedArrayMethod$n('at', function at(index) {
    var O = aTypedArray$m(this);
    var len = lengthOfArrayLike$3(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
  });

  var uncurryThis$d = functionUncurryThis;
  var ArrayBufferViewCore$n = arrayBufferViewCore;
  var $ArrayCopyWithin = arrayCopyWithin;
  var u$ArrayCopyWithin = uncurryThis$d($ArrayCopyWithin);
  var aTypedArray$l = ArrayBufferViewCore$n.aTypedArray;
  var exportTypedArrayMethod$m = ArrayBufferViewCore$n.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

  exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start
  /* , end */
  ) {
    return u$ArrayCopyWithin(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var ArrayBufferViewCore$m = arrayBufferViewCore;
  var $every = arrayIteration.every;
  var aTypedArray$k = ArrayBufferViewCore$m.aTypedArray;
  var exportTypedArrayMethod$l = ArrayBufferViewCore$m.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

  exportTypedArrayMethod$l('every', function every(callbackfn
  /* , thisArg */
  ) {
    return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$l = arrayBufferViewCore;
  var call$3 = functionCall;
  var $fill = arrayFill$1;
  var aTypedArray$j = ArrayBufferViewCore$l.aTypedArray;
  var exportTypedArrayMethod$k = ArrayBufferViewCore$l.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill

  exportTypedArrayMethod$k('fill', function fill(value
  /* , start, end */
  ) {
    var length = arguments.length;
    return call$3($fill, aTypedArray$j(this), value, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
  });

  var lengthOfArrayLike$2 = lengthOfArrayLike$n;

  var arrayFromConstructorAndList$1 = function arrayFromConstructorAndList(Constructor, list) {
    var index = 0;
    var length = lengthOfArrayLike$2(list);
    var result = new Constructor(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var ArrayBufferViewCore$k = arrayBufferViewCore;
  var speciesConstructor = speciesConstructor$6;
  var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore$k.TYPED_ARRAY_CONSTRUCTOR;
  var aTypedArrayConstructor$1 = ArrayBufferViewCore$k.aTypedArrayConstructor; // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create

  var typedArraySpeciesConstructor$4 = function typedArraySpeciesConstructor(originalArray) {
    return aTypedArrayConstructor$1(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
  };

  var arrayFromConstructorAndList = arrayFromConstructorAndList$1;
  var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

  var typedArrayFromSpeciesAndList = function typedArrayFromSpeciesAndList(instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor$3(instance), list);
  };

  var ArrayBufferViewCore$j = arrayBufferViewCore;
  var $filter = arrayIteration.filter;
  var fromSpeciesAndList = typedArrayFromSpeciesAndList;
  var aTypedArray$i = ArrayBufferViewCore$j.aTypedArray;
  var exportTypedArrayMethod$j = ArrayBufferViewCore$j.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

  exportTypedArrayMethod$j('filter', function filter(callbackfn
  /* , thisArg */
  ) {
    var list = $filter(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
  });

  var ArrayBufferViewCore$i = arrayBufferViewCore;
  var $find = arrayIteration.find;
  var aTypedArray$h = ArrayBufferViewCore$i.aTypedArray;
  var exportTypedArrayMethod$i = ArrayBufferViewCore$i.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

  exportTypedArrayMethod$i('find', function find(predicate
  /* , thisArg */
  ) {
    return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$h = arrayBufferViewCore;
  var $findIndex = arrayIteration.findIndex;
  var aTypedArray$g = ArrayBufferViewCore$h.aTypedArray;
  var exportTypedArrayMethod$h = ArrayBufferViewCore$h.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

  exportTypedArrayMethod$h('findIndex', function findIndex(predicate
  /* , thisArg */
  ) {
    return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$g = arrayBufferViewCore;
  var $forEach = arrayIteration.forEach;
  var aTypedArray$f = ArrayBufferViewCore$g.aTypedArray;
  var exportTypedArrayMethod$g = ArrayBufferViewCore$g.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

  exportTypedArrayMethod$g('forEach', function forEach(callbackfn
  /* , thisArg */
  ) {
    $forEach(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1 = typedArrayConstructorsRequireWrappers;
  var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;
  var typedArrayFrom = typedArrayFrom$2; // `%TypedArray%.from` method
  // https://tc39.es/ecma262/#sec-%typedarray%.from

  exportTypedArrayStaticMethod$1('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1);

  var ArrayBufferViewCore$f = arrayBufferViewCore;
  var $includes = arrayIncludes.includes;
  var aTypedArray$e = ArrayBufferViewCore$f.aTypedArray;
  var exportTypedArrayMethod$f = ArrayBufferViewCore$f.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

  exportTypedArrayMethod$f('includes', function includes(searchElement
  /* , fromIndex */
  ) {
    return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$e = arrayBufferViewCore;
  var $indexOf = arrayIncludes.indexOf;
  var aTypedArray$d = ArrayBufferViewCore$e.aTypedArray;
  var exportTypedArrayMethod$e = ArrayBufferViewCore$e.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

  exportTypedArrayMethod$e('indexOf', function indexOf(searchElement
  /* , fromIndex */
  ) {
    return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$f = global$1E;
  var fails$a = fails$1f;
  var uncurryThis$c = functionUncurryThis;
  var ArrayBufferViewCore$d = arrayBufferViewCore;
  var ArrayIterators = es_array_iterator;
  var wellKnownSymbol$3 = wellKnownSymbol$y;
  var ITERATOR$3 = wellKnownSymbol$3('iterator');
  var Uint8Array$1 = global$f.Uint8Array;
  var arrayValues = uncurryThis$c(ArrayIterators.values);
  var arrayKeys = uncurryThis$c(ArrayIterators.keys);
  var arrayEntries = uncurryThis$c(ArrayIterators.entries);
  var aTypedArray$c = ArrayBufferViewCore$d.aTypedArray;
  var exportTypedArrayMethod$d = ArrayBufferViewCore$d.exportTypedArrayMethod;
  var TypedArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype;
  var GENERIC = !fails$a(function () {
    TypedArrayPrototype[ITERATOR$3].call([1]);
  });
  var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR$3] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';

  var typedArrayValues = function values() {
    return arrayValues(aTypedArray$c(this));
  }; // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


  exportTypedArrayMethod$d('entries', function entries() {
    return arrayEntries(aTypedArray$c(this));
  }, GENERIC); // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

  exportTypedArrayMethod$d('keys', function keys() {
    return arrayKeys(aTypedArray$c(this));
  }, GENERIC); // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

  exportTypedArrayMethod$d('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  }); // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

  exportTypedArrayMethod$d(ITERATOR$3, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  });

  var ArrayBufferViewCore$c = arrayBufferViewCore;
  var uncurryThis$b = functionUncurryThis;
  var aTypedArray$b = ArrayBufferViewCore$c.aTypedArray;
  var exportTypedArrayMethod$c = ArrayBufferViewCore$c.exportTypedArrayMethod;
  var $join = uncurryThis$b([].join); // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join

  exportTypedArrayMethod$c('join', function join(separator) {
    return $join(aTypedArray$b(this), separator);
  });

  var ArrayBufferViewCore$b = arrayBufferViewCore;
  var apply$2 = functionApply$1;
  var $lastIndexOf = arrayLastIndexOf;
  var aTypedArray$a = ArrayBufferViewCore$b.aTypedArray;
  var exportTypedArrayMethod$b = ArrayBufferViewCore$b.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof

  exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement
  /* , fromIndex */
  ) {
    var length = arguments.length;
    return apply$2($lastIndexOf, aTypedArray$a(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
  });

  var ArrayBufferViewCore$a = arrayBufferViewCore;
  var $map = arrayIteration.map;
  var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;
  var aTypedArray$9 = ArrayBufferViewCore$a.aTypedArray;
  var exportTypedArrayMethod$a = ArrayBufferViewCore$a.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

  exportTypedArrayMethod$a('map', function map(mapfn
  /* , thisArg */
  ) {
    return $map(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor$2(O))(length);
    });
  });

  var ArrayBufferViewCore$9 = arrayBufferViewCore;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var aTypedArrayConstructor = ArrayBufferViewCore$9.aTypedArrayConstructor;
  var exportTypedArrayStaticMethod = ArrayBufferViewCore$9.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
  // https://tc39.es/ecma262/#sec-%typedarray%.of

  exportTypedArrayStaticMethod('of', function
    /* ...items */
  of() {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor(this))(length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

  var ArrayBufferViewCore$8 = arrayBufferViewCore;
  var $reduce = arrayReduce.left;
  var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
  var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

  exportTypedArrayMethod$9('reduce', function reduce(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduce(aTypedArray$8(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$7 = arrayBufferViewCore;
  var $reduceRight = arrayReduce.right;
  var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
  var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

  exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduceRight(aTypedArray$7(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$6 = arrayBufferViewCore;
  var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
  var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
  var floor$2 = Math.floor; // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

  exportTypedArrayMethod$7('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$6(that).length;
    var middle = floor$2(length / 2);
    var index = 0;
    var value;

    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }

    return that;
  });

  var global$e = global$1E;
  var call$2 = functionCall;
  var ArrayBufferViewCore$5 = arrayBufferViewCore;
  var lengthOfArrayLike$1 = lengthOfArrayLike$n;
  var toOffset = toOffset$2;
  var toIndexedObject = toObject$p;
  var fails$9 = fails$1f;
  var RangeError$2 = global$e.RangeError;
  var Int8Array$2 = global$e.Int8Array;
  var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
  var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
  var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
  var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
  var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails$9(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    call$2($set, array, {
      length: 1,
      0: 3
    }, 1);
    return array[1] !== 3;
  }); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other

  var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$5.NATIVE_ARRAY_BUFFER_VIEWS && fails$9(function () {
    var array = new Int8Array$2(2);
    array.set(1);
    array.set('2', 1);
    return array[0] !== 0 || array[1] !== 2;
  }); // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

  exportTypedArrayMethod$6('set', function set(arrayLike
  /* , offset */
  ) {
    aTypedArray$5(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toIndexedObject(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call$2($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike$1(src);
    var index = 0;
    if (len + offset > length) throw RangeError$2('Wrong length');

    while (index < len) {
      this[offset + index] = src[index++];
    }
  }, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

  var ArrayBufferViewCore$4 = arrayBufferViewCore;
  var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
  var fails$8 = fails$1f;
  var arraySlice$3 = arraySlice$b;
  var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
  var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;
  var FORCED$2 = fails$8(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  }); // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

  exportTypedArrayMethod$5('slice', function slice(start, end) {
    var list = arraySlice$3(aTypedArray$4(this), start, end);
    var C = typedArraySpeciesConstructor$1(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  }, FORCED$2);

  var ArrayBufferViewCore$3 = arrayBufferViewCore;
  var $some = arrayIteration.some;
  var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
  var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

  exportTypedArrayMethod$4('some', function some(callbackfn
  /* , thisArg */
  ) {
    return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$d = global$1E;
  var uncurryThis$a = functionUncurryThis;
  var fails$7 = fails$1f;
  var aCallable$1 = aCallable$g;
  var internalSort = arraySort$1;
  var ArrayBufferViewCore$2 = arrayBufferViewCore;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var Array$1 = global$d.Array;
  var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
  var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
  var Uint16Array = global$d.Uint16Array;
  var un$Sort = Uint16Array && uncurryThis$a(Uint16Array.prototype.sort); // WebKit

  var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails$7(function () {
    un$Sort(new Uint16Array(2), null);
  }) && fails$7(function () {
    un$Sort(new Uint16Array(2), {});
  }));
  var STABLE_SORT = !!un$Sort && !fails$7(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;
    var array = new Uint16Array(516);
    var expected = Array$1(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    un$Sort(array, function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function getSortCompare(comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

      if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  }; // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


  exportTypedArrayMethod$3('sort', function sort(comparefn) {
    if (comparefn !== undefined) aCallable$1(comparefn);
    if (STABLE_SORT) return un$Sort(this, comparefn);
    return internalSort(aTypedArray$2(this), getSortCompare(comparefn));
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var toLength = toLength$d;
  var toAbsoluteIndex = toAbsoluteIndex$9;
  var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;
  var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
  var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray

  exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
    var O = aTypedArray$1(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor(O);
    return new C(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
  });

  var global$c = global$1E;
  var apply$1 = functionApply$1;
  var ArrayBufferViewCore = arrayBufferViewCore;
  var fails$6 = fails$1f;
  var arraySlice$2 = arraySlice$b;
  var Int8Array$1 = global$c.Int8Array;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString; // iOS Safari 6.x fails here

  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$6(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });
  var FORCED$1 = fails$6(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails$6(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  }); // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

  exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
    return apply$1($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice$2(aTypedArray(this)) : aTypedArray(this), arraySlice$2(arguments));
  }, FORCED$1);

  var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
  var fails$5 = fails$1f;
  var global$b = global$1E;
  var uncurryThis$9 = functionUncurryThis;
  var Uint8Array = global$b.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
  var arrayToString = [].toString;
  var join$3 = uncurryThis$9([].join);

  if (fails$5(function () {
    arrayToString.call({});
  })) {
    arrayToString = function toString() {
      return join$3(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

  exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var $$b = _export;
  var uncurryThis$8 = functionUncurryThis;
  var toString$2 = toString$u;
  var fromCharCode$2 = String.fromCharCode;
  var charAt$4 = uncurryThis$8(''.charAt);
  var exec$3 = uncurryThis$8(/./.exec);
  var stringSlice$2 = uncurryThis$8(''.slice);
  var hex2 = /^[\da-f]{2}$/i;
  var hex4 = /^[\da-f]{4}$/i; // `unescape` method
  // https://tc39.es/ecma262/#sec-unescape-string

  $$b({
    global: true
  }, {
    unescape: function unescape(string) {
      var str = toString$2(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, part;

      while (index < length) {
        chr = charAt$4(str, index++);

        if (chr === '%') {
          if (charAt$4(str, index) === 'u') {
            part = stringSlice$2(str, index + 1, index + 5);

            if (exec$3(hex4, part)) {
              result += fromCharCode$2(parseInt(part, 16));
              index += 5;
              continue;
            }
          } else {
            part = stringSlice$2(str, index, index + 2);

            if (exec$3(hex2, part)) {
              result += fromCharCode$2(parseInt(part, 16));
              index += 2;
              continue;
            }
          }
        }

        result += chr;
      }

      return result;
    }
  });

  var uncurryThis$7 = functionUncurryThis;
  var redefineAll$2 = redefineAll$6;
  var getWeakData = internalMetadata.exports.getWeakData;
  var anObject$3 = anObject$C;
  var isObject$3 = isObject$z;
  var anInstance$4 = anInstance$a;
  var iterate$1 = iterate$9;
  var ArrayIterationModule = arrayIteration;
  var hasOwn$6 = hasOwnProperty_1;
  var InternalStateModule$3 = internalState;
  var setInternalState$3 = InternalStateModule$3.set;
  var internalStateGetterFor = InternalStateModule$3.getterFor;
  var find$2 = ArrayIterationModule.find;
  var findIndex = ArrayIterationModule.findIndex;
  var splice$1 = uncurryThis$7([].splice);
  var id$1 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find$2(store.entries, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) splice$1(this.entries, index, 1);
      return !!~index;
    }
  };
  var collectionWeak$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$4(that, Prototype);
        setInternalState$3(that, {
          type: CONSTRUCTOR_NAME,
          id: id$1++,
          frozen: undefined
        });
        if (iterable != undefined) iterate$1(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject$3(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };

      redefineAll$2(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function _delete(key) {
          var state = getInternalState(this);
          if (!isObject$3(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwn$6(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$3(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwn$6(data, state.id);
        }
      });
      redefineAll$2(Prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);

          if (isObject$3(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return Constructor;
    }
  };

  var global$a = global$1E;
  var uncurryThis$6 = functionUncurryThis;
  var redefineAll$1 = redefineAll$6;
  var InternalMetadataModule = internalMetadata.exports;
  var collection$1 = collection$4;
  var collectionWeak$1 = collectionWeak$2;
  var isObject$2 = isObject$z;
  var isExtensible = objectIsExtensible;
  var enforceInternalState = internalState.enforce;
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var IS_IE11 = !global$a.ActiveXObject && 'ActiveXObject' in global$a;
  var InternalWeakMap;

  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }; // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor


  var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1); // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485

  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = uncurryThis$6(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis$6(WeakMapPrototype.has);
    var nativeGet = uncurryThis$6(WeakMapPrototype.get);
    var nativeSet = uncurryThis$6(WeakMapPrototype.set);
    redefineAll$1(WeakMapPrototype, {
      'delete': function _delete(key) {
        if (isObject$2(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }

        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject$2(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }

        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject$2(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }

        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject$2(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else nativeSet(this, key, value);

        return this;
      }
    });
  }

  var collection = collection$4;
  var collectionWeak = collectionWeak$2; // `WeakSet` constructor
  // https://tc39.es/ecma262/#sec-weakset-constructor

  collection('WeakSet', function (init) {
    return function WeakSet() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionWeak);

  var itoc$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var ctoi$1 = {};

  for (var index = 0; index < 66; index++) {
    ctoi$1[itoc$1.charAt(index)] = index;
  }

  var base64Map = {
    itoc: itoc$1,
    ctoi: ctoi$1
  };

  var $$a = _export;
  var getBuiltIn$5 = getBuiltIn$l;
  var uncurryThis$5 = functionUncurryThis;
  var fails$4 = fails$1f;
  var toString$1 = toString$u;
  var hasOwn$5 = hasOwnProperty_1;
  var validateArgumentsLength$6 = validateArgumentsLength$8;
  var ctoi = base64Map.ctoi;
  var disallowed = /[^\d+/a-z]/i;
  var whitespaces = /[\t\n\f\r ]+/g;
  var finalEq = /[=]+$/;
  var $atob = getBuiltIn$5('atob');
  var fromCharCode$1 = String.fromCharCode;
  var charAt$3 = uncurryThis$5(''.charAt);
  var replace$3 = uncurryThis$5(''.replace);
  var exec$2 = uncurryThis$5(disallowed.exec);
  var NO_SPACES_IGNORE = fails$4(function () {
    return atob(' ') !== '';
  });
  var NO_ARG_RECEIVING_CHECK$1 = !NO_SPACES_IGNORE && !fails$4(function () {
    $atob();
  }); // `atob` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob

  $$a({
    global: true,
    enumerable: true,
    forced: NO_SPACES_IGNORE || NO_ARG_RECEIVING_CHECK$1
  }, {
    atob: function atob(data) {
      validateArgumentsLength$6(arguments.length, 1);
      if (NO_ARG_RECEIVING_CHECK$1) return $atob(data);
      var string = replace$3(toString$1(data), whitespaces, '');
      var output = '';
      var position = 0;
      var bc = 0;
      var chr, bs;

      if (string.length % 4 == 0) {
        string = replace$3(string, finalEq, '');
      }

      if (string.length % 4 == 1 || exec$2(disallowed, string)) {
        throw new (getBuiltIn$5('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
      }

      while (chr = charAt$3(string, position++)) {
        if (hasOwn$5(ctoi, chr)) {
          bs = bc % 4 ? bs * 64 + ctoi[chr] : ctoi[chr];
          if (bc++ % 4) output += fromCharCode$1(255 & bs >> (-2 * bc & 6));
        }
      }

      return output;
    }
  });

  var $$9 = _export;
  var getBuiltIn$4 = getBuiltIn$l;
  var uncurryThis$4 = functionUncurryThis;
  var fails$3 = fails$1f;
  var toString = toString$u;
  var validateArgumentsLength$5 = validateArgumentsLength$8;
  var itoc = base64Map.itoc;
  var $btoa = getBuiltIn$4('btoa');
  var charAt$2 = uncurryThis$4(''.charAt);
  var charCodeAt$1 = uncurryThis$4(''.charCodeAt);
  var NO_ARG_RECEIVING_CHECK = !!$btoa && !fails$3(function () {
    $btoa();
  }); // `btoa` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa

  $$9({
    global: true,
    enumerable: true,
    forced: NO_ARG_RECEIVING_CHECK
  }, {
    btoa: function btoa(data) {
      validateArgumentsLength$5(arguments.length, 1);
      if (NO_ARG_RECEIVING_CHECK) return $btoa(data);
      var string = toString(data);
      var output = '';
      var position = 0;
      var map = itoc;
      var block, charCode;

      while (charAt$2(string, position) || (map = '=', position % 1)) {
        charCode = charCodeAt$1(string, position += 3 / 4);

        if (charCode > 0xFF) {
          throw new (getBuiltIn$4('DOMException'))('The string contains characters outside of the Latin1 range', 'InvalidCharacterError');
        }

        block = block << 8 | charCode;
        output += charAt$2(map, 63 & block >> 8 - position % 1 * 8);
      }

      return output;
    }
  });

  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var documentCreateElement = documentCreateElement$2;
  var classList$1 = documentCreateElement('span').classList;
  var DOMTokenListPrototype$2 = classList$1 && classList$1.constructor && classList$1.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

  var global$9 = global$1E;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$f;

  var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$2(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    if (DOMIterables$1[COLLECTION_NAME$1]) {
      handlePrototype$1(global$9[COLLECTION_NAME$1] && global$9[COLLECTION_NAME$1].prototype);
    }
  }

  handlePrototype$1(DOMTokenListPrototype$1);

  var global$8 = global$1E;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$f;
  var wellKnownSymbol$2 = wellKnownSymbol$y;
  var ITERATOR$2 = wellKnownSymbol$2('iterator');
  var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
        createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$2] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$8[COLLECTION_NAME] && global$8[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var IS_NODE$1 = engineIsNode;

  var tryNodeRequire$1 = function tryNodeRequire(name) {
    try {
      // eslint-disable-next-line no-new-func -- safe
      if (IS_NODE$1) return Function('return require("' + name + '")')();
    } catch (error) {
      /* empty */
    }
  };

  var domExceptionConstants = {
    IndexSizeError: {
      s: 'INDEX_SIZE_ERR',
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: 'DOMSTRING_SIZE_ERR',
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: 'HIERARCHY_REQUEST_ERR',
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: 'WRONG_DOCUMENT_ERR',
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: 'INVALID_CHARACTER_ERR',
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: 'NO_DATA_ALLOWED_ERR',
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: 'NO_MODIFICATION_ALLOWED_ERR',
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: 'NOT_FOUND_ERR',
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: 'NOT_SUPPORTED_ERR',
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: 'INUSE_ATTRIBUTE_ERR',
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: 'INVALID_STATE_ERR',
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: 'SYNTAX_ERR',
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: 'INVALID_MODIFICATION_ERR',
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: 'NAMESPACE_ERR',
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: 'INVALID_ACCESS_ERR',
      c: 15,
      m: 1
    },
    ValidationError: {
      s: 'VALIDATION_ERR',
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: 'TYPE_MISMATCH_ERR',
      c: 17,
      m: 1
    },
    SecurityError: {
      s: 'SECURITY_ERR',
      c: 18,
      m: 1
    },
    NetworkError: {
      s: 'NETWORK_ERR',
      c: 19,
      m: 1
    },
    AbortError: {
      s: 'ABORT_ERR',
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: 'URL_MISMATCH_ERR',
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: 'QUOTA_EXCEEDED_ERR',
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: 'TIMEOUT_ERR',
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: 'INVALID_NODE_TYPE_ERR',
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: 'DATA_CLONE_ERR',
      c: 25,
      m: 1
    }
  };

  var $$8 = _export;
  var tryNodeRequire = tryNodeRequire$1;
  var getBuiltIn$3 = getBuiltIn$l;
  var fails$2 = fails$1f;
  var create$2 = objectCreate;
  var createPropertyDescriptor$2 = createPropertyDescriptor$c;
  var defineProperty$1 = objectDefineProperty.f;
  var defineProperties$1 = objectDefineProperties.f;
  var redefine$2 = redefine$l.exports;
  var hasOwn$4 = hasOwnProperty_1;
  var anInstance$3 = anInstance$a;
  var anObject$2 = anObject$C;
  var errorToString = errorToString$2;
  var normalizeStringArgument$1 = normalizeStringArgument$5;
  var DOMExceptionConstants$1 = domExceptionConstants;
  var clearErrorStack$1 = clearErrorStack$4;
  var InternalStateModule$2 = internalState;
  var DESCRIPTORS$1 = descriptors;
  var DOM_EXCEPTION$2 = 'DOMException';
  var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
  var Error$3 = getBuiltIn$3('Error'); // NodeJS < 17.0 does not expose `DOMException` to global

  var NativeDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2) || function () {
    try {
      // NodeJS < 15.0 does not expose `MessageChannel` to global
      var MessageChannel = getBuiltIn$3('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel; // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe

      new MessageChannel().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;
    }
  }();

  var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
  var ErrorPrototype = Error$3.prototype;
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState = InternalStateModule$2.getterFor(DOM_EXCEPTION$2);
  var HAS_STACK = ('stack' in Error$3(DOM_EXCEPTION$2));

  var codeFor = function codeFor(name) {
    return hasOwn$4(DOMExceptionConstants$1, name) && DOMExceptionConstants$1[name].m ? DOMExceptionConstants$1[name].c : 0;
  };

  var $DOMException$1 = function DOMException() {
    anInstance$3(this, DOMExceptionPrototype$1);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument$1(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument$1(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState$2(this, {
      type: DOM_EXCEPTION$2,
      name: name,
      message: message,
      code: code
    });

    if (!DESCRIPTORS$1) {
      this.name = name;
      this.message = message;
      this.code = code;
    }

    if (HAS_STACK) {
      var error = Error$3(message);
      error.name = DOM_EXCEPTION$2;
      defineProperty$1(this, 'stack', createPropertyDescriptor$2(1, clearErrorStack$1(error.stack, 1)));
    }
  };

  var DOMExceptionPrototype$1 = $DOMException$1.prototype = create$2(ErrorPrototype);

  var createGetterDescriptor = function createGetterDescriptor(get) {
    return {
      enumerable: true,
      configurable: true,
      get: get
    };
  };

  var getterFor = function getterFor(key) {
    return createGetterDescriptor(function () {
      return getInternalState(this)[key];
    });
  };

  if (DESCRIPTORS$1) defineProperties$1(DOMExceptionPrototype$1, {
    name: getterFor('name'),
    message: getterFor('message'),
    code: getterFor('code')
  });
  defineProperty$1(DOMExceptionPrototype$1, 'constructor', createPropertyDescriptor$2(1, $DOMException$1)); // FF36- DOMException is a function, but can't be constructed

  var INCORRECT_CONSTRUCTOR = fails$2(function () {
    return !(new NativeDOMException$1() instanceof Error$3);
  }); // Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs

  var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails$2(function () {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== '2: 1';
  }); // Deno 1.6.3- DOMException.prototype.code just missed

  var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails$2(function () {
    return new NativeDOMException$1(1, 'DataCloneError').code !== 25;
  }); // Deno 1.6.3- DOMException constants just missed

  INCORRECT_CONSTRUCTOR || NativeDOMException$1[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
  var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR; // `DOMException` constructor
  // https://webidl.spec.whatwg.org/#idl-DOMException

  $$8({
    global: true,
    forced: FORCED_CONSTRUCTOR$1
  }, {
    DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
  });
  var PolyfilledDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2);
  var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;

  if (INCORRECT_TO_STRING && (NativeDOMException$1 === PolyfilledDOMException$1)) {
    redefine$2(PolyfilledDOMExceptionPrototype$1, 'toString', errorToString);
  }

  if (INCORRECT_CODE && DESCRIPTORS$1 && NativeDOMException$1 === PolyfilledDOMException$1) {
    defineProperty$1(PolyfilledDOMExceptionPrototype$1, 'code', createGetterDescriptor(function () {
      return codeFor(anObject$2(this).name);
    }));
  }

  for (var key$1 in DOMExceptionConstants$1) {
    if (hasOwn$4(DOMExceptionConstants$1, key$1)) {
      var constant$4 = DOMExceptionConstants$1[key$1];
      var constantName$1 = constant$4.s;
      var descriptor = createPropertyDescriptor$2(6, constant$4.c);

      if (!hasOwn$4(PolyfilledDOMException$1, constantName$1)) {
        defineProperty$1(PolyfilledDOMException$1, constantName$1, descriptor);
      }

      if (!hasOwn$4(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
        defineProperty$1(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor);
      }
    }
  }

  var $$7 = _export;
  var getBuiltIn$2 = getBuiltIn$l;
  var createPropertyDescriptor$1 = createPropertyDescriptor$c;
  var defineProperty = objectDefineProperty.f;
  var hasOwn$3 = hasOwnProperty_1;
  var anInstance$2 = anInstance$a;
  var inheritIfRequired = inheritIfRequired$6;
  var normalizeStringArgument = normalizeStringArgument$5;
  var DOMExceptionConstants = domExceptionConstants;
  var clearErrorStack = clearErrorStack$4;
  var DOM_EXCEPTION$1 = 'DOMException';
  var Error$2 = getBuiltIn$2('Error');
  var NativeDOMException = getBuiltIn$2(DOM_EXCEPTION$1);

  var $DOMException = function DOMException() {
    anInstance$2(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = Error$2(message);
    error.name = DOM_EXCEPTION$1;
    defineProperty(that, 'stack', createPropertyDescriptor$1(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };

  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = ('stack' in Error$2(DOM_EXCEPTION$1));
  var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK; // `DOMException` constructor patch for `.stack` where it's required
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness

  $$7({
    global: true,
    forced: FORCED_CONSTRUCTOR
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn$2(DOM_EXCEPTION$1);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    {
      defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$1(1, PolyfilledDOMException));
    }

    for (var key in DOMExceptionConstants) {
      if (hasOwn$3(DOMExceptionConstants, key)) {
        var constant$3 = DOMExceptionConstants[key];
        var constantName = constant$3.s;

        if (!hasOwn$3(PolyfilledDOMException, constantName)) {
          defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor$1(6, constant$3.c));
        }
      }
    }
  }

  var getBuiltIn$1 = getBuiltIn$l;
  var setToStringTag$2 = setToStringTag$c;
  var DOM_EXCEPTION = 'DOMException';
  setToStringTag$2(getBuiltIn$1(DOM_EXCEPTION), DOM_EXCEPTION);

  var $$6 = _export;
  var global$7 = global$1E;
  var task = task$2;
  var FORCED = !global$7.setImmediate || !global$7.clearImmediate; // http://w3c.github.io/setImmediate/

  $$6({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
  }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
  });

  var $$5 = _export;
  var global$6 = global$1E;
  var microtask = microtask$2;
  var aCallable = aCallable$g;
  var validateArgumentsLength$4 = validateArgumentsLength$8;
  var IS_NODE = engineIsNode;
  var process = global$6.process; // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask

  $$5({
    global: true,
    enumerable: true,
    noTargetGet: true
  }, {
    queueMicrotask: function queueMicrotask(fn) {
      validateArgumentsLength$4(arguments.length, 1);
      aCallable(fn);
      var domain = IS_NODE && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

  var $$4 = _export;
  var global$5 = global$1E;
  var getBuiltin = getBuiltIn$l;
  var uncurryThis$3 = functionUncurryThis;
  var fails$1 = fails$1f;
  var uid = uid$6;
  var isCallable$2 = isCallable$v;
  var isConstructor = isConstructor$6;
  var isObject$1 = isObject$z;
  var isSymbol = isSymbol$6;
  var iterate = iterate$9;
  var anObject$1 = anObject$C;
  var classof$1 = classof$i;
  var hasOwn$2 = hasOwnProperty_1;
  var createProperty = createProperty$9;
  var createNonEnumerableProperty = createNonEnumerableProperty$f;
  var lengthOfArrayLike = lengthOfArrayLike$n;
  var validateArgumentsLength$3 = validateArgumentsLength$8;
  var regExpFlags = regexpFlags$1;
  var ERROR_STACK_INSTALLABLE = errorStackInstallable;
  var Object$1 = global$5.Object;
  var Date$1 = global$5.Date;
  var Error$1 = global$5.Error;
  var EvalError = global$5.EvalError;
  var RangeError$1 = global$5.RangeError;
  var ReferenceError = global$5.ReferenceError;
  var SyntaxError = global$5.SyntaxError;
  var TypeError$3 = global$5.TypeError;
  var URIError = global$5.URIError;
  var PerformanceMark = global$5.PerformanceMark;
  var WebAssembly = global$5.WebAssembly;
  var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
  var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
  var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
  var DOMException = getBuiltin('DOMException');
  var Set = getBuiltin('Set');
  var Map$1 = getBuiltin('Map');
  var MapPrototype = Map$1.prototype;
  var mapHas = uncurryThis$3(MapPrototype.has);
  var mapGet = uncurryThis$3(MapPrototype.get);
  var mapSet = uncurryThis$3(MapPrototype.set);
  var setAdd = uncurryThis$3(Set.prototype.add);
  var objectKeys = getBuiltin('Object', 'keys');
  var push$3 = uncurryThis$3([].push);
  var booleanValueOf = uncurryThis$3(true.valueOf);
  var numberValueOf = uncurryThis$3(1.0.valueOf);
  var stringValueOf = uncurryThis$3(''.valueOf);
  var getFlags = uncurryThis$3(regExpFlags);
  var getTime = uncurryThis$3(Date$1.prototype.getTime);
  var PERFORMANCE_MARK = uid('structuredClone');
  var DATA_CLONE_ERROR = 'DataCloneError';
  var TRANSFERRING = 'Transferring';

  var checkBasicSemantic = function checkBasicSemantic(structuredCloneImplementation) {
    return !fails$1(function () {
      var set1 = new global$5.Set([7]);
      var set2 = structuredCloneImplementation(set1);
      var number = structuredCloneImplementation(Object$1(7));
      return set2 == set1 || !set2.has(7) || _typeof(number) != 'object' || number != 7;
    }) && structuredCloneImplementation;
  }; // https://github.com/whatwg/html/pull/5749


  var checkNewErrorsSemantic = function checkNewErrorsSemantic(structuredCloneImplementation) {
    return !fails$1(function () {
      var test = structuredCloneImplementation(new global$5.AggregateError([1], PERFORMANCE_MARK, {
        cause: 3
      }));
      return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;
    }) && structuredCloneImplementation;
  }; // FF94+, Safari TP134+, Chrome Canary 98+, NodeJS 17.0+, Deno 1.13+
  // current FF and Safari implementations can't clone errors
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
  // no one of current implementations supports new (html/5749) error cloning semantic


  var nativeStructuredClone = global$5.structuredClone;
  var FORCED_REPLACEMENT = !checkNewErrorsSemantic(nativeStructuredClone); // Chrome 82+, Safari 14.1+, Deno 1.11+
  // Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
  // Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
  // current Safari implementation can't clone errors
  // Deno 1.2-1.10 implementations too naive
  // NodeJS 16.0+ does not have `PerformanceMark` constructor, structured cloning implementation
  //   from `performance.mark` is too naive and can't clone, for example, `RegExp` or some boxed primitives
  //   https://github.com/nodejs/node/issues/40840
  // no one of current implementations supports new (html/5749) error cloning semantic

  var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
    return new PerformanceMark(PERFORMANCE_MARK, {
      detail: value
    }).detail;
  });
  var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

  var throwUncloneable = function throwUncloneable(type) {
    throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
  };

  var throwUnpolyfillable = function throwUnpolyfillable(type, kind) {
    throw new DOMException((kind || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
  };

  var structuredCloneInternal = function structuredCloneInternal(value, map) {
    if (isSymbol(value)) throwUncloneable('Symbol');
    if (!isObject$1(value)) return value; // effectively preserves circular references

    if (map) {
      if (mapHas(map, value)) return mapGet(map, value);
    } else map = new Map$1();

    var type = classof$1(value);
    var deep = false;
    var C, name, cloned, dataTransfer, i, length, keys, key, source, target;

    switch (type) {
      case 'Array':
        cloned = [];
        deep = true;
        break;

      case 'Object':
        cloned = {};
        deep = true;
        break;

      case 'Map':
        cloned = new Map$1();
        deep = true;
        break;

      case 'Set':
        cloned = new Set();
        deep = true;
        break;

      case 'RegExp':
        // in this block because of a Safari 14.1 bug
        // old FF does not clone regexes passed to the constructor, so get the source and flags directly
        cloned = new RegExp(value.source, 'flags' in value ? value.flags : getFlags(value));
        break;

      case 'Error':
        name = value.name;

        switch (name) {
          case 'AggregateError':
            cloned = getBuiltin('AggregateError')([]);
            break;

          case 'EvalError':
            cloned = EvalError();
            break;

          case 'RangeError':
            cloned = RangeError$1();
            break;

          case 'ReferenceError':
            cloned = ReferenceError();
            break;

          case 'SyntaxError':
            cloned = SyntaxError();
            break;

          case 'TypeError':
            cloned = TypeError$3();
            break;

          case 'URIError':
            cloned = URIError();
            break;

          case 'CompileError':
            cloned = CompileError();
            break;

          case 'LinkError':
            cloned = LinkError();
            break;

          case 'RuntimeError':
            cloned = RuntimeError();
            break;

          default:
            cloned = Error$1();
        }

        deep = true;
        break;

      case 'DOMException':
        cloned = new DOMException(value.message, value.name);
        deep = true;
        break;

      case 'DataView':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'BigInt64Array':
      case 'BigUint64Array':
        C = global$5[type]; // in some old engines like Safari 9, typeof C is 'object'
        // on Uint8ClampedArray or some other constructors

        if (!isObject$1(C)) throwUnpolyfillable(type);
        cloned = new C( // this is safe, since arraybuffer cannot have circular references
        structuredCloneInternal(value.buffer, map), value.byteOffset, type === 'DataView' ? value.byteLength : value.length);
        break;

      case 'DOMQuad':
        try {
          cloned = new DOMQuad(structuredCloneInternal(value.p1, map), structuredCloneInternal(value.p2, map), structuredCloneInternal(value.p3, map), structuredCloneInternal(value.p4, map));
        } catch (error) {
          if (nativeRestrictedStructuredClone) {
            cloned = nativeRestrictedStructuredClone(value);
          } else throwUnpolyfillable(type);
        }

        break;

      case 'FileList':
        C = global$5.DataTransfer;

        if (isConstructor(C)) {
          dataTransfer = new C();

          for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
            dataTransfer.items.add(structuredCloneInternal(value[i], map));
          }

          cloned = dataTransfer.files;
        } else if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);

        break;

      case 'ImageData':
        // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
        try {
          cloned = new ImageData(structuredCloneInternal(value.data, map), value.width, value.height, {
            colorSpace: value.colorSpace
          });
        } catch (error) {
          if (nativeRestrictedStructuredClone) {
            cloned = nativeRestrictedStructuredClone(value);
          } else throwUnpolyfillable(type);
        }

        break;

      default:
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else switch (type) {
          case 'BigInt':
            // can be a 3rd party polyfill
            cloned = Object$1(value.valueOf());
            break;

          case 'Boolean':
            cloned = Object$1(booleanValueOf(value));
            break;

          case 'Number':
            cloned = Object$1(numberValueOf(value));
            break;

          case 'String':
            cloned = Object$1(stringValueOf(value));
            break;

          case 'Date':
            cloned = new Date$1(getTime(value));
            break;

          case 'ArrayBuffer':
            C = global$5.DataView; // `ArrayBuffer#slice` is not available in IE10
            // `ArrayBuffer#slice` and `DataView` are not available in old FF

            if (!C && typeof value.slice != 'function') throwUnpolyfillable(type); // detached buffers throws in `DataView` and `.slice`

            try {
              if (typeof value.slice == 'function') {
                cloned = value.slice(0);
              } else {
                length = value.byteLength;
                cloned = new ArrayBuffer(length);
                source = new C(value);
                target = new C(cloned);

                for (i = 0; i < length; i++) {
                  target.setUint8(i, source.getUint8(i));
                }
              }
            } catch (error) {
              throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
            }

            break;

          case 'SharedArrayBuffer':
            // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
            cloned = value;
            break;

          case 'Blob':
            try {
              cloned = value.slice(0, value.size, value.type);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMPoint':
          case 'DOMPointReadOnly':
            C = global$5[type];

            try {
              cloned = C.fromPoint ? C.fromPoint(value) : new C(value.x, value.y, value.z, value.w);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMRect':
          case 'DOMRectReadOnly':
            C = global$5[type];

            try {
              cloned = C.fromRect ? C.fromRect(value) : new C(value.x, value.y, value.width, value.height);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMMatrix':
          case 'DOMMatrixReadOnly':
            C = global$5[type];

            try {
              cloned = C.fromMatrix ? C.fromMatrix(value) : new C(value);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'AudioData':
          case 'VideoFrame':
            if (!isCallable$2(value.clone)) throwUnpolyfillable(type);

            try {
              cloned = value.clone();
            } catch (error) {
              throwUncloneable(type);
            }

            break;

          case 'File':
            try {
              cloned = new File([value], value.name, value);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'CryptoKey':
          case 'GPUCompilationMessage':
          case 'GPUCompilationInfo':
          case 'ImageBitmap':
          case 'RTCCertificate':
          case 'WebAssembly.Module':
            throwUnpolyfillable(type);
          // break omitted

          default:
            throwUncloneable(type);
        }

    }

    mapSet(map, value, cloned);
    if (deep) switch (type) {
      case 'Array':
      case 'Object':
        keys = objectKeys(value);

        for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
          key = keys[i];
          createProperty(cloned, key, structuredCloneInternal(value[key], map));
        }

        break;

      case 'Map':
        value.forEach(function (v, k) {
          mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
        });
        break;

      case 'Set':
        value.forEach(function (v) {
          setAdd(cloned, structuredCloneInternal(v, map));
        });
        break;

      case 'Error':
        createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));

        if (hasOwn$2(value, 'cause')) {
          createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
        }

        if (name == 'AggregateError') {
          cloned.errors = structuredCloneInternal(value.errors, map);
        }

      // break omitted

      case 'DOMException':
        if (ERROR_STACK_INSTALLABLE) {
          createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
        }

    }
    return cloned;
  };

  var PROPER_TRANSFER = nativeStructuredClone && !fails$1(function () {
    var buffer = new ArrayBuffer(8);
    var clone = nativeStructuredClone(buffer, {
      transfer: [buffer]
    });
    return buffer.byteLength != 0 || clone.byteLength != 8;
  });

  var tryToTransfer = function tryToTransfer(rawTransfer, map) {
    if (!isObject$1(rawTransfer)) throw TypeError$3('Transfer option cannot be converted to a sequence');
    var transfer = [];
    iterate(rawTransfer, function (value) {
      push$3(transfer, anObject$1(value));
    });
    var i = 0;
    var length = lengthOfArrayLike(transfer);
    var value, type, C, transferredArray, transferred, canvas, context;

    if (PROPER_TRANSFER) {
      transferredArray = nativeStructuredClone(transfer, {
        transfer: transfer
      });

      while (i < length) {
        mapSet(map, transfer[i], transferredArray[i++]);
      }
    } else while (i < length) {
      value = transfer[i++];
      if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
      type = classof$1(value);

      switch (type) {
        case 'ImageBitmap':
          C = global$5.OffscreenCanvas;
          if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);

          try {
            canvas = new C(value.width, value.height);
            context = canvas.getContext('bitmaprenderer');
            context.transferFromImageBitmap(value);
            transferred = canvas.transferToImageBitmap();
          } catch (error) {
            /* empty */
          }

          break;

        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable$2(value.clone) || !isCallable$2(value.close)) throwUnpolyfillable(type, TRANSFERRING);

          try {
            transferred = value.clone();
            value.close();
          } catch (error) {
            /* empty */
          }

          break;

        case 'ArrayBuffer':
        case 'MessagePort':
        case 'OffscreenCanvas':
        case 'ReadableStream':
        case 'TransformStream':
        case 'WritableStream':
          throwUnpolyfillable(type, TRANSFERRING);
      }

      if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);
      mapSet(map, value, transferred);
    }
  };

  $$4({
    global: true,
    enumerable: true,
    sham: !PROPER_TRANSFER,
    forced: FORCED_REPLACEMENT
  }, {
    structuredClone: function structuredClone(value
    /* , { transfer } */
    ) {
      var options = validateArgumentsLength$3(arguments.length, 1) > 1 ? anObject$1(arguments[1]) : undefined;
      var transfer = options ? options.transfer : undefined;
      var map;

      if (transfer !== undefined) {
        map = new Map$1();
        tryToTransfer(transfer, map);
      }

      return structuredCloneInternal(value, map);
    }
  });

  var $$3 = _export;
  var global$4 = global$1E;
  var apply = functionApply$1;
  var isCallable$1 = isCallable$v;
  var userAgent = engineUserAgent;
  var arraySlice$1 = arraySlice$b;
  var validateArgumentsLength$2 = validateArgumentsLength$8;
  var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

  var Function$1 = global$4.Function;

  var wrap = function wrap(scheduler) {
    return function (handler, timeout
    /* , ...arguments */
    ) {
      var boundArgs = validateArgumentsLength$2(arguments.length, 1) > 2;
      var fn = isCallable$1(handler) ? handler : Function$1(handler);
      var args = boundArgs ? arraySlice$1(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        apply(fn, this, args);
      } : fn, timeout);
    };
  }; // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


  $$3({
    global: true,
    bind: true,
    forced: MSIE
  }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global$4.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global$4.setInterval)
  });

  var fails = fails$1f;
  var wellKnownSymbol$1 = wellKnownSymbol$y;
  var IS_PURE = isPure;
  var ITERATOR$1 = wellKnownSymbol$1('iterator');
  var nativeUrl = !fails(function () {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
    || result !== 'a1c3' // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });

  var global$3 = global$1E;
  var uncurryThis$2 = functionUncurryThis;
  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var RangeError = global$3.RangeError;
  var exec$1 = uncurryThis$2(regexSeparators.exec);
  var floor$1 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt = uncurryThis$2(''.charCodeAt);
  var join$2 = uncurryThis$2([].join);
  var push$2 = uncurryThis$2([].push);
  var replace$2 = uncurryThis$2(''.replace);
  var split$2 = uncurryThis$2(''.split);
  var toLowerCase$1 = uncurryThis$2(''.toLowerCase);
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */

  var ucs2decode = function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = charCodeAt(string, counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt(string, counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$2(output, value);
          counter--;
        }
      } else {
        push$2(output, value);
      }
    }

    return output;
  };
  /**
   * Converts a digit/integer into a basic code point.
   */


  var digitToBasic = function digitToBasic(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$1(delta / damp) : delta >> 1;
    delta += floor$1(delta / numPoints);

    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$1(delta / baseMinusTMin);
      k += base;
    }

    return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue; // Handle the basic code points.

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < 0x80) {
        push$2(output, fromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.

    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      push$2(output, delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue < n && ++delta > maxInt) {
          throw RangeError(OVERFLOW_ERROR);
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;

          while (true) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$1(qMinusT / baseMinusT);
            k += base;
          }

          push$2(output, fromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          handledCPCount++;
        }
      }

      delta++;
      n++;
    }

    return join$2(output, '');
  };

  var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
    var encoded = [];
    var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, "."), '.');
    var i, label;

    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }

    return join$2(encoded, '.');
  };

  var $$2 = _export;
  var global$2 = global$1E;
  var getBuiltIn = getBuiltIn$l;
  var call$1 = functionCall;
  var uncurryThis$1 = functionUncurryThis;
  var USE_NATIVE_URL$1 = nativeUrl;
  var redefine$1 = redefine$l.exports;
  var redefineAll = redefineAll$6;
  var setToStringTag$1 = setToStringTag$c;
  var createIteratorConstructor = createIteratorConstructor$3;
  var InternalStateModule$1 = internalState;
  var anInstance$1 = anInstance$a;
  var isCallable = isCallable$v;
  var hasOwn$1 = hasOwnProperty_1;
  var bind$1 = functionBindContext;
  var classof = classof$i;
  var anObject = anObject$C;
  var isObject = isObject$z;
  var $toString$1 = toString$u;
  var create$1 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$c;
  var getIterator = getIterator$4;
  var getIteratorMethod = getIteratorMethod$5;
  var validateArgumentsLength$1 = validateArgumentsLength$8;
  var wellKnownSymbol = wellKnownSymbol$y;
  var arraySort = arraySort$1;
  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  var n$Fetch = getBuiltIn('fetch');
  var N$Request = getBuiltIn('Request');
  var Headers = getBuiltIn('Headers');
  var RequestPrototype = N$Request && N$Request.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global$2.RegExp;
  var TypeError$2 = global$2.TypeError;
  var decodeURIComponent = global$2.decodeURIComponent;
  var encodeURIComponent$1 = global$2.encodeURIComponent;
  var charAt$1 = uncurryThis$1(''.charAt);
  var join$1 = uncurryThis$1([].join);
  var push$1 = uncurryThis$1([].push);
  var replace$1 = uncurryThis$1(''.replace);
  var shift$1 = uncurryThis$1([].shift);
  var splice = uncurryThis$1([].splice);
  var split$1 = uncurryThis$1(''.split);
  var stringSlice$1 = uncurryThis$1(''.slice);
  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function percentSequence(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function deserialize(it) {
    var result = replace$1(it, plus, ' ');
    var bytes = 4;

    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = replace$1(result, percentSequence(bytes--), percentDecode);
      }

      return result;
    }
  };

  var find$1 = /[!'()~]|%20/g;
  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function replacer(match) {
    return replacements[match];
  };

  var _serialize = function serialize(it) {
    return replace$1(encodeURIComponent$1(it), find$1, replacer);
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$1(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;

    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    }

    return step;
  }, true);

  var URLSearchParamsState = function URLSearchParamsState(init) {
    this.entries = [];
    this.url = null;

    if (init !== undefined) {
      if (isObject(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
    }
  };

  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function bindURL(url) {
      this.url = url;
      this.update();
    },
    parseObject: function parseObject(object) {
      var iteratorMethod = getIteratorMethod(object);
      var iterator, next, step, entryIterator, entryNext, first, second;

      if (iteratorMethod) {
        iterator = getIterator(object, iteratorMethod);
        next = iterator.next;

        while (!(step = call$1(next, iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if ((first = call$1(entryNext, entryIterator)).done || (second = call$1(entryNext, entryIterator)).done || !call$1(entryNext, entryIterator).done) throw TypeError$2('Expected sequence with length 2');
          push$1(this.entries, {
            key: $toString$1(first.value),
            value: $toString$1(second.value)
          });
        }
      } else for (var key in object) {
        if (hasOwn$1(object, key)) {
          push$1(this.entries, {
            key: key,
            value: $toString$1(object[key])
          });
        }
      }
    },
    parseQuery: function parseQuery(query) {
      if (query) {
        var attributes = split$1(query, '&');
        var index = 0;
        var attribute, entry;

        while (index < attributes.length) {
          attribute = attributes[index++];

          if (attribute.length) {
            entry = split$1(attribute, '=');
            push$1(this.entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$1(entry, '='))
            });
          }
        }
      }
    },
    serialize: function serialize() {
      var entries = this.entries;
      var result = [];
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        push$1(result, _serialize(entry.key) + '=' + _serialize(entry.value));
      }

      return join$1(result, '&');
    },
    update: function update() {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function updateURL() {
      if (this.url) this.url.update();
    }
  }; // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams

  var URLSearchParamsConstructor = function
    /* init */
  URLSearchParams() {
    anInstance$1(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    setInternalState$1(this, new URLSearchParamsState(init));
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength$1(arguments.length, 2);
      var state = getInternalParamsState(this);
      push$1(state.entries, {
        key: $toString$1(name),
        value: $toString$1(value)
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function _delete(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index].key === key) splice(entries, index, 1);else index++;
      }

      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }

      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var result = [];
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$1(result, entries[index].value);
      }

      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }

      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength$1(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
      var index = 0;
      var entry;

      for (; index < entries.length; index++) {
        entry = entries[index];

        if (entry.key === key) {
          if (found) splice(entries, index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }

      if (!found) push$1(entries, {
        key: key,
        value: val
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      arraySort(state.entries, function (a, b) {
        return a.key > b.key ? 1 : -1;
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback
    /* , thisArg */
    ) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  }); // `URLSearchParams.prototype[@@iterator]` method

  redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
    name: 'entries'
  }); // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

  redefine$1(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, {
    enumerable: true
  });
  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  $$2({
    global: true,
    forced: !USE_NATIVE_URL$1
  }, {
    URLSearchParams: URLSearchParamsConstructor
  }); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

  if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
    var headersHas = uncurryThis$1(HeadersPrototype.has);
    var headersSet = uncurryThis$1(HeadersPrototype.set);

    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;

        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();

          if (!headersHas(headers, 'content-type')) {
            headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }

          return create$1(init, {
            body: createPropertyDescriptor(0, $toString$1(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      }

      return init;
    };

    if (isCallable(n$Fetch)) {
      $$2({
        global: true,
        enumerable: true,
        forced: true
      }, {
        fetch: function fetch(input
        /* , init */
        ) {
          return n$Fetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable(N$Request)) {
      var RequestConstructor = function Request(input
      /* , init */
      ) {
        anInstance$1(this, RequestPrototype);
        return new N$Request(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;
      $$2({
        global: true,
        forced: true
      }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  var $$1 = _export;
  var DESCRIPTORS = descriptors;
  var USE_NATIVE_URL = nativeUrl;
  var global$1 = global$1E;
  var bind = functionBindContext;
  var uncurryThis = functionUncurryThis;
  var defineProperties = objectDefineProperties.f;
  var redefine = redefine$l.exports;
  var anInstance = anInstance$a;
  var hasOwn = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice = arraySliceSimple;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$u;
  var setToStringTag = setToStringTag$c;
  var validateArgumentsLength = validateArgumentsLength$8;
  var URLSearchParamsModule = web_urlSearchParams;
  var InternalStateModule = internalState;
  var setInternalState = InternalStateModule.set;
  var getInternalURLState = InternalStateModule.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;
  var NativeURL = global$1.URL;
  var TypeError$1 = global$1.TypeError;
  var parseInt$1 = global$1.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt = uncurryThis(''.charAt);
  var exec = uncurryThis(/./.exec);
  var join = uncurryThis([].join);
  var numberToString = uncurryThis(1.0.toString);
  var pop = uncurryThis([].pop);
  var push = uncurryThis([].push);
  var replace = uncurryThis(''.replace);
  var shift = uncurryThis([].shift);
  var split = uncurryThis(''.split);
  var stringSlice = uncurryThis(''.slice);
  var toLowerCase = uncurryThis(''.toLowerCase);
  var unshift = uncurryThis([].unshift);
  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';
  var ALPHA = /[a-z]/i; // eslint-disable-next-line regexp/no-obscure-range -- safe

  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */

  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */

  var EOF; // https://url.spec.whatwg.org/#ipv4-number-parser

  var parseIPv4 = function parseIPv4(input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;

    if (parts.length && parts[parts.length - 1] == '') {
      parts.length--;
    }

    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];

    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;

      if (part.length > 1 && charAt(part, 0) == '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice(part, radix == 8 ? 1 : 2);
      }

      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }

      push(numbers, number);
    }

    for (index = 0; index < partsLength; index++) {
      number = numbers[index];

      if (index == partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }

    ipv4 = pop(numbers);

    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }

    return ipv4;
  }; // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO


  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function chr() {
      return charAt(input, pointer);
    };

    if (chr() == ':') {
      if (charAt(input, 1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }

    while (chr()) {
      if (pieceIndex == 8) return;

      if (chr() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }

      value = length = 0;

      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }

      if (chr() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;

        while (chr()) {
          ipv4Piece = null;

          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++;else return;
          }

          if (!exec(DIGIT, chr())) return;

          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }

          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }

        if (numbersSeen != 4) return;
        break;
      } else if (chr() == ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;

      address[pieceIndex++] = value;
    }

    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;

      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;

    return address;
  };

  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;

    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }

        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }

    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }

    return maxIndex;
  }; // https://url.spec.whatwg.org/#host-serializing


  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0; // ipv4

    if (typeof host == 'number') {
      result = [];

      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor(host / 256);
      }

      return join(result, '.'); // ipv6
    } else if (_typeof(host) == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);

      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;

        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }

      return '[' + result + ']';
    }

    return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });

  var percentEncode = function percentEncode(chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
  }; // https://url.spec.whatwg.org/#special-scheme


  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  }; // https://url.spec.whatwg.org/#windows-drive-letter

  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second;
    return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
  }; // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter


  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
  }; // https://url.spec.whatwg.org/#single-dot-path-segment


  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  }; // https://url.spec.whatwg.org/#double-dot-path-segment


  var isDoubleDot = function isDoubleDot(segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  }; // States:


  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  var URLState = function URLState(url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;

    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw TypeError$1(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw TypeError$1(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };

  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function parse(input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;
      input = $toString(input);

      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
      }

      input = replace(input, TAB_AND_NEW_LINE, '');
      codePoints = arrayFrom(input);

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];

        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;

            break;

          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
              buffer += toLowerCase(chr);
            } else if (chr == ':') {
              if (stateOverride && (url.isSpecial() != hasOwn(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
              url.scheme = buffer;

              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
                return;
              }

              buffer = '';

              if (url.scheme == 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;

            break;

          case NO_SCHEME:
            if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;

            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }

            state = base.scheme == 'file' ? FILE : RELATIVE;
            continue;

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            }

            break;

          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }

          case RELATIVE:
            url.scheme = base.scheme;

            if (chr == EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
              state = RELATIVE_SLASH;
            } else if (chr == '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.path.length--;
              state = PATH;
              continue;
            }

            break;

          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr == '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            }

            break;

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
            pointer++;
            break;

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY;
              continue;
            }

            break;

          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);

              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];

                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }

                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
              }

              buffer = '';
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;

            break;

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride == HOSTNAME) return;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (url.isSpecial() && buffer == '') return INVALID_HOST;
              if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
              buffer += chr;
            }

            break;

          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
              if (buffer != '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                buffer = '';
              }

              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;

            break;

          case FILE:
            url.scheme = 'file';
            if (chr == '/' || chr == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
              } else if (chr == '?') {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.shortenPath();
                }

                state = PATH;
                continue;
              }
            } else {
              state = PATH;
              continue;
            }
            break;

          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST;
              break;
            }

            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
            }

            state = PATH;
            continue;

          case FILE_HOST:
            if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer == '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host == 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              }

              continue;
            } else buffer += chr;

            break;

          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr != '/' && chr != '\\') continue;
            } else if (!stateOverride && chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              state = PATH;
              if (chr != '/') continue;
            }

            break;

          case PATH:
            if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();

                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else {
                if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                }

                push(url.path, buffer);
              }

              buffer = '';

              if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }

              if (chr == '?') {
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            }

            break;

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case FRAGMENT:
            if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }

        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function parseHost(input) {
      var result, codePoints, index;

      if (charAt(input, 0) == '[') {
        if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
        result = parseIPv6(stringSlice(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result; // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);

        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }

        this.host = result;
      } else {
        input = toASCII(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
      return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function includesCredentials() {
      return this.username != '' || this.password != '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function isSpecial() {
      return hasOwn(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function shortenPath() {
      var path = this.path;
      var pathSize = path.length;

      if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function serialize() {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';

      if (host !== null) {
        output += '//';

        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }

        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme == 'file') output += '//';

      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function setHref(href) {
      var failure = this.parse(href);
      if (failure) throw TypeError$1(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function getOrigin() {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme == 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme == 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function getProtocol() {
      return this.scheme + ':';
    },
    setProtocol: function setProtocol(protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function getUsername() {
      return this.username;
    },
    setUsername: function setUsername(username) {
      var codePoints = arrayFrom($toString(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function getPassword() {
      return this.password;
    },
    setPassword: function setPassword(password) {
      var codePoints = arrayFrom($toString(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function getHost() {
      var host = this.host;
      var port = this.port;
      return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
    },
    setHost: function setHost(host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function getHostname() {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function setHostname(hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function getPort() {
      var port = this.port;
      return port === null ? '' : $toString(port);
    },
    setPort: function setPort(port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = $toString(port);
      if (port == '') this.port = null;else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function getPathname() {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function setPathname(pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function getSearch() {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function setSearch(search) {
      search = $toString(search);

      if (search == '') {
        this.query = null;
      } else {
        if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }

      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function getSearchParams() {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function getHash() {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function setHash(hash) {
      hash = $toString(hash);

      if (hash == '') {
        this.fragment = null;
        return;
      }

      if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function update() {
      this.query = this.searchParams.serialize() || null;
    }
  }; // `URL` constructor
  // https://url.spec.whatwg.org/#url-class

  var URLConstructor = function URL(url
  /* , base */
  ) {
    var that = anInstance(this, URLPrototype);
    var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));

    if (!DESCRIPTORS) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: function get() {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };

  if (DESCRIPTORS) {
    defineProperties(URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: accessorDescriptor('serialize', 'setHref'),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: accessorDescriptor('getOrigin'),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: accessorDescriptor('getProtocol', 'setProtocol'),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: accessorDescriptor('getUsername', 'setUsername'),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: accessorDescriptor('getPassword', 'setPassword'),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: accessorDescriptor('getHost', 'setHost'),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: accessorDescriptor('getHostname', 'setHostname'),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: accessorDescriptor('getPort', 'setPort'),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: accessorDescriptor('getPathname', 'setPathname'),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: accessorDescriptor('getSearch', 'setSearch'),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: accessorDescriptor('getSearchParams'),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: accessorDescriptor('getHash', 'setHash')
    });
  } // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson


  redefine(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  }); // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior

  redefine(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL)); // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL

    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
  }

  setToStringTag(URLConstructor, 'URL');
  $$1({
    global: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS
  }, {
    URL: URLConstructor
  });

  var $ = _export;
  var call = functionCall; // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson

  $({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return call(URL.prototype.toString, this);
    }
  });

  var runtime = {exports: {}};

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

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

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  var noop = {
    value: function value() {}
  };

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }

    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
          i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: name
      };
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function on(typename, callback) {
      var _ = this._,
          T = parseTypenames$1(typename + "", _),
          t,
          i = -1,
          n = T.length; // If no callback was specified, return the callback of the given type and name.

      if (arguments.length < 2) {
        while (++i < n) {
          if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        }

        return;
      } // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.


      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) {
          _[t] = set$1(_[t], typename.name, null);
        }
      }

      return this;
    },
    copy: function copy() {
      var copy = {},
          _ = this._;

      for (var t in _) {
        copy[t] = _[t].slice();
      }

      return new Dispatch(copy);
    },
    call: function call(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
        args[i] = arguments[i + 2];
      }
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

      for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
        t[i].value.apply(that, args);
      }
    },
    apply: function apply(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
        t[i].value.apply(that, args);
      }
    }
  };

  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }

    if (callback != null) type.push({
      name: name,
      value: callback
    });
    return type;
  }

  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace (name) {
    var prefix = name += "",
        i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator (name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  function none() {}

  function selector (selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }

  function selection_select (select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array$1(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  function empty() {
    return [];
  }

  function selectorAll (selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function () {
      return array$1(select.apply(this, arguments));
    };
  }

  function selection_selectAll (select) {
    if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection$1(subgroups, parents);
  }

  function matcher (selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild (match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children() {
    return Array.from(this.children);
  }

  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren (match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter (match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function sparse (update) {
    return new Array(update.length);
  }

  function selection_enter () {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function appendChild(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function insertBefore(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function querySelector(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function querySelectorAll(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  function constant$2 (x) {
    return function () {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length; // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.

    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Put any non-null nodes that don’t fit into exit.


    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue; // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.

    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";

        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    } // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.


    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";

      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Add any remaining nodes that were not bound to data to exit.


    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data (value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
    if (typeof value !== "function") value = constant$2(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.

      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;

          while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
          }

          previous._next = next || null;
        }
      }
    }

    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  } // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)

  function arraylike(data) {
    return _typeof(data) === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
  }

  function selection_exit () {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join (onenter, onupdate, onexit) {
    var enter = this.enter(),
        update = this,
        exit = this.exit();

    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }

    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }

    if (onexit == null) exit.remove();else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge (context) {
    var selection = context.selection ? context.selection() : context;

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection$1(merges, this._parents);
  }

  function selection_order () {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort (compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }

      sortgroup.sort(compareNode);
    }

    return new Selection$1(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call () {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes () {
    return Array.from(this);
  }

  function selection_node () {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size () {
    var size = 0;

    var _iterator = _createForOfIteratorHelper(this),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        ++size;
      } // eslint-disable-line no-unused-vars

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return size;
  }

  function selection_empty () {
    return !this.node();
  }

  function selection_each (callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove$1(name) {
    return function () {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS$1(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction$1(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS$1(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr (name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }

    return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
  }

  function defaultView (node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
    || node.document && node // node is a Window
    || node.defaultView; // node is a Document
  }

  function styleRemove$1(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction$1(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style (name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];else this[name] = v;
    };
  }

  function selection_property (name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function add(name) {
      var i = this._names.indexOf(name);

      if (i < 0) {
        this._names.push(name);

        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function remove(name) {
      var i = this._names.indexOf(name);

      if (i >= 0) {
        this._names.splice(i, 1);

        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function contains(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;

    while (++i < n) {
      list.add(names[i]);
    }
  }

  function classedRemove(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;

    while (++i < n) {
      list.remove(names[i]);
    }
  }

  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed (name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()),
          i = -1,
          n = names.length;

      while (++i < n) {
        if (!list.contains(names[i])) return false;
      }

      return true;
    }

    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant$1(value) {
    return function () {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text (value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html (value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise () {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower () {
    return this.each(lower);
  }

  function selection_append (name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert (name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove () {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone (deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
          i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {
        type: t,
        name: name
      };
    });
  }

  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;

      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }

      if (++i) on.length = i;else delete this.__on;
    };
  }

  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on,
          o,
          listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o];else on.push(o);
    };
  }

  function selection_on (typename, value, options) {
    var typenames = parseTypenames(typename + ""),
        i,
        n = typenames.length,
        t;

    if (arguments.length < 2) {
      var on = this.node().__on;

      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;

    for (i = 0; i < n; ++i) {
      this.each(on(typenames[i], value, options));
    }

    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch (type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

  function _callee() {
    var groups, j, m, group, i, n, node;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            groups = this._groups, j = 0, m = groups.length;

          case 1:
            if (!(j < m)) {
              _context.next = 13;
              break;
            }

            group = groups[j], i = 0, n = group.length;

          case 3:
            if (!(i < n)) {
              _context.next = 10;
              break;
            }

            if (!(node = group[i])) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return node;

          case 7:
            ++i;
            _context.next = 3;
            break;

          case 10:
            ++j;
            _context.next = 1;
            break;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var root = [null];
  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }

  function selection_selection() {
    return this;
  }

  Selection$1.prototype = selection.prototype = _defineProperty({
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  }, Symbol.iterator, _callee);

  function select (selector) {
    return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
  }

  function define (constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);

    for (var key in definition) {
      prototype[key] = definition[key];
    }

    return prototype;
  }

  function Color() {}
  var _darker = 0.7;

  var _brighter = 1 / _darker;
  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };
  define(Color, color, {
    copy: function copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
    : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
    : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
    : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
    : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    displayable: function displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;

    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }

    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function formatHsl() {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  /* From FvD 13.37, CSS Color Module Level 3 */

  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  var constant$1 = (function (x) {
    return function () {
      return x;
    };
  });

  function linear(a, d) {
    return function (t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
      return Math.pow(a + t * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
      return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;
    return rgb$1;
  })(1);

  function interpolateNumber (a, b) {
    return a = +a, b = +b, function (t) {
      return a * (1 - t) + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function () {
      return b;
    };
  }

  function one(b) {
    return function (t) {
      return b(t) + "";
    };
  }

  function interpolateString (a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0,
        // scan index for next number in b
    am,
        // current match in a
    bm,
        // current match in b
    bs,
        // string preceding current number in b, if any
    i = -1,
        // index in s
    s = [],
        // string constants and placeholders
    q = []; // number interpolators
    // Coerce inputs to strings.

    a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.

    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      if ((am = am[0]) === (bm = bm[0])) {
        // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else {
        // interpolate non-matching numbers
        s[++i] = null;
        q.push({
          i: i,
          x: interpolateNumber(am, bm)
        });
      }

      bi = reB.lastIndex;
    } // Add remains of b.


    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    } // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.


    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    });
  }

  var degrees = 180 / Math.PI;
  var identity$1 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose (a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var svgNode;
  /* eslint-disable no-undef */

  function parseCss(value) {
    var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null) return identity$1;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path

        q.push({
          i: s.push(pop(s) + "rotate(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({
          i: s.push(pop(s) + "skewX(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function (a, b) {
      var s = [],
          // string constants and placeholders
      q = []; // number interpolators

      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc

      return function (t) {
        var i = -1,
            n = q.length,
            o;

        while (++i < n) {
          s[(o = q[i]).i] = o.x(t);
        }

        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  var frame = 0,
      // is an animation frame pending?
  timeout$1 = 0,
      // is a timeout pending?
  interval = 0,
      // are any timers active?
  pokeDelay = 1000,
      // how frequently we check for clock skew
  taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
      setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function restart(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);

      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;else taskHead = this;
        taskTail = this;
      }

      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function stop() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now(); // Get the current time, if not already set.

    ++frame; // Pretend we’ve set an alarm, if we haven’t already.

    var t = taskHead,
        e;

    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
      t = t._next;
    }

    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;

    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(),
        delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0,
        t1 = taskHead,
        t2,
        time = Infinity;

    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }

    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.

    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.

    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout (callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(function (elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule (node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index,
      // For context during callback.
      group: group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween; // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!

    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.

      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.

      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!

        if (o.state === STARTED) return timeout(start); // Interrupt the active transition, if any.

        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      } // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.


      timeout(function () {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      }); // Dispatch the start event.
      // Note this must be done before the tween are initialized.

      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted

      self.state = STARTED; // Initialize the tween, deleting null tween.

      tween = new Array(n = self.tween.length);

      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }

      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      } // Dispatch the end event.


      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];

      for (var i in schedules) {
        return;
      } // eslint-disable-line no-unused-vars


      delete node.__transition;
    }
  }

  function interrupt (node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;
    if (!schedules) return;
    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty = false;
        continue;
      }

      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt (name) {
    return this.each(function () {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
      var schedule = set(this, id),
          tween = schedule.tween; // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.

      if (tween !== tween0) {
        tween1 = tween0 = tween;

        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function () {
      var schedule = set(this, id),
          tween = schedule.tween; // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.

      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();

        for (var t = {
          name: name,
          value: value
        }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }

        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween (name, value) {
    var id = this._id;
    name += "";

    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;

      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }

      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }
  function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
      return get(node, id).value[name];
    };
  }

  function interpolate (a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
  }

  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
          value1 = value(this),
          string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
          value1 = value(this),
          string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr (name, value) {
    var fullname = namespace(name),
        i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function (t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function (t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;

    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }

    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;

    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }

    tween._value = value;
    return tween;
  }

  function transition_attrTween (name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function () {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function () {
      init(this, id).delay = value;
    };
  }

  function transition_delay (value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function () {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function () {
      set(this, id).duration = value;
    };
  }

  function transition_duration (value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error();
    return function () {
      set(this, id).ease = value;
    };
  }

  function transition_ease (value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error();
      set(this, id).ease = v;
    };
  }

  function transition_easeVarying (value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter (match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge (transition) {
    if (transition._id !== this._id) throw new Error();

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0,
        on1,
        sit = start(name) ? init : set;
    return function () {
      var schedule = sit(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }

  function transition_on (name, listener) {
    var id = this._id;
    return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function () {
      var parent = this.parentNode;

      for (var i in this.__transition) {
        if (+i !== id) return;
      }

      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove () {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select (select) {
    var name = this._name,
        id = this._id;
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll (select) {
    var name = this._name,
        id = this._id;
    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }

          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection = selection.prototype.constructor;
  function transition_selection () {
    return new Selection(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0,
        on1,
        listener0,
        key = "style." + name,
        event = "end." + key,
        remove;
    return function () {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }

  function transition_style (name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function (t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;

    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }

    tween._value = value;
    return tween;
  }

  function transition_styleTween (name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function () {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text (value) {
    return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function (t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;

    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }

    tween._value = value;
    return tween;
  }

  function transition_textTween (value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }

  function transition_transition () {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end () {
    var on0,
        on1,
        that = this,
        id = that._id,
        size = that.size();
    return new Promise(function (resolve, reject) {
      var cancel = {
        value: reject
      },
          end = {
        value: function value() {
          if (--size === 0) resolve();
        }
      };
      that.each(function () {
        var schedule = set(this, id),
            on = schedule.on; // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.

        if (on !== on0) {
          on1 = (on0 = on).copy();

          on1._.cancel.push(cancel);

          on1._.interrupt.push(cancel);

          on1._.end.push(end);
        }

        schedule.on = on1;
      }); // The selection was empty, resolve end immediately

      if (size === 0) resolve();
    });
  }

  var id = 0;
  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection.prototype;
  Transition.prototype = _defineProperty({
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end
  }, Symbol.iterator, selection_prototype[Symbol.iterator]);

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;

    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error("transition ".concat(id, " not found"));
      }
    }

    return timing;
  }

  function selection_transition (name) {
    var id, timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  var pi$1 = Math.PI,
      tau$1 = 2 * pi$1,
      epsilon$1 = 1e-6,
      tauEpsilon = tau$1 - epsilon$1;

  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath

    this._ = "";
  }

  function path() {
    return new Path();
  }

  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function moveTo(x, y) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function lineTo(x, y) {
      this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
      this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
      this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function arcTo(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
      var x0 = this._x1,
          y0 = this._y1,
          x21 = x2 - x1,
          y21 = y2 - y1,
          x01 = x0 - x1,
          y01 = y0 - y1,
          l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

      if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
      } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon$1)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
      } // Otherwise, draw an arc!
      else {
        var x20 = x2 - x0,
            y20 = y2 - y0,
            l21_2 = x21 * x21 + y21 * y21,
            l20_2 = x20 * x20 + y20 * y20,
            l21 = Math.sqrt(l21_2),
            l01 = Math.sqrt(l01_2),
            l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
            t01 = l / l01,
            t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

        if (Math.abs(t01 - 1) > epsilon$1) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }

        this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function arc(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;
      var dx = r * Math.cos(a0),
          dy = r * Math.sin(a0),
          x0 = x + dx,
          y0 = y + dy,
          cw = 1 ^ ccw,
          da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

      if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
      } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
        this._ += "L" + x0 + "," + y0;
      } // Is this arc empty? We’re done.


      if (!r) return; // Does the angle go the wrong way? Flip the direction.

      if (da < 0) da = da % tau$1 + tau$1; // Is this a complete circle? Draw two arcs to complete the circle.

      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
      } // Is this arc non-empty? Draw an arc!
      else if (da > epsilon$1) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi$1) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
    },
    rect: function rect(x, y, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function toString() {
      return this._;
    }
  };

  function image (input, init) {
    return new Promise(function (resolve, reject) {
      var image = new Image();

      for (var key in init) {
        image[key] = init[key];
      }

      image.onerror = reject;

      image.onload = function () {
        resolve(image);
      };

      image.src = input;
    });
  }

  function constant (x) {
    return function constant() {
      return x;
    };
  }

  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var max = Math.max;
  var min = Math.min;
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  var epsilon = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var tau = 2 * pi;
  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
  }
  function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
  }

  function arcInnerRadius(d) {
    return d.innerRadius;
  }

  function arcOuterRadius(d) {
    return d.outerRadius;
  }

  function arcStartAngle(d) {
    return d.startAngle;
  }

  function arcEndAngle(d) {
    return d.endAngle;
  }

  function arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
  }

  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0,
        y10 = y1 - y0,
        x32 = x3 - x2,
        y32 = y3 - y2,
        t = y32 * x10 - x32 * y10;
    if (t * t < epsilon) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
  } // Compute perpendicular offset line of length rc.
  // http://mathworld.wolfram.com/Circle-LineIntersection.html


  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1,
        y01 = y0 - y1,
        lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
        ox = lo * y01,
        oy = -lo * x01,
        x11 = x0 + ox,
        y11 = y0 + oy,
        x10 = x1 + ox,
        y10 = y1 + oy,
        x00 = (x11 + x10) / 2,
        y00 = (y11 + y10) / 2,
        dx = x10 - x11,
        dy = y10 - y11,
        d2 = dx * dx + dy * dy,
        r = r1 - rc,
        D = x11 * y10 - x10 * y11,
        d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
        cx0 = (D * dy - dx * d) / d2,
        cy0 = (-D * dx - dy * d) / d2,
        cx1 = (D * dy + dx * d) / d2,
        cy1 = (-D * dx + dy * d) / d2,
        dx0 = cx0 - x00,
        dy0 = cy0 - y00,
        dx1 = cx1 - x00,
        dy1 = cy1 - y00; // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?

    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }

  function arc () {
    var innerRadius = arcInnerRadius,
        outerRadius = arcOuterRadius,
        cornerRadius = constant(0),
        padRadius = null,
        startAngle = arcStartAngle,
        endAngle = arcEndAngle,
        padAngle = arcPadAngle,
        context = null;

    function arc() {
      var buffer,
          r,
          r0 = +innerRadius.apply(this, arguments),
          r1 = +outerRadius.apply(this, arguments),
          a0 = startAngle.apply(this, arguments) - halfPi,
          a1 = endAngle.apply(this, arguments) - halfPi,
          da = abs(a1 - a0),
          cw = a1 > a0;
      if (!context) context = buffer = path(); // Ensure that the outer radius is always larger than the inner radius.

      if (r1 < r0) r = r1, r1 = r0, r0 = r; // Is it a point?

      if (!(r1 > epsilon)) context.moveTo(0, 0); // Or is it a circle or annulus?
      else if (da > tau - epsilon) {
        context.moveTo(r1 * cos(a0), r1 * sin(a0));
        context.arc(0, 0, r1, a0, a1, !cw);

        if (r0 > epsilon) {
          context.moveTo(r0 * cos(a1), r0 * sin(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      } // Or is it a circular or annular sector?
      else {
        var a01 = a0,
            a11 = a1,
            a00 = a0,
            a10 = a1,
            da0 = da,
            da1 = da,
            ap = padAngle.apply(this, arguments) / 2,
            rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
            rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
            rc0 = rc,
            rc1 = rc,
            t0,
            t1; // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.

        if (rp > epsilon) {
          var p0 = asin(rp / r0 * sin(ap)),
              p1 = asin(rp / r1 * sin(ap));
          if ((da0 -= p0 * 2) > epsilon) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }

        var x01 = r1 * cos(a01),
            y01 = r1 * sin(a01),
            x10 = r0 * cos(a10),
            y10 = r0 * sin(a10); // Apply rounded corners?

        if (rc > epsilon) {
          var x11 = r1 * cos(a11),
              y11 = r1 * sin(a11),
              x00 = r0 * cos(a00),
              y00 = r0 * sin(a00),
              oc; // Restrict the corner radius according to the sector angle.

          if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
            var ax = x01 - oc[0],
                ay = y01 - oc[1],
                bx = x11 - oc[0],
                by = y11 - oc[1],
                kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
                lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          }
        } // Is the sector collapsed to a line?


        if (!(da1 > epsilon)) context.moveTo(x01, y01); // Does the sector’s outer ring have rounded corners?
        else if (rc1 > epsilon) {
          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
            context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
        } // Or is the outer ring just a circular arc?
        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw); // Is there no inner ring, and it’s a circular sector?
        // Or perhaps it’s an annular sector collapsed due to padding?

        if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10); // Does the sector’s inner ring (or point) have rounded corners?
        else if (rc0 > epsilon) {
          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01); // Have the corners merged?

          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw); // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
            context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
        } // Or is the inner ring just a circular arc?
        else context.arc(0, 0, r0, a10, a00, cw);
      }
      context.closePath();
      if (buffer) return context = null, buffer + "" || null;
    }

    arc.centroid = function () {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
      return [cos(a) * r, sin(a) * r];
    };

    arc.innerRadius = function (_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
    };

    arc.outerRadius = function (_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
    };

    arc.cornerRadius = function (_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
    };

    arc.padRadius = function (_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
    };

    arc.startAngle = function (_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
    };

    arc.endAngle = function (_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
    };

    arc.padAngle = function (_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
    };

    arc.context = function (_) {
      return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };

    return arc;
  }

  function array (x) {
    return _typeof(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function Linear(context) {
    this._context = context;
  }

  Linear.prototype = {
    areaStart: function areaStart() {
      this._line = 0;
    },
    areaEnd: function areaEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function point(x, y) {
      x = +x, y = +y;

      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
          break;

        case 1:
          this._point = 2;
        // falls through

        default:
          this._context.lineTo(x, y);

          break;
      }
    }
  };
  function curveLinear (context) {
    return new Linear(context);
  }

  function x(p) {
    return p[0];
  }
  function y(p) {
    return p[1];
  }

  function line (x$1, y$1) {
    var defined = constant(true),
        context = null,
        curve = curveLinear,
        output = null;
    x$1 = typeof x$1 === "function" ? x$1 : x$1 === undefined ? x : constant(x$1);
    y$1 = typeof y$1 === "function" ? y$1 : y$1 === undefined ? y : constant(y$1);

    function line(data) {
      var i,
          n = (data = array(data)).length,
          d,
          defined0 = false,
          buffer;
      if (context == null) output = curve(buffer = path());

      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();else output.lineEnd();
        }

        if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
      }

      if (buffer) return output = null, buffer + "" || null;
    }

    line.x = function (_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
    };

    line.y = function (_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
    };

    line.defined = function (_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
    };

    line.curve = function (_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };

    line.context = function (_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };

    return line;
  }

  function descending (a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }

  function identity (d) {
    return d;
  }

  function pie$1 () {
    var value = identity,
        sortValues = descending,
        sort = null,
        startAngle = constant(0),
        endAngle = constant(tau),
        padAngle = constant(0);

    function pie(data) {
      var i,
          n = (data = array(data)).length,
          j,
          k,
          sum = 0,
          index = new Array(n),
          arcs = new Array(n),
          a0 = +startAngle.apply(this, arguments),
          da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
          a1,
          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
          pa = p * (da < 0 ? -1 : 1),
          v;

      for (i = 0; i < n; ++i) {
        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
          sum += v;
        }
      } // Optionally sort the arcs by previously-computed values or by data.


      if (sortValues != null) index.sort(function (i, j) {
        return sortValues(arcs[i], arcs[j]);
      });else if (sort != null) index.sort(function (i, j) {
        return sort(data[i], data[j]);
      }); // Compute the arcs! They are stored in the original data's order.

      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
          data: data[j],
          index: i,
          value: v,
          startAngle: a0,
          endAngle: a1,
          padAngle: p
        };
      }

      return arcs;
    }

    pie.value = function (_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
    };

    pie.sortValues = function (_) {
      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };

    pie.sort = function (_) {
      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };

    pie.startAngle = function (_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
    };

    pie.endAngle = function (_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
    };

    pie.padAngle = function (_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
    };

    return pie;
  }

  var defaultConf = {
      padding: '2em',
      desktopViewport: 1024,
      defaultWidth: 300
  };

  var colourPalette = {
      "default": {
          primary: '#003087',
          secondary: '#005bbb',
          background: '#f6f8f8',
          text: '#231f20',
          text2: '#3f525f'
      },
      dark: {
          primary: '#fa9200',
          secondary: '#fdebd1',
          background: '#3f525f',
          text: '#ffffff',
          text2: '#ffffff'
      },
      coloured: {
          primary: '#fae100',
          secondary: '#fefce5',
          background: '#005bbb',
          text: '#ffffff',
          text2: '#ffffff'
      }
  };
  function createPalette(name, colours) {
      colourPalette[name] = colours;
  }
  function getPalette(palette) {
      var paletteId = 'default';
      if (typeof palette == "string" && colourPalette[palette]) {
          paletteId = palette;
      }
      if (typeof palette == "object" && palette.basePalette) {
          paletteId = palette.basePalette;
      }
      var paletteObj = colourPalette[paletteId];
      if (typeof palette == "object") {
          paletteObj = _assign(_assign({}, paletteObj), palette);
      }
      return paletteObj;
  }

  function chartStyles (target, options) {
      var palette = getPalette(options.palette);
      target.insert('style')
          .html("\n    #nhsd-viz-".concat(options.visualisationId, " {\n      position: relative;\n      background: ").concat(palette.background, ";\n      font-size: ").concat(options.fontSize || "16px", ";\n      text-align: center;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-sr-only {\n      position:absolute!important;\n      width:1px!important;\n      height:1px!important;\n      padding:0!important;\n      margin:-1px!important;\n      overflow:hidden!important;\n      clip:rect(0,0,0,0)!important;\n      white-space:nowrap!important;\n      border:0!important\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-content {\n      padding: ").concat(defaultConf.padding, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-fill-primary,\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-fill-primary {\n      fill: ").concat(palette.primary, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-fill-secondary {\n      fill: ").concat(palette.secondary, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-title {\n      font-size: 2.6em;\n      margin: 0;\n      margin-bottom: 0.2em;\n      color: ").concat(palette.text, ";\n      text-align: center;\n      text-transform: uppercase;\n      text-decoration: underline;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-body,\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-body svg {\n      color: ").concat(palette.text, ";\n      fill: ").concat(palette.text, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-body-2,\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-body-2 svg {\n      color: ").concat(palette.text2, ";\n      fill: ").concat(palette.text2, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-intro-text {\n      font-size: 2.2em;\n      line-height: 1.2em;\n      font-weight: bold;\n      margin-bottom: 0.4em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content-wrapper {\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: center;\n      justify-content: center;\n      gap: 2.2em;\n      text-align: left;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart {\n      max-width: 20em;\n      width: 50%;\n      padding: 0.5em 0;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content {\n      max-width: 26em;\n      width: 50%;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-lead-paragraph {\n      font-size: 3.6em;\n      line-height: 1em;\n      font-weight: bold;\n      margin-bottom: 0.1em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-second-paragraph {\n      font-size: 2em;\n      line-height: 1em;\n      font-weight: bold;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-closing-paragraph {\n      display: flex;\n      margin-top: 0.7em;\n      font-weight: bold;\n      font-size: 1.5em;\n      align-items: center;\n      justify-content: center;\n      gap: 0.5em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-closing-paragraph svg {\n      width: 1em;\n      height: 1em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-source-text {\n      font-size: 0.8em;\n      text-align: right;\n      position: absolute;\n      right: 0.8em;\n      bottom: 0.6em;\n    }\n\n    @media (max-width: ").concat(options.desktopViewport, "px) {\n      #nhsd-viz-").concat(options.visualisationId, " {\n        font-size: 0.8em;\n      }\n      \n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content-wrapper {\n        text-align: center;\n        flex-direction: column;\n        gap: 1.5em;\n      }\n\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart {\n        width: 100%;\n      }\n  \n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content {\n        max-width: 100%;\n        width: 100%;\n      }\n\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-lead-paragraph {\n        font-size: 3em;\n      }\n    }\n  "));
      if (options.vizType == 'pie' || options.vizType == 'doughnut') {
          target.insert('style').html("\n      #nhsd-viz-".concat(options.visualisationId, " .nhsd-viz-pie,\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-doughnut {\n        transform: scale(1.06);\n      }\n\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-pie .nhsd-viz-pie-arcs path,\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-doughnut .nhsd-viz-doughnut-arcs path {\n        stroke: ").concat(palette.background, ";\n        stroke-width: 4;\n      }\n\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-pie .nhsd-viz-pie-arrow path,\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-doughnut .nhsd-viz-doughnut-arrow path {\n        stroke-width: 0;\n      }\n    "));
      }
      if (options.vizType == 'doughnut') {
          target.insert('style').html("\n    #nhsd-viz-".concat(options.visualisationId, " .nhsd-viz-chart-content-wrapper {\n      gap: 1em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart {\n      position: relative;\n    }\n    \n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart .nhsd-viz-doughnut-percentage {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 4.8em;\n      font-weight: bold;\n    }\n    "));
      }
      if (options.vizType == 'icon') {
          target.insert('style').html("\n    #nhsd-viz-".concat(options.visualisationId, " .nhsd-viz-chart-content-wrapper {\n      flex-direction: column;\n      gap: 1.5em;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart,\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content {\n      max-width: 40em;\n      width: 100%;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart-content {\n      text-align: center;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon-list {\n      width: 100%;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon-wrapper {\n      position: relative;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon-wrapper:before{\n      content: '';\n      display: block;\n      width: 100%;\n      padding-top: 100%;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon {\n      position: absolute;\n      top: 6%;\n      left: 6%;\n      right: 6%;\n      bottom: 6%;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon--inactive {\n      opacity: 0.2;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon .nhsd-viz-default-icon,\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon .nhsd-viz-default-icon {\n      border-radius: 5%;\n      background: ").concat(palette.primary, ";\n    }\n\n    #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-icon .nhsd-viz-icon-mask {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: ").concat(palette.background, ";\n      opacity: 0.8;\n    }\n\n    @media (max-width: ").concat(options.desktopViewport, "px) {\n      #nhsd-viz-").concat(options.visualisationId, " .nhsd-viz-chart {\n        max-width: 28em;\n      }\n    }\n    "));
      }
  }

  function chartTitle (vizWrapper, options) {
      if (!options.title)
          return;
      vizWrapper.select('.nhsd-viz-content')
          .attr('aria-labelledby', "nhsd-viz-".concat(options.visualisationId, "-title"))
          .append('h1')
          .attr('id', "nhsd-viz-".concat(options.visualisationId, "-title"))
          .classed('nhsd-viz-title', true)
          .text(options.title);
  }

  function content (vizWrapper, options) {
      if (options.data) {
          var chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
              .append('div')
              .classed('nhsd-viz-chart-content', true);
          var chartText = '';
          if (options.data.percent) {
              if (options.vizType == 'doughnut') {
                  chartText = "<span class=\"nhsd-viz-sr-only\">".concat(options.data.percent, "%</span>");
              }
              else {
                  chartText = "".concat(options.data.percent, "%");
              }
              chartText += " of ".concat(options.data.subject);
          }
          else if (options.data.ratio) {
              chartText = "".concat(options.data.ratio.numerator, " in ").concat(options.data.ratio.denominator, " ").concat(options.data.subject);
          }
          else if (options.data.quantity) {
              chartText = "".concat(options.data.quantity);
          }
          chartTextWrapper.append('div')
              .classed('nhsd-viz-body', true)
              .classed('nhsd-viz-lead-paragraph', true)
              .html(chartText);
          chartTextWrapper.append('div')
              .classed('nhsd-viz-body-2', true)
              .classed('nhsd-viz-second-paragraph', true)
              .text(options.data.description);
      }
  }

  function changeText (vizWrapper, options) {
      if (options.data.change) {
          var changeText = '';
          if (options.data.change.percent >= 0) {
              changeText += "<span class=\"nhsd-viz-sr-only\">Up</span><svg xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" viewBox=\"0 0 16 16\" width=\"16px\" height=\"16px\" x=\"0\" y=\"0\" aria-hidden=\"true\"><path d=\"M1,7.5L8,1l7,6.5L13.5,9L9,4.8L9,15H7L7,4.8L2.5,9L1,7.5z\"></path></svg> ";
          }
          else {
              changeText += "<span class=\"nhsd-viz-sr-only\">Down</span><svg xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" viewBox=\"0 0 16 16\" width=\"16px\" height=\"16px\" x=\"0\" y=\"0\" aria-hidden=\"true\"><path d=\"M15,8.5L8,15L1,8.5L2.5,7L7,11.2L7,1l2,0l0,10.2L13.5,7L15,8.5z\"></path></svg> ";
          }
          changeText += "".concat(options.data.change.percent, "% ");
          if (options.data.change.from !== undefined) {
              changeText += "from ".concat(options.data.change.from, " in ");
          }
          else {
              changeText += 'since ';
          }
          changeText += options.data.change.date;
          vizWrapper.select('.nhsd-viz-content')
              .insert('div')
              .classed('nhsd-viz-body', true)
              .classed('nhsd-viz-closing-paragraph', true)
              .html(changeText);
      }
  }

  function sourceText (vizWrapper, options) {
      if (options.source && options.source.text) {
          var element = vizWrapper.append('div')
              .classed('nhsd-viz-body-2', true)
              .classed('nhsd-viz-source-text', true)
              .text('Source: ');
          if (options.source.href) {
              element.append('a')
                  .attr('href', options.source.href)
                  .text(options.source.text);
          }
          else {
              element.append('span')
                  .text(options.source.text);
          }
      }
  }

  function introText (vizWrapper, options) {
      if (!options.introText)
          return;
      vizWrapper.select('.nhsd-viz-content')
          .append('div')
          .classed('nhsd-viz-body', true)
          .classed('nhsd-viz-intro-text', true)
          .text(options.introText);
  }

  function pie (vizChart, options) {
      var width = 300;
      var radius = width / 2;
      var arrowSize = radius * 0.08;
      var arrowOffset = radius * 0.02;
      var selectedOffset = radius * 0.07;
      var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;
      if (!options.data || !options.data.percent)
          return;
      var svg = vizChart.insert('svg')
          .attr('xmlns', 'http://www.w3.org/2000/svg')
          .attr('preserveAspectRatio', 'xMidYMid meet')
          .attr("viewBox", [0, 0, width, width])
          .attr('aria-hidden', true)
          .style('width', '100%');
      var arc$1 = arc()
          .outerRadius(arcRadius)
          .innerRadius(0);
      var pie = pie$1()
          .sortValues(function (a, b) { return a - b; });
      var svgGroup = svg
          .classed('nhsd-viz-pie', true)
          .append("g")
          .attr("transform", "translate(" + radius + "," + radius + ")")
          .classed('nhsd-viz-pie-arcs', true);
      var data = [options.data.percent, 100 - options.data.percent];
      var emptyPies = svgGroup.selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g");
      emptyPies.append("path")
          .attr("d", arc$1)
          .attr("transform", function (d, i) {
          if (i > 0)
              return "translate(0,0)";
          var angle = (d.startAngle + d.endAngle) / 2;
          var xOff = Math.sin(angle) * selectedOffset;
          var yOff = -Math.cos(angle) * selectedOffset;
          return "translate(".concat((xOff), ",").concat((yOff), ")");
      })
          .attr('class', function (d, i) { return i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary'; });
      var arcs = pie(data);
      if (arcs && arcs[0]) {
          var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
          var angleDeg = angle * (180 / Math.PI);
          var line$1 = line();
          var arrowGroup = svgGroup.append('g')
              .classed('nhsd-viz-pie-arrow', true);
          arrowGroup.append("path")
              .attr("d", line$1([[0, 0], [arrowSize * 0.8, -arrowSize], [-arrowSize * 0.8, -arrowSize]]))
              .classed('nhsd-viz-fill-primary', true)
              .attr('transform', "rotate(".concat(angleDeg, ") translate(").concat(0, ",").concat(-(arcRadius + selectedOffset + arrowOffset), ")"));
      }
      return svgGroup;
  }

  function doughnut (vizChart, options) {
      var width = 300;
      var radius = width / 2;
      var arrowSize = radius * 0.06;
      var arrowOffset = radius * 0.02;
      var selectedOffset = radius * 0.07;
      var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;
      if (!options.data || !options.data.percent)
          return;
      vizChart.insert('div')
          .classed('nhsd-viz-doughnut-percentage', true)
          .classed('nhsd-viz-body', true)
          .text("".concat(options.data.percent, "%"));
      var svg = vizChart.insert('svg')
          .attr('xmlns', 'http://www.w3.org/2000/svg')
          .attr('preserveAspectRatio', 'xMidYMid meet')
          .attr("viewBox", [0, 0, width, width])
          .attr('aria-hidden', true)
          .style('width', '100%');
      var arc$1 = arc()
          .outerRadius(arcRadius)
          .innerRadius(arcRadius * 0.75);
      var pie = pie$1()
          .sortValues(function (a, b) { return a - b; });
      var svgGroup = svg
          .classed('nhsd-viz-doughnut', true)
          .append("g")
          .attr("transform", "translate(" + radius + "," + radius + ")")
          .classed('nhsd-viz-doughnut-arcs', true);
      var data = [options.data.percent, 100 - options.data.percent];
      var emptyPies = svgGroup.selectAll(".nhsd-viz-doughnut-arcs")
          .data(pie(data))
          .enter()
          .append("g");
      emptyPies.append("path")
          .attr("d", arc$1)
          .attr('class', function (d, i) { return i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary'; });
      var arcs = pie(data);
      if (arcs && arcs[0]) {
          var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
          var angleDeg = angle * (180 / Math.PI);
          var line$1 = line();
          var arrowGroup = svgGroup.append('g')
              .classed('nhsd-viz-doughnut-arrow', true);
          arrowGroup.append("path")
              .attr("d", line$1([[0, 0], [arrowSize * 0.8, -arrowSize], [-arrowSize * 0.8, -arrowSize]]))
              .classed('nhsd-viz-fill-primary', true)
              .attr('transform', "rotate(".concat(angleDeg, ") translate(").concat(0, ",").concat(-(arcRadius + arrowOffset), ")"));
      }
      return svgGroup;
  }

  function isMobile (desktopViewport) {
      return window.innerWidth <= desktopViewport;
  }

  function icon (vizChart, options) {
      return __awaiter(this, void 0, void 0, function () {
          var _a, numerator, denominator, itemsPerRow, iconImg, e_1, iconWrapper, i, icon, fraction;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      if (!options.data || !options.data.ratio || !options.data.ratio.numerator || !options.data.ratio.denominator)
                          return [2];
                      _a = options.data.ratio, numerator = _a.numerator, denominator = _a.denominator;
                      itemsPerRow = 10;
                      if (isMobile(options.desktopViewport)) {
                          itemsPerRow = 5;
                          if (denominator % 5 != 0) {
                              if (denominator % 6 == 0) {
                                  itemsPerRow = 6;
                              }
                              else if (denominator % 4 == 0) {
                                  itemsPerRow = 4;
                              }
                          }
                      }
                      else if (denominator % 10 != 0) {
                          if (denominator % 13 == 0) {
                              itemsPerRow = 7;
                          }
                          else if (denominator % 12 == 0) {
                              itemsPerRow = 12;
                          }
                          else if (denominator % 8 == 0) {
                              itemsPerRow = 8;
                          }
                          else if (denominator % 6 == 0) {
                              itemsPerRow = 6;
                          }
                          else if (denominator % 5 == 0) {
                              itemsPerRow = 5;
                          }
                      }
                      iconImg = null;
                      if (!options.icon) return [3, 4];
                      _b.label = 1;
                  case 1:
                      _b.trys.push([1, 3, , 4]);
                      return [4, image(options.icon)];
                  case 2:
                      iconImg = _b.sent();
                      return [3, 4];
                  case 3:
                      e_1 = _b.sent();
                      console.error(e_1);
                      iconImg = null;
                      return [3, 4];
                  case 4:
                      iconWrapper = vizChart.insert('div')
                          .attr('aria-hidden', true)
                          .classed('nhsd-viz-icon-list', true);
                      for (i = 0; i < denominator; i++) {
                          icon = iconWrapper.append('div')
                              .classed('nhsd-viz-icon-wrapper', true)
                              .style('width', "".concat(100 / itemsPerRow, "%"))
                              .append('div')
                              .classed('nhsd-viz-icon', true)
                              .classed('nhsd-viz-icon--inactive', i >= numerator);
                          if (options.icon && iconImg) {
                              icon.insert('img')
                                  .attr('src', iconImg.src);
                          }
                          else {
                              icon.insert('div')
                                  .classed('nhsd-viz-default-icon', true);
                          }
                          fraction = numerator - i;
                          if (fraction < 1 && fraction > 0) {
                              icon.insert('div')
                                  .classed('nhsd-viz-icon-mask', true)
                                  .style('left', "".concat(fraction * 100, "%"));
                          }
                      }
                      return [2];
              }
          });
      });
  }

  function vizChart (vizWrapper, options) {
      return __awaiter(this, void 0, void 0, function () {
          var vizChart, isDoughnut, isIcon, isPie, e_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      vizChart = vizWrapper.select('.nhsd-viz-chart');
                      isDoughnut = function (options) { return options.vizType == 'doughnut'; };
                      isIcon = function (options) { return options.vizType == 'icon'; };
                      isPie = function (options) { return options.vizType == 'pie'; };
                      _a.label = 1;
                  case 1:
                      _a.trys.push([1, 8, , 9]);
                      if (!isDoughnut(options)) return [3, 3];
                      return [4, doughnut(vizChart, options)];
                  case 2:
                      _a.sent();
                      return [3, 7];
                  case 3:
                      if (!isIcon(options)) return [3, 5];
                      return [4, icon(vizChart, options)];
                  case 4:
                      _a.sent();
                      return [3, 7];
                  case 5:
                      if (!isPie(options)) return [3, 7];
                      return [4, pie(vizChart, options)];
                  case 6:
                      _a.sent();
                      _a.label = 7;
                  case 7: return [3, 9];
                  case 8:
                      e_1 = _a.sent();
                      console.error(e_1);
                      return [3, 9];
                  case 9: return [2];
              }
          });
      });
  }

  function debounce(func, wait, immediate) {
      if (immediate === void 0) { immediate = false; }
      var timeout;
      return function executedFunction() {
          var context = this;
          var args = arguments;
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(function () {
              timeout = null;
              if (!immediate)
                  func.apply(context, args);
          }, wait);
          if (callNow)
              func.apply(context, args);
      };
  }

  var generateId = function () { return Math.random().toString(16).slice(2); };
  function optionDefaults (options) {
      var visualisationId = generateId();
      var vizType = options.vizType || 'pie';
      var desktopViewport = options.desktopViewport || defaultConf.desktopViewport;
      var fullOptions = _assign(_assign({}, options), { visualisationId: visualisationId, vizType: vizType, desktopViewport: desktopViewport });
      return fullOptions;
  }

  function render(selector, options) {
      return __awaiter(this, void 0, void 0, function () {
          var fullOptions, target, vizWrapper;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      fullOptions = optionDefaults(options);
                      target = select(selector).html("");
                      chartStyles(target, fullOptions);
                      vizWrapper = target.insert('article')
                          .attr('id', "nhsd-viz-".concat(fullOptions.visualisationId))
                          .attr('class', "nhsd-viz");
                      vizWrapper.insert('div')
                          .attr('class', "nhsd-viz-content");
                      chartTitle(vizWrapper, fullOptions);
                      introText(vizWrapper, fullOptions);
                      vizWrapper.select('.nhsd-viz-content')
                          .insert('div')
                          .classed('nhsd-viz-chart-content-wrapper', true)
                          .insert('div')
                          .classed('nhsd-viz-chart', true)
                          .attr('aria-hidden', true);
                      return [4, vizChart(vizWrapper, fullOptions)];
                  case 1:
                      _a.sent();
                      content(vizWrapper, fullOptions);
                      changeText(vizWrapper, fullOptions);
                      sourceText(vizWrapper, fullOptions);
                      return [2, vizWrapper.node()];
              }
          });
      });
  }
  function chart(selector, options) {
      return __awaiter(this, void 0, void 0, function () {
          var debouncedRender;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (select(selector).empty()) {
                          throw new Error("Selector \"".concat(selector, "\" not found"));
                      }
                      if (!options) {
                          throw new Error("Visualisation options not set");
                      }
                      debouncedRender = debounce(function () { return render(selector, options); }, 250);
                      window.addEventListener('resize', debouncedRender);
                      return [4, render(selector, options)];
                  case 1:
                      _a.sent();
                      return [2];
              }
          });
      });
  }

  exports.chart = chart;
  exports.createPalette = createPalette;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
