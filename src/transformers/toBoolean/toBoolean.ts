import { isBlank, isBoolean, isNumber, isString } from "../../conditionals"

export function toBoolean(value: unknown) {
  if (isBlank(value)) return value
  if (isBoolean(value)) return value
  if (isString(value)) return value.toLowerCase() === "true"
  if (isNumber(value)) return value === 1
  return false
}
