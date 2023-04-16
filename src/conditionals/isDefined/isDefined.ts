/**
 * Checks if the given value is not `undefined`.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is not `undefined`, `false` otherwise.
 * @example
 * isDefined(null); // true
 * isDefined(undefined); // false
 * isDefined('hello world'); // true
 */
export function isDefined<V>(value: V | null | undefined): value is V | null {
  return value !== undefined
}
