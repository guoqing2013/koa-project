var isArray = require('lodash/isArray');
var isPlainObject = require('lodash/isPlainObject');
var isNumber = require('lodash/isNumber');
var reduce = require('lodash/reduce');
// var noop = require('lodash/noop');
const m = {
    default:  function (e) {
        return e
    }
}

const fn = function(e){
    return e
}

function replaceLetter(e) {
    return e.replace(/[A-Z]/g, function(e) {
        return "_" + e[0].toLowerCase()
    })
}

var mapKeyAndValue = function(param) {
    var t = arguments.length > 1 && /* void 0 */undefined !== arguments[1] ? arguments[1] : /* m.default */m.default
    , n = arguments.length > 2 && /* void 0 */undefined !== arguments[2] ? arguments[2] : /* m.default */m.default
    , r = null;
  if (/* (0, h.default)(param)  */isArray(param) && param.length > 0) {
      r = [];
  } else {
      if (/* !((0, d.default)(param) */ !isPlainObject(param) && Object.keys(param).length > 0) {
        return n(param);
      }
    r = {}
  }
  return /* (0, c.default) */reduce(param, function(result, value, key) {
    //   var a = mapKeyAndValue(value, t, n);
    //   result[/* (0, y.default) */isNumber(key) ? key : replaceLetter(key)] = a;
      result[/* (0, y.default) */isNumber(key) ? key : replaceLetter(key)] = value;
      return result;
  }, r)
}

var xxsFn = function() {

}

var transFn = function()  {

}

var transform = {
    mapKeyAndValue: mapKeyAndValue,
    xxsFn:xxsFn,
    transFn: transFn
}

module.exports = transform;