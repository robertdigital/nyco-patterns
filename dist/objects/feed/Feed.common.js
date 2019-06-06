'use strict';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */

var Symbol = root.Symbol;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = shortOut(baseSetToString);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */

function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$3.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */

var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports$1 && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */

var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */

var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */

var getPrototype = overArg(Object.getPrototypeOf, Object);

/** `Object#toString` result references. */

var objectTag$1 = '[object Object]';
/** Used for built-in method references. */

var funcProto$2 = Function.prototype,
    objectProto$8 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$2.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$6.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */

var domExcTag = '[object DOMException]',
    errorTag$1 = '[object Error]';
/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */

function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  var tag = baseGetTag(value);
  return tag == errorTag$1 || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */

var attempt = baseRest(function (func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */

function baseValues(object, props) {
  return arrayMap(props, function (key) {
    return object[key];
  });
}

/** Used for built-in method references. */

var objectProto$9 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */

function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto$9[key]) && !hasOwnProperty$7.call(object, key)) {
    return srcValue;
  }

  return objValue;
}

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};
/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */

var objectProto$a = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map characters to HTML entities. */

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match HTML entities and HTML characters. */

var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */

function escape(string) {
  string = toString(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g;

/** Used to match template delimiters. */
var reEvaluate = /<%([\s\S]+?)%>/g;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */

var templateSettings = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': {
      'escape': escape
    }
  }
};

/** Used to match empty string literals in compiled template source. */

var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */

var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
/** Used to ensure capturing order of template delimiters. */

var reNoMatch = /($^)/;
/** Used to match unescaped characters in compiled string literals. */

var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */

function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (guard && isIterateeCall(string, options, guard)) {
    options = undefined;
  }

  string = toString(string);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);
  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);
  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '"; // Compile the regexp to match each delimiter.

  var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g'); // Use a sourceURL for easier debugging.

  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';
  string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue); // Escape characters that can't be included in string literals.

    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar); // Replace delimiters with snippets.

    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }

    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }

    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }

    index = offset + match.length; // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.

    return match;
  });
  source += "';\n"; // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.

  var variable = options.variable;

  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  } // Cleanup code by stripping empty strings.


  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;'); // Frame code as the function body.

  source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
  var result = attempt(function () {
    return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
  }); // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.

  result.source = source;

  if (isError(result)) {
    throw result;
  }

  return result;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */

var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */

function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }

    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */

var baseEach = createBaseEach(baseForOwn);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */

function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */

function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* Built-in method references that are verified to be native. */

var Map = getNative(root, 'Map');

/* Built-in method references that are verified to be native. */

var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$b = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$9.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */

var objectProto$c = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$a = objectProto$c.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$a.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/** Detect free variable `exports`. */

var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
/** Built-in value references. */

var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

/** Built-in value references. */

var Uint8Array = root.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */

function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */

function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack());
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */

var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */

function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);

  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;
/** `Object#toString` result references. */

var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$2 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto$1 = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$2:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag$1:
      var convert = mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */

var objectProto$d = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable$1 = objectProto$d.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$2 = 1;
/** Used for built-in method references. */

var objectProto$e = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$b = objectProto$e.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty$b.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */

var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */

var Set = getNative(root, 'Set');

/* Built-in method references that are verified to be native. */

var WeakMap = getNative(root, 'WeakMap');

/** `Object#toString` result references. */

var mapTag$2 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag(new Map()) != mapTag$2 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$2 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;

        case mapCtorString:
          return mapTag$2;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$2;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var getTag$1 = getTag;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$3 = 1;
/** `Object#toString` result references. */

var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$3 = '[object Object]';
/** Used for built-in method references. */

var objectProto$f = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$c = objectProto$f.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag$1 : getTag$1(object),
      othTag = othIsArr ? arrayTag$1 : getTag$1(other);
  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;
  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$c.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$c.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */

function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }

  object = Object(object);

  while (index--) {
    var data = matchData[index];

    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }

  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();

      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }

      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */

function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */

function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }

  return result;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }

    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatches(source) {
  var matchData = getMatchData(source);

  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */

function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */

function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }

  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */

function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }

  if (value == null) {
    return identity;
  }

  if (typeof value == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }

  return property(value);
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);

  while (length--) {
    array[length] = array[length].value;
  }

  return array;
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */

function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);
    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }

    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }

  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */

function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);

    if (result) {
      if (index >= ordersLength) {
        return result;
      }

      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  } // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.


  return object.index - other.index;
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */

function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));
  var result = baseMap(collection, function (value, key, collection) {
    var criteria = arrayMap(iteratees, function (iteratee) {
      return iteratee(value);
    });
    return {
      'criteria': criteria,
      'index': ++index,
      'value': value
    };
  });
  return baseSortBy(result, function (object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */

function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }

  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }

  orders = guard ? undefined : orders;

  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }

  return baseOrderBy(collection, iteratees, orders);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {// No operation performed.
}

/** Used as references for various `Number` constants. */

var INFINITY$2 = 1 / 0;
/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */

var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY$2) ? noop : function (values) {
  return new Set(values);
};

/**
 *
 */

var Feed = function Feed(config) {
  this.default = Feed.default;
  this._settings = merge({}, Feed.default, config);
  this.init();
};
/**
 * Initializes the module
 */


Feed.prototype.init = function init() {
  var this$1 = this;
  var data = [];
  var feed = this._settings.feed;
  var config = {
    rssToJson: Feed.rssToJson,
    rssUrl: Array.isArray(feed) ? feed : [feed]
  }; // Go through each feed

  forEach(config.rssUrl, function (url, index) {
    // Make the request
    this$1._request(config, url).then(function (response) {
      // Process the data
      data.push(this$1._process(JSON.parse(response), this$1._settings)); // When all feeds have been requested, merge the data and compile

      if (data.length === config.rssUrl.length) {
        this$1._merge(data, this$1._settings);

        var compiled = this$1._render(this$1._merge(data, this$1._settings), this$1._settings);

        var el = document.querySelector(this$1._settings.selector);

        if (el) {
          el.innerHTML = compiled;
        }
      }
    });
  });

  return this;
};
/**
 * Create an XHR request for the feed data
 * @param{object} config The request data
 * @param{string} url  The request url
 * @return {Promise}     Resolves when the response is ready, rejects when
 *                       the operation times out or there is an error.
 */


Feed.prototype._request = function _request(config, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (event) {
      var _xhr = event.target;

      if (_xhr.readyState === 4) {
        if (_xhr.status >= 200 && _xhr.status < 400) {
          resolve(_xhr.response);
        } else {
          reject(new Error(_xhr.status));
        }
      }
    };

    xhr.ontimeout = function () {
      reject(new Error('The Feed request timed out'));
    };

    xhr.open('GET', config.rssToJson + "?rss_url=" + url, true);
    xhr.send();
    xhr = null;
  });
};
/**
 * Pass data to the appropriate processing function based on type
 * @param{object} data   The requested feed data to pass
 * @param{object} settings The application settings
 * @return {object}        The processed data
 */


Feed.prototype._process = function _process(data, settings) {
  return Feed.process[settings.type](data, settings);
};
/**
 * Pass data to the appropriate merge function based on type
 * @param{object} data   The requested feed data to pass
 * @param{object} settings The application settings
 * @return {object}        The merged feed data
 */


Feed.prototype._merge = function _merge(data, settings) {
  return Feed.merge[settings.type](data);
};
/**
 * Combine template components, pass data, and return compiled temlate
 * @param{object} data   The requested feed data to pass
 * @param{object} settings The application settings
 * @return {string}        The complied html string
 */


Feed.prototype._render = function _render(data, settings) {
  data.settings = settings;

  if (settings.log) {
    console.dir(data);
  }

  var template$1 = values(settings.templates).join('');

  var compiled = template(template$1, {
    'imports': {
      '_each': forEach
    }
  });

  return compiled(data);
};
/**
 * An open RSS to JSON api, see https://rss2json.com
 * @type {String}
 */


Feed.rssToJson = 'https://api.rss2json.com/v1/api.json';
/**
 * The template for the widget.
 * @type {String}
 */

Feed.templates = {
  medium: {
    opener: ['<section class="o-feed <%- settings.classes.wrapper %>" style="', '<% if (settings.fontSize) { %>font-size: <%- settings.fontSize %>;<% } %>', '<% if (settings.postBorderColor) { %>border-color: <%- settings.postBorderColor %>;<% } %>', '">'],
    header: ['<header class="o-feed__header <%- settings.classes.header %>">', '<div class="o-feed__avatar <%- settings.classes.avatar %>">', '<img src="', '<% if (settings.profileImg !== "") { %>', '<%- settings.profileImg %>', '<% } else { %>', '<%- feed.profileImg %>', '<% } %>" ', 'width="<%- settings.ratioProfile[0] %>" ', 'height="<%- settings.ratioProfile[1] %>">', '</div>', '<a class="o-feed__url <%- settings.classes.avatar %>" ', 'href="<% if (settings.titleUrl !== "") { %>', '<%- settings.titleUrl %>', '<% } else { %>', '<%- feed.url %>', '<% } %>" ', 'target="_blank" rel="noopener noreferrer nofollow">', '<% if (settings.title !== "") { %>', '<%- settings.title %>', '<% } else { %>', '<%- feed.title %>', '<% } %>', '</a>', '</header>'],
    posts: ['<div class="o-feed__items" style="', 'border-color: <%- settings.postBorderColor %>;', '">', '<% _each(items, function(post) { %>', '<div class="c-feed-item <%- settings.classes.feedItem %>">', '<h4 class="c-feed-item__title <%- settings.classes.title %>">', '<a class="c-feed-item__link <%- settings.classes.link %>"', 'href="<%- post.guid %>"', 'target="_blank"', 'rel="noopener noreferrer nofollow">', '<%- post.title %>', '</a>', '</h4>', '<span class="c-feed-item__date <%- settings.classes.date %>" ', 'title="<%- settings.postDateTitle %>">', '<%- post.date %>', '</span>', '<div class="c-feed-item__thumbnail <%- settings.classes.thumbnail %>"', 'style="', 'background-image: url(<%- post.thumbnail %>);', 'height: <%- settings.postImgHeight %>;"', 'aria-hidden="true">', '<img style="display: none;" src="<%- post.thumbnail %>" alt="<%- post.title %>">', '</div>', '<p class="c-feed-item__excerpt <%- settings.classes.excerpt %>">', '<%- post.excerpt %><%- settings.postExcerptTrail %>', '</p>', '<div class="c-feed-item__footer <%- settings.classes.itemFooter %>">', '<a class="c-feed-item__cta <%- settings.classes.cta %>" ', 'href="<%- post.guid %>" ', 'target="_blank" ', 'rel="noopener noreferrer nofollow">', '<%- settings.postCtaText %>', '</a>', '</div>', '</div>', '<% }); %>', '</div>'],
    closer: ['</section>']
  }
};
/**
 * Functions for processing the data based on the feed type.
 * @type {Object}
 */

Feed.process = {
  medium: function medium(data, settings) {
    var length = settings.postExcerptLength;

    forEach(data.items, function (post, index) {
      var excerpt = '';
      var date = ''; // Remove figures first

      excerpt = post.description.replace(/<figure.*>.*?<\/figure>/g, ''); // Remove all tags

      excerpt = excerpt.replace(/<(.|\n)*?>/g, ''); // Trim the excerpt

      excerpt = excerpt.substr(0, length);
      excerpt = excerpt.substr(0, Math.min(excerpt.length, excerpt.lastIndexOf(' ')));
      post.excerpt = excerpt; // Format the date

      date = new Date(Date.parse(post.pubDate.replace(' ', 'T'))).toLocaleDateString(settings.postDateLocal, settings.postDateFormat);
      post.date = date;
      return post;
    });

    return data;
  }
  /**
   * Functions for merging the data feeds together, based on the feed type.
   * @type {Object}
   */

};
Feed.merge = {
  medium: function medium(data) {
    var merged = {};
    var items = []; // Combine the post items

    data.forEach(function (feed) {
      items = items.concat(feed.items);
    }); // Merge the data, this will override values, it probably won't be
    // particularly useful for feeds that are the same, but potentially
    // different feed types could use this and combine unique data

    data.forEach(function (feed) {
      merged = merge(merged, feed);
    }); // Get unique posts
    // items = _uniqBy(items, (item) => item.guid);

    merged.items = orderBy(items, 'pubDate', 'desc');
    return merged;
  }
  /**
   * See https://rss2json.com/docs for details on default parameters
   * @type {Object}
   */

};
Feed.default = {
  feed: '',
  selector: '#js-feed',
  type: 'medium',
  title: '',
  titleUrl: '',
  profileImg: '',
  fontSize: '',
  ratioProfile: ['50', '50'],
  postBorderColor: 'lightsteelblue',
  postImgHeight: '200px',
  postExcerptLength: 120,
  postExcerptTrail: '…',
  postCtaText: 'Read the full post',
  postDateLocal: 'en-US',
  postDateFormat: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  postDateTitle: 'Published Date',
  classes: {
    wrapper: '',
    header: '',
    url: '',
    feedItem: '',
    title: '',
    link: '',
    thumbnail: '',
    excerpt: '',
    itemFooter: '',
    cta: '',
    date: ''
  },
  templates: {
    opener: Feed.templates.medium.opener.join(''),
    header: Feed.templates.medium.header.join(''),
    posts: Feed.templates.medium.posts.join(''),
    closer: Feed.templates.medium.closer.join('')
  },
  log: false,
  unique: false
};

module.exports = Feed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlZC5jb21tb24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNGdW5jdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcmVKc0RhdGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc01hc2tlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvU291cmNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzTmF0aXZlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VmFsdWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXROYXRpdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZXEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NpZ25WYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlPYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lkZW50aXR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXBwbHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyUmVzdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvY29uc3RhbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU2V0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zaG9ydE91dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3NldFRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVJlc3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzTGVuZ3RoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5TGlrZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzSW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NyZWF0ZUFzc2lnbmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRpbWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zdHViRmFsc2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQnVmZmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VVbmFyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUxpa2VLZXlzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNQcm90b3R5cGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzSW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlS2V5c0luLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9rZXlzSW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2Fzc2lnbkluV2l0aC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX292ZXJBcmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRXJyb3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2F0dGVtcHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheU1hcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VWYWx1ZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jdXN0b21EZWZhdWx0c0Fzc2lnbkluLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXNjYXBlU3RyaW5nQ2hhci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlS2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMva2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3JlSW50ZXJwb2xhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlUHJvcGVydHlPZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2VzY2FwZUh0bWxDaGFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VUb1N0cmluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2VzY2FwZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3JlRXNjYXBlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcmVFdmFsdWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdGVtcGxhdGVTZXR0aW5ncy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdGVtcGxhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUVhY2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jcmVhdGVCYXNlRm9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUZvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VGb3JPd24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jcmVhdGVCYXNlRWFjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VFYWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FzdEZ1bmN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9mb3JFYWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlQ2xlYXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NvY0luZGV4T2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVEZWxldGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVHZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVIYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVTZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19MaXN0Q2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0NsZWFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tEZWxldGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0dldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3N0YWNrSGFzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaENsZWFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaERlbGV0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hHZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoSGFzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaFNldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNLZXlhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0TWFwRGF0YS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVHZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUhhcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlU2V0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwQ2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja1NldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N0YWNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXNzaWduTWVyZ2VWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lQnVmZmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fVWludDhBcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jbG9uZVR5cGVkQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3B5QXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faW5pdENsb25lT2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5TGlrZU9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3NhZmVHZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3RvUGxhaW5PYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlTWVyZ2VEZWVwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1lcmdlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZXJnZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdmFsdWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc2V0Q2FjaGVBZGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zZXRDYWNoZUhhcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1NldENhY2hlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlTb21lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FjaGVIYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19lcXVhbEFycmF5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcFRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zZXRUb0FycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXF1YWxCeVRhZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5UHVzaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlGaWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3N0dWJBcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFN5bWJvbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRBbGxLZXlzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXF1YWxPYmplY3RzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fRGF0YVZpZXcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19Qcm9taXNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU2V0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fV2Vha01hcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFRhZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0VxdWFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzTWF0Y2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRNYXRjaERhdGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VNYXRjaGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNLZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21lbW9pemUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tZW1vaXplQ2FwcGVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RyaW5nVG9QYXRoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FzdFBhdGguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL190b0tleS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2dldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VIYXNJbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc1BhdGguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2hhc0luLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Byb3BlcnR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUl0ZXJhdGVlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1hcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VTb3J0QnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb21wYXJlQXNjZW5kaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29tcGFyZU11bHRpcGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU9yZGVyQnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL29yZGVyQnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlRmluZEluZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzTmFOLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RyaWN0SW5kZXhPZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ub29wLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY3JlYXRlU2V0LmpzIiwiLi4vLi4vLi4vc3JjL29iamVjdHMvZmVlZC9GZWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlSnNEYXRhO1xuIiwiaW1wb3J0IGNvcmVKc0RhdGEgZnJvbSAnLi9fY29yZUpzRGF0YS5qcyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1NvdXJjZTtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNNYXNrZWQgZnJvbSAnLi9faXNNYXNrZWQuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lUHJvcGVydHk7XG4iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSAnLi9fZGVmaW5lUHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduVmFsdWU7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXE7XG4iLCJpbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vX2Jhc2VBc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnblZhbHVlO1xuIiwiaW1wb3J0IGFzc2lnblZhbHVlIGZyb20gJy4vX2Fzc2lnblZhbHVlLmpzJztcbmltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlPYmplY3Q7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpZGVudGl0eTtcbiIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHk7XG4iLCJpbXBvcnQgYXBwbHkgZnJvbSAnLi9fYXBwbHkuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyUmVzdDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudDtcbiIsImltcG9ydCBjb25zdGFudCBmcm9tICcuL2NvbnN0YW50LmpzJztcbmltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tICcuL19kZWZpbmVQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlU2V0VG9TdHJpbmc7XG4iLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3J0T3V0O1xuIiwiaW1wb3J0IGJhc2VTZXRUb1N0cmluZyBmcm9tICcuL19iYXNlU2V0VG9TdHJpbmcuanMnO1xuaW1wb3J0IHNob3J0T3V0IGZyb20gJy4vX3Nob3J0T3V0LmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9TdHJpbmc7XG4iLCJpbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5pbXBvcnQgb3ZlclJlc3QgZnJvbSAnLi9fb3ZlclJlc3QuanMnO1xuaW1wb3J0IHNldFRvU3RyaW5nIGZyb20gJy4vX3NldFRvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VSZXN0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0xlbmd0aDtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNMZW5ndGggZnJvbSAnLi9pc0xlbmd0aC5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5TGlrZTtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNJbmRleDtcbiIsImltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBpc0luZGV4IGZyb20gJy4vX2lzSW5kZXguanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzSXRlcmF0ZWVDYWxsO1xuIiwiaW1wb3J0IGJhc2VSZXN0IGZyb20gJy4vX2Jhc2VSZXN0LmpzJztcbmltcG9ydCBpc0l0ZXJhdGVlQ2FsbCBmcm9tICcuL19pc0l0ZXJhdGVlQ2FsbC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRpbWVzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0FyZ3VtZW50cztcbiIsImltcG9ydCBiYXNlSXNBcmd1bWVudHMgZnJvbSAnLi9fYmFzZUlzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R1YkZhbHNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5pbXBvcnQgc3R1YkZhbHNlIGZyb20gJy4vc3R1YkZhbHNlLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBpc0J1ZmZlcjtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVVuYXJ5O1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVVdGlsO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiaW1wb3J0IGJhc2VUaW1lcyBmcm9tICcuL19iYXNlVGltZXMuanMnO1xuaW1wb3J0IGlzQXJndW1lbnRzIGZyb20gJy4vaXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc0J1ZmZlciBmcm9tICcuL2lzQnVmZmVyLmpzJztcbmltcG9ydCBpc0luZGV4IGZyb20gJy4vX2lzSW5kZXguanMnO1xuaW1wb3J0IGlzVHlwZWRBcnJheSBmcm9tICcuL2lzVHlwZWRBcnJheS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlMaWtlS2V5cztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlS2V5c0luO1xuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzUHJvdG90eXBlIGZyb20gJy4vX2lzUHJvdG90eXBlLmpzJztcbmltcG9ydCBuYXRpdmVLZXlzSW4gZnJvbSAnLi9fbmF0aXZlS2V5c0luLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUtleXNJbjtcbiIsImltcG9ydCBhcnJheUxpa2VLZXlzIGZyb20gJy4vX2FycmF5TGlrZUtleXMuanMnO1xuaW1wb3J0IGJhc2VLZXlzSW4gZnJvbSAnLi9fYmFzZUtleXNJbi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzSW47XG4iLCJpbXBvcnQgY29weU9iamVjdCBmcm9tICcuL19jb3B5T2JqZWN0LmpzJztcbmltcG9ydCBjcmVhdGVBc3NpZ25lciBmcm9tICcuL19jcmVhdGVBc3NpZ25lci5qcyc7XG5pbXBvcnQga2V5c0luIGZyb20gJy4va2V5c0luLmpzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbkluYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBjdXN0b21pemVyYFxuICogd2hpY2ggaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBhc3NpZ25lZCB2YWx1ZXMuIElmIGBjdXN0b21pemVyYCByZXR1cm5zXG4gKiBgdW5kZWZpbmVkYCwgYXNzaWdubWVudCBpcyBoYW5kbGVkIGJ5IHRoZSBtZXRob2QgaW5zdGVhZC4gVGhlIGBjdXN0b21pemVyYFxuICogaXMgaW52b2tlZCB3aXRoIGZpdmUgYXJndW1lbnRzOiAob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlKS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAYWxpYXMgZXh0ZW5kV2l0aFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IHNvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25XaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlKSB7XG4gKiAgIHJldHVybiBfLmlzVW5kZWZpbmVkKG9ialZhbHVlKSA/IHNyY1ZhbHVlIDogb2JqVmFsdWU7XG4gKiB9XG4gKlxuICogdmFyIGRlZmF1bHRzID0gXy5wYXJ0aWFsUmlnaHQoXy5hc3NpZ25JbldpdGgsIGN1c3RvbWl6ZXIpO1xuICpcbiAqIGRlZmF1bHRzKHsgJ2EnOiAxIH0sIHsgJ2InOiAyIH0sIHsgJ2EnOiAzIH0pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKi9cbnZhciBhc3NpZ25JbldpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QsIGN1c3RvbWl6ZXIpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnbkluV2l0aDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGRvbUV4Y1RhZyA9ICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhbiBgRXJyb3JgLCBgRXZhbEVycm9yYCwgYFJhbmdlRXJyb3JgLCBgUmVmZXJlbmNlRXJyb3JgLFxuICogYFN5bnRheEVycm9yYCwgYFR5cGVFcnJvcmAsIG9yIGBVUklFcnJvcmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRXJyb3IobmV3IEVycm9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRXJyb3IoRXJyb3IpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcnJvcih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGVycm9yVGFnIHx8IHRhZyA9PSBkb21FeGNUYWcgfHxcbiAgICAodHlwZW9mIHZhbHVlLm1lc3NhZ2UgPT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gJ3N0cmluZycgJiYgIWlzUGxhaW5PYmplY3QodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNFcnJvcjtcbiIsImltcG9ydCBhcHBseSBmcm9tICcuL19hcHBseS5qcyc7XG5pbXBvcnQgYmFzZVJlc3QgZnJvbSAnLi9fYmFzZVJlc3QuanMnO1xuaW1wb3J0IGlzRXJyb3IgZnJvbSAnLi9pc0Vycm9yLmpzJztcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBpbnZva2UgYGZ1bmNgLCByZXR1cm5pbmcgZWl0aGVyIHRoZSByZXN1bHQgb3IgdGhlIGNhdWdodCBlcnJvclxuICogb2JqZWN0LiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIHRvIGBmdW5jYCB3aGVuIGl0J3MgaW52b2tlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXR0ZW1wdC5cbiAqIEBwYXJhbSB7Li4uKn0gW2FyZ3NdIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGBmdW5jYCByZXN1bHQgb3IgZXJyb3Igb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCB0aHJvd2luZyBlcnJvcnMgZm9yIGludmFsaWQgc2VsZWN0b3JzLlxuICogdmFyIGVsZW1lbnRzID0gXy5hdHRlbXB0KGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gKiAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAqIH0sICc+Xz4nKTtcbiAqXG4gKiBpZiAoXy5pc0Vycm9yKGVsZW1lbnRzKSkge1xuICogICBlbGVtZW50cyA9IFtdO1xuICogfVxuICovXG52YXIgYXR0ZW1wdCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmMsIGFyZ3MpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBpc0Vycm9yKGUpID8gZSA6IG5ldyBFcnJvcihlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF0dGVtcHQ7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheU1hcDtcbiIsImltcG9ydCBhcnJheU1hcCBmcm9tICcuL19hcnJheU1hcC5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udmFsdWVzYCBhbmQgYF8udmFsdWVzSW5gIHdoaWNoIGNyZWF0ZXMgYW5cbiAqIGFycmF5IG9mIGBvYmplY3RgIHByb3BlcnR5IHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eSBuYW1lc1xuICogb2YgYHByb3BzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGdldCB2YWx1ZXMgZm9yLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlVmFsdWVzKG9iamVjdCwgcHJvcHMpIHtcbiAgcmV0dXJuIGFycmF5TWFwKHByb3BzLCBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVmFsdWVzO1xuIiwiaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVmYXVsdHNgIHRvIGN1c3RvbWl6ZSBpdHMgYF8uYXNzaWduSW5gIHVzZSB0byBhc3NpZ24gcHJvcGVydGllc1xuICogb2Ygc291cmNlIG9iamVjdHMgdG8gdGhlIGRlc3RpbmF0aW9uIG9iamVjdCBmb3IgYWxsIGRlc3RpbmF0aW9uIHByb3BlcnRpZXNcbiAqIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBvYmpWYWx1ZSBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHBhcmVudCBvYmplY3Qgb2YgYG9ialZhbHVlYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGN1c3RvbURlZmF1bHRzQXNzaWduSW4ob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCkge1xuICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgKGVxKG9ialZhbHVlLCBvYmplY3RQcm90b1trZXldKSAmJiAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSB7XG4gICAgcmV0dXJuIHNyY1ZhbHVlO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tRGVmYXVsdHNBc3NpZ25JbjtcbiIsIi8qKiBVc2VkIHRvIGVzY2FwZSBjaGFyYWN0ZXJzIGZvciBpbmNsdXNpb24gaW4gY29tcGlsZWQgc3RyaW5nIGxpdGVyYWxzLiAqL1xudmFyIHN0cmluZ0VzY2FwZXMgPSB7XG4gICdcXFxcJzogJ1xcXFwnLFxuICBcIidcIjogXCInXCIsXG4gICdcXG4nOiAnbicsXG4gICdcXHInOiAncicsXG4gICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgJ1xcdTIwMjknOiAndTIwMjknXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udGVtcGxhdGVgIHRvIGVzY2FwZSBjaGFyYWN0ZXJzIGZvciBpbmNsdXNpb24gaW4gY29tcGlsZWQgc3RyaW5nIGxpdGVyYWxzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hyIFRoZSBtYXRjaGVkIGNoYXJhY3RlciB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nQ2hhcihjaHIpIHtcbiAgcmV0dXJuICdcXFxcJyArIHN0cmluZ0VzY2FwZXNbY2hyXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXNjYXBlU3RyaW5nQ2hhcjtcbiIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUtleXM7XG4iLCJpbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXMgZnJvbSAnLi9fbmF0aXZlS2V5cy5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUtleXM7XG4iLCJpbXBvcnQgYXJyYXlMaWtlS2V5cyBmcm9tICcuL19hcnJheUxpa2VLZXlzLmpzJztcbmltcG9ydCBiYXNlS2V5cyBmcm9tICcuL19iYXNlS2V5cy5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggdGVtcGxhdGUgZGVsaW1pdGVycy4gKi9cbnZhciByZUludGVycG9sYXRlID0gLzwlPShbXFxzXFxTXSs/KSU+L2c7XG5cbmV4cG9ydCBkZWZhdWx0IHJlSW50ZXJwb2xhdGU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VQcm9wZXJ0eU9mO1xuIiwiaW1wb3J0IGJhc2VQcm9wZXJ0eU9mIGZyb20gJy4vX2Jhc2VQcm9wZXJ0eU9mLmpzJztcblxuLyoqIFVzZWQgdG8gbWFwIGNoYXJhY3RlcnMgdG8gSFRNTCBlbnRpdGllcy4gKi9cbnZhciBodG1sRXNjYXBlcyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjMzk7J1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmVzY2FwZWAgdG8gY29udmVydCBjaGFyYWN0ZXJzIHRvIEhUTUwgZW50aXRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaHIgVGhlIG1hdGNoZWQgY2hhcmFjdGVyIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGVzY2FwZWQgY2hhcmFjdGVyLlxuICovXG52YXIgZXNjYXBlSHRtbENoYXIgPSBiYXNlUHJvcGVydHlPZihodG1sRXNjYXBlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGVzY2FwZUh0bWxDaGFyO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1N5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuL19hcnJheU1hcC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVG9TdHJpbmc7XG4iLCJpbXBvcnQgYmFzZVRvU3RyaW5nIGZyb20gJy4vX2Jhc2VUb1N0cmluZy5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmc7XG4iLCJpbXBvcnQgZXNjYXBlSHRtbENoYXIgZnJvbSAnLi9fZXNjYXBlSHRtbENoYXIuanMnO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJy4vdG9TdHJpbmcuanMnO1xuXG4vKiogVXNlZCB0byBtYXRjaCBIVE1MIGVudGl0aWVzIGFuZCBIVE1MIGNoYXJhY3RlcnMuICovXG52YXIgcmVVbmVzY2FwZWRIdG1sID0gL1smPD5cIiddL2csXG4gICAgcmVIYXNVbmVzY2FwZWRIdG1sID0gUmVnRXhwKHJlVW5lc2NhcGVkSHRtbC5zb3VyY2UpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBjaGFyYWN0ZXJzIFwiJlwiLCBcIjxcIiwgXCI+XCIsICdcIicsIGFuZCBcIidcIiBpbiBgc3RyaW5nYCB0byB0aGVpclxuICogY29ycmVzcG9uZGluZyBIVE1MIGVudGl0aWVzLlxuICpcbiAqICoqTm90ZToqKiBObyBvdGhlciBjaGFyYWN0ZXJzIGFyZSBlc2NhcGVkLiBUbyBlc2NhcGUgYWRkaXRpb25hbFxuICogY2hhcmFjdGVycyB1c2UgYSB0aGlyZC1wYXJ0eSBsaWJyYXJ5IGxpa2UgW19oZV9dKGh0dHBzOi8vbXRocy5iZS9oZSkuXG4gKlxuICogVGhvdWdoIHRoZSBcIj5cIiBjaGFyYWN0ZXIgaXMgZXNjYXBlZCBmb3Igc3ltbWV0cnksIGNoYXJhY3RlcnMgbGlrZVxuICogXCI+XCIgYW5kIFwiL1wiIGRvbid0IG5lZWQgZXNjYXBpbmcgaW4gSFRNTCBhbmQgaGF2ZSBubyBzcGVjaWFsIG1lYW5pbmdcbiAqIHVubGVzcyB0aGV5J3JlIHBhcnQgb2YgYSB0YWcgb3IgdW5xdW90ZWQgYXR0cmlidXRlIHZhbHVlLiBTZWVcbiAqIFtNYXRoaWFzIEJ5bmVucydzIGFydGljbGVdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9hbWJpZ3VvdXMtYW1wZXJzYW5kcylcbiAqICh1bmRlciBcInNlbWktcmVsYXRlZCBmdW4gZmFjdFwiKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFdoZW4gd29ya2luZyB3aXRoIEhUTUwgeW91IHNob3VsZCBhbHdheXNcbiAqIFtxdW90ZSBhdHRyaWJ1dGUgdmFsdWVzXShodHRwOi8vd29ua28uY29tL3Bvc3QvaHRtbC1lc2NhcGluZykgdG8gcmVkdWNlXG4gKiBYU1MgdmVjdG9ycy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5lc2NhcGUoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiAnZnJlZCwgYmFybmV5LCAmYW1wOyBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiBlc2NhcGUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiAoc3RyaW5nICYmIHJlSGFzVW5lc2NhcGVkSHRtbC50ZXN0KHN0cmluZykpXG4gICAgPyBzdHJpbmcucmVwbGFjZShyZVVuZXNjYXBlZEh0bWwsIGVzY2FwZUh0bWxDaGFyKVxuICAgIDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlc2NhcGU7XG4iLCIvKiogVXNlZCB0byBtYXRjaCB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLiAqL1xudmFyIHJlRXNjYXBlID0gLzwlLShbXFxzXFxTXSs/KSU+L2c7XG5cbmV4cG9ydCBkZWZhdWx0IHJlRXNjYXBlO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggdGVtcGxhdGUgZGVsaW1pdGVycy4gKi9cbnZhciByZUV2YWx1YXRlID0gLzwlKFtcXHNcXFNdKz8pJT4vZztcblxuZXhwb3J0IGRlZmF1bHQgcmVFdmFsdWF0ZTtcbiIsImltcG9ydCBlc2NhcGUgZnJvbSAnLi9lc2NhcGUuanMnO1xuaW1wb3J0IHJlRXNjYXBlIGZyb20gJy4vX3JlRXNjYXBlLmpzJztcbmltcG9ydCByZUV2YWx1YXRlIGZyb20gJy4vX3JlRXZhbHVhdGUuanMnO1xuaW1wb3J0IHJlSW50ZXJwb2xhdGUgZnJvbSAnLi9fcmVJbnRlcnBvbGF0ZS5qcyc7XG5cbi8qKlxuICogQnkgZGVmYXVsdCwgdGhlIHRlbXBsYXRlIGRlbGltaXRlcnMgdXNlZCBieSBsb2Rhc2ggYXJlIGxpa2UgdGhvc2UgaW5cbiAqIGVtYmVkZGVkIFJ1YnkgKEVSQikgYXMgd2VsbCBhcyBFUzIwMTUgdGVtcGxhdGUgc3RyaW5ncy4gQ2hhbmdlIHRoZVxuICogZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgdGVtcGxhdGVTZXR0aW5ncyA9IHtcblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlY3QgYGRhdGFgIHByb3BlcnR5IHZhbHVlcyB0byBiZSBIVE1MLWVzY2FwZWQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICogQHR5cGUge1JlZ0V4cH1cbiAgICovXG4gICdlc2NhcGUnOiByZUVzY2FwZSxcblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlY3QgY29kZSB0byBiZSBldmFsdWF0ZWQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICogQHR5cGUge1JlZ0V4cH1cbiAgICovXG4gICdldmFsdWF0ZSc6IHJlRXZhbHVhdGUsXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZGV0ZWN0IGBkYXRhYCBwcm9wZXJ0eSB2YWx1ZXMgdG8gaW5qZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgXy50ZW1wbGF0ZVNldHRpbmdzXG4gICAqIEB0eXBlIHtSZWdFeHB9XG4gICAqL1xuICAnaW50ZXJwb2xhdGUnOiByZUludGVycG9sYXRlLFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHJlZmVyZW5jZSB0aGUgZGF0YSBvYmplY3QgaW4gdGhlIHRlbXBsYXRlIHRleHQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICd2YXJpYWJsZSc6ICcnLFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGltcG9ydCB2YXJpYWJsZXMgaW50byB0aGUgY29tcGlsZWQgdGVtcGxhdGUuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBfLnRlbXBsYXRlU2V0dGluZ3NcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gICdpbXBvcnRzJzoge1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGBsb2Rhc2hgIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIF8udGVtcGxhdGVTZXR0aW5ncy5pbXBvcnRzXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgICdfJzogeyAnZXNjYXBlJzogZXNjYXBlIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVTZXR0aW5ncztcbiIsImltcG9ydCBhc3NpZ25JbldpdGggZnJvbSAnLi9hc3NpZ25JbldpdGguanMnO1xuaW1wb3J0IGF0dGVtcHQgZnJvbSAnLi9hdHRlbXB0LmpzJztcbmltcG9ydCBiYXNlVmFsdWVzIGZyb20gJy4vX2Jhc2VWYWx1ZXMuanMnO1xuaW1wb3J0IGN1c3RvbURlZmF1bHRzQXNzaWduSW4gZnJvbSAnLi9fY3VzdG9tRGVmYXVsdHNBc3NpZ25Jbi5qcyc7XG5pbXBvcnQgZXNjYXBlU3RyaW5nQ2hhciBmcm9tICcuL19lc2NhcGVTdHJpbmdDaGFyLmpzJztcbmltcG9ydCBpc0Vycm9yIGZyb20gJy4vaXNFcnJvci5qcyc7XG5pbXBvcnQgaXNJdGVyYXRlZUNhbGwgZnJvbSAnLi9faXNJdGVyYXRlZUNhbGwuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcbmltcG9ydCByZUludGVycG9sYXRlIGZyb20gJy4vX3JlSW50ZXJwb2xhdGUuanMnO1xuaW1wb3J0IHRlbXBsYXRlU2V0dGluZ3MgZnJvbSAnLi90ZW1wbGF0ZVNldHRpbmdzLmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggZW1wdHkgc3RyaW5nIGxpdGVyYWxzIGluIGNvbXBpbGVkIHRlbXBsYXRlIHNvdXJjZS4gKi9cbnZhciByZUVtcHR5U3RyaW5nTGVhZGluZyA9IC9cXGJfX3AgXFwrPSAnJzsvZyxcbiAgICByZUVtcHR5U3RyaW5nTWlkZGxlID0gL1xcYihfX3AgXFwrPSkgJycgXFwrL2csXG4gICAgcmVFbXB0eVN0cmluZ1RyYWlsaW5nID0gLyhfX2VcXCguKj9cXCl8XFxiX190XFwpKSBcXCtcXG4nJzsvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoXG4gKiBbRVMgdGVtcGxhdGUgZGVsaW1pdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdGVtcGxhdGUtbGl0ZXJhbC1sZXhpY2FsLWNvbXBvbmVudHMpLlxuICovXG52YXIgcmVFc1RlbXBsYXRlID0gL1xcJFxceyhbXlxcXFx9XSooPzpcXFxcLlteXFxcXH1dKikqKVxcfS9nO1xuXG4vKiogVXNlZCB0byBlbnN1cmUgY2FwdHVyaW5nIG9yZGVyIG9mIHRlbXBsYXRlIGRlbGltaXRlcnMuICovXG52YXIgcmVOb01hdGNoID0gLygkXikvO1xuXG4vKiogVXNlZCB0byBtYXRjaCB1bmVzY2FwZWQgY2hhcmFjdGVycyBpbiBjb21waWxlZCBzdHJpbmcgbGl0ZXJhbHMuICovXG52YXIgcmVVbmVzY2FwZWRTdHJpbmcgPSAvWydcXG5cXHJcXHUyMDI4XFx1MjAyOVxcXFxdL2c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbXBpbGVkIHRlbXBsYXRlIGZ1bmN0aW9uIHRoYXQgY2FuIGludGVycG9sYXRlIGRhdGEgcHJvcGVydGllc1xuICogaW4gXCJpbnRlcnBvbGF0ZVwiIGRlbGltaXRlcnMsIEhUTUwtZXNjYXBlIGludGVycG9sYXRlZCBkYXRhIHByb3BlcnRpZXMgaW5cbiAqIFwiZXNjYXBlXCIgZGVsaW1pdGVycywgYW5kIGV4ZWN1dGUgSmF2YVNjcmlwdCBpbiBcImV2YWx1YXRlXCIgZGVsaW1pdGVycy4gRGF0YVxuICogcHJvcGVydGllcyBtYXkgYmUgYWNjZXNzZWQgYXMgZnJlZSB2YXJpYWJsZXMgaW4gdGhlIHRlbXBsYXRlLiBJZiBhIHNldHRpbmdcbiAqIG9iamVjdCBpcyBnaXZlbiwgaXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGBfLnRlbXBsYXRlU2V0dGluZ3NgIHZhbHVlcy5cbiAqXG4gKiAqKk5vdGU6KiogSW4gdGhlIGRldmVsb3BtZW50IGJ1aWxkIGBfLnRlbXBsYXRlYCB1dGlsaXplc1xuICogW3NvdXJjZVVSTHNdKGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL2RldmVsb3BlcnRvb2xzL3NvdXJjZW1hcHMvI3RvYy1zb3VyY2V1cmwpXG4gKiBmb3IgZWFzaWVyIGRlYnVnZ2luZy5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBwcmVjb21waWxpbmcgdGVtcGxhdGVzIHNlZVxuICogW2xvZGFzaCdzIGN1c3RvbSBidWlsZHMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9sb2Rhc2guY29tL2N1c3RvbS1idWlsZHMpLlxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIENocm9tZSBleHRlbnNpb24gc2FuZGJveGVzIHNlZVxuICogW0Nocm9tZSdzIGV4dGVuc2lvbnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL3NhbmRib3hpbmdFdmFsKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHRlbXBsYXRlIHN0cmluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtSZWdFeHB9IFtvcHRpb25zLmVzY2FwZT1fLnRlbXBsYXRlU2V0dGluZ3MuZXNjYXBlXVxuICogIFRoZSBIVE1MIFwiZXNjYXBlXCIgZGVsaW1pdGVyLlxuICogQHBhcmFtIHtSZWdFeHB9IFtvcHRpb25zLmV2YWx1YXRlPV8udGVtcGxhdGVTZXR0aW5ncy5ldmFsdWF0ZV1cbiAqICBUaGUgXCJldmFsdWF0ZVwiIGRlbGltaXRlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5pbXBvcnRzPV8udGVtcGxhdGVTZXR0aW5ncy5pbXBvcnRzXVxuICogIEFuIG9iamVjdCB0byBpbXBvcnQgaW50byB0aGUgdGVtcGxhdGUgYXMgZnJlZSB2YXJpYWJsZXMuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gW29wdGlvbnMuaW50ZXJwb2xhdGU9Xy50ZW1wbGF0ZVNldHRpbmdzLmludGVycG9sYXRlXVxuICogIFRoZSBcImludGVycG9sYXRlXCIgZGVsaW1pdGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNvdXJjZVVSTD0ndGVtcGxhdGVTb3VyY2VzW25dJ11cbiAqICBUaGUgc291cmNlVVJMIG9mIHRoZSBjb21waWxlZCB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy52YXJpYWJsZT0nb2JqJ11cbiAqICBUaGUgZGF0YSBvYmplY3QgdmFyaWFibGUgbmFtZS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNvbXBpbGVkIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBVc2UgdGhlIFwiaW50ZXJwb2xhdGVcIiBkZWxpbWl0ZXIgdG8gY3JlYXRlIGEgY29tcGlsZWQgdGVtcGxhdGUuXG4gKiB2YXIgY29tcGlsZWQgPSBfLnRlbXBsYXRlKCdoZWxsbyA8JT0gdXNlciAlPiEnKTtcbiAqIGNvbXBpbGVkKHsgJ3VzZXInOiAnZnJlZCcgfSk7XG4gKiAvLyA9PiAnaGVsbG8gZnJlZCEnXG4gKlxuICogLy8gVXNlIHRoZSBIVE1MIFwiZXNjYXBlXCIgZGVsaW1pdGVyIHRvIGVzY2FwZSBkYXRhIHByb3BlcnR5IHZhbHVlcy5cbiAqIHZhciBjb21waWxlZCA9IF8udGVtcGxhdGUoJzxiPjwlLSB2YWx1ZSAlPjwvYj4nKTtcbiAqIGNvbXBpbGVkKHsgJ3ZhbHVlJzogJzxzY3JpcHQ+JyB9KTtcbiAqIC8vID0+ICc8Yj4mbHQ7c2NyaXB0Jmd0OzwvYj4nXG4gKlxuICogLy8gVXNlIHRoZSBcImV2YWx1YXRlXCIgZGVsaW1pdGVyIHRvIGV4ZWN1dGUgSmF2YVNjcmlwdCBhbmQgZ2VuZXJhdGUgSFRNTC5cbiAqIHZhciBjb21waWxlZCA9IF8udGVtcGxhdGUoJzwlIF8uZm9yRWFjaCh1c2VycywgZnVuY3Rpb24odXNlcikgeyAlPjxsaT48JS0gdXNlciAlPjwvbGk+PCUgfSk7ICU+Jyk7XG4gKiBjb21waWxlZCh7ICd1c2Vycyc6IFsnZnJlZCcsICdiYXJuZXknXSB9KTtcbiAqIC8vID0+ICc8bGk+ZnJlZDwvbGk+PGxpPmJhcm5leTwvbGk+J1xuICpcbiAqIC8vIFVzZSB0aGUgaW50ZXJuYWwgYHByaW50YCBmdW5jdGlvbiBpbiBcImV2YWx1YXRlXCIgZGVsaW1pdGVycy5cbiAqIHZhciBjb21waWxlZCA9IF8udGVtcGxhdGUoJzwlIHByaW50KFwiaGVsbG8gXCIgKyB1c2VyKTsgJT4hJyk7XG4gKiBjb21waWxlZCh7ICd1c2VyJzogJ2Jhcm5leScgfSk7XG4gKiAvLyA9PiAnaGVsbG8gYmFybmV5ISdcbiAqXG4gKiAvLyBVc2UgdGhlIEVTIHRlbXBsYXRlIGxpdGVyYWwgZGVsaW1pdGVyIGFzIGFuIFwiaW50ZXJwb2xhdGVcIiBkZWxpbWl0ZXIuXG4gKiAvLyBEaXNhYmxlIHN1cHBvcnQgYnkgcmVwbGFjaW5nIHRoZSBcImludGVycG9sYXRlXCIgZGVsaW1pdGVyLlxuICogdmFyIGNvbXBpbGVkID0gXy50ZW1wbGF0ZSgnaGVsbG8gJHsgdXNlciB9IScpO1xuICogY29tcGlsZWQoeyAndXNlcic6ICdwZWJibGVzJyB9KTtcbiAqIC8vID0+ICdoZWxsbyBwZWJibGVzISdcbiAqXG4gKiAvLyBVc2UgYmFja3NsYXNoZXMgdG8gdHJlYXQgZGVsaW1pdGVycyBhcyBwbGFpbiB0ZXh0LlxuICogdmFyIGNvbXBpbGVkID0gXy50ZW1wbGF0ZSgnPCU9IFwiXFxcXDwlLSB2YWx1ZSAlXFxcXD5cIiAlPicpO1xuICogY29tcGlsZWQoeyAndmFsdWUnOiAnaWdub3JlZCcgfSk7XG4gKiAvLyA9PiAnPCUtIHZhbHVlICU+J1xuICpcbiAqIC8vIFVzZSB0aGUgYGltcG9ydHNgIG9wdGlvbiB0byBpbXBvcnQgYGpRdWVyeWAgYXMgYGpxYC5cbiAqIHZhciB0ZXh0ID0gJzwlIGpxLmVhY2godXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHsgJT48bGk+PCUtIHVzZXIgJT48L2xpPjwlIH0pOyAlPic7XG4gKiB2YXIgY29tcGlsZWQgPSBfLnRlbXBsYXRlKHRleHQsIHsgJ2ltcG9ydHMnOiB7ICdqcSc6IGpRdWVyeSB9IH0pO1xuICogY29tcGlsZWQoeyAndXNlcnMnOiBbJ2ZyZWQnLCAnYmFybmV5J10gfSk7XG4gKiAvLyA9PiAnPGxpPmZyZWQ8L2xpPjxsaT5iYXJuZXk8L2xpPidcbiAqXG4gKiAvLyBVc2UgdGhlIGBzb3VyY2VVUkxgIG9wdGlvbiB0byBzcGVjaWZ5IGEgY3VzdG9tIHNvdXJjZVVSTCBmb3IgdGhlIHRlbXBsYXRlLlxuICogdmFyIGNvbXBpbGVkID0gXy50ZW1wbGF0ZSgnaGVsbG8gPCU9IHVzZXIgJT4hJywgeyAnc291cmNlVVJMJzogJy9iYXNpYy9ncmVldGluZy5qc3QnIH0pO1xuICogY29tcGlsZWQoZGF0YSk7XG4gKiAvLyA9PiBGaW5kIHRoZSBzb3VyY2Ugb2YgXCJncmVldGluZy5qc3RcIiB1bmRlciB0aGUgU291cmNlcyB0YWIgb3IgUmVzb3VyY2VzIHBhbmVsIG9mIHRoZSB3ZWIgaW5zcGVjdG9yLlxuICpcbiAqIC8vIFVzZSB0aGUgYHZhcmlhYmxlYCBvcHRpb24gdG8gZW5zdXJlIGEgd2l0aC1zdGF0ZW1lbnQgaXNuJ3QgdXNlZCBpbiB0aGUgY29tcGlsZWQgdGVtcGxhdGUuXG4gKiB2YXIgY29tcGlsZWQgPSBfLnRlbXBsYXRlKCdoaSA8JT0gZGF0YS51c2VyICU+IScsIHsgJ3ZhcmlhYmxlJzogJ2RhdGEnIH0pO1xuICogY29tcGlsZWQuc291cmNlO1xuICogLy8gPT4gZnVuY3Rpb24oZGF0YSkge1xuICogLy8gICB2YXIgX190LCBfX3AgPSAnJztcbiAqIC8vICAgX19wICs9ICdoaSAnICsgKChfX3QgPSAoIGRhdGEudXNlciApKSA9PSBudWxsID8gJycgOiBfX3QpICsgJyEnO1xuICogLy8gICByZXR1cm4gX19wO1xuICogLy8gfVxuICpcbiAqIC8vIFVzZSBjdXN0b20gdGVtcGxhdGUgZGVsaW1pdGVycy5cbiAqIF8udGVtcGxhdGVTZXR0aW5ncy5pbnRlcnBvbGF0ZSA9IC97eyhbXFxzXFxTXSs/KX19L2c7XG4gKiB2YXIgY29tcGlsZWQgPSBfLnRlbXBsYXRlKCdoZWxsbyB7eyB1c2VyIH19IScpO1xuICogY29tcGlsZWQoeyAndXNlcic6ICdtdXN0YWNoZScgfSk7XG4gKiAvLyA9PiAnaGVsbG8gbXVzdGFjaGUhJ1xuICpcbiAqIC8vIFVzZSB0aGUgYHNvdXJjZWAgcHJvcGVydHkgdG8gaW5saW5lIGNvbXBpbGVkIHRlbXBsYXRlcyBmb3IgbWVhbmluZ2Z1bFxuICogLy8gbGluZSBudW1iZXJzIGluIGVycm9yIG1lc3NhZ2VzIGFuZCBzdGFjayB0cmFjZXMuXG4gKiBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnanN0LmpzJyksICdcXFxuICogICB2YXIgSlNUID0ge1xcXG4gKiAgICAgXCJtYWluXCI6ICcgKyBfLnRlbXBsYXRlKG1haW5UZXh0KS5zb3VyY2UgKyAnXFxcbiAqICAgfTtcXFxuICogJyk7XG4gKi9cbmZ1bmN0aW9uIHRlbXBsYXRlKHN0cmluZywgb3B0aW9ucywgZ3VhcmQpIHtcbiAgLy8gQmFzZWQgb24gSm9obiBSZXNpZydzIGB0bXBsYCBpbXBsZW1lbnRhdGlvblxuICAvLyAoaHR0cDovL2Vqb2huLm9yZy9ibG9nL2phdmFzY3JpcHQtbWljcm8tdGVtcGxhdGluZy8pXG4gIC8vIGFuZCBMYXVyYSBEb2t0b3JvdmEncyBkb1QuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9vbGFkby9kb1QpLlxuICB2YXIgc2V0dGluZ3MgPSB0ZW1wbGF0ZVNldHRpbmdzLmltcG9ydHMuXy50ZW1wbGF0ZVNldHRpbmdzIHx8IHRlbXBsYXRlU2V0dGluZ3M7XG5cbiAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHN0cmluZywgb3B0aW9ucywgZ3VhcmQpKSB7XG4gICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBvcHRpb25zID0gYXNzaWduSW5XaXRoKHt9LCBvcHRpb25zLCBzZXR0aW5ncywgY3VzdG9tRGVmYXVsdHNBc3NpZ25Jbik7XG5cbiAgdmFyIGltcG9ydHMgPSBhc3NpZ25JbldpdGgoe30sIG9wdGlvbnMuaW1wb3J0cywgc2V0dGluZ3MuaW1wb3J0cywgY3VzdG9tRGVmYXVsdHNBc3NpZ25JbiksXG4gICAgICBpbXBvcnRzS2V5cyA9IGtleXMoaW1wb3J0cyksXG4gICAgICBpbXBvcnRzVmFsdWVzID0gYmFzZVZhbHVlcyhpbXBvcnRzLCBpbXBvcnRzS2V5cyk7XG5cbiAgdmFyIGlzRXNjYXBpbmcsXG4gICAgICBpc0V2YWx1YXRpbmcsXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBpbnRlcnBvbGF0ZSA9IG9wdGlvbnMuaW50ZXJwb2xhdGUgfHwgcmVOb01hdGNoLFxuICAgICAgc291cmNlID0gXCJfX3AgKz0gJ1wiO1xuXG4gIC8vIENvbXBpbGUgdGhlIHJlZ2V4cCB0byBtYXRjaCBlYWNoIGRlbGltaXRlci5cbiAgdmFyIHJlRGVsaW1pdGVycyA9IFJlZ0V4cChcbiAgICAob3B0aW9ucy5lc2NhcGUgfHwgcmVOb01hdGNoKS5zb3VyY2UgKyAnfCcgK1xuICAgIGludGVycG9sYXRlLnNvdXJjZSArICd8JyArXG4gICAgKGludGVycG9sYXRlID09PSByZUludGVycG9sYXRlID8gcmVFc1RlbXBsYXRlIDogcmVOb01hdGNoKS5zb3VyY2UgKyAnfCcgK1xuICAgIChvcHRpb25zLmV2YWx1YXRlIHx8IHJlTm9NYXRjaCkuc291cmNlICsgJ3wkJ1xuICAsICdnJyk7XG5cbiAgLy8gVXNlIGEgc291cmNlVVJMIGZvciBlYXNpZXIgZGVidWdnaW5nLlxuICB2YXIgc291cmNlVVJMID0gJ3NvdXJjZVVSTCcgaW4gb3B0aW9ucyA/ICcvLyMgc291cmNlVVJMPScgKyBvcHRpb25zLnNvdXJjZVVSTCArICdcXG4nIDogJyc7XG5cbiAgc3RyaW5nLnJlcGxhY2UocmVEZWxpbWl0ZXJzLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlVmFsdWUsIGludGVycG9sYXRlVmFsdWUsIGVzVGVtcGxhdGVWYWx1ZSwgZXZhbHVhdGVWYWx1ZSwgb2Zmc2V0KSB7XG4gICAgaW50ZXJwb2xhdGVWYWx1ZSB8fCAoaW50ZXJwb2xhdGVWYWx1ZSA9IGVzVGVtcGxhdGVWYWx1ZSk7XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVycyB0aGF0IGNhbid0IGJlIGluY2x1ZGVkIGluIHN0cmluZyBsaXRlcmFscy5cbiAgICBzb3VyY2UgKz0gc3RyaW5nLnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UocmVVbmVzY2FwZWRTdHJpbmcsIGVzY2FwZVN0cmluZ0NoYXIpO1xuXG4gICAgLy8gUmVwbGFjZSBkZWxpbWl0ZXJzIHdpdGggc25pcHBldHMuXG4gICAgaWYgKGVzY2FwZVZhbHVlKSB7XG4gICAgICBpc0VzY2FwaW5nID0gdHJ1ZTtcbiAgICAgIHNvdXJjZSArPSBcIicgK1xcbl9fZShcIiArIGVzY2FwZVZhbHVlICsgXCIpICtcXG4nXCI7XG4gICAgfVxuICAgIGlmIChldmFsdWF0ZVZhbHVlKSB7XG4gICAgICBpc0V2YWx1YXRpbmcgPSB0cnVlO1xuICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlVmFsdWUgKyBcIjtcXG5fX3AgKz0gJ1wiO1xuICAgIH1cbiAgICBpZiAoaW50ZXJwb2xhdGVWYWx1ZSkge1xuICAgICAgc291cmNlICs9IFwiJyArXFxuKChfX3QgPSAoXCIgKyBpbnRlcnBvbGF0ZVZhbHVlICsgXCIpKSA9PSBudWxsID8gJycgOiBfX3QpICtcXG4nXCI7XG4gICAgfVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgLy8gVGhlIEpTIGVuZ2luZSBlbWJlZGRlZCBpbiBBZG9iZSBwcm9kdWN0cyBuZWVkcyBgbWF0Y2hgIHJldHVybmVkIGluXG4gICAgLy8gb3JkZXIgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBgb2Zmc2V0YCB2YWx1ZS5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuXG4gIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgLy8gSWYgYHZhcmlhYmxlYCBpcyBub3Qgc3BlY2lmaWVkIHdyYXAgYSB3aXRoLXN0YXRlbWVudCBhcm91bmQgdGhlIGdlbmVyYXRlZFxuICAvLyBjb2RlIHRvIGFkZCB0aGUgZGF0YSBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc2NvcGUgY2hhaW4uXG4gIHZhciB2YXJpYWJsZSA9IG9wdGlvbnMudmFyaWFibGU7XG4gIGlmICghdmFyaWFibGUpIHtcbiAgICBzb3VyY2UgPSAnd2l0aCAob2JqKSB7XFxuJyArIHNvdXJjZSArICdcXG59XFxuJztcbiAgfVxuICAvLyBDbGVhbnVwIGNvZGUgYnkgc3RyaXBwaW5nIGVtcHR5IHN0cmluZ3MuXG4gIHNvdXJjZSA9IChpc0V2YWx1YXRpbmcgPyBzb3VyY2UucmVwbGFjZShyZUVtcHR5U3RyaW5nTGVhZGluZywgJycpIDogc291cmNlKVxuICAgIC5yZXBsYWNlKHJlRW1wdHlTdHJpbmdNaWRkbGUsICckMScpXG4gICAgLnJlcGxhY2UocmVFbXB0eVN0cmluZ1RyYWlsaW5nLCAnJDE7Jyk7XG5cbiAgLy8gRnJhbWUgY29kZSBhcyB0aGUgZnVuY3Rpb24gYm9keS5cbiAgc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAodmFyaWFibGUgfHwgJ29iaicpICsgJykge1xcbicgK1xuICAgICh2YXJpYWJsZVxuICAgICAgPyAnJ1xuICAgICAgOiAnb2JqIHx8IChvYmogPSB7fSk7XFxuJ1xuICAgICkgK1xuICAgIFwidmFyIF9fdCwgX19wID0gJydcIiArXG4gICAgKGlzRXNjYXBpbmdcbiAgICAgICA/ICcsIF9fZSA9IF8uZXNjYXBlJ1xuICAgICAgIDogJydcbiAgICApICtcbiAgICAoaXNFdmFsdWF0aW5nXG4gICAgICA/ICcsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO1xcbicgK1xuICAgICAgICBcImZ1bmN0aW9uIHByaW50KCkgeyBfX3AgKz0gX19qLmNhbGwoYXJndW1lbnRzLCAnJykgfVxcblwiXG4gICAgICA6ICc7XFxuJ1xuICAgICkgK1xuICAgIHNvdXJjZSArXG4gICAgJ3JldHVybiBfX3BcXG59JztcblxuICB2YXIgcmVzdWx0ID0gYXR0ZW1wdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oaW1wb3J0c0tleXMsIHNvdXJjZVVSTCArICdyZXR1cm4gJyArIHNvdXJjZSlcbiAgICAgIC5hcHBseSh1bmRlZmluZWQsIGltcG9ydHNWYWx1ZXMpO1xuICB9KTtcblxuICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbidzIHNvdXJjZSBieSBpdHMgYHRvU3RyaW5nYCBtZXRob2Qgb3JcbiAgLy8gdGhlIGBzb3VyY2VgIHByb3BlcnR5IGFzIGEgY29udmVuaWVuY2UgZm9yIGlubGluaW5nIGNvbXBpbGVkIHRlbXBsYXRlcy5cbiAgcmVzdWx0LnNvdXJjZSA9IHNvdXJjZTtcbiAgaWYgKGlzRXJyb3IocmVzdWx0KSkge1xuICAgIHRocm93IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhc2VGb3I7XG4iLCJpbXBvcnQgY3JlYXRlQmFzZUZvciBmcm9tICcuL19jcmVhdGVCYXNlRm9yLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRm9yO1xuIiwiaW1wb3J0IGJhc2VGb3IgZnJvbSAnLi9fYmFzZUZvci5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VGb3JPd247XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBiYXNlRWFjaGAgb3IgYGJhc2VFYWNoUmlnaHRgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUVhY2goZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVbaW5kZXhdLCBpbmRleCwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhc2VFYWNoO1xuIiwiaW1wb3J0IGJhc2VGb3JPd24gZnJvbSAnLi9fYmFzZUZvck93bi5qcyc7XG5pbXBvcnQgY3JlYXRlQmFzZUVhY2ggZnJvbSAnLi9fY3JlYXRlQmFzZUVhY2guanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUVhY2g7XG4iLCJpbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBgaWRlbnRpdHlgIGlmIGl0J3Mgbm90IGEgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgY2FzdCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FzdEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogaWRlbnRpdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhc3RGdW5jdGlvbjtcbiIsImltcG9ydCBhcnJheUVhY2ggZnJvbSAnLi9fYXJyYXlFYWNoLmpzJztcbmltcG9ydCBiYXNlRWFjaCBmcm9tICcuL19iYXNlRWFjaC5qcyc7XG5pbXBvcnQgY2FzdEZ1bmN0aW9uIGZyb20gJy4vX2Nhc3RGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggZWxlbWVudC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogKipOb3RlOioqIEFzIHdpdGggb3RoZXIgXCJDb2xsZWN0aW9uc1wiIG1ldGhvZHMsIG9iamVjdHMgd2l0aCBhIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IGFyZSBpdGVyYXRlZCBsaWtlIGFycmF5cy4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciB1c2UgYF8uZm9ySW5gXG4gKiBvciBgXy5mb3JPd25gIGZvciBvYmplY3QgaXRlcmF0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBhbGlhcyBlYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqIEBzZWUgXy5mb3JFYWNoUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5mb3JFYWNoKFsxLCAyXSwgZnVuY3Rpb24odmFsdWUpIHtcbiAqICAgY29uc29sZS5sb2codmFsdWUpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzIGAxYCB0aGVuIGAyYC5cbiAqXG4gKiBfLmZvckVhY2goeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgJ2EnIHRoZW4gJ2InIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RWFjaCA6IGJhc2VFYWNoO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBjYXN0RnVuY3Rpb24oaXRlcmF0ZWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yRWFjaDtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlQ2xlYXI7XG4iLCJpbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc29jSW5kZXhPZjtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVEZWxldGU7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUdldDtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUhhcztcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVTZXQ7XG4iLCJpbXBvcnQgbGlzdENhY2hlQ2xlYXIgZnJvbSAnLi9fbGlzdENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IGxpc3RDYWNoZURlbGV0ZSBmcm9tICcuL19saXN0Q2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUdldCBmcm9tICcuL19saXN0Q2FjaGVHZXQuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUhhcyBmcm9tICcuL19saXN0Q2FjaGVIYXMuanMnO1xuaW1wb3J0IGxpc3RDYWNoZVNldCBmcm9tICcuL19saXN0Q2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDYWNoZTtcbiIsImltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tIYXM7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlQ3JlYXRlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaERlbGV0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoR2V0O1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hIYXM7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoU2V0O1xuIiwiaW1wb3J0IGhhc2hDbGVhciBmcm9tICcuL19oYXNoQ2xlYXIuanMnO1xuaW1wb3J0IGhhc2hEZWxldGUgZnJvbSAnLi9faGFzaERlbGV0ZS5qcyc7XG5pbXBvcnQgaGFzaEdldCBmcm9tICcuL19oYXNoR2V0LmpzJztcbmltcG9ydCBoYXNoSGFzIGZyb20gJy4vX2hhc2hIYXMuanMnO1xuaW1wb3J0IGhhc2hTZXQgZnJvbSAnLi9faGFzaFNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBIYXNoO1xuIiwiaW1wb3J0IEhhc2ggZnJvbSAnLi9fSGFzaC5qcyc7XG5pbXBvcnQgTGlzdENhY2hlIGZyb20gJy4vX0xpc3RDYWNoZS5qcyc7XG5pbXBvcnQgTWFwIGZyb20gJy4vX01hcC5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVDbGVhcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLZXlhYmxlO1xuIiwiaW1wb3J0IGlzS2V5YWJsZSBmcm9tICcuL19pc0tleWFibGUuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1hcERhdGE7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVHZXQ7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVIYXM7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZVNldDtcbiIsImltcG9ydCBtYXBDYWNoZUNsZWFyIGZyb20gJy4vX21hcENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IG1hcENhY2hlRGVsZXRlIGZyb20gJy4vX21hcENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBtYXBDYWNoZUdldCBmcm9tICcuL19tYXBDYWNoZUdldC5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVIYXMgZnJvbSAnLi9fbWFwQ2FjaGVIYXMuanMnO1xuaW1wb3J0IG1hcENhY2hlU2V0IGZyb20gJy4vX21hcENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENhY2hlO1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrU2V0O1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IHN0YWNrQ2xlYXIgZnJvbSAnLi9fc3RhY2tDbGVhci5qcyc7XG5pbXBvcnQgc3RhY2tEZWxldGUgZnJvbSAnLi9fc3RhY2tEZWxldGUuanMnO1xuaW1wb3J0IHN0YWNrR2V0IGZyb20gJy4vX3N0YWNrR2V0LmpzJztcbmltcG9ydCBzdGFja0hhcyBmcm9tICcuL19zdGFja0hhcy5qcyc7XG5pbXBvcnQgc3RhY2tTZXQgZnJvbSAnLi9fc3RhY2tTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xuIiwiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL19iYXNlQXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NpZ25NZXJnZVZhbHVlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lQnVmZmVyO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IFVpbnQ4QXJyYXk7XG4iLCJpbXBvcnQgVWludDhBcnJheSBmcm9tICcuL19VaW50OEFycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZUFycmF5QnVmZmVyO1xuIiwiaW1wb3J0IGNsb25lQXJyYXlCdWZmZXIgZnJvbSAnLi9fY2xvbmVBcnJheUJ1ZmZlci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5QXJyYXk7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VDcmVhdGU7XG4iLCJpbXBvcnQgYmFzZUNyZWF0ZSBmcm9tICcuL19iYXNlQ3JlYXRlLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc1Byb3RvdHlwZSBmcm9tICcuL19pc1Byb3RvdHlwZS5qcyc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENsb25lT2JqZWN0O1xuIiwiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheUxpa2VPYmplY3Q7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNhZmVHZXQob2JqZWN0LCBrZXkpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FmZUdldDtcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHBsYWluIG9iamVjdCBmbGF0dGVuaW5nIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZ1xuICoga2V5ZWQgcHJvcGVydGllcyBvZiBgdmFsdWVgIHRvIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBwbGFpbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgcGxhaW4gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBuZXcgRm9vKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIF8udG9QbGFpbk9iamVjdChuZXcgRm9vKSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMgfVxuICovXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHZhbHVlLCBrZXlzSW4odmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9QbGFpbk9iamVjdDtcbiIsImltcG9ydCBhc3NpZ25NZXJnZVZhbHVlIGZyb20gJy4vX2Fzc2lnbk1lcmdlVmFsdWUuanMnO1xuaW1wb3J0IGNsb25lQnVmZmVyIGZyb20gJy4vX2Nsb25lQnVmZmVyLmpzJztcbmltcG9ydCBjbG9uZVR5cGVkQXJyYXkgZnJvbSAnLi9fY2xvbmVUeXBlZEFycmF5LmpzJztcbmltcG9ydCBjb3B5QXJyYXkgZnJvbSAnLi9fY29weUFycmF5LmpzJztcbmltcG9ydCBpbml0Q2xvbmVPYmplY3QgZnJvbSAnLi9faW5pdENsb25lT2JqZWN0LmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2VPYmplY3QgZnJvbSAnLi9pc0FycmF5TGlrZU9iamVjdC5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnLi9pc1BsYWluT2JqZWN0LmpzJztcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuaW1wb3J0IHNhZmVHZXQgZnJvbSAnLi9fc2FmZUdldC5qcyc7XG5pbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICcuL3RvUGxhaW5PYmplY3QuanMnO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzRnVuY3Rpb24ob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWVyZ2VEZWVwO1xuIiwiaW1wb3J0IFN0YWNrIGZyb20gJy4vX1N0YWNrLmpzJztcbmltcG9ydCBhc3NpZ25NZXJnZVZhbHVlIGZyb20gJy4vX2Fzc2lnbk1lcmdlVmFsdWUuanMnO1xuaW1wb3J0IGJhc2VGb3IgZnJvbSAnLi9fYmFzZUZvci5qcyc7XG5pbXBvcnQgYmFzZU1lcmdlRGVlcCBmcm9tICcuL19iYXNlTWVyZ2VEZWVwLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBrZXlzSW4gZnJvbSAnLi9rZXlzSW4uanMnO1xuaW1wb3J0IHNhZmVHZXQgZnJvbSAnLi9fc2FmZUdldC5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWVyZ2U7XG4iLCJpbXBvcnQgYmFzZU1lcmdlIGZyb20gJy4vX2Jhc2VNZXJnZS5qcyc7XG5pbXBvcnQgY3JlYXRlQXNzaWduZXIgZnJvbSAnLi9fY3JlYXRlQXNzaWduZXIuanMnO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJpbXBvcnQgYmFzZVZhbHVlcyBmcm9tICcuL19iYXNlVmFsdWVzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5IHZhbHVlcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy52YWx1ZXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbMSwgMl0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLnZhbHVlcygnaGknKTtcbiAqIC8vID0+IFsnaCcsICdpJ11cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZXM7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldENhY2hlSGFzO1xuIiwiaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcbmltcG9ydCBzZXRDYWNoZUFkZCBmcm9tICcuL19zZXRDYWNoZUFkZC5qcyc7XG5pbXBvcnQgc2V0Q2FjaGVIYXMgZnJvbSAnLi9fc2V0Q2FjaGVIYXMuanMnO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbmV4cG9ydCBkZWZhdWx0IFNldENhY2hlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlTb21lO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhY2hlSGFzO1xuIiwiaW1wb3J0IFNldENhY2hlIGZyb20gJy4vX1NldENhY2hlLmpzJztcbmltcG9ydCBhcnJheVNvbWUgZnJvbSAnLi9fYXJyYXlTb21lLmpzJztcbmltcG9ydCBjYWNoZUhhcyBmcm9tICcuL19jYWNoZUhhcy5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsQXJyYXlzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFRvQXJyYXk7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgVWludDhBcnJheSBmcm9tICcuL19VaW50OEFycmF5LmpzJztcbmltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcbmltcG9ydCBlcXVhbEFycmF5cyBmcm9tICcuL19lcXVhbEFycmF5cy5qcyc7XG5pbXBvcnQgbWFwVG9BcnJheSBmcm9tICcuL19tYXBUb0FycmF5LmpzJztcbmltcG9ydCBzZXRUb0FycmF5IGZyb20gJy4vX3NldFRvQXJyYXkuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlcXVhbEJ5VGFnO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheVB1c2g7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRBbGxLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheUZpbHRlcjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJBcnJheTtcbiIsImltcG9ydCBhcnJheUZpbHRlciBmcm9tICcuL19hcnJheUZpbHRlci5qcyc7XG5pbXBvcnQgc3R1YkFycmF5IGZyb20gJy4vc3R1YkFycmF5LmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xzO1xuIiwiaW1wb3J0IGJhc2VHZXRBbGxLZXlzIGZyb20gJy4vX2Jhc2VHZXRBbGxLZXlzLmpzJztcbmltcG9ydCBnZXRTeW1ib2xzIGZyb20gJy4vX2dldFN5bWJvbHMuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsS2V5cztcbiIsImltcG9ydCBnZXRBbGxLZXlzIGZyb20gJy4vX2dldEFsbEtleXMuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxPYmplY3RzO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVZpZXc7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0O1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYWtNYXA7XG4iLCJpbXBvcnQgRGF0YVZpZXcgZnJvbSAnLi9fRGF0YVZpZXcuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9fUHJvbWlzZS5qcyc7XG5pbXBvcnQgU2V0IGZyb20gJy4vX1NldC5qcyc7XG5pbXBvcnQgV2Vha01hcCBmcm9tICcuL19XZWFrTWFwLmpzJztcbmltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFnO1xuIiwiaW1wb3J0IFN0YWNrIGZyb20gJy4vX1N0YWNrLmpzJztcbmltcG9ydCBlcXVhbEFycmF5cyBmcm9tICcuL19lcXVhbEFycmF5cy5qcyc7XG5pbXBvcnQgZXF1YWxCeVRhZyBmcm9tICcuL19lcXVhbEJ5VGFnLmpzJztcbmltcG9ydCBlcXVhbE9iamVjdHMgZnJvbSAnLi9fZXF1YWxPYmplY3RzLmpzJztcbmltcG9ydCBnZXRUYWcgZnJvbSAnLi9fZ2V0VGFnLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNUeXBlZEFycmF5IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0VxdWFsRGVlcDtcbiIsImltcG9ydCBiYXNlSXNFcXVhbERlZXAgZnJvbSAnLi9fYmFzZUlzRXF1YWxEZWVwLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzRXF1YWw7XG4iLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9fU3RhY2suanMnO1xuaW1wb3J0IGJhc2VJc0VxdWFsIGZyb20gJy4vX2Jhc2VJc0VxdWFsLmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc01hdGNoO1xuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsImltcG9ydCBpc1N0cmljdENvbXBhcmFibGUgZnJvbSAnLi9faXNTdHJpY3RDb21wYXJhYmxlLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXRjaERhdGE7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiaW1wb3J0IGJhc2VJc01hdGNoIGZyb20gJy4vX2Jhc2VJc01hdGNoLmpzJztcbmltcG9ydCBnZXRNYXRjaERhdGEgZnJvbSAnLi9fZ2V0TWF0Y2hEYXRhLmpzJztcbmltcG9ydCBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSBmcm9tICcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWF0Y2hlcztcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLZXk7XG4iLCJpbXBvcnQgTWFwQ2FjaGUgZnJvbSAnLi9fTWFwQ2FjaGUuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICcuL21lbW9pemUuanMnO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDYXBwZWQ7XG4iLCJpbXBvcnQgbWVtb2l6ZUNhcHBlZCBmcm9tICcuL19tZW1vaXplQ2FwcGVkLmpzJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdUb1BhdGg7XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzS2V5IGZyb20gJy4vX2lzS2V5LmpzJztcbmltcG9ydCBzdHJpbmdUb1BhdGggZnJvbSAnLi9fc3RyaW5nVG9QYXRoLmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FzdFBhdGg7XG4iLCJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0tleTtcbiIsImltcG9ydCBjYXN0UGF0aCBmcm9tICcuL19jYXN0UGF0aC5qcyc7XG5pbXBvcnQgdG9LZXkgZnJvbSAnLi9fdG9LZXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0O1xuIiwiaW1wb3J0IGJhc2VHZXQgZnJvbSAnLi9fYmFzZUdldC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VIYXNJbjtcbiIsImltcG9ydCBjYXN0UGF0aCBmcm9tICcuL19jYXN0UGF0aC5qcyc7XG5pbXBvcnQgaXNBcmd1bWVudHMgZnJvbSAnLi9pc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzSW5kZXggZnJvbSAnLi9faXNJbmRleC5qcyc7XG5pbXBvcnQgaXNMZW5ndGggZnJvbSAnLi9pc0xlbmd0aC5qcyc7XG5pbXBvcnQgdG9LZXkgZnJvbSAnLi9fdG9LZXkuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzUGF0aDtcbiIsImltcG9ydCBiYXNlSGFzSW4gZnJvbSAnLi9fYmFzZUhhc0luLmpzJztcbmltcG9ydCBoYXNQYXRoIGZyb20gJy4vX2hhc1BhdGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc0luO1xuIiwiaW1wb3J0IGJhc2VJc0VxdWFsIGZyb20gJy4vX2Jhc2VJc0VxdWFsLmpzJztcbmltcG9ydCBnZXQgZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IGhhc0luIGZyb20gJy4vaGFzSW4uanMnO1xuaW1wb3J0IGlzS2V5IGZyb20gJy4vX2lzS2V5LmpzJztcbmltcG9ydCBpc1N0cmljdENvbXBhcmFibGUgZnJvbSAnLi9faXNTdHJpY3RDb21wYXJhYmxlLmpzJztcbmltcG9ydCBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSBmcm9tICcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyc7XG5pbXBvcnQgdG9LZXkgZnJvbSAnLi9fdG9LZXkuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlUHJvcGVydHk7XG4iLCJpbXBvcnQgYmFzZUdldCBmcm9tICcuL19iYXNlR2V0LmpzJztcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCJpbXBvcnQgYmFzZVByb3BlcnR5IGZyb20gJy4vX2Jhc2VQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgYmFzZVByb3BlcnR5RGVlcCBmcm9tICcuL19iYXNlUHJvcGVydHlEZWVwLmpzJztcbmltcG9ydCBpc0tleSBmcm9tICcuL19pc0tleS5qcyc7XG5pbXBvcnQgdG9LZXkgZnJvbSAnLi9fdG9LZXkuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BlcnR5O1xuIiwiaW1wb3J0IGJhc2VNYXRjaGVzIGZyb20gJy4vX2Jhc2VNYXRjaGVzLmpzJztcbmltcG9ydCBiYXNlTWF0Y2hlc1Byb3BlcnR5IGZyb20gJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHkuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUl0ZXJhdGVlO1xuIiwiaW1wb3J0IGJhc2VFYWNoIGZyb20gJy4vX2Jhc2VFYWNoLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1hcDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc29ydEJ5YCB3aGljaCB1c2VzIGBjb21wYXJlcmAgdG8gZGVmaW5lIHRoZVxuICogc29ydCBvcmRlciBvZiBgYXJyYXlgIGFuZCByZXBsYWNlcyBjcml0ZXJpYSBvYmplY3RzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZ1xuICogdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmVyIFRoZSBmdW5jdGlvbiB0byBkZWZpbmUgc29ydCBvcmRlci5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU29ydEJ5KGFycmF5LCBjb21wYXJlcikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGFycmF5LnNvcnQoY29tcGFyZXIpO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBhcnJheVtsZW5ndGhdID0gYXJyYXlbbGVuZ3RoXS52YWx1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VTb3J0Qnk7XG4iLCJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKlxuICogQ29tcGFyZXMgdmFsdWVzIHRvIHNvcnQgdGhlbSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc29ydCBvcmRlciBpbmRpY2F0b3IgZm9yIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVBc2NlbmRpbmcodmFsdWUsIG90aGVyKSB7XG4gIGlmICh2YWx1ZSAhPT0gb3RoZXIpIHtcbiAgICB2YXIgdmFsSXNEZWZpbmVkID0gdmFsdWUgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsSXNOdWxsID0gdmFsdWUgPT09IG51bGwsXG4gICAgICAgIHZhbElzUmVmbGV4aXZlID0gdmFsdWUgPT09IHZhbHVlLFxuICAgICAgICB2YWxJc1N5bWJvbCA9IGlzU3ltYm9sKHZhbHVlKTtcblxuICAgIHZhciBvdGhJc0RlZmluZWQgPSBvdGhlciAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBvdGhJc051bGwgPSBvdGhlciA9PT0gbnVsbCxcbiAgICAgICAgb3RoSXNSZWZsZXhpdmUgPSBvdGhlciA9PT0gb3RoZXIsXG4gICAgICAgIG90aElzU3ltYm9sID0gaXNTeW1ib2wob3RoZXIpO1xuXG4gICAgaWYgKCghb3RoSXNOdWxsICYmICFvdGhJc1N5bWJvbCAmJiAhdmFsSXNTeW1ib2wgJiYgdmFsdWUgPiBvdGhlcikgfHxcbiAgICAgICAgKHZhbElzU3ltYm9sICYmIG90aElzRGVmaW5lZCAmJiBvdGhJc1JlZmxleGl2ZSAmJiAhb3RoSXNOdWxsICYmICFvdGhJc1N5bWJvbCkgfHxcbiAgICAgICAgKHZhbElzTnVsbCAmJiBvdGhJc0RlZmluZWQgJiYgb3RoSXNSZWZsZXhpdmUpIHx8XG4gICAgICAgICghdmFsSXNEZWZpbmVkICYmIG90aElzUmVmbGV4aXZlKSB8fFxuICAgICAgICAhdmFsSXNSZWZsZXhpdmUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoKCF2YWxJc051bGwgJiYgIXZhbElzU3ltYm9sICYmICFvdGhJc1N5bWJvbCAmJiB2YWx1ZSA8IG90aGVyKSB8fFxuICAgICAgICAob3RoSXNTeW1ib2wgJiYgdmFsSXNEZWZpbmVkICYmIHZhbElzUmVmbGV4aXZlICYmICF2YWxJc051bGwgJiYgIXZhbElzU3ltYm9sKSB8fFxuICAgICAgICAob3RoSXNOdWxsICYmIHZhbElzRGVmaW5lZCAmJiB2YWxJc1JlZmxleGl2ZSkgfHxcbiAgICAgICAgKCFvdGhJc0RlZmluZWQgJiYgdmFsSXNSZWZsZXhpdmUpIHx8XG4gICAgICAgICFvdGhJc1JlZmxleGl2ZSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzY2VuZGluZztcbiIsImltcG9ydCBjb21wYXJlQXNjZW5kaW5nIGZyb20gJy4vX2NvbXBhcmVBc2NlbmRpbmcuanMnO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8ub3JkZXJCeWAgdG8gY29tcGFyZSBtdWx0aXBsZSBwcm9wZXJ0aWVzIG9mIGEgdmFsdWUgdG8gYW5vdGhlclxuICogYW5kIHN0YWJsZSBzb3J0IHRoZW0uXG4gKlxuICogSWYgYG9yZGVyc2AgaXMgdW5zcGVjaWZpZWQsIGFsbCB2YWx1ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgb3JkZXIuIE90aGVyd2lzZSxcbiAqIHNwZWNpZnkgYW4gb3JkZXIgb2YgXCJkZXNjXCIgZm9yIGRlc2NlbmRpbmcgb3IgXCJhc2NcIiBmb3IgYXNjZW5kaW5nIHNvcnQgb3JkZXJcbiAqIG9mIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW5bXXxzdHJpbmdbXX0gb3JkZXJzIFRoZSBvcmRlciB0byBzb3J0IGJ5IGZvciBlYWNoIHByb3BlcnR5LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc29ydCBvcmRlciBpbmRpY2F0b3IgZm9yIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb21wYXJlTXVsdGlwbGUob2JqZWN0LCBvdGhlciwgb3JkZXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgb2JqQ3JpdGVyaWEgPSBvYmplY3QuY3JpdGVyaWEsXG4gICAgICBvdGhDcml0ZXJpYSA9IG90aGVyLmNyaXRlcmlhLFxuICAgICAgbGVuZ3RoID0gb2JqQ3JpdGVyaWEubGVuZ3RoLFxuICAgICAgb3JkZXJzTGVuZ3RoID0gb3JkZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSBjb21wYXJlQXNjZW5kaW5nKG9iakNyaXRlcmlhW2luZGV4XSwgb3RoQ3JpdGVyaWFbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAoaW5kZXggPj0gb3JkZXJzTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB2YXIgb3JkZXIgPSBvcmRlcnNbaW5kZXhdO1xuICAgICAgcmV0dXJuIHJlc3VsdCAqIChvcmRlciA9PSAnZGVzYycgPyAtMSA6IDEpO1xuICAgIH1cbiAgfVxuICAvLyBGaXhlcyBhbiBgQXJyYXkjc29ydGAgYnVnIGluIHRoZSBKUyBlbmdpbmUgZW1iZWRkZWQgaW4gQWRvYmUgYXBwbGljYXRpb25zXG4gIC8vIHRoYXQgY2F1c2VzIGl0LCB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXMsIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUgZm9yXG4gIC8vIGBvYmplY3RgIGFuZCBgb3RoZXJgLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3B1bGwvMTI0N1xuICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAvL1xuICAvLyBUaGlzIGFsc28gZW5zdXJlcyBhIHN0YWJsZSBzb3J0IGluIFY4IGFuZCBvdGhlciBlbmdpbmVzLlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9OTAgZm9yIG1vcmUgZGV0YWlscy5cbiAgcmV0dXJuIG9iamVjdC5pbmRleCAtIG90aGVyLmluZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlTXVsdGlwbGU7XG4iLCJpbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9fYXJyYXlNYXAuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VNYXAgZnJvbSAnLi9fYmFzZU1hcC5qcyc7XG5pbXBvcnQgYmFzZVNvcnRCeSBmcm9tICcuL19iYXNlU29ydEJ5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBjb21wYXJlTXVsdGlwbGUgZnJvbSAnLi9fY29tcGFyZU11bHRpcGxlLmpzJztcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5vcmRlckJ5YCB3aXRob3V0IHBhcmFtIGd1YXJkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbltdfE9iamVjdFtdfHN0cmluZ1tdfSBpdGVyYXRlZXMgVGhlIGl0ZXJhdGVlcyB0byBzb3J0IGJ5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gb3JkZXJzIFRoZSBzb3J0IG9yZGVycyBvZiBgaXRlcmF0ZWVzYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNvcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU9yZGVyQnkoY29sbGVjdGlvbiwgaXRlcmF0ZWVzLCBvcmRlcnMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIGl0ZXJhdGVlcyA9IGFycmF5TWFwKGl0ZXJhdGVlcy5sZW5ndGggPyBpdGVyYXRlZXMgOiBbaWRlbnRpdHldLCBiYXNlVW5hcnkoYmFzZUl0ZXJhdGVlKSk7XG5cbiAgdmFyIHJlc3VsdCA9IGJhc2VNYXAoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHZhciBjcml0ZXJpYSA9IGFycmF5TWFwKGl0ZXJhdGVlcywgZnVuY3Rpb24oaXRlcmF0ZWUpIHtcbiAgICAgIHJldHVybiBpdGVyYXRlZSh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgJ2NyaXRlcmlhJzogY3JpdGVyaWEsICdpbmRleCc6ICsraW5kZXgsICd2YWx1ZSc6IHZhbHVlIH07XG4gIH0pO1xuXG4gIHJldHVybiBiYXNlU29ydEJ5KHJlc3VsdCwgZnVuY3Rpb24ob2JqZWN0LCBvdGhlcikge1xuICAgIHJldHVybiBjb21wYXJlTXVsdGlwbGUob2JqZWN0LCBvdGhlciwgb3JkZXJzKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VPcmRlckJ5O1xuIiwiaW1wb3J0IGJhc2VPcmRlckJ5IGZyb20gJy4vX2Jhc2VPcmRlckJ5LmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5zb3J0QnlgIGV4Y2VwdCB0aGF0IGl0IGFsbG93cyBzcGVjaWZ5aW5nIHRoZSBzb3J0XG4gKiBvcmRlcnMgb2YgdGhlIGl0ZXJhdGVlcyB0byBzb3J0IGJ5LiBJZiBgb3JkZXJzYCBpcyB1bnNwZWNpZmllZCwgYWxsIHZhbHVlc1xuICogYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgb3JkZXIuIE90aGVyd2lzZSwgc3BlY2lmeSBhbiBvcmRlciBvZiBcImRlc2NcIiBmb3JcbiAqIGRlc2NlbmRpbmcgb3IgXCJhc2NcIiBmb3IgYXNjZW5kaW5nIHNvcnQgb3JkZXIgb2YgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXJyYXlbXXxGdW5jdGlvbltdfE9iamVjdFtdfHN0cmluZ1tdfSBbaXRlcmF0ZWVzPVtfLmlkZW50aXR5XV1cbiAqICBUaGUgaXRlcmF0ZWVzIHRvIHNvcnQgYnkuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3JkZXJzXSBUaGUgc29ydCBvcmRlcnMgb2YgYGl0ZXJhdGVlc2AuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5yZWR1Y2VgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgc29ydGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FnZSc6IDQ4IH0sXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM0IH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FnZSc6IDQwIH0sXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2IH1cbiAqIF07XG4gKlxuICogLy8gU29ydCBieSBgdXNlcmAgaW4gYXNjZW5kaW5nIG9yZGVyIGFuZCBieSBgYWdlYCBpbiBkZXNjZW5kaW5nIG9yZGVyLlxuICogXy5vcmRlckJ5KHVzZXJzLCBbJ3VzZXInLCAnYWdlJ10sIFsnYXNjJywgJ2Rlc2MnXSk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbWydiYXJuZXknLCAzNl0sIFsnYmFybmV5JywgMzRdLCBbJ2ZyZWQnLCA0OF0sIFsnZnJlZCcsIDQwXV1cbiAqL1xuZnVuY3Rpb24gb3JkZXJCeShjb2xsZWN0aW9uLCBpdGVyYXRlZXMsIG9yZGVycywgZ3VhcmQpIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzQXJyYXkoaXRlcmF0ZWVzKSkge1xuICAgIGl0ZXJhdGVlcyA9IGl0ZXJhdGVlcyA9PSBudWxsID8gW10gOiBbaXRlcmF0ZWVzXTtcbiAgfVxuICBvcmRlcnMgPSBndWFyZCA/IHVuZGVmaW5lZCA6IG9yZGVycztcbiAgaWYgKCFpc0FycmF5KG9yZGVycykpIHtcbiAgICBvcmRlcnMgPSBvcmRlcnMgPT0gbnVsbCA/IFtdIDogW29yZGVyc107XG4gIH1cbiAgcmV0dXJuIGJhc2VPcmRlckJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlcywgb3JkZXJzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3JkZXJCeTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlRmluZEluZGV4O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmFOO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpY3RJbmRleE9mO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5leHBvcnQgZGVmYXVsdCBub29wO1xuIiwiaW1wb3J0IFNldCBmcm9tICcuL19TZXQuanMnO1xuaW1wb3J0IG5vb3AgZnJvbSAnLi9ub29wLmpzJztcbmltcG9ydCBzZXRUb0FycmF5IGZyb20gJy4vX3NldFRvQXJyYXkuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBfdGVtcGxhdGUgZnJvbSAnbG9kYXNoLWVzL3RlbXBsYXRlJztcbmltcG9ydCBfZm9yRWFjaCBmcm9tICdsb2Rhc2gtZXMvZm9yRWFjaCc7XG5pbXBvcnQgX21lcmdlIGZyb20gJ2xvZGFzaC1lcy9tZXJnZSc7XG5pbXBvcnQgX3ZhbHVlcyBmcm9tICdsb2Rhc2gtZXMvdmFsdWVzJztcbmltcG9ydCBfb3JkZXJCeSBmcm9tICdsb2Rhc2gtZXMvb3JkZXJCeSc7XG5pbXBvcnQgX3VuaXFCeSBmcm9tICdsb2Rhc2gtZXMvdW5pcUJ5JztcblxuLyoqXG4gKlxuICovXG5jbGFzcyBGZWVkIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0ID0gRmVlZC5kZWZhdWx0O1xuXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBfbWVyZ2Uoe30sIEZlZWQuZGVmYXVsdCwgY29uZmlnKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtb2R1bGVcbiAgICovXG4gIGluaXQoKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBsZXQgZmVlZCA9IHRoaXMuX3NldHRpbmdzLmZlZWQ7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHJzc1RvSnNvbjogRmVlZC5yc3NUb0pzb24sXG4gICAgICByc3NVcmw6IChBcnJheS5pc0FycmF5KGZlZWQpKSA/IGZlZWQgOiBbZmVlZF1cbiAgICB9O1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGZlZWRcbiAgICBfZm9yRWFjaChjb25maWcucnNzVXJsLCAodXJsLCBpbmRleCkgPT4ge1xuICAgICAgLy8gTWFrZSB0aGUgcmVxdWVzdFxuICAgICAgdGhpcy5fcmVxdWVzdChjb25maWcsIHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBkYXRhXG4gICAgICAgICAgZGF0YS5wdXNoKHRoaXMuX3Byb2Nlc3MoSlNPTi5wYXJzZShyZXNwb25zZSksIHRoaXMuX3NldHRpbmdzKSk7XG4gICAgICAgICAgLy8gV2hlbiBhbGwgZmVlZHMgaGF2ZSBiZWVuIHJlcXVlc3RlZCwgbWVyZ2UgdGhlIGRhdGEgYW5kIGNvbXBpbGVcbiAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IGNvbmZpZy5yc3NVcmwubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXJnZShkYXRhLCB0aGlzLl9zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIGxldCBjb21waWxlZCA9IHRoaXMuX3JlbmRlcihcbiAgICAgICAgICAgICAgdGhpcy5fbWVyZ2UoZGF0YSwgdGhpcy5fc2V0dGluZ3MpLFxuICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5nc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5zZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoZWwpIGVsLmlubmVySFRNTCA9IGNvbXBpbGVkO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIFhIUiByZXF1ZXN0IGZvciB0aGUgZmVlZCBkYXRhXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnIFRoZSByZXF1ZXN0IGRhdGFcbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmwgICAgVGhlIHJlcXVlc3QgdXJsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIFJlc29sdmVzIHdoZW4gdGhlIHJlc3BvbnNlIGlzIHJlYWR5LCByZWplY3RzIHdoZW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG9wZXJhdGlvbiB0aW1lcyBvdXQgb3IgdGhlcmUgaXMgYW4gZXJyb3IuXG4gICAqL1xuICBfcmVxdWVzdChjb25maWcsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbGV0IF94aHIgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChfeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoX3hoci5zdGF0dXMgPj0gMjAwICYmIF94aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKF94aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKF94aHIuc3RhdHVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGUgRmVlZCByZXF1ZXN0IHRpbWVkIG91dCcpKTtcbiAgICAgIH07XG4gICAgICB4aHIub3BlbignR0VUJywgYCR7Y29uZmlnLnJzc1RvSnNvbn0/cnNzX3VybD0ke3VybH1gLCB0cnVlKTtcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgICB4aHIgPSBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGUgcHJvY2Vzc2luZyBmdW5jdGlvbiBiYXNlZCBvbiB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gZGF0YSAgICAgVGhlIHJlcXVlc3RlZCBmZWVkIGRhdGEgdG8gcGFzc1xuICAgKiBAcGFyYW0gIHtvYmplY3R9IHNldHRpbmdzIFRoZSBhcHBsaWNhdGlvbiBzZXR0aW5nc1xuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwcm9jZXNzZWQgZGF0YVxuICAgKi9cbiAgX3Byb2Nlc3MoZGF0YSwgc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gRmVlZC5wcm9jZXNzW3NldHRpbmdzLnR5cGVdKGRhdGEsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzIGRhdGEgdG8gdGhlIGFwcHJvcHJpYXRlIG1lcmdlIGZ1bmN0aW9uIGJhc2VkIG9uIHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBkYXRhICAgICBUaGUgcmVxdWVzdGVkIGZlZWQgZGF0YSB0byBwYXNzXG4gICAqIEBwYXJhbSAge29iamVjdH0gc2V0dGluZ3MgVGhlIGFwcGxpY2F0aW9uIHNldHRpbmdzXG4gICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIG1lcmdlZCBmZWVkIGRhdGFcbiAgICovXG4gIF9tZXJnZShkYXRhLCBzZXR0aW5ncykge1xuICAgIHJldHVybiBGZWVkLm1lcmdlW3NldHRpbmdzLnR5cGVdKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmUgdGVtcGxhdGUgY29tcG9uZW50cywgcGFzcyBkYXRhLCBhbmQgcmV0dXJuIGNvbXBpbGVkIHRlbWxhdGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBkYXRhICAgICBUaGUgcmVxdWVzdGVkIGZlZWQgZGF0YSB0byBwYXNzXG4gICAqIEBwYXJhbSAge29iamVjdH0gc2V0dGluZ3MgVGhlIGFwcGxpY2F0aW9uIHNldHRpbmdzXG4gICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgVGhlIGNvbXBsaWVkIGh0bWwgc3RyaW5nXG4gICAqL1xuICBfcmVuZGVyKGRhdGEsIHNldHRpbmdzKSB7XG4gICAgZGF0YS5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgaWYgKHNldHRpbmdzLmxvZylcbiAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuXG4gICAgbGV0IHRlbXBsYXRlID0gX3ZhbHVlcyhzZXR0aW5ncy50ZW1wbGF0ZXMpLmpvaW4oJycpO1xuICAgIGxldCBjb21waWxlZCA9IF90ZW1wbGF0ZShcbiAgICAgIHRlbXBsYXRlLFxuICAgICAge1xuICAgICAgICAnaW1wb3J0cyc6IHtcbiAgICAgICAgICAnX2VhY2gnOiBfZm9yRWFjaFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gY29tcGlsZWQoZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvcGVuIFJTUyB0byBKU09OIGFwaSwgc2VlIGh0dHBzOi8vcnNzMmpzb24uY29tXG4gKiBAdHlwZSB7U3RyaW5nfVxuICovXG5GZWVkLnJzc1RvSnNvbiA9ICdodHRwczovL2FwaS5yc3MyanNvbi5jb20vdjEvYXBpLmpzb24nO1xuXG4vKipcbiAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHdpZGdldC5cbiAqIEB0eXBlIHtTdHJpbmd9XG4gKi9cbkZlZWQudGVtcGxhdGVzID0ge1xuICBtZWRpdW06IHtcbiAgICBvcGVuZXI6IFtcbiAgICAgICc8c2VjdGlvbiBjbGFzcz1cIm8tZmVlZCA8JS0gc2V0dGluZ3MuY2xhc3Nlcy53cmFwcGVyICU+XCIgc3R5bGU9XCInLFxuICAgICAgICAnPCUgaWYgKHNldHRpbmdzLmZvbnRTaXplKSB7ICU+Zm9udC1zaXplOiA8JS0gc2V0dGluZ3MuZm9udFNpemUgJT47PCUgfSAlPicsXG4gICAgICAgICc8JSBpZiAoc2V0dGluZ3MucG9zdEJvcmRlckNvbG9yKSB7ICU+Ym9yZGVyLWNvbG9yOiA8JS0gc2V0dGluZ3MucG9zdEJvcmRlckNvbG9yICU+OzwlIH0gJT4nLFxuICAgICAgJ1wiPidcbiAgICBdLFxuICAgIGhlYWRlcjogW1xuICAgICAgJzxoZWFkZXIgY2xhc3M9XCJvLWZlZWRfX2hlYWRlciA8JS0gc2V0dGluZ3MuY2xhc3Nlcy5oZWFkZXIgJT5cIj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cIm8tZmVlZF9fYXZhdGFyIDwlLSBzZXR0aW5ncy5jbGFzc2VzLmF2YXRhciAlPlwiPicsXG4gICAgICAgICAgJzxpbWcgc3JjPVwiJyxcbiAgICAgICAgICAgICAgICAnPCUgaWYgKHNldHRpbmdzLnByb2ZpbGVJbWcgIT09IFwiXCIpIHsgJT4nLFxuICAgICAgICAgICAgICAgICAgJzwlLSBzZXR0aW5ncy5wcm9maWxlSW1nICU+JyxcbiAgICAgICAgICAgICAgICAnPCUgfSBlbHNlIHsgJT4nLFxuICAgICAgICAgICAgICAgICAgJzwlLSBmZWVkLnByb2ZpbGVJbWcgJT4nLFxuICAgICAgICAgICAgICAgICc8JSB9ICU+XCIgJyxcbiAgICAgICAgICAgICAgICd3aWR0aD1cIjwlLSBzZXR0aW5ncy5yYXRpb1Byb2ZpbGVbMF0gJT5cIiAnLFxuICAgICAgICAgICAgICAgJ2hlaWdodD1cIjwlLSBzZXR0aW5ncy5yYXRpb1Byb2ZpbGVbMV0gJT5cIj4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgJzxhIGNsYXNzPVwiby1mZWVkX191cmwgPCUtIHNldHRpbmdzLmNsYXNzZXMuYXZhdGFyICU+XCIgJyxcbiAgICAgICAgICAnaHJlZj1cIjwlIGlmIChzZXR0aW5ncy50aXRsZVVybCAhPT0gXCJcIikgeyAlPicsXG4gICAgICAgICAgICAnPCUtIHNldHRpbmdzLnRpdGxlVXJsICU+JyxcbiAgICAgICAgICAnPCUgfSBlbHNlIHsgJT4nLFxuICAgICAgICAgICAgJzwlLSBmZWVkLnVybCAlPicsXG4gICAgICAgICAgJzwlIH0gJT5cIiAnLFxuICAgICAgICAgICAndGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiPicsXG4gICAgICAgICAgJzwlIGlmIChzZXR0aW5ncy50aXRsZSAhPT0gXCJcIikgeyAlPicsXG4gICAgICAgICAgICAnPCUtIHNldHRpbmdzLnRpdGxlICU+JyxcbiAgICAgICAgICAnPCUgfSBlbHNlIHsgJT4nLFxuICAgICAgICAgICAgJzwlLSBmZWVkLnRpdGxlICU+JyxcbiAgICAgICAgICAnPCUgfSAlPicsXG4gICAgICAgICc8L2E+JyxcbiAgICAgICc8L2hlYWRlcj4nXG4gICAgXSxcbiAgICBwb3N0czogW1xuICAgICAgJzxkaXYgY2xhc3M9XCJvLWZlZWRfX2l0ZW1zXCIgc3R5bGU9XCInLFxuICAgICAgICAnYm9yZGVyLWNvbG9yOiA8JS0gc2V0dGluZ3MucG9zdEJvcmRlckNvbG9yICU+OycsXG4gICAgICAnXCI+JyxcbiAgICAgICAgJzwlIF9lYWNoKGl0ZW1zLCBmdW5jdGlvbihwb3N0KSB7ICU+JyxcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImMtZmVlZC1pdGVtIDwlLSBzZXR0aW5ncy5jbGFzc2VzLmZlZWRJdGVtICU+XCI+JyxcbiAgICAgICAgICAgICc8aDQgY2xhc3M9XCJjLWZlZWQtaXRlbV9fdGl0bGUgPCUtIHNldHRpbmdzLmNsYXNzZXMudGl0bGUgJT5cIj4nLFxuICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJjLWZlZWQtaXRlbV9fbGluayA8JS0gc2V0dGluZ3MuY2xhc3Nlcy5saW5rICU+XCInLFxuICAgICAgICAgICAgICAgICAnaHJlZj1cIjwlLSBwb3N0Lmd1aWQgJT5cIicsXG4gICAgICAgICAgICAgICAgICd0YXJnZXQ9XCJfYmxhbmtcIicsXG4gICAgICAgICAgICAgICAgICdyZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+JyxcbiAgICAgICAgICAgICAgICAnPCUtIHBvc3QudGl0bGUgJT4nLFxuICAgICAgICAgICAgICAnPC9hPicsXG4gICAgICAgICAgICAnPC9oND4nLFxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYy1mZWVkLWl0ZW1fX2RhdGUgPCUtIHNldHRpbmdzLmNsYXNzZXMuZGF0ZSAlPlwiICcsXG4gICAgICAgICAgICAgICAgICAndGl0bGU9XCI8JS0gc2V0dGluZ3MucG9zdERhdGVUaXRsZSAlPlwiPicsXG4gICAgICAgICAgICAgICc8JS0gcG9zdC5kYXRlICU+JyxcbiAgICAgICAgICAgICc8L3NwYW4+JyxcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYy1mZWVkLWl0ZW1fX3RodW1ibmFpbCA8JS0gc2V0dGluZ3MuY2xhc3Nlcy50aHVtYm5haWwgJT5cIicsXG4gICAgICAgICAgICAgICAgICdzdHlsZT1cIicsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoPCUtIHBvc3QudGh1bWJuYWlsICU+KTsnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0OiA8JS0gc2V0dGluZ3MucG9zdEltZ0hlaWdodCAlPjtcIicsXG4gICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbj1cInRydWVcIj4nLFxuICAgICAgICAgICAgICAnPGltZyBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgc3JjPVwiPCUtIHBvc3QudGh1bWJuYWlsICU+XCIgYWx0PVwiPCUtIHBvc3QudGl0bGUgJT5cIj4nLFxuICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAnPHAgY2xhc3M9XCJjLWZlZWQtaXRlbV9fZXhjZXJwdCA8JS0gc2V0dGluZ3MuY2xhc3Nlcy5leGNlcnB0ICU+XCI+JyxcbiAgICAgICAgICAgICAgJzwlLSBwb3N0LmV4Y2VycHQgJT48JS0gc2V0dGluZ3MucG9zdEV4Y2VycHRUcmFpbCAlPicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImMtZmVlZC1pdGVtX19mb290ZXIgPCUtIHNldHRpbmdzLmNsYXNzZXMuaXRlbUZvb3RlciAlPlwiPicsXG4gICAgICAgICAgICAgICc8YSBjbGFzcz1cImMtZmVlZC1pdGVtX19jdGEgPCUtIHNldHRpbmdzLmNsYXNzZXMuY3RhICU+XCIgJyxcbiAgICAgICAgICAgICAgICAgJ2hyZWY9XCI8JS0gcG9zdC5ndWlkICU+XCIgJyxcbiAgICAgICAgICAgICAgICAgJ3RhcmdldD1cIl9ibGFua1wiICcsXG4gICAgICAgICAgICAgICAgICdyZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+JyxcbiAgICAgICAgICAgICAgICAnPCUtIHNldHRpbmdzLnBvc3RDdGFUZXh0ICU+JyxcbiAgICAgICAgICAgICAgJzwvYT4nLFxuICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICc8JSB9KTsgJT4nLFxuICAgICAgJzwvZGl2PidcbiAgICBdLFxuICAgIGNsb3NlcjogW1xuICAgICAgJzwvc2VjdGlvbj4nXG4gICAgXVxuICB9XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgcHJvY2Vzc2luZyB0aGUgZGF0YSBiYXNlZCBvbiB0aGUgZmVlZCB0eXBlLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuRmVlZC5wcm9jZXNzID0ge1xuICBtZWRpdW06IGZ1bmN0aW9uKGRhdGEsIHNldHRpbmdzKSB7XG4gICAgbGV0IGxlbmd0aCA9IHNldHRpbmdzLnBvc3RFeGNlcnB0TGVuZ3RoO1xuXG4gICAgX2ZvckVhY2goZGF0YS5pdGVtcywgZnVuY3Rpb24ocG9zdCwgaW5kZXgpIHtcbiAgICAgIGxldCBleGNlcnB0ID0gJyc7XG4gICAgICBsZXQgZGF0ZSA9ICcnO1xuXG4gICAgICAvLyBSZW1vdmUgZmlndXJlcyBmaXJzdFxuICAgICAgZXhjZXJwdCA9IHBvc3QuZGVzY3JpcHRpb25cbiAgICAgICAgLnJlcGxhY2UoLzxmaWd1cmUuKj4uKj88XFwvZmlndXJlPi9nLCAnJyk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgdGFnc1xuICAgICAgZXhjZXJwdCA9IGV4Y2VycHQucmVwbGFjZSgvPCgufFxcbikqPz4vZywgJycpO1xuXG4gICAgICAvLyBUcmltIHRoZSBleGNlcnB0XG4gICAgICBleGNlcnB0ID0gZXhjZXJwdC5zdWJzdHIoMCwgbGVuZ3RoKTtcbiAgICAgIGV4Y2VycHQgPSBleGNlcnB0LnN1YnN0cigwLFxuICAgICAgICBNYXRoLm1pbihleGNlcnB0Lmxlbmd0aCwgZXhjZXJwdC5sYXN0SW5kZXhPZignICcpKVxuICAgICAgKTtcblxuICAgICAgcG9zdC5leGNlcnB0ID0gZXhjZXJwdDtcblxuICAgICAgLy8gRm9ybWF0IHRoZSBkYXRlXG4gICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShwb3N0LnB1YkRhdGUucmVwbGFjZSgnICcsICdUJykpKVxuICAgICAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKHNldHRpbmdzLnBvc3REYXRlTG9jYWwsIHNldHRpbmdzLnBvc3REYXRlRm9ybWF0KTtcblxuICAgICAgcG9zdC5kYXRlID0gZGF0ZTtcblxuICAgICAgcmV0dXJuIHBvc3Q7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgbWVyZ2luZyB0aGUgZGF0YSBmZWVkcyB0b2dldGhlciwgYmFzZWQgb24gdGhlIGZlZWQgdHlwZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbkZlZWQubWVyZ2UgPSB7XG4gIG1lZGl1bTogZnVuY3Rpb24oZGF0YSkge1xuICAgIGxldCBtZXJnZWQgPSB7fTtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIC8vIENvbWJpbmUgdGhlIHBvc3QgaXRlbXNcbiAgICBkYXRhLmZvckVhY2goKGZlZWQpID0+IHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KGZlZWQuaXRlbXMpO1xuICAgIH0pO1xuXG4gICAgLy8gTWVyZ2UgdGhlIGRhdGEsIHRoaXMgd2lsbCBvdmVycmlkZSB2YWx1ZXMsIGl0IHByb2JhYmx5IHdvbid0IGJlXG4gICAgLy8gcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgZmVlZHMgdGhhdCBhcmUgdGhlIHNhbWUsIGJ1dCBwb3RlbnRpYWxseVxuICAgIC8vIGRpZmZlcmVudCBmZWVkIHR5cGVzIGNvdWxkIHVzZSB0aGlzIGFuZCBjb21iaW5lIHVuaXF1ZSBkYXRhXG4gICAgZGF0YS5mb3JFYWNoKChmZWVkKSA9PiB7XG4gICAgICBtZXJnZWQgPSBfbWVyZ2UobWVyZ2VkLCBmZWVkKTtcbiAgICB9KTtcblxuICAgIC8vIEdldCB1bmlxdWUgcG9zdHNcbiAgICAvLyBpdGVtcyA9IF91bmlxQnkoaXRlbXMsIChpdGVtKSA9PiBpdGVtLmd1aWQpO1xuXG4gICAgbWVyZ2VkLml0ZW1zID0gX29yZGVyQnkoaXRlbXMsICdwdWJEYXRlJywgJ2Rlc2MnKTtcblxuICAgIHJldHVybiBtZXJnZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9yc3MyanNvbi5jb20vZG9jcyBmb3IgZGV0YWlscyBvbiBkZWZhdWx0IHBhcmFtZXRlcnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbkZlZWQuZGVmYXVsdCA9IHtcbiAgZmVlZDogJycsXG4gIHNlbGVjdG9yOiAnI2pzLWZlZWQnLFxuICB0eXBlOiAnbWVkaXVtJyxcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVVybDogJycsXG4gIHByb2ZpbGVJbWc6ICcnLFxuICBmb250U2l6ZTogJycsXG4gIHJhdGlvUHJvZmlsZTogWyc1MCcsICc1MCddLFxuICBwb3N0Qm9yZGVyQ29sb3I6ICdsaWdodHN0ZWVsYmx1ZScsXG4gIHBvc3RJbWdIZWlnaHQ6ICcyMDBweCcsXG4gIHBvc3RFeGNlcnB0TGVuZ3RoOiAxMjAsXG4gIHBvc3RFeGNlcnB0VHJhaWw6ICfigKYnLFxuICBwb3N0Q3RhVGV4dDogJ1JlYWQgdGhlIGZ1bGwgcG9zdCcsXG4gIHBvc3REYXRlTG9jYWw6ICdlbi1VUycsXG4gIHBvc3REYXRlRm9ybWF0OiB7XG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYydcbiAgfSxcbiAgcG9zdERhdGVUaXRsZTogJ1B1Ymxpc2hlZCBEYXRlJyxcbiAgY2xhc3Nlczoge1xuICAgIHdyYXBwZXI6ICcnLFxuICAgIGhlYWRlcjogJycsXG4gICAgdXJsOiAnJyxcbiAgICBmZWVkSXRlbTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGxpbms6ICcnLFxuICAgIHRodW1ibmFpbDogJycsXG4gICAgZXhjZXJwdDogJycsXG4gICAgaXRlbUZvb3RlcjogJycsXG4gICAgY3RhOiAnJyxcbiAgICBkYXRlOiAnJ1xuICB9LFxuICB0ZW1wbGF0ZXM6IHtcbiAgICBvcGVuZXI6IEZlZWQudGVtcGxhdGVzLm1lZGl1bS5vcGVuZXIuam9pbignJyksXG4gICAgaGVhZGVyOiBGZWVkLnRlbXBsYXRlcy5tZWRpdW0uaGVhZGVyLmpvaW4oJycpLFxuICAgIHBvc3RzOiBGZWVkLnRlbXBsYXRlcy5tZWRpdW0ucG9zdHMuam9pbignJyksXG4gICAgY2xvc2VyOiBGZWVkLnRlbXBsYXRlcy5tZWRpdW0uY2xvc2VyLmpvaW4oJycpXG4gIH0sXG4gIGxvZzogZmFsc2UsXG4gIHVuaXF1ZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iXSwibmFtZXMiOlsiZnJlZUdsb2JhbCIsImdsb2JhbCIsIk9iamVjdCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsIlN5bWJvbCIsIm9iamVjdFByb3RvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsInVuZGVmaW5lZCIsImdldFJhd1RhZyIsInZhbHVlIiwiaXNPd24iLCJjYWxsIiwidGFnIiwidW5tYXNrZWQiLCJlIiwicmVzdWx0Iiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0IiwidHlwZSIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImNvcmVKc0RhdGEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInJlcGxhY2UiLCJiYXNlSXNOYXRpdmUiLCJwYXR0ZXJuIiwidGVzdCIsImdldFZhbHVlIiwib2JqZWN0Iiwia2V5IiwiZ2V0TmF0aXZlIiwiZGVmaW5lUHJvcGVydHkiLCJiYXNlQXNzaWduVmFsdWUiLCJlcSIsIm90aGVyIiwiYXNzaWduVmFsdWUiLCJvYmpWYWx1ZSIsImNvcHlPYmplY3QiLCJzb3VyY2UiLCJwcm9wcyIsImN1c3RvbWl6ZXIiLCJpc05ldyIsImluZGV4IiwibGVuZ3RoIiwibmV3VmFsdWUiLCJpZGVudGl0eSIsImFwcGx5IiwidGhpc0FyZyIsImFyZ3MiLCJuYXRpdmVNYXgiLCJNYXRoIiwibWF4Iiwib3ZlclJlc3QiLCJzdGFydCIsInRyYW5zZm9ybSIsImFyZ3VtZW50cyIsImFycmF5IiwiQXJyYXkiLCJvdGhlckFyZ3MiLCJjb25zdGFudCIsImJhc2VTZXRUb1N0cmluZyIsInN0cmluZyIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsIm5vdyIsInNob3J0T3V0IiwiY291bnQiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJyZW1haW5pbmciLCJzZXRUb1N0cmluZyIsImJhc2VSZXN0IiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwiaXNBcnJheUxpa2UiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc0l0ZXJhdGVlQ2FsbCIsImNyZWF0ZUFzc2lnbmVyIiwiYXNzaWduZXIiLCJzb3VyY2VzIiwiZ3VhcmQiLCJiYXNlVGltZXMiLCJuIiwiaXRlcmF0ZWUiLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsImlzQXJyYXkiLCJzdHViRmFsc2UiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFycmF5VGFnIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsIm9iamVjdFRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5IiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJwdXNoIiwiaXNQcm90b3R5cGUiLCJDdG9yIiwiY29uc3RydWN0b3IiLCJwcm90byIsIm5hdGl2ZUtleXNJbiIsImJhc2VLZXlzSW4iLCJpc1Byb3RvIiwia2V5c0luIiwiYXNzaWduSW5XaXRoIiwic3JjSW5kZXgiLCJvdmVyQXJnIiwiYXJnIiwiZ2V0UHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RDdG9yU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsImRvbUV4Y1RhZyIsImlzRXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsImF0dGVtcHQiLCJFcnJvciIsImFycmF5TWFwIiwiYmFzZVZhbHVlcyIsImN1c3RvbURlZmF1bHRzQXNzaWduSW4iLCJzcmNWYWx1ZSIsInN0cmluZ0VzY2FwZXMiLCJlc2NhcGVTdHJpbmdDaGFyIiwiY2hyIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwicmVJbnRlcnBvbGF0ZSIsImJhc2VQcm9wZXJ0eU9mIiwiaHRtbEVzY2FwZXMiLCJlc2NhcGVIdG1sQ2hhciIsInN5bWJvbFRhZyIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVRvU3RyaW5nIiwicmVVbmVzY2FwZWRIdG1sIiwicmVIYXNVbmVzY2FwZWRIdG1sIiwiZXNjYXBlIiwicmVFc2NhcGUiLCJyZUV2YWx1YXRlIiwidGVtcGxhdGVTZXR0aW5ncyIsInJlRW1wdHlTdHJpbmdMZWFkaW5nIiwicmVFbXB0eVN0cmluZ01pZGRsZSIsInJlRW1wdHlTdHJpbmdUcmFpbGluZyIsInJlRXNUZW1wbGF0ZSIsInJlTm9NYXRjaCIsInJlVW5lc2NhcGVkU3RyaW5nIiwidGVtcGxhdGUiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJpbXBvcnRzIiwiXyIsImltcG9ydHNLZXlzIiwiaW1wb3J0c1ZhbHVlcyIsImlzRXNjYXBpbmciLCJpc0V2YWx1YXRpbmciLCJpbnRlcnBvbGF0ZSIsInJlRGVsaW1pdGVycyIsImV2YWx1YXRlIiwic291cmNlVVJMIiwibWF0Y2giLCJlc2NhcGVWYWx1ZSIsImludGVycG9sYXRlVmFsdWUiLCJlc1RlbXBsYXRlVmFsdWUiLCJldmFsdWF0ZVZhbHVlIiwib2Zmc2V0Iiwic2xpY2UiLCJ2YXJpYWJsZSIsImFycmF5RWFjaCIsImNyZWF0ZUJhc2VGb3IiLCJmcm9tUmlnaHQiLCJrZXlzRnVuYyIsIml0ZXJhYmxlIiwiYmFzZUZvciIsImJhc2VGb3JPd24iLCJjcmVhdGVCYXNlRWFjaCIsImVhY2hGdW5jIiwiY29sbGVjdGlvbiIsImJhc2VFYWNoIiwiY2FzdEZ1bmN0aW9uIiwiZm9yRWFjaCIsImxpc3RDYWNoZUNsZWFyIiwiX19kYXRhX18iLCJzaXplIiwiYXNzb2NJbmRleE9mIiwiYXJyYXlQcm90byIsInNwbGljZSIsImxpc3RDYWNoZURlbGV0ZSIsImRhdGEiLCJsYXN0SW5kZXgiLCJwb3AiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsImdldCIsImhhcyIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJNYXAiLCJuYXRpdmVDcmVhdGUiLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwibWFwQ2FjaGVDbGVhciIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXAiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwiTEFSR0VfQVJSQVlfU0laRSIsInN0YWNrU2V0IiwicGFpcnMiLCJTdGFjayIsImFzc2lnbk1lcmdlVmFsdWUiLCJhbGxvY1Vuc2FmZSIsImNsb25lQnVmZmVyIiwiYnVmZmVyIiwiaXNEZWVwIiwiY29weSIsIlVpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiY2xvbmVUeXBlZEFycmF5IiwidHlwZWRBcnJheSIsImJ5dGVPZmZzZXQiLCJjb3B5QXJyYXkiLCJvYmplY3RDcmVhdGUiLCJjcmVhdGUiLCJiYXNlQ3JlYXRlIiwiaW5pdENsb25lT2JqZWN0IiwiaXNBcnJheUxpa2VPYmplY3QiLCJzYWZlR2V0IiwidG9QbGFpbk9iamVjdCIsImJhc2VNZXJnZURlZXAiLCJtZXJnZUZ1bmMiLCJzdGFjayIsInN0YWNrZWQiLCJpc0NvbW1vbiIsImlzVHlwZWQiLCJiYXNlTWVyZ2UiLCJtZXJnZSIsInZhbHVlcyIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsImFkZCIsImFycmF5U29tZSIsInByZWRpY2F0ZSIsImNhY2hlSGFzIiwiY2FjaGUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImJpdG1hc2siLCJlcXVhbEZ1bmMiLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJtYXBUb0FycmF5Iiwic2V0VG9BcnJheSIsInN5bWJvbFZhbHVlT2YiLCJ2YWx1ZU9mIiwiZXF1YWxCeVRhZyIsImNvbnZlcnQiLCJhcnJheVB1c2giLCJiYXNlR2V0QWxsS2V5cyIsInN5bWJvbHNGdW5jIiwiYXJyYXlGaWx0ZXIiLCJyZXNJbmRleCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRTeW1ib2xzIiwic3ltYm9sIiwiZ2V0QWxsS2V5cyIsImVxdWFsT2JqZWN0cyIsIm9ialByb3BzIiwib2JqTGVuZ3RoIiwib3RoUHJvcHMiLCJza2lwQ3RvciIsIm9iakN0b3IiLCJvdGhDdG9yIiwiRGF0YVZpZXciLCJQcm9taXNlIiwiU2V0IiwiV2Vha01hcCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJnZXRUYWciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJjdG9yU3RyaW5nIiwiYmFzZUlzRXF1YWxEZWVwIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNFcXVhbCIsImJhc2VJc01hdGNoIiwibWF0Y2hEYXRhIiwibm9DdXN0b21pemVyIiwiaXNTdHJpY3RDb21wYXJhYmxlIiwiZ2V0TWF0Y2hEYXRhIiwibWF0Y2hlc1N0cmljdENvbXBhcmFibGUiLCJiYXNlTWF0Y2hlcyIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsIkZVTkNfRVJST1JfVEVYVCIsIm1lbW9pemUiLCJyZXNvbHZlciIsIlR5cGVFcnJvciIsIm1lbW9pemVkIiwiQ2FjaGUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJzdHJpbmdUb1BhdGgiLCJjaGFyQ29kZUF0IiwibnVtYmVyIiwicXVvdGUiLCJzdWJTdHJpbmciLCJjYXN0UGF0aCIsInRvS2V5IiwiYmFzZUdldCIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJiYXNlSGFzSW4iLCJoYXNQYXRoIiwiaGFzRnVuYyIsImhhc0luIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJwcm9wZXJ0eSIsImJhc2VJdGVyYXRlZSIsImJhc2VNYXAiLCJiYXNlU29ydEJ5IiwiY29tcGFyZXIiLCJzb3J0IiwiY29tcGFyZUFzY2VuZGluZyIsInZhbElzRGVmaW5lZCIsInZhbElzTnVsbCIsInZhbElzUmVmbGV4aXZlIiwidmFsSXNTeW1ib2wiLCJvdGhJc0RlZmluZWQiLCJvdGhJc051bGwiLCJvdGhJc1JlZmxleGl2ZSIsIm90aElzU3ltYm9sIiwiY29tcGFyZU11bHRpcGxlIiwib3JkZXJzIiwib2JqQ3JpdGVyaWEiLCJjcml0ZXJpYSIsIm90aENyaXRlcmlhIiwib3JkZXJzTGVuZ3RoIiwib3JkZXIiLCJiYXNlT3JkZXJCeSIsIml0ZXJhdGVlcyIsIm9yZGVyQnkiLCJub29wIiwiY3JlYXRlU2V0IiwiRmVlZCIsImNvbmZpZyIsImRlZmF1bHQiLCJfc2V0dGluZ3MiLCJfbWVyZ2UiLCJpbml0IiwibGV0IiwiZmVlZCIsInJzc1RvSnNvbiIsInJzc1VybCIsIl9mb3JFYWNoIiwidXJsIiwidGhpcyIsIl9yZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJ0aGlzJDEiLCJjb21waWxlZCIsIl9yZW5kZXIiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJldmVudCIsIl94aHIiLCJ0YXJnZXQiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwib250aW1lb3V0Iiwib3BlbiIsInNlbmQiLCJsb2ciLCJjb25zb2xlIiwiZGlyIiwiX3ZhbHVlcyIsInRlbXBsYXRlcyIsImpvaW4iLCJfdGVtcGxhdGUiLCJtZWRpdW0iLCJvcGVuZXIiLCJoZWFkZXIiLCJwb3N0cyIsImNsb3NlciIsInBvc3RFeGNlcnB0TGVuZ3RoIiwiaXRlbXMiLCJwb3N0IiwiZXhjZXJwdCIsImRhdGUiLCJkZXNjcmlwdGlvbiIsInN1YnN0ciIsIm1pbiIsImxhc3RJbmRleE9mIiwicHViRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInBvc3REYXRlTG9jYWwiLCJwb3N0RGF0ZUZvcm1hdCIsIm1lcmdlZCIsImNvbmNhdCIsIl9vcmRlckJ5IiwidGl0bGUiLCJ0aXRsZVVybCIsInByb2ZpbGVJbWciLCJmb250U2l6ZSIsInJhdGlvUHJvZmlsZSIsInBvc3RCb3JkZXJDb2xvciIsInBvc3RJbWdIZWlnaHQiLCJwb3N0RXhjZXJwdFRyYWlsIiwicG9zdEN0YVRleHQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJwb3N0RGF0ZVRpdGxlIiwiY2xhc3NlcyIsIndyYXBwZXIiLCJmZWVkSXRlbSIsImxpbmsiLCJ0aHVtYm5haWwiLCJpdGVtRm9vdGVyIiwiY3RhIiwidW5pcXVlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHLE9BQU9DLE1BQVAsSUFBaUIsUUFBakIsSUFBNkJBLE1BQTdCLElBQXVDQSxNQUFNLENBQUNDLE1BQVAsS0FBa0JBLE1BQXpELElBQW1FRCxNQUFwRjs7OztBQ0VBLElBQUlFLFFBQVEsR0FBRyxPQUFPQyxJQUFQLElBQWUsUUFBZixJQUEyQkEsSUFBM0IsSUFBbUNBLElBQUksQ0FBQ0YsTUFBTCxLQUFnQkEsTUFBbkQsSUFBNkRFLElBQTVFOzs7QUFHQSxJQUFJQyxJ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
