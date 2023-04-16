## Conditionals

### isArray

#### Description
Checks if given value is an Array.

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
Checks if given value is blank.
@remark
value is blank when it is null or undefined. Empty strings, arrays or objects are not blank.

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
Checks if given value is a boolean.

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
Checks if given value is a Date.

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
Checks if given value is not undefined.

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
Checks if given value is empty.
@example
object: {}
array: []
string: ""
@remark
null or undefined are not considered empty.

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
Checks if given value is null
@remark
undefined is not null

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
Checks if given value is a number.

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
Checks if given value is an object.

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
Checks if given value is present.
@remark
A value is always present when it is not null or undefined.

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
Checks if given value is a string.

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
Checks if given value is a symbol.

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
Checks if given value is undefined.
@remark
null is not considered to be undefined

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
When array does not contain value, it will be added.
When array does contain value, it will be removed.
@remark
Value can only be type string or number.
@todo
Extend to work with more types.

#### Specifications
- add the value to the array when not included
- removes the value to the array when not included
- add the value to the array when not included
- removes the value to the array when not included
## Transformers

### toDate

#### Description
Casts the given value to a Date.
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms 2020-03-02 into Date
- transforms 2020-03-02T23:00 into Date
- keeps null as null
- keeps undefined as undefined

### toDateString

#### Description
Casts the given Date value to a string formatted yyyy-mm-dd.
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02"
- transforms 2022-01-01T22:00:00.000Z into "2022-01-01"
- keeps null as null
- keeps undefined as undefined

### toDateTimeString

#### Description
Casts the given Date to a string formatted yyyy-mm-ddThh:mm:ss
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "2020-03-02T00:00:00"
- keeps null as null
- keeps undefined as undefined

### toNumber

#### Description
Casts the given value to a number
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms boolean false into string
- transforms boolean true into string
- transforms string into string
- transforms date into string
- keeps null as null
- keeps undefined as undefined

### toString

#### Description
Casts the given value to a string
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

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
Casts the given value to a symbol
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms string into string
- keeps null as null
- keeps undefined as undefined

### toTimeString

#### Description
Casts the given Date to a string formatted hh:mm:ss
@remark
the type of the value will determine the type of the return,
if value can be null and/or undefined so will the return type.

#### Specifications
- transforms 2020-03-02T00:00:00.000Z into "00:00:00"
- keeps null as null
- keeps undefined as undefined
