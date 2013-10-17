//
//     Story
//     C# style string format.
//     Copyright(c) 2013 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

function format() {
  var args  = Array.prototype.slice.call(arguments)
    , out   = args.shift()
    , val   = null
    , index = 0;

  while ((val = args.shift())) {
    out = out.replace(new RegExp('\\{' + index++ + '\\}', 'gm'), val);
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
