import { isArray } from "../isArray"
import { isObject } from "../isObject"
import { isString } from "../isString"

type Value = Record<string, unknown> | unknown[] | string

/**
 * Checks if the given value is empty.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is empty, `false` otherwise.
 * @example
 * isEmpty({}); // true
 * isEmpty([]); // true
 * isEmpty(''); // true
 * isEmpty({ name: 'John', age: 30 }); // false
 * isEmpty([1, 2, 3]); // false
 * isEmpty('hello world'); // false
 */
export function isEmpty(value: Value): boolean {
  if (isObject(value)) return Object.entries(value).length === 0
  if (isArray(value)) return value.length === 0
  if (isString(value)) return value.length === 0

  return false
}
