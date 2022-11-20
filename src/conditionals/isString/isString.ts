/**
 * Checks if given value is a string.
*/
export function isString(value: unknown): value is string {
  return typeof value === "string"
}
