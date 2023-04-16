## Conditionals

### isArray

#### Description
Checks if the given value is an array.
@param value The value to be checked.
@returns Returns `true` if the given value is an array, `false` otherwise.
@example

isArray([1, 2, 3]); // true
isArray('hello world'); // false

#### Specifications
- returns true when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns true when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isBlank

#### Description
Checks if the given value is `null` or `undefined`.
@param value The value to be checked.
@returns Returns `true` if the given value is `null` or `undefined`, `false` otherwise.
@example
isBlank(null); // true
isBlank(undefined); // true
isBlank('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns true when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns true when value is undefined

### isBoolean

#### Description
Checks if the given value is a boolean.
@param value The value to be checked.
@returns Returns `true` if the given value is a boolean, `false` otherwise.
@example
isBoolean(true); // true
isBoolean(false); // true
isBoolean('hello world'); // false

#### Specifications
- returns false when value is array
- returns true when value is boolean false
- returns true when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isDate

#### Description
Checks if the given value is a Date object.
@param value The value to be checked.
@returns Returns `true` if the given value is a Date object, `false` otherwise.
@example
isDate(new Date()); // true
isDate('2022-04-16'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns true when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isDefined

#### Description
Checks if the given value is not `undefined`.
@param value The value to be checked.
@returns Returns `true` if the given value is not `undefined`, `false` otherwise.
@example
isDefined(null); // true
isDefined(undefined); // false
isDefined('hello world'); // true

#### Specifications
- returns true when value is array
- returns true when value is boolean false
- returns true when value is boolean true
- returns true when value is date
- returns true when value is empty array
- returns true when value is empty object
- returns true when value is empty string
- returns true when value is empty symbol
- returns true when value is negative number
- returns true when value is null
- returns true when value is number 0
- returns true when value is object
- returns true when value is positive number
- returns true when value is string
- returns true when value is symbol
- returns false when value is undefined

### isEmpty

#### Description
Checks if the given value is empty.
@param value The value to be checked.
@returns Returns `true` if the given value is empty, `false` otherwise.
@example
isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
isEmpty({ name: 'John', age: 30 }); // false
isEmpty([1, 2, 3]); // false
isEmpty('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns true when value is empty array
- returns true when value is empty object
- returns true when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isNull

#### Description
Checks if the given value is null.
@param value The value to be checked.
@returns Returns `true` if the given value is null, `false` otherwise.
@example
isNull(null); // true
isNull(undefined); // false
isNull('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns true when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isNumber

#### Description
Checks if the given value is a number.
@param value The value to be checked.
@returns Returns `true` if the given value is a number, `false` otherwise.
@example
isNumber(123); // true
isNumber('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns true when value is negative number
- returns false when value is null
- returns true when value is number 0
- returns false when value is object
- returns true when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isObject

#### Description
Checks if the given value is an object.
@param value The value to be checked.
@returns Returns `true` if the given value is an object, `false` otherwise.
@example
isObject({}); // true
isObject('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns true when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns true when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns false when value is undefined

### isPresent

#### Description
Checks if the given value is not `null` and not `undefined`.
@param value The value to be checked.
@returns Returns `true` if the given value is not `null` and not `undefined`, `false` otherwise.
@example
isPresent(null); // false
isPresent(undefined); // false
isPresent('hello world'); // true

#### Specifications
- returns true when value is array
- returns true when value is boolean false
- returns true when value is boolean true
- returns true when value is date
- returns true when value is empty array
- returns true when value is empty object
- returns true when value is empty string
- returns true when value is empty symbol
- returns true when value is negative number
- returns false when value is null
- returns true when value is number 0
- returns true when value is object
- returns true when value is positive number
- returns true when value is string
- returns true when value is symbol
- returns false when value is undefined

### isString

#### Description
Checks if the given value is a string.
@param value The value to be checked.
@returns Returns `true` if the given value is a string, `false` otherwise.
@example

isString('hello world'); // true
isString(123); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns true when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns true when value is string
- returns false when value is symbol
- returns false when value is undefined

### isSymbol

#### Description
Checks if the given value is a symbol.
@param value The value to be checked.
@returns Returns `true` if the given value is a symbol, `false` otherwise.
@example
const mySymbol = Symbol('my symbol');
isSymbol(mySymbol); // true
isSymbol('hello world'); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns true when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns true when value is symbol
- returns false when value is undefined

### isUndefined

#### Description
Checks if the given value is undefined.
@param value The value to be checked.
@returns Returns `true` if the given value is undefined, `false` otherwise.
@example
isUndefined(undefined); // true
isUndefined(null); // false

#### Specifications
- returns false when value is array
- returns false when value is boolean false
- returns false when value is boolean true
- returns false when value is date
- returns false when value is empty array
- returns false when value is empty object
- returns false when value is empty string
- returns false when value is empty symbol
- returns false when value is negative number
- returns false when value is null
- returns false when value is number 0
- returns false when value is object
- returns false when value is positive number
- returns false when value is string
- returns false when value is symbol
- returns true when value is undefined
## Mutators

### addOrRemove

#### Description
Adds or removes the given value from an array, depending on whether it is already present or not.
@param value The value to be added or removed.
@param array The array to add or remove the value from.
@returns Returns a new array with the value added or removed, depending on whether it was already present or not.
@example
addOrRemove('hello', ['world']); // ['world', 'hello']
addOrRemove('world', ['world']); // []

#### Specifications
- add the value to the array when not included
- removes the value to the array when not included
- add the value to the array when not included
- removes the value to the array when not included
## Transformers

### toDate

#### Description
Converts a string to a Date object.
@param value The string value to be converted.
@returns Returns a Date object if the input value is a string, otherwise returns null or undefined.
@throws Throws an error if the input value is not a string, null, or undefined.
@example
toDate('2022-01-01'); // new Date('2022-01-01')
toDate(null); // null
toDate(undefined); // undefined
toDate(123); // Error: can't be cast to Date

#### Specifications
- transforms 2020-03-02 into Date
- transforms 2020-03-02T23:00 into Date
- keeps null as null
- keeps undefined as undefined

### toDateString

#### Description
Converts a Date object to a string in YYYY-MM-DD format.
@param value The Date object to be converted.
@returns Returns a string in YYYY-MM-DD format if the input value is a Date object, otherwise returns null or undefined.
@throws Throws an error if the input value is not a Date object, null, or undefined.
@example

const myDate = new Date('2022-01-01T00:00:00.000Z');
toDateString(myDate); // '2022-01-01'
toDateString(null); // null
toDateString(undefined); // undefined
toDateString('2022-01-01'); // Error: can't be cast to String date

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02"
- transforms 2022-01-01T22:00:00.000Z into "2022-01-01"
- keeps null as null
- keeps undefined as undefined

### toDateTimeString

#### Description
Converts a Date object to a string in YYYY-MM-DDTHH:mm:ss format.
@param value The Date object to be converted.
@returns Returns a string in YYYY-MM-DDTHH:mm:ss format if the input value is a Date object, otherwise returns null or undefined.
@throws Throws an error if the input value is not a Date object, null, or undefined.
@example
const myDate = new Date('2022-01-01T00:00:00.000Z');
toDateTimeString(myDate); // '2022-01-01T00:00:00'
toDateTimeString(null); // null
toDateTimeString(undefined); // undefined
toDateTimeString('2022-01-01'); // Error: can't be cast to Date time string

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02T00:00:00"
- keeps null as null
- keeps undefined as undefined

### toNumber

#### Description
Converts a string, Date object, or boolean to a number.
@param value The value to be converted to a number.
@returns Returns a number if the input value is a string, Date object, or boolean, otherwise returns null or undefined.
@throws Throws an error if the input value is not a string, Date object, boolean, null, or undefined.
@example

toNumber('123'); // 123
toNumber(new Date('2022-01-01T00:00:00.000Z')); // 1640995200000
toNumber(true); // 1
toNumber(null); // null
toNumber(undefined); // undefined
toNumber({}); // Error: can't be cast to number

#### Specifications
- transforms boolean false into string
- transforms boolean true into string
- transforms string into string
- transforms date into string
- keeps null as null
- keeps undefined as undefined

### toString

#### Description
Converts a number, Date object, boolean, symbol, null, or undefined to a string.
@param value The value to be converted to a string.
@returns Returns a string if the input value is a number, Date object, boolean, symbol, otherwise returns null or undefined.
@throws Throws an error if the input value is not a number, Date object, boolean, symbol, null, or undefined.
@example

toString(123); // '123'
toString(new Date('2022-01-01T00:00:00.000Z')); // '2022-01-01T00:00:00.000Z'
toString(true); // 'true'
toString(null); // null
toString(undefined); // undefined
toString({}); // Error: can't be cast to string

#### Specifications
- transforms number into string
- transforms date into string
- transforms boolean false into string
- transforms boolean true into string
- transforms symbol into string
- keeps null as null
- keeps undefined as undefined

### toSymbol

#### Description
Converts a string to a symbol.
@param value The value to be converted to a symbol.
@returns Returns a symbol if the input value is a string otherwise returns null or undefined.
@throws Throws an error if the input value is not a string, null, or undefined.
@example

toSymbol('foo'); // Symbol('foo')
toSymbol(null); null
toSymbol(undefined); undefined
toSymbol(123); // Error: can't be cast to Symbol

#### Specifications
- transforms string into string
- keeps null as null
- keeps undefined as undefined

### toTimeString

#### Description
Converts a Date object to a string time in the format HH:mm:ss.
@param value The value to be converted to a time string.
@returns Returns a time string in the format HH:mm:ss if the input value is a Date object, otherwise returns null or undefined.
@throws Throws an error if the input value is not a Date object, null, or undefined.
@example

toTimeString(new Date('2022-01-01T00:00:00.000Z')); // '00:00:00'
toTimeString(null); // null
toTimeString(undefined); // undefined
toTimeString('not a date'); // Error: can't be cast to time string

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "00:00:00"
- keeps null as null
- keeps undefined as undefined
