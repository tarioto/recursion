// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null";
  }

  //check if obj is a string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
    //return string with quotes
  }

  //check if array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {

      var mappedObj = _.map(obj, function(item) {
        return stringifyJSON(item);
      });

      return '[' + mappedObj + ']';
    }
  }
  //this manages objects
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    //creates an array that can be used to create our string's interior
    var recursiveArray = [];
    for (var key in obj) {
      // recursiveArray = [Add recursive array variable]
      //check if value is undefined or function
      //if so, skips that value
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        recursiveArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }

    return '{' + recursiveArray + '}';
  }

  //stringify simple integers
  return obj.toString();
};

