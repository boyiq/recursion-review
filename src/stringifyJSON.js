// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*
data types: undefined, null, numbers, strings, booleans, arrays, objects
*/
var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean' ||
  (typeof obj === 'number' && obj !== NaN)) {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return undefined;
  }
  if (obj === null || obj === NaN) {
    return 'null';
  }
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      var stringContent = '';
      _.each(obj, function(element) {
        if (typeof element === 'undefined' || typeof element === 'function') {
          stringContent = stringContent + 'null' + ',';
        } else {
          stringContent = stringContent + stringifyJSON(element) + ',';
        }
      });
      stringContent = stringContent.slice(0, stringContent.length - 1);
      return '[' + stringContent + ']';
    } else {
      var stringContent = '';
      for (var key in obj) {
        if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
          stringContent = stringContent + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
        console.log('key, ', key);
        console.log('obj[key], ', obj[key]);
        console.log('stringified key, ', stringifyJSON(key));
      }
      stringContent = stringContent.slice(0, stringContent.length - 1);
      return '{' + stringContent + '}';
    }
  }
};
