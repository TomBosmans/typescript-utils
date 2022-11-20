import { isArray } from "../isArray"
import { isObject } from "../isObject"
import { isString } from "../isString"

type Value =
  | Record<string, unknown>
  | unknown[]
  | string

export function isEmpty(value: Value): boolean {
  if (isObject(value)) return Object.entries(value).length === 0
  if (isArray(value)) return value.length === 0
  if (isString(value)) return value.length === 0

  return false
}
