/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var pkg = require( './../package.json' ).name;
var argumentFunction = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var argn;
	var x;
	var y;
	var i;

	argn = argumentFunction( 1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = argn( randu(), x, randu() );
		if ( x !== y ) {
			b.fail( 'should return input value' );
		}
	}
	b.toc();
	if ( x !== y ) {
		b.fail( 'should return input value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
