if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const arr = Object(this);
      const len = arr.length >>> 0;
      const result = new Array(len);
  
      for (let i = 0; i < len; i++) {
        if (i in arr) {
          result[i] = callback.call(thisArg, arr[i], i, arr);
        }
      }
      return result;
    };
  }
  
  if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.filter called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const arr = Object(this);
      const len = arr.length >>> 0;
      const result = [];
  
      for (let i = 0; i < len; i++) {
        if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
          result.push(arr[i]);
        }
      }
      return result;
    };
  }
  
  if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback, initialValue) {
      if (this == null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const arr = Object(this);
      const len = arr.length >>> 0;
      let index = 0;
      let accumulator;
  
      if (arguments.length > 1) {
        accumulator = initialValue;
      } else {
        while (index < len && !(index in arr)) {
          index++;
        }
  
        if (index >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
  
        accumulator = arr[index++];
      }
  
      for (; index < len; index++) {
        if (index in arr) {
          accumulator = callback(accumulator, arr[index], index, arr);
        }
      }
      return accumulator;
    };
  }
  