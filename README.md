<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Argument Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an argument function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-argument-function
```

</section>

<section class="usage">

## Usage

```javascript
var argumentFunction = require( '@stdlib/utils-argument-function' );
```

#### argumentFunction( idx )

Returns a `function` which always returns an argument corresponding to a specified argument index.

```javascript
var argn = argumentFunction( 1 );
// returns <Function>

var v = argn( 1.0, 2.0, 3.0 );
// returns 2.0

v = argn( 'a', 'b', 'c' );
// returns 'b'
```

If an argument function is provided fewer arguments than the specified argument index, an argument function returns `undefined`.

```javascript
var argn = argumentFunction( 100 );
// returns <Function>

var v = argn( 1.0 );
// returns undefined
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Argument indices are **zero-based**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var argumentFunction = require( '@stdlib/utils-argument-function' );

var argn;
var v;
var i;

argn = argumentFunction( 1 );
for ( i = 0; i < 10; i++ ) {
    v = argn( randu(), randu()*10.0, randu()*100.0 );
    console.log( v );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-argument-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-argument-function

[test-image]: https://github.com/stdlib-js/utils-argument-function/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-argument-function/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-argument-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-argument-function?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-argument-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-argument-function/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-argument-function/main/LICENSE

</section>

<!-- /.links -->
