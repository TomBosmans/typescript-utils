import { isBlank, isBoolean, isDate, isNumber, isSymbol } from "../../conditionals"

/**
 * Converts a number, Date object, boolean, symbol, null, or undefined to a string.
 * @param value The value to be converted to a string.
 * @returns Returns a string if the input value is a number, Date object, boolean, symbol, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a number, Date object, boolean, symbol, null, or undefined.
 * @example
 *
 * toString(123); // '123'
 * toString(new Date('2022-01-01T00:00:00.000Z')); // '2022-01-01T00:00:00.000Z'
 * toString(true); // 'true'
 * toString(null); // null
 * toString(undefined); // undefined
 * toString({}); // Error: can't be cast to string
 */
export function toString<Value extends number | Date | boolean | symbol | undefined | null>(
  value: Value,
) {
  if (isBlank(value)) return value
  if (isDate(value)) return value.toISOString()
  if (isBoolean(value)) return value.toString()
  if (isSymbol(value)) return value.toString()
  if (isNumber(value)) return value.toString()

  throw Error("can't be cast to string")
}
