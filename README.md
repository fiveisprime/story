Story [![Build Status](https://travis-ci.org/fiveisprime/story.png?branch=master)](https://travis-ci.org/fiveisprime/story)
======

C#-style string format.

[![NPM](https://nodei.co/npm/story.png)](https://nodei.co/npm/story/)

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

# License

The MIT License (MIT)

Copyright (c) 2013 Matt Hernandez

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
