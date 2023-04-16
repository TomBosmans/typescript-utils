import { isBlank, isString } from "../../conditionals"

/**
 * Converts a string to a symbol.
 * @param value The value to be converted to a symbol.
 * @returns Returns a symbol if the input value is a string otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a string, null, or undefined.
 * @example
 *
 * toSymbol('foo'); // Symbol('foo')
 * toSymbol(null); null
 * toSymbol(undefined); undefined
 * toSymbol(123); // Error: can't be cast to Symbol
 */
export function toSymbol<Value extends string | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return Symbol(value)
  throw new Error("Can't be cast to Symbol")
}
