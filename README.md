# Connect

Connect is a high performance middleware framework built by the combined forces of Tim Caswell ([creationix][]) and TJ Holowaychuk ([visionmedia][]) and the other skilled developers of [ExtJS][]. Connect takes the familiar concepts of Ruby's [Rack](http://rack.rubyforge.org/) and applies it to the asynchronous world of [node](http://nodejs.org).

ExtJS is releasing Connect under the very liberal MIT license in hopes that we can provide some level of leadership and stability for application frameworks to build on.

## Features

  * High performance api, with nearly no overhead.
  * Several bundled middleware implementations such as _log_, _static_, and _json-rpc_.
  * The _connect_ executable for daemonizing node, and Connect servers.

## Installation

Via curl / sh:

    $ curl -# http://github.com/extjs/Connect/raw/master/install.sh | sh

Via git (or downloaded tarball):

    $ git clone git://github.com/extjs/Connect.git && cd Connect && make install

Via [npm](http://github.com/isaacs/npm):

    $ npm install connect

## Documentation

View the man page:

    $ man connect

View the HTML document:

    $ open docs/api.html

View the online HTML documentation:

	$ open http://extjs.github.com/Connect

View one of several examples located within _./examples_.

## Running Benchmarks

To run the benchmarks you must have ApacheBench, and gnuplot installed, then:

    $ make benchmark && make graphs && open results/graphs/*.png

## Testing

First update the git submodules, which includes
the [Expresso](http://github.com/visionmedia/expresso) TDD
framework:

    $ git submodule update --init

Then run the test suites located in _./test_ with the following command:

    $ make test

Run a single test, or use a custom glob pattern:

    $ make test TESTS=test/connect.test.js

[creationix]: http://github.com/creationix
[visionmedia]: http://github.com/visionmedia
[ExtJS]: http://www.extjs.com/
[Rack]: http://rack.rubyforge.org/
[Node.JS]: http://nodejs.org/

## License 

(The MIT License)

Copyright (c) 2010 Ext JS

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.