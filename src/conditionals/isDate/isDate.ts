/**
 * Checks if given value is a Date.
*/
export function isDate(value: unknown): value is Date {
  return Object.prototype.toString.call(value) === "[object Date]"
}
