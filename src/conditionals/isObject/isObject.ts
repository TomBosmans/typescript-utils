/**
 * Checks if the given value is an object.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is an object, `false` otherwise.
 * @example
 * isObject({}); // true
 * isObject('hello world'); // false
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === "[object Object]"
}
