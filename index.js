//
//     Story
//     C# style string format.
//     Copyright(c) 2013 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

//
// Formats a string using the specified values.
// # Expected format string values
// use `{0}` where the number value increases for each value:
//
//    format('{0} {1}', 'first', 'second');
//
function format() {
  var args   = Array.prototype.slice.call(arguments)
    , out    = args.shift()
    , params = args.length
    , index  = 0;

  while (params > index) {
    out = out.replace(new RegExp('\\{' + index++ + '\\}', 'gm'), args.shift());
  }

  return out;
}

//
// Expose the story API. Do not attach the format method to the native String
//    if the `safe` parameter is provided.
//
module.exports = function(safe) {
  if (safe) {
    return format;
  } else {
    String.format = format;
  }
};
