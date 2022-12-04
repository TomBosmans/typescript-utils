import { isBlank, isBoolean, isDate, isString } from "../../conditionals"

/**
 * Casts the given value to a number
 * @remark
 * the type of the value will determine the type of the return,
 * if value can be null and/or undefined so will the return type.
 */
export function toNumber<Value extends string | Date | boolean | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return Number(value)
  if (isDate(value)) return Number(value)
  if (isBoolean(value)) return Number(value)
  throw Error("can't be cast to number")
}
