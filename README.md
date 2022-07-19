# currency-library

![build](https://img.shields.io/github/workflow/status/harmoxyne/currency-library/main)
![coverage](https://img.shields.io/codecov/c/github/harmoxyne/currency-library)
![version](https://img.shields.io/npm/v/currency-library)
![license](https://img.shields.io/github/license/harmoxyne/currency-library)
![size](https://img.shields.io/bundlephobia/minzip/currency-library)

Easily get data about different currencies in Javascript

# Usage

[getAll](#getall)

[getByIsoCode](#getbyisocode)

[getByNumericCode](#getbynumericcode)

[getBySymbol](#getbysymbol)

## getAll

### Parameters

None

### Return value

Returns object with ISO currency code as a key

```js
const currencyLibrary = require('currency-library');
// OR
import * as currencyLibrary from 'currency-library';

console.log(currencyLibrary.getAll());
/** =>
 {
  //...
  USD: {
    isoCode: 'USD',
    numericCode: '840',
    minorUnits: 2,
    name: 'United States dollar',
    symbol: '$'
  },
  UAH: {
    isoCode: 'UAH',
    numericCode: '980',
    minorUnits: 2,
    name: 'Ukrainian hryvnia',
    symbol: '₴'
  },
  // ...
}
 **/
```

## getByIsoCode

### Parameters

Expects ISO code string as only parameter

### Return value

Returns currency object or **undefined** if currency not found

```js
const currencyLibrary = require('currency-library');
// OR
import * as currencyLibrary from 'currency-library';

console.log(currencyLibrary.getByIsoCode('UAH'));
/** =>
 {
  isoCode: 'UAH',
  numericCode: '980',
  minorUnits: 2,
  name: 'Ukrainian hryvnia',
  symbol: '₴'
}
 **/
console.log(currencyLibrary.getByIsoCode('WRONG CODE'));
// => undefined
```

## getByNumericCode

### Parameters

Expects numeric currency code as only parameter

### Return value

Returns currency object or **undefined** if currency not found

```js
const currencyLibrary = require('currency-library');
// OR
import * as currencyLibrary from 'currency-library';

console.log(currencyLibrary.getByNumericCode(980));
/** =>
 {
  isoCode: 'UAH',
  numericCode: '980',
  minorUnits: 2,
  name: 'Ukrainian hryvnia',
  symbol: '₴'
}
 **/
console.log(currencyLibrary.getByNumericCode(-1));
// => undefined
```

## getBySymbol

### Parameters

Expects symbol parameter as only parameter

### Return value

Returns currency object or **undefined** if currency not found

```js
const currencyLibrary = require('currency-library');
// OR
import * as currencyLibrary from 'currency-library';

console.log(currencyLibrary.getBySymbol('₴'));
/** =>
 {
  isoCode: 'UAH',
  numericCode: '980',
  minorUnits: 2,
  name: 'Ukrainian hryvnia',
  symbol: '₴'
}
 **/
console.log(currencyLibrary.getBySymbol('~'));
// => undefined
```

# Development

Run tests:

```shell
npm test -- --coverage
```
