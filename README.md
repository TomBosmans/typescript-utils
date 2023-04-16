## Conditionals

### isArray
Checks if the given value is an array.

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

#### Examples
```typescript
isArray([1, 2, 3]); // true
isArray('hello world'); // false
```

### isBlank
Checks if the given value is `null` or `undefined`.

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

#### Examples
```typescript
isBlank(null); // true
isBlank(undefined); // true
isBlank('hello world'); // false
```

### isBoolean
Checks if the given value is a boolean.

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

#### Examples
```typescript
isBoolean(true); // true
isBoolean(false); // true
isBoolean('hello world'); // false
```

### isDate
Checks if the given value is a Date object.

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

#### Examples
```typescript
isDate(new Date()); // true
isDate('2022-04-16'); // false
```

### isDefined
Checks if the given value is not `undefined`.

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

#### Examples
```typescript
isDefined(null); // true
isDefined(undefined); // false
isDefined('hello world'); // true
```

### isEmpty
Checks if the given value is empty.

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

#### Examples
```typescript
isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
isEmpty({ name: 'John', age: 30 }); // false
isEmpty([1, 2, 3]); // false
isEmpty('hello world'); // false
```

### isNull
Checks if the given value is null.

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

#### Examples
```typescript
isNull(null); // true
isNull(undefined); // false
isNull('hello world'); // false
```

### isNumber
Checks if the given value is a number.

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

#### Examples
```typescript
isNumber(123); // true
isNumber('hello world'); // false
```

### isObject
Checks if the given value is an object.

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

#### Examples
```typescript
isObject({}); // true
isObject('hello world'); // false
```

### isPresent
Checks if the given value is not `null` and not `undefined`.

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

#### Examples
```typescript
isPresent(null); // false
isPresent(undefined); // false
isPresent('hello world'); // true
```

### isString
Checks if the given value is a string.

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

#### Examples
```typescript
isString('hello world'); // true
isString(123); // false
```

### isSymbol
Checks if the given value is a symbol.

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

#### Examples
```typescript
const mySymbol = Symbol('my symbol');
isSymbol(mySymbol); // true
isSymbol('hello world'); // false
```

### isUndefined
Checks if the given value is undefined.

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

#### Examples
```typescript
isUndefined(undefined); // true
isUndefined(null); // false
```
## Mutators

### addOrRemove
Adds or removes the given value from an array, depending on whether it is already present or not.
@param value The value to be added or removed.

#### Specifications
- add the value to the array when not included
- removes the value to the array when not included
- add the value to the array when not included
- removes the value to the array when not included

#### Examples
```typescript
addOrRemove('hello', ['world']); // ['world', 'hello']
addOrRemove('world', ['world']); // []
```
## Transformers

### toDate
Converts a string to a Date object.

#### Specifications
- transforms 2020-03-02 into Date
- transforms 2020-03-02T23:00 into Date
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
toDate('2022-01-01'); // new Date('2022-01-01')
toDate(null); // null
toDate(undefined); // undefined
toDate(123); // Error: can't be cast to Date
```

### toDateString
Converts a Date object to a string in YYYY-MM-DD format.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02"
- transforms 2022-01-01T22:00:00.000Z into "2022-01-01"
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
const myDate = new Date('2022-01-01T00:00:00.000Z');
toDateString(myDate); // '2022-01-01'
toDateString(null); // null
toDateString(undefined); // undefined
toDateString('2022-01-01'); // Error: can't be cast to String date
```

### toDateTimeString
Converts a Date object to a string in YYYY-MM-DDTHH:mm:ss format.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02T00:00:00"
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
const myDate = new Date('2022-01-01T00:00:00.000Z');
toDateTimeString(myDate); // '2022-01-01T00:00:00'
toDateTimeString(null); // null
toDateTimeString(undefined); // undefined
toDateTimeString('2022-01-01'); // Error: can't be cast to Date time string
```

### toNumber
Converts a string, Date object, or boolean to a number.

#### Specifications
- transforms boolean false into string
- transforms boolean true into string
- transforms string into string
- transforms date into string
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
toNumber('123'); // 123
toNumber(new Date('2022-01-01T00:00:00.000Z')); // 1640995200000
toNumber(true); // 1
toNumber(null); // null
toNumber(undefined); // undefined
toNumber({}); // Error: can't be cast to number
```

### toString
Converts a number, Date object, boolean, symbol, null, or undefined to a string.

#### Specifications
- transforms number into string
- transforms date into string
- transforms boolean false into string
- transforms boolean true into string
- transforms symbol into string
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
toString(123); // '123'
toString(new Date('2022-01-01T00:00:00.000Z')); // '2022-01-01T00:00:00.000Z'
toString(true); // 'true'
toString(null); // null
toString(undefined); // undefined
toString({}); // Error: can't be cast to string
```

### toSymbol
Converts a string to a symbol.

#### Specifications
- transforms string into string
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
toSymbol('foo'); // Symbol('foo')
toSymbol(null); null
toSymbol(undefined); undefined
toSymbol(123); // Error: can't be cast to Symbol
```

### toTimeString
Converts a Date object to a string time in the format HH:mm:ss.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "00:00:00"
- keeps null as null
- keeps undefined as undefined

#### Examples
```typescript
toTimeString(new Date('2022-01-01T00:00:00.000Z')); // '00:00:00'
toTimeString(null); // null
toTimeString(undefined); // undefined
toTimeString('not a date'); // Error: can't be cast to time string
```
