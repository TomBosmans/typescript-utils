/**
 * Checks if the given value is an array.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is an array, `false` otherwise.
 * @example
 *
 * isArray([1, 2, 3]); // true
 * isArray('hello world'); // false
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}
