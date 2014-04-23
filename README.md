Story [![Build Status](https://travis-ci.org/fiveisprime/story.svg?branch=master)](https://travis-ci.org/fiveisprime/story) [![NPM version](https://badge.fury.io/js/story.svg)](http://badge.fury.io/js/story)
======

C#-style string format. Story will either attach a method to the native String
type or return a format function that can be used to format strings.

# Usage

Attaches a `format` method to the String primitive.

```js
require('story')();

console.log(String.format('totally {0}', 'sweet')); // Outputs 'totally sweet'
```

Or return the format function.

```js
var story = require('story')(true);

console.log(story('totally {0}', 'sweet')); // Outputs 'totally sweet'
```

Use Story in the browser.

```js
// Attach the format method to the string primitive.
window.sotry();

// Return a function that formats.
var format = window.story(true);
```

# License

The MIT License (MIT)

Copyright (c) 2014 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
