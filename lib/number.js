'use strict';

// MODULES //

var isNonNegativeInteger = require( 'validate.io-nonnegative-integer'),
	binomcoefln = require( 'compute-binomcoefln/lib/number.js' );


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	ln1p = require('log1p');


// PMF //

/**
* FUNCTION: pmf( x, n, p )
*	Evaluates the probability mass function (PMF) for a Binomial distribution with number of trails `n` and success probability `p` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} n - number of trails
* @param {Number} p - success probability
* @returns {Number} evaluated PMF
*/
function pmf( x, n, p ) {

	if ( isNonNegativeInteger( x ) ) {
		if ( x > n ) {
			return 0;
		}

		if ( p === 0 ) {
			return ( x === 0 ) ? 1 : 0;
		} else if( p === 1 ) {
			return ( x === n ) ? 1 : 0;
		} else {
			return exp( binomcoefln( n, x ) + x * ln( p ) + ( n - x ) * ln1p( -p ) );
		}
	}

	return 0;
} // end FUNCTION pmf()


// EXPORTS //

module.exports = pmf;
